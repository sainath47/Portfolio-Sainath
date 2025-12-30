import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="i2e Consulting - (Sep 2023 - Nov 2025) "
            result="Remote"
            des="Worked on end-to-end backend development for production applications using Node.js, Strapi 5, and PostgreSQL, covering system architecture, data modeling, API design, and performance optimization. Implemented secure REST and GraphQL APIs with JWT-based authentication and role-based access control. Handled application deployment and operations on AWS using EC2, S3, Lambda, and CloudWatch. Built CI/CD pipelines with Jenkins and Docker, introduced serverless automation workflows, and optimized APIs using Redis caching, indexing, and pagination. Collaborated closely with React and Next.js teams for seamless frontend-backend integration."
          />
          <ResumeCard
            title="Full-Stack Developer"
            subTitle=" - Next Cloudwave Solutions (Sep 2018 - Sep 2023) "
            result="Hyderbad"
            des="Developed scalable full-stack applications using Node.js, Express, MongoDB, and PostgreSQL, focusing on backend API development, database design, and performance tuning. Built REST and GraphQL APIs, implemented authentication and role-based access control, and integrated third-party services such as LinkedIn and Twitter APIs. Worked on real-time features using Socket.IO and optimized backend performance for high-traffic usage. Containerized applications using Docker, set up CI/CD pipelines, and collaborated with frontend teams to integrate APIs into React-based interfaces."
          />


        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">20XX - 20XX</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ML Instructor"
            subTitle="ABC Platform (20XX - 20XX)"
            result="UK"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="ABC King's College (20XX - 20XX)"
            result="CANADA"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="App Developer"
            subTitle="ABC Company (20XX - 20XX)"
            result="India"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
