import Head from "next/head";

const HeadMeta = (props: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}) => {
  return (
    <Head>
      <title>{props.title || "Ryan Kim"}</title>
      <meta
        name="description"
        content={
          props.description ||
          `단순히 코드만 작성하는 사람이 아닌, 웹 백엔드 서비스의 관점에서 분석하고 해결하여 더 나은 세상을 만들어 나가는 "문제 해결사" Ryan Kim(김성진)`
        }
      />
      <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      <meta property="og:title" content={props.title || "Ryan Kim's Web Site / Tech Blog"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url || "https://www.ryankim.co.kr/"} />
      <meta property="og:image" content={props.image || "/images/logo.png"} />
      <meta property="og:article:author" content={"Ryna Kim"} />
    </Head>
  );
};
export default HeadMeta;
