import { Variants, motion } from "motion/react";

const popAnimateVar: Variants = {
  initial: {
    opacity: 0,
    x: 60
  },
  animate: ({time}: {time: number}) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 50,
      mass: 5,
      delay: time
    },
  }),
  hover: ({direction}: {direction: number}) => ({
    scale: 1.3,
    rotate: direction
  }) 
};

const NavBar = () => {

  return (
    <div className="navbar-div1">
      <motion.div
        variants={popAnimateVar}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={{time: 0.2, direction: 15}}
      >
        <a href="https://www.linkedin.com/in/aloyleow" target="_blank">
          <img src="src\assets\linkblack.svg" width={35} height={40} />
        </a>
      </motion.div>
      <motion.div
        variants={popAnimateVar}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={{time: 0.5, direction: -15}}
      >
        <a href="https://github.com/Aloyleow/" target="_blank">
          <img src="githubBlack.svg" width={35} height={40} />
        </a>
      </motion.div>
      <motion.div
        variants={popAnimateVar}
        initial="initial"
        animate="animate"
        whileHover="hover"
        custom={{time: 0.8, direction: 15}}
      >
        <a href="resume.docx" download>
          <img src="resume.svg" width={35} height={40} />
        </a>
      </motion.div>
    </div>
  )
}

export default NavBar
