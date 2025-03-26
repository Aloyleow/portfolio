import { motion, Variants } from "motion/react"
import { GlitchHandle, useGlitch } from "react-powerglitch";

const tagline = ["INNOVATE",  "COMPILE", "EXECUTE",];

const marqueeAnimateVar: Variants = {
  initial: {
    opacity: 1,
    x: -300,
  },
  animate: ({indexAnimate}: {indexAnimate: number}) => ({
    opacity: 1,
    x: 1500,
    transition: {
      delay: indexAnimate * 6.4,
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  })
};

const FooterMarquee = () => {

  const glitch: GlitchHandle = useGlitch({
    "playMode": "hover",
    "optimizeSeo": true,
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 250,
      "iterations": 2,
      "easing": "linear"
    },
    "glitchTimeSpan": {
      "start": 0,
      "end": 1
    },
    "shake": {
      "velocity": 10,
      "amplitudeX": 0.2,
      "amplitudeY": 0.1
    },
    "slice": {
      "count": 15,
      "velocity": 20,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": true
    },
    "pulse": false
  })


  return (
    <div className="footer-marquee-div1">
      {tagline.map((item, index) => (
        <motion.div
          key={index}
          className="footer-marquee-text"
          variants={marqueeAnimateVar}
          initial="initial"
          animate="animate"
          custom={{indexAnimate: index}}
        >
          <div ref={glitch.ref}>
            <h1>{item}</h1>
          </div>   
        </motion.div>
      ))}
    </div>
  )
}

export default FooterMarquee