import * as React from "react";
import { useInView } from "react-intersection-observer";
const Project = ({ setProjectCompActive, projectCompActive }) => {

  const [about, setAbout] = React.useState(false)
  const projects = [
    {
      projectImage: "https://picsum.photos/536/354",
      projectTitle: "Built a farm ecommerce website ",
      projectDescription:
        "A personal project that covers the core aspect of crud functionalities and integrating a python backend to a react frontend",
      projectTags: ["React", "Gatsby", "GraphQl"] || null,

      projectLink: "nalawafarms.netlify.app",
    },
  ];
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  if (inView) {
    setProjectCompActive(true);
  } else {
    setProjectCompActive(false);
  }
  React.useEffect(() => {
    if (inView) {
      setAbout(true)
    }
   
    return () => {
     setAbout(false)
    }
  }, [inView])
  return (
    <div ref={ref} className=" mt-32 flex flex-col w-full h-fit text-[#f9e8e8]">
        {
        about ?   <nav className="sticky md:hidden flex w-full bg-[#1c0523fc]  left-0 top-0 shadow-lg py-2">
        <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">Projects</h1>
        </nav> :  <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">Projects</h1>
      } 
       <div className=" flex flex-col w-full ">
   {
      projects.map((project) => (
<div className=" flex w-full hover:bg-[#9494941f] transition-all hover:rounded-xl cursor-pointer p-3  gap-5 items-start ">
  <div className=' w-[20%] '>
 <img className="mt-2 rounded object-cover" src={project.projectImage} alt="" />
  </div>

 <div className=" w-[77%]  flex flex-col ">
 <h1 className="m-0 p-0 mb-1 text-white text-xl">{project.projectTitle}</h1>

  <p className=" font-light  mb-5 text-base leading-7 text-gray-400">{project.projectDescription}</p>

  <div className="flex mt-3 flex-wrap gap-2">
  {project?.projectTags?.map((tag) => <span className=" gap-5 flex flex-wrap rounded-full text-xs py-2 px-3 text-[#239b85f4]  bg-[#239b855c]">
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

export default Project;
