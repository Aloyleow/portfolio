import { AnimatePresence, Variants, motion } from "motion/react";
import { useState } from "react"

const introName = "Hi, I am Aloysious Leow"
const introRole = "A Software Engineer"
const introExtend = `A mid-career switch professional, pursuing my passion and career as a Full-Stack Developer.
The only constant in dev is change and adapting to that change is my only constant.`

const homeIntroAnimateVar: Variants = {
  initial: ({opInitial}: {opInitial: number}) => ({
    opacity: opInitial,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    },
  },
  exit: ({yExit}: {yExit: number}) => ({
    opacity: 0,
    y: yExit,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const HomeIntro = () => {
  const [showTag, setShowTag] = useState<boolean>(false)

  return (
    <motion.div
      className="homeIntro-div1"
      onHoverStart={() => setShowTag(true)}
      onHoverEnd={() => setShowTag(false)}
      onTouchStart={() => setShowTag(true)}
      onTouchEnd={() => setShowTag(false)}
    >
      <AnimatePresence mode="wait">
        {showTag ?
          <motion.h3
            key={"introExtend"}
            variants={homeIntroAnimateVar}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={{yExit: 0, opInitial: 0}}
          >
            {introExtend}
          </motion.h3>
          :
          <motion.div
            className="homeIntro-div2"
          >
            <motion.h1
              key={"introName"}
              variants={homeIntroAnimateVar}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{yExit: -20, opInitial: 0}}
            >
              {introName}
            </motion.h1>
            <motion.h1
              key={"introRole"}
              variants={homeIntroAnimateVar}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{yExit: 20, opInitial: 0}}
            >
              {introRole}
            </motion.h1>
          </motion.div>}
      </AnimatePresence>
    </motion.div>
  )
}

export default HomeIntro