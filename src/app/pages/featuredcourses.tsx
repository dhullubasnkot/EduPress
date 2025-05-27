import Image from "next/image";
import { BiTimer, BiHardHat } from "react-icons/bi";
export default function FeaturedCourses() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-[1105px] w-[1290px] border-2">
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-col">
              <h2 className="text-3xl font-extrabold text-gray-800">
                Featured courses
              </h2>
              <p className="text-gray-600 text-lg mt-1">
                Explore our Popular Courses
              </p>
            </div>
            <button className="border border-black text-black rounded-full px-6 py-2 font-medium hover:bg-orange-500 hover:text-white transition">
              All Courses
            </button>
          </div>
          <div className="flex">
            <div className="flex flex-col h-[474px] w-[410px] border-2">
              <div className="h-[250px] w-[410px] border-2 border-amber-200">
                <Image src="" alt=""></Image>
              </div>
              <p>By Sujan Paudel</p>
              <p>Create an LMS Website with LearnPress</p>
              <div className="flex gap-10">
                <BiTimer className="text-orange-500 h-[16px] w-[16px]" />
                2Weeks
                <BiHardHat className="text-orange-500 h[16px] w-[16px]" />
                156 students
              </div>
              <div className="flex border-t-2">
                <div className="flex">
                  <p className="line-through">$29.0</p>
                  <p>Free</p>
                </div>
                <p>View More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
