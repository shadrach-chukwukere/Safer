import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function GetSaferBtn() {
  return (
    <div
      role="button"
      className="bg-white font-Inter transition duration-200 active:scale-[0.94] flex items-center justify-center gap-4 py-3 px-4 font-bold text-xl w-full max-w-[250px] text-black rounded-full cursor-pointer"
    >
      <span className="text-center">Get Safer</span>
      <FaGooglePlay size={23} />
      <FaApple size={27} />
    </div>
  );
}
