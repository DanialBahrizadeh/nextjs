import { useRouter } from "next/router";
import { comments } from "../../data/comments";
export default function Comment({ comment }) {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // dont do this
  //   const response = await fetch(`/api/comments/${commentId}`);
  //   const data = await response.json();

  // this code will not work for data that you have been add with post because it take the initial data that has been create in comments
  const { commentId } = context.params;
  const comment =
    comments.find((comment) => String(comment.id) === commentId) || null;
  console.log(comments.map((comment) => comment.id));
  console.log(commentId);
  if (!comment) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      comment,
    },
  };
}
