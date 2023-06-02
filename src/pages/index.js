import * as React from "react";
import Experience from "../components/Experiences";
import AboutMe from "../components/AboutMe";
import Project from "../components/Projects";
import Contact from "../components/Contact";
import { FaReact, FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  const [experienceCompActive, setExperienceCompActive] = React.useState(false);
  const [projectCompActive, setProjectCompActive] = React.useState(false);
  const [contactCompActive, setContactCompActive] = React.useState(false);
  const myStyle = {
    fontFamily: "Inter",
    color:'rgba(176, 189, 208, 0.986)',
  };
  return (
    <div style={myStyle} className=" bodyIn bg-[#1c0523] px-4 md:px-20 md:flex-row flex flex-col w-full h-fit ">
      <div className="w-full md:w-[40%] md:sticky top-0 right-0  flex flex-col  md:flex-col md:pt-28 items-start md:pl-10  h-fit pt-32">
        <div className="w-full">
          <h1 className="  text-4xl font-[900] ">Adegoke Stephen</h1>
          <p className="mt-2 mb-4 text-xl">
            Junior Devloper at{" "}
            <span className="font-bold text-[#deadad]"> Duoworld</span>{" "}
          </p>
          <p className="text-lg mb-10 leading-8">
            I build accessible,well designed and user first products <br />
            and digital experiences fo the web
          </p>
        </div>
        <div className=" hidden md:flex flex-col font-semibold mt-6 gap-3 text-[#dcdcdc]">
        <div className="flex items-center  justify-start gap-5">
            {" "}
            <span  className={`  ${contactCompActive ? 'w-[70px]' : "w-[25px]" } h-[2px] bg-[#a9a9a9b3]`}></span>
            <p className="h-full"> About</p>{" "}
           
          </div>{" "}
          <div
            className={`flex items-center justify-start gap-2`}
          ><span
          className={`  ${experienceCompActive ? 'w-[70px]' : "w-[25px]" }
           transition-all  h-[2px] bg-[#a9a9a9b3]`}
        ></span>
            {" "}
            <p> Experiences</p>{" "}
            
          </div>{" "}
          <div className="flex items-center  cursor-pointer justify-start gap-5">
            {" "}
            <span  className={`  ${projectCompActive ? 'w-[70px]' : "w-[25px]" }   h-[2px] bg-[#a9a9a9b3]`}></span>
            <p> Projects</p>{" "}
         
          </div>{" "}
          
        </div>
     
        <div className=" flex gap-3 mt-10 ">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Helmet>
      <div className=" text-2xl text-gray-400 cursor-pointer">  <FaTwitter /></div>
    <div className=" text-2xl text-gray-400  cursor-pointer">   <FaGithub /></div>
    <div className=" text-2xl text-gray-400  cursor-pointer">   <FaLinkedinIn /></div>
     <div className=" text-2xl text-gray-400  cursor-pointer">   <FaInstagram  className=" hover:text-slate-100" /></div>
    </div>
      
        
        </div>
     

      <div className="w-full md:w-[60%]  md:pl-32  h-fit min-h-scrren ">
        <div>
          <AboutMe 
          setContactCompActive={setContactCompActive}

          contactCompActive={contactCompActive}/>
        </div>

<Experience  setExperienceCompActive={setExperienceCompActive}

experienceCompActive={experienceCompActive}
         />
<Project  setProjectCompActive={setProjectCompActive}

projectCompActive={projectCompActive}
         />
 <p className=" mt-24 pb-24 text-[#969696b8] font-[100] text-base leading-[1.5] ">Inspiration gotten from Brittany Chang website, Coded in Visual Studio Code. <br />
      Built using GatsbyJs and Tailwind Css , deployed to Netlify </p>
      </div>
      
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Devkuipid</title>;
