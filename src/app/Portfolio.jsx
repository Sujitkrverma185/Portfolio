import { useState } from "react";
import GroupButton from "./Helpper.jsx";

// Example project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    type: "major",
    description: "A personal portfolio built with React and Tailwind CSS.",
    link: "#home",
    image: "/projects/portfolio.png",
  },
  {
    id: 2,
    title: "Weather App",
    type: "mini",
    description: "A simple weather forecast app utilizing real-time API data.",
    link: "https://your-weather-app-link.com",
    image: "/projects/weather.png",
  },
  {
    id: 3,
    title: "E-commerce Site",
    type: "major",
    description: "A full-featured e-commerce platform with listing capabilities.",
    link: "https://wanderlust-demo-project.onrender.com/listings",
    image: "/projects/wanderlust.png",
  },
  {
    id: 4,
    title: "Todo List",
    type: "mini",
    description: "A simple, clean todo list app to manage daily activities.",
    link: "https://todo-list-link.com",
    image: "/projects/todolist.png",
  },
  {
    id: 5,
    title: "User Enquiry Form",
    type: "mini",
    description: "An interactive form for users to submit structured business enquiries.",
    link: "https://user-enquiry-form-link.com",
    image: "/projects/user.png",
  },
  {
    id: 6,
    title: "StorioCart",
    type: "major",
    description: "StorioCart is a modern, feature-rich e-commerce web application designed to deliver a seamless and interactive online shopping experience. Built using a robust tech stack of Next.js/React, Tailwind CSS, Node.js, and MongoDB/PostgreSQL,",
    link: "https://gocart-main-j9qu.vercel.app",
    image: "/projects/StorioCart.png",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <div
      id="portfolio"
      className="bg-slate-50 dark:bg-slate-950 min-h-screen py-0 px-0 text-slate-800 dark:text-slate-50 transition-colors duration-300"
    >
      {/* Banner */}
      <div
        className="relative h-72 w-full flex items-center justify-center bg-slate-900"
        style={{
          backgroundImage: "url('/projects/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 transition-colors duration-300"></div>
        <div className="relative z-10 border-2 border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/85 backdrop-blur px-16 py-4 rounded-full shadow-lg">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-[0.35em] text-center uppercase text-slate-800 dark:text-slate-100">
            Portfolio
          </h1>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center bg-slate-50 dark:bg-slate-950 py-8 transition-colors duration-300">
        <GroupButton setFilter={setFilter} />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto bg-slate-50 dark:bg-slate-950 px-6 pb-16 transition-colors duration-300">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-850 hover:border-indigo-500/50 dark:hover:border-indigo-500/30 transition-all duration-500"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Mask Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

            {/* Sliding Text Block */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[0.6rem] font-extrabold tracking-[0.2em] text-indigo-400 dark:text-indigo-300 uppercase mb-1">
                {project.type} Project
              </span>
              <h2 className="text-white text-lg font-bold tracking-wide mb-1">
                {project.title}
              </h2>
              <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                {project.description}
              </p>

              {/* View Action Link */}
              <div className="mt-3 flex items-center text-xs font-bold text-white/90 group-hover:text-indigo-300 transition-colors gap-1.5 opacity-0 group-hover:opacity-100 duration-500">
                View Project
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center text-slate-400 dark:text-slate-500 py-8 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
        And many more to come!
      </div>
    </div>
  );
}