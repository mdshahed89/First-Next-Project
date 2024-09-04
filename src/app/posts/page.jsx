import getallposts from "@/fetchapis/getallposts";
import Link from "next/link";
import React from "react";

async function page() {
  const posts = await getallposts();

  return (
    <div className=" mt-16 ">
      <h3 className=" pl-24 ">All Posts</h3>
      <div className=" flex flex-col gap-3 mt-9 ">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id} className=" text-xl ">
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
