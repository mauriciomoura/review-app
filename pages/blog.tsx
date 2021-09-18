import { InferGetServerSidePropsType } from "next";
import { Fragment } from "react";
import { PostList } from "../components/PostList";

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const networkPosts = (await res.json()) as NetworkPost[];
    const posts: Post[] = networkPosts.map(({ id, title, body }) => ({
      id,
      title,
      body
    }));
    return {
      props: { msg: "Welcome to Blog!", posts }
    };
}
  
export default function Blog({
    posts,
    msg
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(posts);
    return (
      <Fragment>
        <h1 className="m-4 text-center text-4xl text-blue-500">{msg}</h1>
        <div>
          <PostList posts={posts}/>
        </div>
      </Fragment>
    );
    
}