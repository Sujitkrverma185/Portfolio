import { useState } from "react";
import GroupButton from './Helpper.jsx';

// Example project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    type: "major",
    description: "A personal portfolio built with React.",
    link: "/home",
    image: "/projects/portfolio.png", // Place your image in public/projects/
  },
  {
    id: 2,
    title: "Weather App",
    type: "mini",
    description: "A simple weather app using an API.",
    link: "https://your-weather-app-link.com",
    image: "/projects/weather.png",
  },
  {
    id: 3,
    title: "E-commerce Site",
    type: "major",
    description: "A full-featured e-commerce platform.",
    link: "https://wanderlust-demo-project.onrender.com/listings",
    image: "/projects/wanderlust.png",
  },
  {
    id: 4,
    title: "Todo List",
    type: "mini",
    description: "A basic todo list app.",
    link: "https://todo-list-link.com",
    image: "/projects/todolist.png",
  },
  {
    id: 5,
    title: "User Enquiry Form",
    type: "mini",
    description: "A form for users to submit enquiries.",
    link: "https://user-enquiry-form-link.com",
    image: "/projects/user.png",
  },
  // Add more projects as needed
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  // Filter projects based on selected type
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <div id="portfolio" className="bg-slate-950 min-h-screen py-0 px-0 text-slate-50">
      {/* Banner */}
      <div className="relative h-64 w-full flex items-center justify-center" style={{ backgroundImage: "url('/projects/banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-slate-950/80" ></div>
        <div className="relative z-10 border-2 border-slate-700 bg-slate-950/80 backdrop-blur px-16 py-4 rounded-full">
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.35em] text-center uppercase">
            Portfolio
          </h1>
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="flex justify-center bg-slate-950 py-6">
        <GroupButton setFilter={setFilter} />
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto bg-slate-950 px-4 pb-12">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl shadow-slate-950/80 hover:shadow-indigo-500/40 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">
              <h2 className="text-white text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-200 text-sm mb-2 px-4 text-center">{project.description}</p>
              <span className="inline-block mt-2 px-3 py-1 text-xs bg-white bg-opacity-80 text-black rounded">{project.type.toUpperCase()} PROJECT</span>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center text-slate-300 py-6 text-lg font-semibold">
        And many more to come!
      </div>
    </div>
  );
}