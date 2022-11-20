import React from "react";

const fetchCommentsPost = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // throw new Error("Error al cargar los comentarios.");

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function CommentPage({ params }) {
  const { id } = params;
  const comments = await fetchCommentsPost(id);

  return (
    <>
      <h2>Comentarios.</h2>
      <ul style={{ background: "#dee2e6", color: "#212529", padding: 4 }}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
