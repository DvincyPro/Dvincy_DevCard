import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import lyon from "@/public/leon.jpg";
import { skills, Experience, projects } from "../profile";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Layout>
        {/* Header card */}
        <header className="row py-2">
          <div className="col-md-12 ">
            <div className="card card-body bg-secondary text-light">
              <div className="row">
                <div className="col-md-4">
                  <Image src={lyon} className="img-fluid" alt="Lion Simbol" />
                </div>
                <div className="col-md-8">
                  <h1>D.Vincy</h1>
                  <h4>Next Developer.</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptates aliquam fugiat eum, laboriosam velit porro illum
                    ducimus delectus rem, facilis nam. Nemo nulla consequatur
                    explicabo ad tempore animi molestias quae?
                  </p>
                  <a href="/hireme">Hire Me</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Second section */}

        <section className="row">
          <div className="col-md-4 py-2">
            <div className="card bg-light animate__animated animate__fadeInLeft">
              <div className="card-body">
                <h1>Skills</h1>

                {/* Skill Progress  */}
                {skills.map(({ skill, percentage }, i) => (
                  <div className="py-3" key={i}>
                    <h5>{skill}</h5>
                    <div className="progress ">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-8 py-2">
            {/* Experience */}
            <div className="card bg-light animate__animated animate__fadeInRight">
              <div className="card-body">
                <h1>Experience</h1>

                <ul>
                  {/* List Item Experience */}
                  {Experience.map(({ title, from, to }, index) => (
                    <li key={index}>
                      <h3>{title}</h3>
                      <h5>
                        {from} {to ? `- ${to}` : "- current"}
                      </h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sint excepturi ea explicabo. Illum suscipit illo,
                        porro quisquam voluptatem officiis fugiat vel animi
                        aliquam inventore rem. Quo laudantium temporibus
                        cupiditate. Aut?
                      </p>
                    </li>
                  ))}
                </ul>
                <Link className="btn btn-light" href="/hireme">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Porfolio */}
        <section>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-dark">
                <div className="row">
                  <div className="col-md-12 my-2">
                    <h1 className="text-center text-light">Portfolio</h1>
                  </div>
                  {projects.map(({ name, description, image }, index) => (
                    <div className="col-md-4 p-2" key={index}>
                      <div className="card h-200">
                        <div className="overflow">
                          <Image
                            src={`/${image}`}
                            alt="imagen"
                            className="card-img-top  "
                            width={150}
                            height={200}
                          />
                        </div>

                        <div className="card-body">
                          <h3>{name}</h3>
                          <p>{description}</p>
                          <a href="#!">Know More</a>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-md-12 mt-4">
                    <div className="text-center">
                      <Link className="btn btn-outline-light" href="/portfolio">
                        More Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
