import React from "react";
import "../style.css";

const Projects = () => {
  const projectList = [
    { name: "Expense Tracker", description: "🚀 Expense Tracker is a React-based application that allows users to log expenses.", link: "https://github.com/Sridhar-gi/expense-tracker" },
    { name: "To-Do List", description: "To-Do List with Reminders is a task management application built using React", link: "https://github.com/Sridhar-gi/todo-project" },
  ];

  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p style={{ color: "white"}}>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
