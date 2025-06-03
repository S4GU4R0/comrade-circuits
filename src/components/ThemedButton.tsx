import React from "react";

interface ThemedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "blue" | "red" | "green" | "yellow" | "purple"; // Extend as needed
}

const colorMap = {
  blue: {
    bg: "bg-blue-500",
    border: "border-blue-400",
    shadow: "[box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]",
    shadowActive: "active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]",
  },
  red: {
    bg: "bg-red-500",
    border: "border-red-400",
    shadow: "[box-shadow:0_8px_0_0_#e02424,0_13px_0_0_#e0242480]",
    shadowActive: "active:[box-shadow:0_0px_0_0_#e02424,0_0px_0_0_#e0242480]",
  },
  green: {
    bg: "bg-green-500",
    border: "border-green-400",
    shadow: "[box-shadow:0_8px_0_0_#059669,0_13px_0_0_#05966941]",
    shadowActive: "active:[box-shadow:0_0px_0_0_#059669,0_0px_0_0_#05966941]",
  },
  yellow: {
    bg: "bg-yellow-400",
    border: "border-yellow-300",
    shadow: "[box-shadow:0_8px_0_0_#facc15,0_13px_0_0_#facc1541]",
    shadowActive: "active:[box-shadow:0_0px_0_0_#facc15,0_0px_0_0_#facc1541]",
  },
  purple: {
    bg: "bg-purple-500",
    border: "border-purple-400",
    shadow: "[box-shadow:0_8px_0_0_#a21caf,0_13px_0_0_#a21caf41]",
    shadowActive: "active:[box-shadow:0_0px_0_0_#a21caf,0_0px_0_0_#a21caf41]",
  },
};

export const ThemedButton: React.FC<ThemedButtonProps> = ({
  color = "blue",
  className = "",
  children,
  ...props
}) => {
  const colorClasses = colorMap[color];
  return (
    <button
      className={`mr-2 cursor-pointer border-[1px] px-4 py-2 transition-all duration-150 select-none active:translate-y-2 active:border-b-[0px] ${colorClasses.bg} ${colorClasses.border} ${colorClasses.shadow} ${colorClasses.shadowActive} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ThemedButton;
