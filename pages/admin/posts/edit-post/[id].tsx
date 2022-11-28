import React from 'react'
import { GetServerSideProps } from 'next';
import { Post } from '../../../../interfaces/post.interface';

const EditPostPage = ({post}: {post: Post}) => {
  console.log(post)
  return <>
      <div>{post.title}</div>
      <textarea defaultValue={post.markdown}></textarea>
    </>
  
}

export default EditPostPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context.query);

  const { id } = context.query

  const res = await fetch(`${process.env.backendBaseUrl}/posts/${id}`)
  const post = await res.json()



return {
  props: {
    post
  }
}
}



