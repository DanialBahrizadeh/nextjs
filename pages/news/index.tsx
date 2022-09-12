import { GetStaticProps } from "next";

interface NewsProps {
  data: string;
}

const News: React.FC<NewsProps> = ({ data }) => {
  return <h1 className="content">{data}</h1>;
};

export default News;

export const getStaticProps: GetStaticProps = async (context) => {
  // this function will run with every request if preview mode is enabled
  console.log("Running getStaticProps", context.previewData);
  const data = context.preview
    ? "List of draft articles"
    : "List of published articles";
  return {
    props: {
      data,
    },
  };
};
