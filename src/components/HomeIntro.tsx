import { AnimatePresence, Variants, motion } from "motion/react";
import { useState } from "react"

const introName = "Hi, I am Aloysious Leow"
const introRole = "A Software Engineer"
const introExtend = "A mid-career switch professional, pursuing my passion and career as a Full-Stack Developer."
const introExtend2 = "The only constant in dev is change and adapting to that change is my only constant."


const homeIntroAnimateVar: Variants = {

  initial: ({ yInitial }: {yInitial: number}) => ({
    opacity: 0,
    y: yInitial,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    },
  },
  exit: ({ yExit }: { yExit: number }) => ({
    opacity: 0,
    y: yExit,
    transition: {
      duration: 0.3,
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
          <motion.div
            key="introExtend"
          >
            <motion.p
              variants={homeIntroAnimateVar}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{ yExit: 0, yInitial: 0}}
            >
              {introExtend}
            </motion.p>
            <motion.p
              variants={homeIntroAnimateVar}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{ yExit: 0, yInitial: 0}}
            >
              {introExtend2}
            </motion.p>
          </motion.div>
          :
          <motion.div
            className="homeIntro-div2"
            key="intro"
          >
            <motion.h1
              variants={homeIntroAnimateVar}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{ yExit: -20, yInitial: -10}}
            >
              {introName}
            </motion.h1>
            <motion.h1
              variants={homeIntroAnimateVar}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{ yExit: 20, yInitial: 10}}
            >
              {introRole}
            </motion.h1>
          </motion.div>}
      </AnimatePresence>
    </motion.div>
  )
}

export default HomeIntro