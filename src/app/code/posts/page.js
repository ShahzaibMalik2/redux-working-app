import Link from "next/link";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

const posts = async () => {
  const posts = await fetchPosts();
  //console.log(posts);
  return (
    <div className="p-5 ">
      <h2 className="font-bold text-[24px] text-center">Posts</h2>
      <ul className="space-y-5">
        {" "}
        {posts.map((post) => (
          <li key={post.id} className="border p-5 font-semibold bg-green-50  ">
            <Link href={`/code/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default posts;
