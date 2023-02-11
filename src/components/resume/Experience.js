import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-stack Developer"
            subTitle="Hatch - digital product & 
            venture studio - (2022)"
            result="GERMANY"
            des=<ul>
            <li>Worked as a Front End Developer in a team to develop an Headless Design system for the company . 
            Collaborated with the team to implement a responsive and user- friendly interface using ReactJS or Angular .
            Utilized Nest Js framework to develop the back-end and Angular for the front-end of the application .</li>
<br></br>
<li><strong>Keywords: ReactJs - Angular - NestJs - MongoDB - Git - ClickUP - Slack </strong></li>

          </ul>                />
            
          <ResumeCard
            title="Summer Internship"
            subTitle="Private Higher School of 
            Engineering and 
            Technology ESPRIT - (2021)"
            result="TUNIS"
             des=<ul>
            <li>Design and Implementation of Real estate recommendations from a varied data source .</li>
<br></br>
<li><strong>Keywords: React, Node JS, Express JS, Mongo DB, Git </strong></li>

          </ul>                />
          <ResumeCard
            title="Graduation Project"
            subTitle="Higher Institute of 
            Computer Science - (2019)"
            result="TUNIS"
            des=<ul>
            <li>Design and Implementation of a Smart Irrigation System to make a wireless sensor network to achieve precise 
            irrigation helped avoiding water wastage, minimize runoffs, neglect human errors and save energy, time, and 
            valuable resources.</li>
<br></br>
<li><strong>Keywords:  Lora WAN, Arduino IDE, Microsoft Azure, Xamarin
</strong></li>

          </ul>                />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
