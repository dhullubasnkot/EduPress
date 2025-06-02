const feedbacks = [
  {
    id: 1,
    name: "Roe Smith",
    title: "Designer",
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
  },
  {
    id: 2,
    name: "Alex Johnson",
    title: "Frontend Developer",
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
  },
  {
    id: 3,
    name: "Emily Davis",
    title: "UI/UX Designer",
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Full Stack Developer",
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
  },
];

export default function StudentFeedback() {
  return (
    <div className="flex justify-center items-center bg-white py-[60px] px-4">
      <div className="w-[1290px] max-w-full">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-bold text-black">
            Student Feedbacks
          </h2>
          <p className="text-[18px] text-gray-500 mt-2">
            What Students Say About Academy LMS
          </p>
        </div>

        <div className=" h-[407.8px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
          {feedbacks.map(({ id, name, title, feedback }) => (
            <div
              key={id}
              className="border border-gray-200 rounded-[20px] p-[24px] bg-white shadow-sm gap-[30px] py-10"
            >
              <p className="text-[90px] text-gray-300">“</p>
              <p className="text-[18px] text-black mb-6 leading-[1.2]">
                {feedback}
              </p>
              <div className="mt-auto">
                <p className="text-[20px] font-semibold text-black">{name}</p>
                <p className="text-[18px] text-gray-400">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
