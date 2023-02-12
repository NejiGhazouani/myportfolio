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
          des="Developing apps with Nest.js, Node.js,React and Angular is a great way to build modern, robust and high-performing applications."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Front End Development"
          des="Creating and maintaining a  dynamic, interactive, and visually appealing user interfaces for websites and web applications."
          icon={<SiAntdesign />}
        /> 
        <Card
          title="Devops"
          des="Using GitHub Actions automate tasks such as building, testing, and deploying your apps."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features