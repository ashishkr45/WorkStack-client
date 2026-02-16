import React from "react";
import { useNavigate } from "react-router-dom";

interface MatarialButton {
  to?: string;
  className?: string;
  children?: React.ReactNode;
}

export const MatarialButton: React.FC<MatarialButton> = ({
  to = "/signup",
  className = "",
  children = "Get Started",
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4">
      <button
        className={`
          cursor-pointer text-sm px-4 py-2 rounded-xl
          border bg-gray-200 border-gray-400
          transition-all hover:bg-blue-500 hover:text-white
          hover:scale-105 active:translate-y-0 duration-300 ease-in-out
          ${className}
        `}
        onClick={() => navigate(to)}
      >
        {children}
      </button>
    </div>
  );
};

interface PillButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const PillButton: React.FC<PillButtonProps> = ({
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2
        rounded-full
        bg-white
        text-sm text-gray-500
        border border-gray-300
        shadow-[0_4px_10px_rgba(0,0,0,0.08)]
        transition-all duration-200 ease-out
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
        hover:-translate-y-0.5
        active:translate-y-0
        ${className}
      `}
    >
      {label}
    </button>
  );
};

