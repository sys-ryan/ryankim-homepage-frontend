---
title: "Serialization"
date: "2022-10-12"
category: "backend"
subCategory: "nestjs"
thumbnail: "serialization_thumbnail"
excerpt: NestJS provides a way to exclude response properties which is called as Serialization.
---

# Serialization

# Excluding Response Properties (Serialization)

Sometimes we want to filter some properties in responses. For example, in the example shown below, it might not be desirable to expose `password` property of a user. In this case, we can exclude some properties in the reponse by intercepting incoming/outgoing request/response.

request.http

```bash
### find a user
GET http://localhost:3000/auth/1
```

response

```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 53
ETag: W/"35-heZRNA5dvWRMtp0xg4XRndTQjpg"
Date: Mon, 09 May 2022 10:42:15 GMT
Connection: close

{
  "id": 1,
  "email": "test@test.com",
  "password": "test123"
}
```

# NestJS recommended approach

NestJS provides a way to exclude response properties.

[Documentation | NestJS - A progressive Node.js framework](https://docs.nestjs.com/techniques/serialization)

As mentioned in the NestJS documentation, we can use `ClassSerializerInterceptor` to apply rules expressed by `class-transformer` decorators on an entity/DTO class.

![class-serializer-interceptor.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/class-serializer-interceptor.png)

1. setup some rules inside of the entity
2. wire up interceptors to the controller

### 1. setup some rules inside of the entity

First, in the entity file, we annotate the entity we want to exclude from the response as follows:

In the `user.entity.ts` we will add `@Exclude()` decorator to the `password` property.

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
}
```

<aside>
📌 `**@Exclude()` decorator**

Sometimes you want to skip some properties during transformation. This can be done using `@Exclude` decorator:

</aside>

Note that we included `Exclude` from `class-transforer` and used `@Exclude()` decorator to the target property.

### 2. wire up interceptors to the controller

To intercept and manipulate outgoing responses, we have to import `UseInterceptors` and `ClassSerializerInterceptor` from `@nestjs/common`.

And then we add the `@UseInterecptors(ClassSerializerInterceptor)` to findUser() controller. This will make the app apply rules expressed by class-transformer decorators on an entity class.

users.controller.ts

```typescript
...

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

...
```

The password is no longer included in the response object.

request.http

```bash
### find a user
GET http://localhost:3000/auth/1
```

response

```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 31
ETag: W/"1f-zIMGjcodIc4aqvig7x0gEfkI6WM"
Date: Wed, 15 Jun 2022 22:34:03 GMT
Connection: close

{
  "id": 1,
  "email": "aaa@test.com"
}
```

![nest-recommended-serialization-response.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/nest-recommended-serialization-response.png)

# Downside of the ‘NestJS recommended approach'

![downside-of-nest-recommended-approach.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/downside-of-nest-recommended-approach.png)

There is an issue with using ClassSerializerInterceptor as mentioned in the NestJS document. Think about the following situation. User’s service returns informations tied to a user. Through admin route, we might want to get extra properties tied to a user. And the public route should expose only non-sensitive information. If we use the way introduced in the NestJS document to serialize response, there is no way to serve different data for admin routes and public routes through one method that returns user information.

# Another approach

![another-approach.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/another-approach.png)

We are no longer tie formatting information directrly to the entity instance since it hinders using the entity intsance in multiple route handlers with different purposes.

Instead, we can define custom interceptor. Inside the custom interceptor, we’re going to serialize the entity instance to an plain object by using serialization rules set up inside the DTO. This can describe how we want to format an entity (what properties we want to include) for a very particular route handler.

### How to build interceptors

Interceptors can intercept incoming / outgoing responses.

Interceptors can be applied to a single handler, all the handlers in a controller, or globally.

![how-to-build-interceptors.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/how-to-build-interceptors.png.png)

The basic structur of the interceptor is as follows.

```typescript
class CustomInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {}
}
```

- **intercept** : intercept method is called automatically whenever the interceptor need to run
- **context**: Information on the incoming request
- **next**: kind of a reference to the request handler in the controller

src/interceptors/serialize.interceptor.ts

```typescript
import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Run something before a request is handled by the request handler.
    console.log(`Running before the handler`, context);

    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out.
        console.log(`Running before the response is sent out`, data);
      })
    );
  }
}
```

### Using custom interceptor in the controller

users.controller.ts

```typescript
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';

import { CreateUserDto } from 'src/users/dtos/create-user.dto';

import { UsersService } from './users.service';

import { UpdateUserDto } from './dtos/update-user.dto';

