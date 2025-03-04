import { useEffect, useState } from "react";

// const brand: string[] = ["innovate", "compile", "execute"]

const HomeBackground = () => {
  const [scrolled, setScrolled] = useState(false);
  const letters = ["H", "E", "L", "L", "O", "!"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hello-container">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`letter ${scrolled ? "scrolled" : ""}`}
          style={{ transitionDelay: `${index * 0.2}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
  )
}


export default HomeBackground