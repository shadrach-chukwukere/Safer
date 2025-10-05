import { motion, type Variants } from "framer-motion";
import GetSaferBtn from "./ui/GetSaferBtn";
import image1 from "../assets/ChatGPT Image Oct 1, 2025, 06_35_21 PM 1.png";
import image2 from "../assets/image 27.png";
import image3 from "../assets/image 33.png";

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const imageScaleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, stiffness: 260, damping: 20 },
  },
};

const infoBoxVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween" as const, duration: 0.5, delay: 0.5 },
  },
};

export default function Hero() {
  return (
    <div className="bg-black text-white py-16 md:py-32 min-h-screen font-Inter">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mx-10 items-center gap-12">
        <motion.div
          className="space-y-4 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          <motion.h1
            className="font-extrabold leading-[1.1]"
            variants={textItemVariants}
          >
            <span className="block text-[42px] sm:text-[50px] lg:text-[75px]">
              Experience Ai
            </span>
            <span className="block text-[28px] sm:text-[40px] lg:text-[50px]">
              powered payments
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-md md:text-lg font-semibold max-w-lg mx-auto md:mx-0"
            variants={textItemVariants}
          >
            Receive, send, convert, send funds locally, create and make
            purchases with customized USD virtual cards.
          </motion.p>

          <motion.div
            className="pt-6 flex justify-center md:justify-start"
            variants={textItemVariants}
          >
            <GetSaferBtn />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center relative sm:gap-2 gap-4 relative">
          <motion.div
            className="relative rounded-full md:rounded-[40px] p-[7px] sm:p-[5px] bg-gradient-to-br from-[#011D2E] to-[#630B0B]"
            variants={imageScaleVariants}
            style={{ placeItems: "center" }}
            initial="hidden"
            animate="visible"
          >
            <div className="rounded-full md:rounded-[40px] overflow-hidden bg-black relative">
              <img
                src={image2}
                alt="Top"
                className="w-[154px] min-w-[120px] sm:min-w-[154px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute sm:top-36 py-3 px-4 sm:translate-y-24 -translate-y-12 top-36 -translate-x-1/2 w-[205px] text-xs font-semibold bg-white text-black px-3 py-1 rounded-[20px] shadow"
            variants={infoBoxVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="line-clamp-3 font-[inter]">
              Safer is changing the payment landscape with smart options for
              payment, join safer today..
            </span>
          </motion.div>

          <div className="flex justify-center gap-4 sm:gap-8 mt-6">
            <motion.div
              className="rounded-full md:rounded-[40px] p-[7px] sm:p-[5px] bg-gradient-to-br from-[#762B2B] to-[#2B0B0B]"
              variants={imageScaleVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="rounded-full md:rounded-[40px] overflow-hidden bg-black">
                <img
                  src={image3}
                  alt="Bottom Left"
                  className="w-[154px] min-w-[120px] sm:min-w-[154px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="rounded-full md:rounded-[40px] p-[7px] sm:p-[5px] bg-gradient-to-br from-[#762B2B] to-[#2B0B0B]"
              variants={imageScaleVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="rounded-full md:rounded-[40px] overflow-hidden bg-black">
                <img
                  src={image1}
                  alt="Bottom Right"
                  className="w-[154px] min-w-[120px] sm:min-w-[154px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
