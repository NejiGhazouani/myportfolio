import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import {  FaGlobe } from "react-icons/fa";
import {  SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card
          title="App Development"
          des="Developing apps with Nest.js, Node.js,React and angular is a great way to build modern, robust and high-performing applications."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Front End Development"
          des="Creating and maintaining a  dynamic, interactive, and visually appealing user interfaces for websites and web applications."
          icon={<SiAntdesign />}
        /> 
        <Card
          title="Devops"
          des="Using Docker for development allows for creating consistent and portable development environments, making it easier to develop and test applications on any platform."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features