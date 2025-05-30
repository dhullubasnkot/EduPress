export default function ActiveExport() {
  const Data = [
    {
      id: 1,
      students: "25k",
      title: "Active Students",
    },
    {
      id: 2,
      students: "25k",
      title: "Active Students",
    },
    {
      id: 3,
      students: "25k",
      title: "Active Students",
    },
    {
      id: 4,
      students: "25k",
      title: "Active Students",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-[30px] h-[185px] w-[1290px] px-5">
        {Data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center h-[185px] w-[300px] bg-[#F5F5F5] rounded-[20px] "
          >
            <span className="text-[32px] text-[#FF782D] font-bold">
              {item.students}
            </span>
            <span className="text-[18px]">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
