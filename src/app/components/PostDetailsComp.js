async function fetchPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return post;
}

const PostDetailComponent = async ({ id }) => {
  const post = await fetchPost(id);
  return (
    <div className="p-5">
      <div className="flex items-center justify-center text-[24px] font-bold">
        Post Details
      </div>
      <div className="p-5 flex flex-col border">
        <p className="font-bold text-[20px]">Title : </p>
        <p>{post.title}</p>
        <div className="pt-5">
          <p className="font-bold text-[20px]">Description : </p>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetailComponent;
