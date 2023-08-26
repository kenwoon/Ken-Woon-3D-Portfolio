import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#646e7c', color: '#c6a685'}}
    contentArrowStyle={{ borderRight: '7px solid #646e7c'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain cursor-pointer hover:w-[65%] hover:h-[65%]'
        />
      </div>
    }
    iconOnClick={()=> window.open(experience.link)}
  >
    <div>
      <h3 className='text-[#E3ECE9] text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-[#9EB384] text-[16px] font-semibold cursor-pointer hover:text-[#B1C29C]' onClick={()=> window.open(experience.link)} style={{ margin: 0}}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-[#ebebf4] text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My history</p>
        <h2 className={styles.sectionHeadText}>Experiences</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="black">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");