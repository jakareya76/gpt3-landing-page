const Feature = ({ title, text, dir, textColor }) => {
  return (
    <div
      className={`w-full flex justify-between items-start flex-col md:${dir} m-[1rem]`}
    >
      <div className="flex-1 max-w-[150px] mr-[2rem]">
        <div className="w-[38px] h-[3px] bg-gradient-to-r from-[red] to-[orange] mb-1" />
        <h1 className="text-[18px] font-bold leading-[24px] text-gray-200 my-2">
          {title}
        </h1>
      </div>
      <div className=" flex-[2] flex">
        <p className={`text-blue-100 ${textColor} text-sm`}>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
