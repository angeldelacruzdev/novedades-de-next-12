import Link from "next/link";
import React from "react";
import { LikeButtom } from "./LikeButtom";

// getStaticProps
// return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

//getServerSideProps
// return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store }).then(res => res.json())

//incremental static regeneration
const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function ListsOfPosts() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2 style={{ color: "blue" }}>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <LikeButtom />
        </article>
      ))}
    </>
  );
}
