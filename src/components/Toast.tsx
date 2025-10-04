import { Toaster } from "sonner";

export function Toast() {
  return (
    <Toaster
      expand
      closeButton
      richColors
      position="bottom-right"
      theme="system" // auto switch light/dark
      duration={4000} // 4 seconds
      toastOptions={{
        classNames: {
          toast: "shadow-lg rounded-lg border border-gray-200 dark:border-gray-700",
          title: "font-semibold",
          description: "text-sm text-gray-600 dark:text-gray-300",
        },
      }}
      className="transition-all duration-300 ease-in-out"
    />
  );
}
