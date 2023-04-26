import Layout from "@/components/Layout";
import { Posts } from "../profile";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Posts = {
  title: string;
  content: string;
  imageURL: string;
  // ...
};

interface PostCardProps {
  post: Posts;
}

const PostCard = ({ post }: PostCardProps) => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <Image
          src={post.imageURL}
          width={350}
          height={300}
          alt=""
          className="card-img-top"
        />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
          <button className="btn btn-light">Read</button>
        </Link>
      </div>
    </div>
  </div>
);

const blog = () => {
  return (
    <Layout dark>
      <div className="row">
        {Posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default blog;
