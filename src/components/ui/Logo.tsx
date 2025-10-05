export default function Logo() {
  return (
    <div className="w-[20px] h-[30px] bg-white rounded-[5px] relative flex items-center justify-center scale-[1.05]">
      {/* Horizontal black bar perfectly centered */}
      <div className="absolute w-[28px] h-[4px] bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Vertical black bar perfectly centered */}
      <div className="absolute w-[7px] h-[18px] bg-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    
  );
}
