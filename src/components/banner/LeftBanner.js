import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDownload, FaReact } from "react-icons/fa";
import { SiNodedotjs,SiAngular,SiNestjs} from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Javascript Developer.", "Full Stack Developer.", "Front End Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Neji Ghazouani</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A curious product-oriented full stack
        developer, focused on developing scalable
        and viable products through implementing
        the best practices of code and with a gluttony
        of knowledge-sharing and Embracing
        mentorship
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
           Download My CV
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              {/* ////////////////////////////////////////////////////////////////////////////////////// */}
              <a
						download="Resume.pdf"
						href="resume.pdf"
						aria-label="Download Resume"
					>
						<span className="bannerIcon">
							<FaDownload />
						</span> 
					</a>
              {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiAngular />
            </span>
            <span className="bannerIcon">
              <SiNestjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner