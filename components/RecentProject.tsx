"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    /* 1. FULL-WIDTH SHELL: 
       We use 'w-full' and remove 'px-4' from here so the background 
       and top border hit the very edges of the screen.
    */
    <section className="w-full py-20 bg-background border-t border-border/30" id="projects">
   
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="heading text-foreground whitespace-nowrap">
            Selected <span className="text-primary">Projects</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl md:tracking-wider text-muted-foreground font-kaushan max-w-2xl mx-auto text-center">
            Curated projects showcasing my skills and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center justify-center">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:purple-glow"
            >
              {/* Image Container with Obsidian Fade Overlay */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-muted-foreground text-sm md:text-base line-clamp-2 mb-8 leading-relaxed">
                  {item.des}
                </p>

                {/* Footer: Tech Stack & Live Link */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-border rounded-full bg-secondary/50 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center backdrop-blur-sm shadow-sm"
                        style={{
                          transform: `translateX(-${8 * index}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium border border-primary/20"
                  >
                    Live Demo
                    <FaLocationArrow className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Archive Button */}
        <div className="text-center mt-20">
          <Link
            href="https://github.com/Harsh-Pathak3601?tab=repositories"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-transparent border border-primary/30 text-foreground font-semibold hover:from-primary/20 transition-all group hover:text-primary"
          >
            Explore Full Archive
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;