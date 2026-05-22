import React from "react";

type GradientDirection = "right" | "left" | "top" | "bottom";

type GradientButtonProps = {
  innerText: string;
  gradientTo?: GradientDirection;
  className?: string;
  textClassName?: string;
};

const directionMap: Record<GradientDirection, string> = {
  right: "bg-gradient-to-r",
  left: "bg-gradient-to-l",
  top: "bg-gradient-to-t",
  bottom: "bg-gradient-to-b",
};

const GradientThemeButton = ({
  innerText,
  gradientTo = "bottom",
  className = "",
  textClassName = "",
}: GradientButtonProps) => {

  return (
    <button
      className={`
        text-white
        px-4
        py-2
        rounded-lg
        transition-all
        duration-300
        ${directionMap[gradientTo]}
        from-[var(--lime-green)]
        to-[var(--dark-green)]
        ${className}
      `}
    >
      <span className={`relative z-10 ${textClassName}`}>{innerText}</span>
    </button>
  );
};

export { GradientThemeButton };