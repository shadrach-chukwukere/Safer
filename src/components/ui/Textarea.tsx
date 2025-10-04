import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export default function TextArea({
  label,
  error,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <div className="w-full space-y-2">
      {/* Label */}
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      {/* TextArea */}
      <textarea
        {...props}
        className={`w-full px-4 py-3 text-base rounded-lg border-[1px] transition-all 
          placeholder:text-gray-600
          focus:outline-none focus:ring-1 focus:ring-black
          ${error ? "border-red-500 focus:ring-red-400" : "border-black"}
          ${props.disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
          ${className}
        `}
      />

      {/* Error Message */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
