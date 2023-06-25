import { useEffect, useState, useRef } from "react";

export default function SkillBar() {
  const [values, setValues] = useState([]);
  const skillBarRef = useRef(null);

  let skillPercentDic = {
    JavaScript: 60,
    Python: 60,
    JAVA: 50,
    Ruby: 50,
    C: 50,
    R: 30,
  };
  let skillName = Object.keys(skillPercentDic);
  let skillPercent = Object.values(skillPercentDic);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newValues = skillPercent.map((percent) => percent * 2); // Adjust the multiplier to make the bars shorter
          setValues(newValues);
          observer.unobserve(entry.target);
        }
      });
    });

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [skillPercent]);

  return (
    <section className="skill animate-skill-bars" ref={skillBarRef}>
      <h3 className="h3 skills-title">My skills</h3>

      <ul>
        {skillName.map((name, index) => (
          <li className="skills-item" key={name}>
            <div className="title-wrapper">
              <h5 className="h5">{name}</h5>
              <data value={skillPercent[index]}>{skillPercent[index]}</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{
                  width: values[index] ? `${0.5 * values[index]}%` : "0%",
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
