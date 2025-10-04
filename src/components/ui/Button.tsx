
type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
  type?: "submit" | any;
};

export default function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#060202] text-white hover:bg-[#1a1a1a] focus:ring-[#060202]",
    secondary: "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`transition duration-200 hover:scale-[1.05] active:scale-[1] ${baseStyles} ${
        variants[variant]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {label}
    </button>
  );
}
