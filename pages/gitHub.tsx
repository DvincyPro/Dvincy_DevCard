import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import _error from "@/components/_error";

interface User {
  login: string;
  bio: number;
  id: number;
  name: string;
  email: string | null;
  avatar_url: string;
  html_url:string;
  // add more properties as needed
}

interface Props {
  data: User;
  statusCode: number | false;
}

const GitHub = ({ data, statusCode }: Props) => {

  if (statusCode) {
    return  <_error/>
  }

  return (
    <Layout dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{data.name}</h1>
            <Image src={data.avatar_url} width={350} height={300} className="img-fluid" alt="image"/>
            <p>{data.bio}</p>
            <Link href={data.html_url} target="_blank" className="btn btn-outline-secondary">Go GitHub</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(): Promise<{ props: Props }> {
  const res = await fetch("https://api.github.com/users/DvincyPro");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      data,
      statusCode,
    },
  };
}

export default GitHub;

