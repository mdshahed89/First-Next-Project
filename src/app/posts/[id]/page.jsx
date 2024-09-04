import Comments from "@/app/components/Comments";
import getAllPosts from "@/fetchapis/getallposts";
import getPostComments from "@/fetchapis/getpostcomments";
import getSinglePost from "@/fetchapis/getsinglepost";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;

  const post = await getSinglePost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

async function page({ params }) {
  const { id } = params;

  const postPromise = getSinglePost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise])

  const post = await postPromise;

  // console.log(comments);

  return (
    <div>
      <h2 className=" text-[3rem] font-bold my-5 ">Single Post</h2>
      <div className=" flex flex-col gap-4 mt-16 ">
        <div className=" text-xl uppercase ">{post.title}</div>
        <div className=" max-w-[20rem] ">{post.body}</div>
        <Suspense fallback="<h3>Comments Loading...</h3>">
          <Comments promise={commentsPromise} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;


export async function  generateStaticParams() {
  
  const posts = await getAllPosts();

  return posts.map((post)=>(
    {
      id: post.id.toString()
    }
  ))

}
