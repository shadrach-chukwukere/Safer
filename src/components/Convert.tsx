import { motion, type Variants } from "framer-motion";
import image from "../assets/25888208136.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween" as const, duration: 0.6, ease: "easeOut" },
  },
};

export default function Convert() {
  return (
    <div
      className="py-6 md:py-8 lg:mx-10 md:mx-8 font-Inter"
      style={{ placeItems: "center" }}
    >
      <motion.div
        className="grid grid-cols-2 sm:bg-[#D3D9EB1F] bg-[#3D656E] w-full sm:rounded-[20px] items-center px-4 sm:px-6 sm:py-16 py-10 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="font-extrabold text-xl sm:text-[40px] lg:text-[50px] leading-tight max-w-lg"
          variants={textVariants}
        >
          <span className="sm:text-black text-white">
            Easily convert from one currency to another with zero charges.
          </span>
        </motion.div>

        <motion.div className="flex justify-center" variants={imageVariants}>
          <img
            src={image}
            alt="image currency"
            className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] object-contain smooth-scale"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
