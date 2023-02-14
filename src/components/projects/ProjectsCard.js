import React, { useState } from 'react'
import { BsGithub } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const ProjectsCard = ({ title, des, src, git, thesis, tools }) => {
  const [isHovered, setIsHovered] = useState(false);
  const truncatedText = des.slice(0, 120);
  const showReadMore = des.length > 120;

  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full p-3 h-full rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full h-[20%] flex flex-col justify-center gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">

            {git && (
                <Tooltip title="Check the Git repository">
                  <a href={git} rel="noreferrer noopener" target="_blank">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub />
                    </span>
                  </a>
                </Tooltip>
              )}
              {thesis && (
                 <Tooltip title="Download The Project Thesis">
                <a download={thesis} href={thesis} aria-label="Download Thesis">
                  <span  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                    <FaDownload />
                  </span>
                </a>
                </Tooltip>
              )}
            </div>
          </div>
          <p
            className={`text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 ${
              showReadMore && isHovered ? '' : 'h-20 overflow-hidden'
            }`}
          >
            {isHovered ? des : truncatedText}
            {showReadMore && (
              <button
                className="text-sm text-blue-500 hover:underline duration-300 cursor-pointer ml-1"
                onClick={() => setIsHovered(!isHovered)}
              >
                {isHovered ? '' : 'Read More'}
              </button>
            )}
          </p>
          <br />
          <strong>Used Technology: {tools}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
