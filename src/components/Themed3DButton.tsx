import React from "react";

export type Themed3DButtonColor =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "error";

interface Themed3DButtonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Themed3DButtonColor;
  className?: string;
  as?: "button";
}

interface Themed3DButtonAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: Themed3DButtonColor;
  className?: string;
  as: "a";
  href: string;
}

type Themed3DButtonProps =
  | Themed3DButtonButtonProps
  | Themed3DButtonAnchorProps;

// Hand-picked theme color shades for 3D effect
const colorMap: Record<
  Themed3DButtonColor,
  {
    bg: string;
    border: string;
    shadow: string;
    shadowActive: string;
  }
> = {
  primary: {
    bg: "bg-[#d03726]", // main
    border: "border-[#e05c4a]", // lighter
    shadow: "[box-shadow:0_8px_0_0_#a82a1a,0_13px_0_0_#a82a1a41]", // darker + alpha
    shadowActive: "active:[box-shadow:0_0px_0_0_#a82a1a,0_0px_0_0_#a82a1a41]",
  },
  secondary: {
    bg: "bg-[#f0a33a]", // main
    border: "border-[#ffd285]", // lighter
    shadow: "[box-shadow:0_8px_0_0_#b97a1a,0_13px_0_0_#b97a1a41]", // darker + alpha
    shadowActive: "active:[box-shadow:0_0px_0_0_#b97a1a,0_0px_0_0_#b97a1a41]",
  },
  accent: {
    bg: "bg-[#f0a33a]", // main
    border: "border-[#ffd285]", // lighter
    shadow: "[box-shadow:0_8px_0_0_#b97a1a,0_13px_0_0_#b97a1a41]", // darker + alpha
    shadowActive: "active:[box-shadow:0_0px_0_0_#b97a1a,0_0px_0_0_#b97a1a41]",
  },
  neutral: {
    bg: "bg-[#e1d1b5]", // main
    border: "border-[#fff6e5]", // lighter
    shadow: "[box-shadow:0_8px_0_0_#b5a47d,0_13px_0_0_#b5a47d41]", // darker + alpha
    shadowActive: "active:[box-shadow:0_0px_0_0_#b5a47d,0_0px_0_0_#b5a47d41]",
  },
  error: {
    bg: "bg-[#b91c1c]", // main
    border: "border-[#f87171]", // lighter
    shadow: "[box-shadow:0_8px_0_0_#7f1d1d,0_13px_0_0_#7f1d1d41]", // darker + alpha
    shadowActive: "active:[box-shadow:0_0px_0_0_#7f1d1d,0_0px_0_0_#7f1d1d41]",
  },
};

export const Themed3DButton = (props: Themed3DButtonProps) => {
  const { color = "primary", className = "" } = props;
  const colorClasses = colorMap[color];

  if (props.as === "a" && "href" in props) {
    // Only pass anchor-appropriate props
    const { as, color, className, ...anchorProps } = props;
    return (
      <a
        {...anchorProps}
        className={`mr-2 cursor-pointer border-[1px] px-4 py-2 transition-all duration-150 select-none active:translate-y-2 active:border-b-[0px] ${colorClasses.bg} ${colorClasses.border} ${colorClasses.shadow} ${colorClasses.shadowActive} ${className}`}
      >
        {props.children}
      </a>
    );
  }
  // Only pass button-appropriate props
  const {
    as,
    color: _color,
    className: _className,
    ...buttonProps
  } = props as Themed3DButtonButtonProps;
  return (
    <button
      {...buttonProps}
      className={`mr-2 cursor-pointer border-[1px] px-4 py-2 transition-all duration-150 select-none active:translate-y-2 active:border-b-[0px] ${colorClasses.bg} ${colorClasses.border} ${colorClasses.shadow} ${colorClasses.shadowActive} ${className}`}
    >
      {props.children}
    </button>
  );
};

export default Themed3DButton;
