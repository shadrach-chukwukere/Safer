import { motion, type Variants } from "framer-motion";
import image from "../assets/Untitled_design-removebg-preview.png";
import image1 from "../assets/inverted_image.jpg";
import GetSaferBtn from "./ui/GetSaferBtn";

// --- Framer Motion Variants ---
const sectionContainerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.2
    } 
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Download() {
  return (
    <motion.div 
      className="relative sm:rounded-3xl overflow-hidden text-white bg-black"
      variants={sectionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 bg-black/60 sm:rounded-3xl">
        <div className="container mx-auto px-6 lg:px-24 pt-16 grid md:grid-cols-2 items-center gap-12">
          
          {/* Text + Button */}
          <motion.div className="text-center space-y-6 flex flex-col items-center">
            <motion.h2 
              className="text-3xl font-bold"
              variants={textVariants}
            >
              Download Safer
            </motion.h2>
            <motion.div 
              className="w-full flex justify-center"
              variants={buttonVariants}
            >
              <GetSaferBtn />
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="flex justify-center md:justify-end items-end"
            variants={imageVariants}
          >
            <img
              src={image}
              alt="iPhone 12 Product Red"
              className="w-[350px] rounded-lg"
            />
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
