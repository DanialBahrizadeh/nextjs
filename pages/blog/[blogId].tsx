import { GetServerSideProps } from "next";
import Head from "next/head";

type BlogProps = {
  title: string;
  description: string;
};

function Blog({ title, description }: BlogProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
}

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
  // you can access this property only in node environments
  // if you want to access in jsx you need to name "NEXT_PUBLIC_" before the name like NEXT_PUBLIC_ANALYTICS_ID
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    `Connecting to database with username ${user} and password ${password}`
  );
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
};
