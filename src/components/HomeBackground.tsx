import { useGlitch } from "react-powerglitch"

const HomeBackground = () => {

  const glitch = useGlitch({
    "playMode": "hover",
    "optimizeSeo": true,
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 650,
      "iterations": 99
    },
    "glitchTimeSpan": {
      "start": 0,
      "end": 1
    },
    "shake": {
      "velocity": 15,
      "amplitudeX": 0.2,
      "amplitudeY": 0.2
    },
    "slice": {
      "count": 6,
      "velocity": 15,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": true
    },
    "pulse": false
  })

  return (
    <div className="home-backg-div1">
        <img src="meleft.png" width={260} ref={glitch.ref}/>
        <img src="meright.png" width={260} />
    </div>
  )
}

export default HomeBackground