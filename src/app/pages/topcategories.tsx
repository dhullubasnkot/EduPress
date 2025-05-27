import {
  BsPaintBucket,
  BsCodeSquare,
  BsCpuFill,
  BsGraphUp,
  BsBrush,
  BsCameraReelsFill,
  BsMusicNoteBeamed,
} from "react-icons/bs";

export default function TopCategories() {
  const categories = [
    {
      name: "Web Development",
      courses: 120,
      icon: <BsCodeSquare className="text-orange-500 text-5xl" />,
    },
    {
      name: "Design",
      courses: 120,
      icon: <BsPaintBucket className="text-orange-500 text-5xl" />,
    },
    {
      name: "Marketing",
      courses: 120,
      icon: <BsPaintBucket className="text-orange-500 text-5xl" />,
    },
    {
      name: "Business",
      courses: 120,
      icon: <BsPaintBucket className="text-orange-500 text-5xl" />,
    },
    {
      name: "Photography",
      courses: 120,
      icon: <BsPaintBucket className="text-orange-500 text-5xl" />,
    },
    {
      name: "Data Science",
      courses: 90,
      icon: <BsGraphUp className="text-orange-500 text-5xl" />,
    },
    {
      name: "AI & Machine Learning",
      courses: 80,
      icon: <BsCpuFill className="text-orange-500 text-5xl" />,
    },
    {
      name: "UI/UX",
      courses: 100,
      icon: <BsBrush className="text-orange-500 text-5xl" />,
    },
    {
      name: "Music Production",
      courses: 75,
      icon: <BsMusicNoteBeamed className="text-orange-500 text-5xl" />,
    },
    {
      name: "Film & Video",
      courses: 60,
      icon: <BsCameraReelsFill className="text-orange-500 text-5xl" />,
    },
  ];

  return (
    <div className="flex flex-col h-auto w-[1290px] mx-auto p-10">
      <div className="flex justify-between items-center mb-10">
        <div className="flex flex-col">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Top Categories
          </h2>
          <p className="text-gray-600 text-lg mt-1">
            Explore our popular categories
          </p>
        </div>

        <button className="border border-orange-500 text-orange-500 rounded-full px-6 py-2 font-medium hover:bg-orange-500 hover:text-white transition">
          All Categories
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group gap-[24px] flex flex-col items-center justify-center h-[232px] w-[232px] rounded-xl bg-white shadow-md border border-gray-200  text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl "
          >
            <div className="mb-4 h-[32px] w-[32px]">{category.icon}</div>
            <h3 className="text-[20px] font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
              {category.name}
            </h3>
            <p className="text-[18px] text-gray-500 mt-1">
              {category.courses} Courses
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
