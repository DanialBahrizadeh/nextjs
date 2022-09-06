import Link from "next/link";
import { useRouter } from "next/router";
// default page you have just to visit localhost:3000
export default function Home() {
  const router = useRouter();

  function handleClick() {
    console.log("Placing your order");
    // will navigate to the url you give
    // you might also use router.replace(url) and its similar to Link tag with replace attribute
    router.push("/product");
  }

  return (
    <div>
      <h1>Home Page</h1>
      {/* 
          for navigate you just need to wrap the a tag 
          in a Link component and give the href in the Link component
          kepp in mind that you only and only will use that for navigate in
          your app pages and any link that out side your app should use the regular way

          something to keep in mind that href acpect object as well as string 
          Read more at https://nextjs.org/docs/api-reference/next/link#with-url-object
      */}
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
