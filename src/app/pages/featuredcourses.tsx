import Image from "next/image";
import { BiTimer, BiHardHat } from "react-icons/bi";

const courses = [
  {
    id: 1,
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    duration: "2 Weeks",
    students: 156,
    oldPrice: 29.0,
    newPrice: "Free",
    image: "/1.jpg",
    category: "Development",
  },
  {
    id: 2,
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    duration: "2 Weeks",
    students: 156,
    oldPrice: 29.0,
    newPrice: "Free",
    image: "/2.jpg",
    category: "Development",
  },
  {
    id: 3,
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    duration: "2 Weeks",
    students: 156,
    oldPrice: 29.0,
    newPrice: "Free",
    image: "/3.jpg",
    category: "Development",
  },
  {
    id: 4,
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    duration: "2 Weeks",
    students: 156,
    oldPrice: 29.0,
    newPrice: "Free",
    image: "/4.jpg",
    category: "Development",
  },
  {
    id: 5,
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    duration: "2 Weeks",
    students: 156,
    oldPrice: 29.0,
    newPrice: "Free",
    image: "/5.png",
    category: "Development",
  },
  {
    id: 6,
    author: "Determined-Poitras",
    title: "Create an LMS Website with LearnPress",
    duration: "2 Weeks",
    students: 156,
    oldPrice: 29.0,
    newPrice: "Free",
    image: "/6.jpg",
    category: "Development",
  },
];

export default function FeaturedCourses() {
  return (
    <div className="flex justify-center bg-white py-12">
      <div className="w-[1290px]">
        <div className=" px-8 flex justify-between items-center mb-10">
          <div>
            <h2 className="text-[32px] font-bold text-gray-800">
              Featured Courses
            </h2>
            <p className="text-gray-600 mt-1 text-[18px]">
              Explore our Popular Courses
            </p>
          </div>
          <button className=" text-[18px] border border-black text-black rounded-full px-6 py-2 font-medium hover:bg-orange-500 hover:text-white transition duration-300">
            All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="h-[474px] w-[410px]  rounded-xl shadow  transition-all duration-500 transform hover:-translate-y-4 hover:shadow-xl"
            >
              <div className="h-[250px] w-full relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-4 py-2 rounded-full">
                  {course.category}
                </span>
              </div>

              <div className="px-5 pb-5 flex flex-col justify-between h-[224px]">
                <div>
                  <p className="text-[16px] text-gray-500">
                    By {course.author}
                  </p>
                  <h3 className="text-[20px] font-semibold text-gray-800 mt-1">
                    {course.title}
                  </h3>
                </div>

                <div className="flex items-center text-sm text-gray-600 gap-6 mt-4">
                  <div className="flex items-center gap-1">
                    <BiTimer className="text-orange-500 text-[16px]" />
                    <span className="text-[16px]">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BiHardHat className="text-orange-500 text-[16px]" />
                    <span className="text-[16px]">
                      {course.students} students
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-400 pt-3 mt-4 flex justify-between items-center text-sm">
                  <div className="flex gap-2">
                    <p className="line-through text-gray-400 text-[18px]">
                      ${course.oldPrice}
                    </p>
                    <p className="text-[#55BE24] text-[18px]">
                      {course.newPrice}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:underline text-[18px]">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
