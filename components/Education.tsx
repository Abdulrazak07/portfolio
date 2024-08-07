import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import BulletIcon from "./BulletIcon";
import AnimatedHeading from "./AnimatedHeading";

const Details = ({
  type,
  period,
  place,
  info,
  institution,
  link,
}: {
  type: string;
  period: string;
  place: string;
  info: string;
  institution: string;
  link: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 md:w-[60%] mx-auto flex flex-col items-start justify-between w-[80%]"
    >
      <BulletIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold md:text-2xl sm:text-xl text-lg">
          {type}&nbsp;
          <a className="capitalize text-primary" href={link} target="_blank">
            @{institution}
          </a>
        </h3>
        <span className="capitalize opacity-70 font-medium text-sm sm:text-base">
          {period} | {place}
        </span>
        <p className="font-medium w-full text-sm md:text-base">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <AnimatedHeading className="pt-10">Education</AnimatedHeading>
      <div
        className="w-full md:w-[90%] lg:w-3/4 mx-auto relative mb-[50vh]"
        ref={ref}
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[19px] sm:left-7 md:left-9 top-1 sm:w-1 w-[2px] h-full bg-primary origin-top"
        />
        <ul className="w-full sm:ml-4 ml-2">
          {allEducation.map((education, i) => (
            <Details key={education.institution + i} {...education} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Education;

const allEducation = [
  {
    type: "Bachelor of Technology",
    period: "2019 - 2023",
    place: "Vandalur, Chennai",
    info: "Graduated in B.Tech. Computer Science Engineering with 7.0 CGPA. ",
    institution: "B.S.Abdur Rahman Crescent Institute of Science & Technology",
    link: "https://crescent.education/",
  },
  {
    type: "Higher Secondary",
    period: "2017 - 2019",
    place: "Pattukottai, Thanjavur",
    info: "Completed Higher Secondary with a total percentage of 65%.",
    institution: "Abu Matriculation Higher Secondary School",
    link: "",
  },
  {
    type: "High School",
    period: " - 2016",
    place: "Pattukottai, Thanjavur",
    info: "Completed Higher Secondary with a total percentage of 85%.",
    institution: "Abu Matriculation Higher Secondary School",
    link: "",
  },
];
