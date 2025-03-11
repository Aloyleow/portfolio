import { useState } from "react"
import { skillsImage1, skillsImage2 } from "../services/content"
import { AnimatePresence, Variants, motion } from "motion/react";

const skillsLogoAnimateVar: Variants = {
  initial: ({ yInitial }: { yInitial: number }) => ({
    opacity: 1,
    y: yInitial,
  }),
  animate: ({ yAnimate }: { yAnimate: number }) => ({
    opacity: 1,
    y: yAnimate,
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    },
  })
};

const skillsInfoAnimateVar: Variants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const SkillsShowcase = () => {
  const [skillsinfo, setSkillsinfo] = useState<string>("")

  return (
    <div className="skills-div1">
      <div className="skills-div2">
        {skillsImage1.map((logo, index) => (
          <motion.div
            key={index}
            className="skills-logo-div"
            variants={skillsLogoAnimateVar}
            initial="initial"
            animate="animate"
            custom={{ yInitial: (index % 2 === 0) ? -4 : 4, yAnimate: [(index % 2 === 0) ? 4 : -4, 0, (index % 2 === 0) ? -4 : 4] }}
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setSkillsinfo(`${logo.info}`)}
            onHoverEnd={() => setSkillsinfo("")}
            onTouchStart={() => setSkillsinfo(`${logo.info}`)}
          >
            <img src={logo.link} alt={logo.alt} />
          </motion.div>
        ))}
      </div>
      <div className="skills-div2">
        {skillsImage2.map((logo, index) => (
          <motion.div
            key={index}
            className="skills-logo-div"
            variants={skillsLogoAnimateVar}
            initial="initial"
            animate="animate"
            custom={{ yInitial: (index % 3 === 0) ? -4 : 4, yAnimate: [(index % 3 === 0) ? 4 : -4, 0, (index % 3 === 0) ? -4 : 4] }}
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setSkillsinfo(`${logo.info}`)}
            onHoverEnd={() => setSkillsinfo("")}
            onTouchStart={() => setSkillsinfo(`${logo.info}`)}
          >
            <img src={logo.link} alt={logo.alt} />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {skillsinfo &&
        <motion.div className="skills-div2-about">
          <motion.p
            variants={skillsInfoAnimateVar}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {skillsinfo}
          </motion.p>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default SkillsShowcase