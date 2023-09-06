import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full matcha-gradient p-[1px] rounded-[20px] shadow-2xl'
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-[#E3ECE9] text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overiew</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#6D4930] text-[17px] max-w-3xl leading-[30px]'
      >
        Hello ! 👋
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#6D4930] text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Mechatronics and Computer Science graduate from the University of British Columbia and have recently completed an internship with Bitnine Global Inc. as a software engineer.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#6D4930] text-[17px] max-w-3xl leading-[30px]'
      >
        My expertise lies in backend infrastructure, with proficiency in programming languages, especially Java, Python, and C. Additionally, I have experience with frontend languages like CSS, HTML, and JavaScript. I am knowledgeable in areas such as machine learning and operating system scheduling algorithms as well.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#6D4930] text-[17px] max-w-3xl leading-[30px]'
      >
        I also possess experience in utilizing engineering tools, such as SolidWorks, FluidSIM, and KLayout, and concepts including PLC programming, automation circuit design, and smart sensor technology. I am eager to apply my skills and knowledge in a challenging and rewarding professional role, driven by a passion for lifelong learning.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#6D4930] text-[17px] max-w-3xl leading-[30px]'
      >
        If I'm not in front of my laptop, I'm most likely learning more Polyphia songs on the guitar 🎸, playing games 🎮, or working out! 🤸🏻
      </motion.p>
      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index = {index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");