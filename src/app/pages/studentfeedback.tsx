export default function StudentFeedBack() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[1290px] h-[534.8px] border-2 border-gray-300">
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-[12px] pt-[32px]">
            <p className="text-[32px] font-bold">Student feedbacks</p>
            <p className="text-[18px] text-gray-400">
              What Students Say About Academy LMS
            </p>
          </div>

          {/* Grid */}
          <div className="w-full h-[412.8px] pt-[40px] px-[20px] grid grid-cols-4 gap-[20px]">
            <div className="h-[300px] w-[280px] border-2"></div>
            <div className="h-[300px] w-[280px] border-2"></div>
            <div className="h-[300px] w-[280px] border-2"></div>
            <div className="h-[300px] w-[280px] border-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
