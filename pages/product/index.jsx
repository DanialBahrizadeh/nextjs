import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        <Link href="product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="product/2">Product 2</Link>
      </h2>
      <h2>
        {/* replace - Replace the current history state instead of adding a new url into the stack. Defaults to false */}
        <Link href="product/3" replace>
          Product 3
        </Link>
      </h2>
    </>
  );
}
