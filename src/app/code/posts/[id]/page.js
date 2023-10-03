import PostDetailComponent from "@/app/components/PostDetailsComp";
const PostDetails = async ({ params: { id } }) => {
  return (
    <div className="">
      <PostDetailComponent id={id} />
    </div>
  );
};

export default PostDetails;
