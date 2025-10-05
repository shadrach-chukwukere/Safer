import image1 from "../assets/image 755.png";
import image2 from "../assets/image_592-removebg-preview.png";
import image3 from "../assets/image 593.png";
import image4 from "../assets/Vector.png";
import image5 from "../assets/iPad_Air__2022_-removebg-preview-removebg-preview-removebg-preview.png";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageVariants: any = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 10 },
  },
};

export default function JoinSafer() {
  return (
    <div className="px-4 sm:px-0 pt-8 sm:pt-12 space-y-14 mx-3 lg:mx-16 font-Inter">
      {/* First Section */}
      <motion.div
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 justify-items-center items-center gap-10">
          {/* Image */}
          <motion.div
            className="bg-[#F6F8FA] rounded-[80px] w-full flex justify-center max-h-[800px] py-10 overflow-hidden"
            variants={imageVariants}
          >
            <LazyLoadImage
              src={image5}
              alt="iPad Air Preview"
              className="object-contain w-[250px] sm:w-auto max-w-sm"
              effect="blur"
            />
          </motion.div>

          {/* Text Block */}
          <div className="space-y-12 text-center md:text-left flex flex-col items-center md:items-start">
            <motion.p
              className="font-medium text-[32px] sm:text-[40px] md:text-[45px] leading-[1.1] font-Righteous"
              variants={itemVariants}
            >
              Different smart options to start a transaction, Snap, scan, upload
            </motion.p>
            <motion.p
              className="font-medium text-[17px] sm:text-[19px] md:text-[22px] max-w-[560px]"
              variants={itemVariants}
            >
              Scan, snap or upload an image with account details to start a
              transaction. AI will analyze your input for faster and stress-free
              transactions.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button label="Join Safer" className="w-[160px]" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Second Section */}
      <div className="grid md:grid-cols-2 gap-12 md:auto-rows-fr justify-center justify-items-center">
        {/* Left Image Box */}
        <motion.div
          className="w-full max-h-[650px] flex justify-center items-end bg-[#48A6BA] lg:bg-[#151313] rounded-[15px] md:rounded-[30px] pt-6 sm:pt-10 px-6 order-2 md:order-1 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        >
          <LazyLoadImage
            src={image1}
            alt="Virtual card preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            effect="blur"
          />
        </motion.div>

        {/* Right Text + Images Box */}
        <motion.div
          className="w-full max-h-[650px] text-white rounded-[15px] md:rounded-[30px] pt-6 sm:pt-10 px-4 md:px-8 flex flex-col justify-between items-center md:items-start text-center md:text-left order-1 md:order-2 overflow-hidden"
          style={{
            background: "linear-gradient(to right top , #0A495A 0% , #1A4077)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight"
            variants={itemVariants}
          >
            Create and manage virtual USD cards, shop globally.
          </motion.div>

          <motion.div
            className="flex justify-center items-start mt-6 relative w-full h-full"
            variants={imageVariants}
          >
            <LazyLoadImage
              src={image4}
              alt="Decor left"
              className="absolute left-0 top-0 w-12 sm:w-16 smooth-up-down"
              effect="blur"
            />
            <LazyLoadImage
              src={image3}
              alt="Decor right"
              className="absolute top-0 right-0 w-20 sm:w-28 rotate-infinite"
              effect="blur"
            />
            <LazyLoadImage
              src={image2}
              alt="USD card preview"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
              effect="blur"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
