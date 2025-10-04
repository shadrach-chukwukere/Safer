import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { MailOpen, Contact } from "lucide-react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { toast } from "sonner";

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 10 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 15 },
  },
};

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Messaged successfully!")
      console.log("Form submitted:", form);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.div
      className="py-20 px-4 lg:mx-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid lg:grid-cols-2 lg:gap-32 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          className="w-full order-1 lg:order-2"
          variants={sectionVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-6 mx-auto h-full">
            <motion.h2
              className="text-[25px] font-medium text-[#0D013F] lg:hidden"
              variants={sectionVariants}
            >
              Have an inquiry or complaint? Contact Us
            </motion.h2>

            <motion.div variants={sectionVariants}>
              <Input
                name="name"
                placeholder="Your name"
                type="text"
                value={form.name}
                readOnly={loading}
                onChange={handleChange}
                error={errors.name}
                className="rounded-[15px] h-[50px] text-md"
              />
            </motion.div>

            <motion.div variants={sectionVariants}>
              <Input
                name="email"
                placeholder="Your email"
                type="email"
                value={form.email}
                readOnly={loading}
                onChange={handleChange}
                error={errors.email}
                className="rounded-[15px] h-[50px] text-md"
              />
            </motion.div>

            <motion.div variants={sectionVariants}>
              <TextArea
                name="message"
                placeholder="Your message"
                rows={6}
                readOnly={loading}
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                className="rounded-[15px] h-[180px] text-md"
              />
            </motion.div>

            <motion.div variants={sectionVariants}>
              <Button
                type="submit"
                label={loading ? "Sending..." : "Send Message"}
                disabled={loading}
                className={`w-full font-medium rounded-xl hover:scale-[1] py-4 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
              />
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-5 text-center lg:text-left mx-auto order-2 lg:order-1 py-6"
          variants={sectionVariants}
        >
          <motion.h2
            className="text-[30px] font-medium text-[#0D013F] hidden lg:block"
            variants={sectionVariants}
          >
            Have an inquiry or complaint? Contact Us
          </motion.h2>

          <motion.div className="space-y-4">
            <motion.div
              className="flex gap-4 justify-center lg:justify-start text-[18px] items-center bg-[#F9F9F9] py-7 rounded-[10px] px-7 shadow-[0_1px_1px_rgba(0,0,0,0.08)]"
              variants={cardVariants}
            >
              <MailOpen color="black" size={27} /> support@smartsafer.xyz
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start text-[18px] items-center bg-[#F9F9F9] py-7 rounded-[10px] px-7 shadow-[0_1px_1px_rgba(0,0,0,0.08)]"
              variants={cardVariants}
            >
              <Contact color="black" size={27} /> +234 70 62466 015
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start text-[18px] items-center bg-[#F9F9F9] py-7 rounded-[10px] px-7 shadow-[0_1px_1px_rgba(0,0,0,0.08)]"
              variants={cardVariants}
            >
              <FaLocationCrosshairs color="black" size={27} /> Lekki, Lagos,
              Nigeria
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
