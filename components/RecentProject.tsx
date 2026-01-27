"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section 
      className="w-full py-20 relative overflow-hidden" 
      id="projects"
      style={{
        background: `radial-gradient(circle at 50% -10%, #130624 0%, #050505 50%, #000000 100%)`
      }}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        <div className="text-center mb-16">
          <h1 className="heading text-foreground whitespace-nowrap">
            Selected <span className="text-primary">Projects</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl md:tracking-wider text-muted-foreground font-kaushan max-w-2xl mx-auto text-center">
            Curated projects showcasing my skills and problem-solving.
          </p>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mt-8 mx-auto opacity-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center justify-center">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/[0.05] bg-white/[0.01] backdrop-blur-xl transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <Link 
                    href={item.github || "https://github.com/Harsh-Pathak3601"} 
                    target="_blank" 
                    className="p-2 rounded-full bg-secondary/20 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                  >
                    <FaGithub size={18} />
                  </Link>
                </div>
                
                <p className="text-muted-foreground text-xs md:text-sm line-clamp-3 mb-8 leading-relaxed italic pl-1">
                  {item.des}
                </p>

                {/* Updated Footer for Mobile Stability */}
                <div className="mt-auto flex items-center justify-between gap-2">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[0.1] rounded-full bg-[#050505] lg:w-10 lg:h-10 w-7 h-7 md:w-8 md:h-8 flex justify-center items-center backdrop-blur-sm shadow-inner"
                        style={{ transform: `translateX(-${5 * index}px)` }}
                      >
                        <img src={icon} alt="icon" className="p-1.5" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    target="_blank"
                    /* whitespace-nowrap: Prevents text wrapping.
                       px-3 py-2 sm:px-6 sm:py-2.5: Adjusts button size for touch targets.
                       text-[10px] sm:text-sm: Scales font size for small screens.
                    */
                    className="flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-[10px] sm:text-sm shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all whitespace-nowrap"
                  >
                    Live Demo
                    <FaLocationArrow className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="https://github.com/Harsh-Pathak3601?tab=repositories"
            target="_blank"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-primary/10"
          >
            <span className="text-sm md:text-base text-foreground font-semibold">Explore Full Archive</span>
            <ArrowUpRight className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;