import { comments } from "../../../data/comments";

export default function handler(req, res) {
  // use req.query even for params
  const { commentId } = req.query;
  const comment = comments.find((comment) => String(comment.id) === commentId);
  // if the comment it's not exist throw error
  if (!comment) return res.status(404).json({ error: "Not Found" });

  if (req.method === "GET") {
    res.status(200).json({ comment });
  } else if (req.method === "DELETE") {
    // findIndex its high order function that work for array its the same of "find" but its return the index insted of the item him self
    const commentIndex = comments.findIndex(
      (comment) => comment.id === commentId
    );
    comments.splice(commentIndex, 1);
    res.status(200).json({ comment });
  } else if (req.method === "PUT") {
    const { comment: newComment } = req.body;
    const commentIndex = comments.findIndex(
      (comment) => comment.id === commentId
    );
    comments.splice(commentIndex, 1);
    comments.push({ ...comment, text: newComment });
    res.status(201).json({ comments });
  }
}
