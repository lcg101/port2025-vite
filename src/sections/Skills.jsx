// src/sections/Skills.jsx
import './Skills.css';

const skills = [
  { name: 'Linux', level: 90 },
  { name: 'Python', level: 80 },
  { name: 'Shell', level: 80 },
  { name: 'Docker / K8s', level: 70 },
  { name: 'Ansible', level: 75 },
  { name: 'OpenStack', level: 60 },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>💻 Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

