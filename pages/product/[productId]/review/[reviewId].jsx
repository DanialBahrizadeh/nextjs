import { useRouter } from "next/router";

//
export default function ReviewDetails() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
