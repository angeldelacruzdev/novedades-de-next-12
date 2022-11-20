export default function PostsLayout({ children }) {
  return (
    <div className="container">
      <small>Home &bull; Posts</small>
      {children}
    </div>
  );
}
