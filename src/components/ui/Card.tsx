export const Card = (image: string, note: string, count: string | number):any => {
  return (
    <div className="bg-[#080707] text-white py-8 px-6 space-y-3 rounded-3xl">
      <div className="text-xl font-semibold max-w-[150px]">{note}</div>
      <div className="">
        <div className="w-full flex justify-end">
          <img src={image} alt={note} className="max-w-[175px]" />
        </div>
        <div className="text-[50px] px-6 text-white/25">{count}</div>
      </div>
    </div>
  );
};
