import React, { useState } from 'react'
import Title from '../layouts/Title';
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Slider from "react-slick";
import { projects } from '../../constants/projects';
import ProjectsCard from './ProjectsCard';
import { useMediaQuery } from '@mui/material';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute margin-bot-20 top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}
const Projects = () => {
  const [dotActive, setDocActive] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)"); // define a breakpoint for mobile screens
  const slidesToShow = isMobile ? 1 : 3; // if the screen is smaller than 768px, show 1 slide, otherwise show 3 slides
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // use the slidesToShow variable
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#ff014f",
              borderRadius: "50%",
              cursor: "pointer",
            }
            : {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <Slider {...settings}>
        {projects.map(({ _id, title, des, tools, src, thesis, git }) => (
          <ProjectsCard
            key={_id}
            title={title}
            des={des}
            src={src}
            tools={tools}
            thesis={thesis}
            git={git}
          />
        ))}
      </Slider>
    </section>
  );
};


export default Projects;