import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  ...

  @UseInterceptors(SerializeInterceptor)

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  ...
}
```

We can see that the interceptor did activated as shwon below. The first log was printed before the request is handled by the request handler.

![interceptor-activated.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/interceptor-activated.png)

The second log was printed right before theresponse is sent out.

![second-log.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/second-log.png)

### Adding serialization logic

![adding-serialization-logic.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/adding-serialization-logic.png)

Normally, whenever we finish all of our request handlers, Nest is going to take whatever comes out of all this stuff and turn it into JSON for us. So usually the user entity instance will be turned into JSON, but we're going to hijack that process.

We're going to put in an extra step inside the process. We are going to take the user entity instance to convert it into a User DTO instance. This User DTO instanced is going to have all of different serialization rules. It's going to have the rules such as showing the ID and the email, but not the password and so on.

We are then going to directly return that instance, then Nest is going to take that instance and turn it into JSON automatically and finally send that back in the response.

**creating UserDTO**

src/users/dots/user.dto.ts

```typescript
import { Expose } from "class-transformer";

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
```

**Importing UserDto into the interceptor**

interceptors/serialize.interceptor.dto

```typescript
import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { UserDto } from "../users/dtos/user.dto";

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out.
        return plainToClass(UserDto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
```

- plainToClass
  This method transforms a plain javascript object to instance of specific class.
- excludeExtraneousValues: true
  This option ensures that whenever we have an instance of user and try to turn it into plain JSON, it is only going to expose the properties that are specifically marked with that `@expose()` directive. So if there are any other properties, they're going to be removed.

### Testing

request.http

```typescript
### find a user
GET http://localhost:3000/auth/1
```

response

```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-0/oICoMkWg3iAXorTD9NLxMxFyc"
Date: Tue, 10 May 2022 05:54:16 GMT
Connection: close

{
  "id": 1,
  "email": "test@test.com"
}
```

As we described in `user.dto.ts`, only `id` and `email` properties (without including `password`) were returned.

### Customizing the Interceptor’s DTO

Currently, `interceptors/serialize.interceptor.dto` only serialized `UserDto` . The Dto Class is hard coded in the interceptor’s code. To enhence re-usability of this interceptor, we can refactor it. This will enable us to use this interceptor to serialize response with otehr Dtos.

```typescript
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { map, Observable } from "rxjs";

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
```

The `SerializeInterceptor` class will receive dto as a parameter and `plainToClass` method will use this dto to serialize response properties.

To apply the interceptor, we can pass the desired DTO as a paremeter of the SerializeInterceptor class.

users.controller.ts

```typescript
import { UserDto } from './dtos/user.dto';

@Controller('auth')
export class UsersController {
  ...

  @UseInterceptors(new SerializeInterceptor(UserDto))
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  ...
}
```

**Testing**

request

```typescript
### find a user
GET http://localhost:3000/auth/1
```

response

```typescript
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-0/oICoMkWg3iAXorTD9NLxMxFyc"
Date: Tue, 10 May 2022 06:07:03 GMT
Connection: close

{
  "id": 1,
  "email": "test@test.com"
}
```

# Wrapping the Interceptor in a Decorator

For now, it requires a really long line of code and we have to import many classes to make use of the interceptor.

```typescript
import { UserDto } from './dtos/user.dto';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { UseInterceptors } from '@nestjs/common';

...
@UseInterceptors(new SerializeInterceptor(UserDto))
```

Let’s refactor this to make our code lean! To this end, we are going to make our own custom decorator.

## Defining custom decorator

serialize.interceptors.ts

```typescript
import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

export function Serialize(dto: any) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out.
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
```

users.controller.ts

```typescript
...

import { Serialize } from 'src/interceptors/serialize.interceptor';

import { UserDto } from './dtos/user.dto';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}



  // @UseInterceptors(new SerializeInterceptor(UserDto))
  @Serialize(UserDto)
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  ...
}
```

Rather than importing and using the very long line of code, we can symply use our custom decorator `@Serialize()` .

**before refactoring**

```typescript
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common'
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

@UseInterceptors(new SerializeInterceptor(UserDto)
```

**after refactoring**

```typescript
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Serialize(UserDto)
```

# Type Safety around Serialize

For now, we useed `any` type definition for dto

```typescript
  constructor(private dto: any) {}
```

Let’s refactor this so that we can assure that this dto is at least a class.

serialize.interceptor.ts

```typescript
interface ClassConstructor {
  // eslint-disable-next-line @typescript-eslint/ban-types
  new (...args: any[]): {};
}
```

This interface means that as long as it is a class type it is okay.

Now, we can apply this type definition to the type of dto.

serialize.interceptor.ts

```typescript
import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

interface ClassConstructor {
  // eslint-disable-next-line @typescript-eslint/ban-types
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out.
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    );
  }
}
```

Now we can be sure that the `dto` will be a Class type. In the example shown below, we can see taht type `string` or `number` throws an error because it is not a Class type.

![not-a-class-1.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/not-a-class-1.png)

![not-a-class-2.png](https://ryan-blog.s3.amazonaws.com/backend/nestjs/not-a-class-2.png)
