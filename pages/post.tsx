import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { Posts } from "@/profile";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Posts = {
    title: string;
    content: string;
    imageURL:string;
    // ...
  };
  
  interface PostCardProps {
    currentPost: Posts;
  }

const Post = ({ currentPost }: PostCardProps) => {
    const router = useRouter();
    const current = Posts.filter(post=> post.title === router.query.title)[0]
  return (
    <Layout >
        <div className="text-center">
            <h1  >{current.title}</h1>
            <Image src={current.imageURL} alt="imagen" className="img-fluid" width={500} height={500} />
            <p>{current.content}</p>
        </div>
    </Layout>
  )
}

export default Post