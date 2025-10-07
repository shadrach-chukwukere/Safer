import { useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function GetSaferBtn() {
  const [, setStore] = useState<"google" | "apple">("google");
  const [open, setOpen] = useState(false);

  const stores = [
    { id: "google", label: "Google Play", icon: <FaGooglePlay size={23} /> },
    { id: "apple", label: "Apple Store", icon: <FaApple size={27} /> },
  ];

  const handleSelect = (choice: "google" | "apple") => {
    setStore(choice);
    setOpen(false);
    // Optional: open store URL
    // window.open(choice === "google" ? "https://play.google.com/store" : "https://www.apple.com/app-store/", "_blank");
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scaleY: 0.9,
      originY: 0,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      originY: 0,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -10,
      scaleY: 0.9,
      originY: 0,
      transition: { duration: 0.15 },
    },
  };

  function getDeviceOS(): "Android" | "IOS" | "Other" {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("android")) return "Android";
    if (/iphone|ipad|ipod/.test(userAgent)) return "IOS";

    return "Other";
  }

  return (
    <div className="relative w-full max-w-[250px]">
      {/* Main Button */}
      <Link
        to={
          getDeviceOS() == "Android" ? "/" : getDeviceOS() == "IOS" ? "/" : ""
        }
      >
        <div
          role="button"
          onClick={() => getDeviceOS() == "Other" && setOpen(!open)}
          className="bg-white font-Inter transition duration-200 active:scale-[0.94] flex items-center justify-center gap-4 py-3 px-4 font-bold text-xl w-full max-w-[300px] text-black rounded-full cursor-pointer"
        >
          <span className="text-center">Get Safer</span>
          <FaGooglePlay size={23} />
          <FaApple size={27} />
        </div>
      </Link>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full mt-2 w-full rounded-md z-10 bg-black shadow-lg overflow-hidden shadow-[0_4px_8px_0_rgba(255,255,255,0.2)]"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {stores.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSelect(s.id as "google" | "apple")}
                className="flex items-center gap-2 px-4 py-2 w-full hover:bg-white hover:text-black text-white transition-colors"
              >
                {s.icon} {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
