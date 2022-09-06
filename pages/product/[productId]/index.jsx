import { useRouter } from "next/router";

// the name is especial this name is like :productId so the link of the file its like localhost:3000/products/:productId
// if there was some file already its will overwrite this file for example /sweater  it will return the sweater page
export default function ProductDetail() {
  const router = useRouter();
  // like node js req.query is the params in the link
  const { productId } = router.query;

  return <h1>Details about product {productId}</h1>;
}
