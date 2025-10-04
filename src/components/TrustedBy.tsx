import { motion, type Variants } from "framer-motion";
import image1 from "../assets/image 600.png";
import image2 from "../assets/bi_phone-landscape-fill.png";
import image2b from "../assets/Ellipse 201.png";
import image3 from "../assets/image 601 (2).png";
import image4 from "../assets/image 599.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 12 },
  },
};

export default function TrustedBy() {
  return (
    <div className="py-20 space-y-12 px-2 font-Inter">
      <motion.div
        className="text-[#0D013F] font-semibold text-[25px] text-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Trusted By
      </motion.div>

      <motion.div
        className="flex justify-center items-center gap-6 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="w-[150px] h-[75px] hover:scale-[1.1] transition flex justify-center items-center border border-[#034EA2] border-1 rounded-[20px]"
          variants={cardVariants}
        >
          <div className="text-center">
            <img src={image3} alt="Paypal" className="w-full max-w-[40px]" />
            <p className="text-[#034896] text-base">Paypal</p>
          </div>
        </motion.div>

        <motion.div
          className="w-[150px] h-[75px] hover:scale-[1.1] transition flex justify-center items-center border border-[#034EA2] border-1 rounded-[20px]"
          variants={cardVariants}
        >
          <div className="relative text-center">
            <p className="text-sm text-white absolute w-full text-center top-3">
              Safehaven Mfb.
            </p>
            <img
              src={image4}
              alt="Safehaven Mfb."
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-[150px] h-[75px] hover:scale-[1.1] transition flex justify-center items-center border border-[#034EA2] border-1 rounded-[20px]"
          variants={cardVariants}
        >
          <div className="relative flex justify-center items-center">
            <img src={image2b} alt="Bridge overlay" className="absolute mt-4" />
            <img src={image2} alt="Bridge" />
          </div>
          <div className="text-base">Bridge</div>
        </motion.div>

        <motion.div
          className="w-[150px] h-[75px] hover:scale-[1.1] transition flex justify-center items-center border border-[#034EA2] border-1 rounded-[20px]"
          variants={cardVariants}
        >
          <img src={image1} alt="Generic" />
        </motion.div>
      </motion.div>
    </div>
  );
}
