import React from "react"
import { useNavigate } from "react-router-dom"
import { FloatingCard, NoteStack, TasksCard, CreateProjectCard } from "./floatingCards"

const HeroSection: React.FC = () => {
   const navigate = useNavigate() 
   return (
      <div
        className="
          rounded-3xl
          min-h-168
          bg-white
          bg-[radial-gradient(#e5e7eb_2px,transparent_2px)]
          bg-size-[16px_16px]
          border
          border-gray-300
          overflow-hidden
          mb-12
        "
      >
        <div className="relative flex flex-col items-center text-center px-6 pt-24 pb-32">
            <div className=" bg-slate-50 rounded-3xl flex gap-1 p-6
               shadow-[0_20px_40px_rgba(0,0,0,0.12),0_5px_15px_rgba(0,0,0,0.08)]">
               <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
               <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
               Think, plan, and track
               <br />
               <span className="text-gray-500">
                  all in one place.
               </span>
            </h1>

            <p className="mt-6 text-gray-400 max-w-2xl text-lg">
               WorkStack helps teams streamline workflows, manage projects,
               and collaborate seamlessly — all in one intuitive platform.
            </p>

            <div className="mt-10">
            <button 
               onClick={() => navigate("/signup")}
               className="cursor-pointer px-10 py-4 rounded-xl bg-blue-500 text-white text-sm font-medium transition hover:bg-blue-600/80 hover:scale-105 delay-100 duration-300 ease-in-out"
            >
               Get Started
            </button>
            </div>

            <FloatingCard className="hidden lg:block top-36 -left-4.5 rotate-12 w-64 transition-all duration-500 hover:scale-125 hover:rotate-5">
               <p className="text-sm font-medium mb-2">Project Progress</p>
               <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-black rounded-full"></div>
               </div>
               <p className="text-xs text-gray-500 mt-2">75% Completed</p>
            </FloatingCard>
            <NoteStack className="hidden lg:block bottom-5 right-2 rotate-8 transition-all duration-400 hover:scale-105 hover:rotate-10" />
            <TasksCard className="hidden lg:block -bottom-16 left-12 -rotate-12 transition-all duration-400 hover:scale-105 hover:-rotate-5" />
            <CreateProjectCard className="hidden lg:block -top-1 right-1 -rotate-10 transition-all duration-400 hover:scale-105 hover:-rotate-6" />
         </div>
      </div>
   )
}

export default HeroSection
