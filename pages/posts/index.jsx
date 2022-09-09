import Link from "next/link";
export default function PostList({ posts }) {
  const postsElements = posts.map((post) => (
    <div key={post.id}>
      {/* passHref will add event to the child element onClick to go to the href */}
      <Link href={`posts/${post.id}`} passHref>
        <h2>
          {post.id} {post.title}
        </h2>
      </Link>
      <hr />
    </div>
  ));
  return (
    <>
      <h1>List of Posts</h1>
      {postsElements}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
