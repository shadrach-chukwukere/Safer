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
    <div className="bg-black text-white py-16 md:py-24 font-Inter min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mx-10 items-start gap-6">
        <motion.div
          className="space-y-8 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          <motion.div variants={textItemVariants} className="space-y-4 sm:pt-7">
            <motion.h1
              className="font-black leading-[1.1] text-center"
              variants={textItemVariants}
            >
              <span className="block text-[42px] sm:text-[60px] lg:text-[80px]">
                Experience Ai
              </span>
              <span className="block text-[28px] sm:text-[40px] lg:text-[55px]">
                powered payments
              </span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-md md:text-[22px] font-semibold max-w-lg mx-auto md:mx-0 text-center leading-8"
              variants={textItemVariants}
            >
              Receive, send, convert, send funds locally, create and make
              purchases with customized USD virtual cards.
            </motion.p>
          </motion.div>

          <motion.div
            className="pt-6 flex justify-center lg:justify-start"
            variants={textItemVariants}
          >
            <GetSaferBtn />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center relative gap-6">
          <motion.div
            className="relative rounded-full md:rounded-[70px] p-[7px] bg-gradient-to-br from-[#011D2E] to-[#630B0B]"
            variants={imageScaleVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="rounded-full md:rounded-[70px] overflow-hidden bg-black">
              <img
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                loading="eager"
                src={image2}
                alt="Top"
                className="w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[170px] md:h-[170px] lg:w-[250px]   object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-36 mt-2 sm:mt-0 sm:top-64 translate-y-4 w-[240px] text-xs font-normal bg-white text-black sm:px-4 sm:py-4 px-4 py-3 rounded-[20px] shadow sm:font-semibold"
            variants={infoBoxVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="font-[inter] hidden sm:block">
              Safer is changing the payment landscape with smart options for
              payment, join safer today....
            </span>
            <span className="font-[inter] sm:hidden block">
              Safer is changing the payment landscape with Ai, join safer
              today.....
            </span>
          </motion.div>

          <div className="flex justify-center gap-6 sm:gap-12 mt-6">
            {[image3, image1].map((img, i) => (
              <motion.div
                key={i}
                className="rounded-full md:rounded-[70px] p-[7px] bg-gradient-to-br from-[#762B2B] to-[#2B0B0B]"
                variants={imageScaleVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="rounded-full md:rounded-[70px] overflow-hidden bg-black">
                  <img
                    onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                    loading="eager"
                    src={img}
                    alt={`Image ${i}`}
                    className="w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[170px] md:h-[170px] lg:w-[250px] lg:h-[250px] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
