export default function NewsArticleList({ articles }) {
  const articlesElements = articles.map((article) => (
    <div key={article.id}>
      <h2>
        {article.id} {article.title} | {article.category}
      </h2>
    </div>
  ));
  return (
    <>
      <h1>List of News Articles</h1>
      {articlesElements}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
