import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      {/* if you add link to the users it will automatically request the chunks that need to be rendered this pages when you run this page */}
      <Link href="/users">
        <a>users</a>
      </Link>{" "}
      <Link href="/posts">
        <a>posts</a>
      </Link>
      <Link href="/products">
        <a>products</a>
      </Link>
    </>
  );
}
