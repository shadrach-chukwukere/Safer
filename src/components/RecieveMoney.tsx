import { motion, type Variants } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import image1 from "../assets/image 594 (2).png";
import image2 from "../assets/image 581.png";
import image3 from "../assets/image 554.png";
import image4 from "../assets/image 595.png";
import image5 from "../assets/image 597.png";
import image6 from "../assets/image 596.png";
import image7 from "../assets/image 598.png";

const sectionContainerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const centerImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.1 },
  },
};

const logoItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

export default function ReceiveMoney() {
  const leftLogos = [image2, image3, image4];
  const rightLogos = [image5, image6, image7];

  return (
    <div className="flex justify-center pt-10 sm:px-4 font-Inter">
      <motion.div
        className="lg:border shadow-sm w-full lg:mx-12 py-10 lg:pb-0 sm:rounded-[20px] overflow-hidden bg-[#6C7AF5]/20 lg:bg-gradient-to-tr lg:from-white lg:to-[#6C7AF5]/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionContainerVariants}
      >
        <div className="space-y-4 p-6 mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-[#0D013F] text-[20px] font-bold md:text-3xl lg:text-4xl"
            variants={textItemVariants}
          >
            Receive money globally, get dedicated foreign virtual accounts.
          </motion.h2>
          <motion.p
            className="text-[15px] md:text-[27px] font-medium max-w-xl mx-auto"
            variants={textItemVariants}
          >
            Get a dedicated US, UK, Ghana etc. virtual account to receive
            foreign payments.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:items-end gap-6">
          {/* Left Logos (Desktop) */}
          <motion.div
            className="hidden lg:flex flex-row gap-5 pb-12"
            variants={sectionContainerVariants}
          >
            {leftLogos.map((img, i) => (
              <motion.div key={i} variants={logoItemVariants}>
                <LazyLoadImage
                  src={img}
                  alt={`Bank ${i + 1}`}
                  className="w-[70px] object-contain rounded-[47px]"
                  effect="blur"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="px-16 sm:px-32 md:px-64 lg:px-32 lg:-mb-[150px] flex justify-center"
            variants={centerImageVariants}
          >
            <LazyLoadImage
              src={image1}
              alt="Receive Money"
              className="lg:max-w-[350px] w-full object-contain"
              effect="blur"
              visibleByDefault={window.innerWidth >= 1024} // ✅ ensures desktop image loads immediately
              placeholderSrc={image1} // optional: avoids flicker
            />
          </motion.div>

          {/* Right Logos (Desktop) */}
          <motion.div
            className="hidden lg:flex flex-row gap-5 pb-12"
            variants={sectionContainerVariants}
          >
            {rightLogos.map((img, i) => (
              <motion.div key={i} variants={logoItemVariants}>
                <LazyLoadImage
                  src={img}
                  alt={`Bank ${i + 4}`}
                  className="w-[70px] object-contain rounded-[47px]"
                  effect="blur"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* All Logos (Mobile) */}
          <motion.div
            className="flex lg:hidden flex-wrap justify-center gap-4 mt-6"
            variants={sectionContainerVariants}
          >
            {[...leftLogos, ...rightLogos].map((img, i) => (
              <motion.div key={i} variants={logoItemVariants}>
                <LazyLoadImage
                  src={img}
                  alt={`Bank ${i + 1}`}
                  className="w-[38px] sm:w-[60px] object-contain rounded-[47px]"
                  effect="blur"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
