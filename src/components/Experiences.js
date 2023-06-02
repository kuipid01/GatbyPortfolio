import * as React from "react";
import { useInView } from 'react-intersection-observer';
const Experience = ({setExperienceCompActive,experienceCompActive}) => {
const sapleProjects = [
  {
    ExperienceRange: '2023 - PRESENT',
    title: 'Junior Developer',
    jobWebsite:'https://devkuipid.netlify.app',
    subJobTitle:'Junior Engineer',
    jobDescription:'Collaborate with the development team to design, develop, test, and deploy software applications Assist in the implementation of new features and enhancements to existing software',
    techtags: ['React', 'Gatsby', 'Tailwind', 'Javascript', 'Gatsby']
  },
  {
    ExperienceRange: '2022 - 2023',
    title: 'Junior Developer',
    jobWebsite:'https://devkuipid.netlify.app',
    subJobTitle:'Junior Engineer',
    jobDescription:'Collaborate with the development team to design, develop, test, and deploy software applications Assist in the implementation of new features and enhancements to existing software',
    techtags: ['React', 'Gatsby', 'Tailwind', 'Javascript', 'Gatsby']
  },
  {
    ExperienceRange: '2023 - 2023',
    title: 'Intern',
    jobWebsite:'https://devkuipid.netlify.app',
    subJobTitle:'Junior Engineer',
    jobDescription:'Collaborate with the development team to design, develop, test, and deploy software applications Assist in the implementation of new features and enhancements to existing software',
    techtags: ['React', 'Gatsby', 'Tailwind', 'Javascript', 'Gatsby']
  },

]
const [about, setAbout] = React.useState(false)
  const { ref, inView, entry } = useInView({
    
    /* Optional options */
    threshold: 0,
  },);
  if (inView) {
    setExperienceCompActive(true)
  }
  else{
    setExperienceCompActive(false)
  }
  const myStyle = {
    fontFamily: "Andika",
  };
  React.useEffect(() => {
    if (inView) {
      setAbout(true)
    }
   
    return () => {
     setAbout(false)
    }
  }, [inView])
  return (
    
    <div  style={myStyle} ref={ref} className="mb-20  flex flex-col w-full h-fit text-[#f9e8e8]">
         {
        about ?   <nav className="sticky md:hidden flex w-full bg-[#1c0523fc]  left-0 top-0 shadow-lg py-2">
        <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">Experience</h1>
        </nav> :  <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">Experience</h1>
      } 
     
   <div className=" flex flex-col w-full ">
   {
      sapleProjects.map((project) => (
<div className=" md:flex-row flex flex-col w-full hover:bg-[#9494941f] transition-all hover:rounded-xl cursor-pointer p-3  gap-5 items-start ">
  <div className=' md:w-[20%] w-full'>
  <h4 className=" w-full mt-2  font-bold text-xs text-gray-600"> {project.ExperienceRange} </h4>
  </div>

 <div className=" md:w-[77%] w-full flex flex-col ">
 <h1 className="m-0 p-0 mb-1 text-white text-xl">{project.title}</h1>
  <h1 className="mb-3 text-gray-400 font-bold text-[13px] t">{project.subJobTitle}</h1>
  <p className=" font-light  mb-5 text-base leading-7 text-gray-400">{project.jobDescription}</p>

  <div className="flex mt-3 flex-wrap gap-2">
  {project.techtags.map((tag) => <span className=" gap-5 flex flex-wrap rounded-full text-xs py-2 px-3 text-[#239b85f4]  bg-[#239b855c]">
    {tag}
  </span> )}
  </div>
 </div>
</div>
      ))
    }
   </div>
  
    </div>
  );
};

export default Experience