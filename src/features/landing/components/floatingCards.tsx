import React from "react"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        absolute
        bg-white
        rounded-2xl
        shadow-xl
        border border-gray-200
        p-4
        ${className}
      `}
    >
      {children}
    </div>
  )
}

interface NoteStackProps {
  className?: string;
}

export const NoteStack: React.FC<NoteStackProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`
        absolute
        w-40
        h-40
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-yellow-100 rounded-md shadow-md -rotate-6"></div>
      <div className="absolute inset-0 bg-yellow-200 rounded-md shadow-md rotate-[4deg]"></div>
      <div className="absolute inset-0 bg-yellow-300 rounded-md shadow-lg p-3 flex items-start">
        <p className="text-gray-800 text-xs leading-snug font-medium font-[Cedarville_Cursive] overflow-hidden">
          Take notes to keep track of crucial details and accomplish tasks
          with ease.
        </p>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-xl p-2 shadow-xl">
        <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center text-white text-sm font-bold">
          ✓
        </div>
      </div>
    </div>
  );
};

interface TasksCardProps {
  className?: string;
}

export const TasksCard: React.FC<TasksCardProps> = ({ className = "" }) => {
  return (
    <div
      className={`
        absolute
        w-80
        bg-white
        rounded-2xl
        shadow-xl
        border border-gray-200
        p-5
        ${className}
      `}
    >
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800 mb-4">
        Today’s tasks
      </h3>

      {/* Task 1 */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-orange-500 text-white text-xs flex items-center justify-center">
              8
            </span>
            <span className="text-gray-700">
              New ideas for campaign
            </span>
          </div>

          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>Sep 10</span>
          <span>50%</span>
        </div>

        <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
          <div className="w-2/4 h-full bg-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Task 2 */}
      <div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-green-500 text-white text-xs flex items-center justify-center">
              3
            </span>
            <span className="text-gray-700">
              Design PPT #4
            </span>
          </div>

          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
          <span>Sep 18</span>
          <span>80%</span>
        </div>

        <div className="h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
          <div className="w-4/5 h-full bg-linear-to-r from-cyan-500 to-red-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};


interface CreateProjectCardProps {
  className?: string;
}

export const CreateProjectCard: React.FC<CreateProjectCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`
        absolute
        w-72
        bg-white
        rounded-2xl
        shadow-xl
        border border-gray-200
        p-5
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-800">
          Create new project
        </h3>

        <button className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
          +
        </button>
      </div>

      {/* Input */}
      <div className="mb-3">
        <div className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-400">
          Project name...
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
          Design
        </span>
        <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
          Marketing
        </span>
        <span className="text-xs px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
          Development
        </span>
      </div>

      {/* Button */}
      <button className="w-full bg-black text-white text-sm py-2 rounded-lg hover:opacity-90 transition">
        Create Project
      </button>
    </div>
  );
};

