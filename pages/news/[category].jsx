export default function ArticlesListByCategory({ articles, category }) {
  const articleElements = articles.map((article) => (
    <div key={article.id}>
      <h2>
        {article.id} {article.title}
      </h2>
      <p>{article.description}</p>
      <hr />
    </div>
  ));
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {articleElements}
    </>
  );
}

export async function getServerSideProps(context) {
  // all of this are the same form express.js
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Danial"]);

  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  console.log(`Pre-rendering News Articles for category ${category}`);
  return {
    props: {
      articles: data,
      category,
    },
  };
}
