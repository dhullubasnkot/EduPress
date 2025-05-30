"use client";

import Image from "next/image";
import { BiTimer, BiHardHat } from "react-icons/bi";
import { Card } from "flowbite-react";
import courses from "../coursedata/data";

export default function FeaturedCourses() {
  return (
    <div className="flex justify-center bg-white py-12">
      <div className="w-[1290px]">
        <div className="px-8 flex justify-between items-center mb-10">
          <div>
            <h2 className="text-[32px] font-bold text-gray-800">
              Featured Courses
            </h2>
            <p className="text-gray-600 mt-1 text-[18px]">
              Explore our Popular Courses
            </p>
          </div>
          <button className="text-[18px] border border-black text-black rounded-full px-6 py-2 font-medium hover:bg-orange-500 hover:text-white transition duration-300">
            All Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="h-[474px] w-[410px] transition-all duration-500 transform hover:-translate-y-4 hover:shadow-xl rounded-lg overflow-hidden bg-white border border-gray-200"
            >
              <div className="relative h-[250px] w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-black text-white text-[16px] font-semibold px-4 py-2 rounded-full max-w-[200px]">
                  {course.category}
                </span>
              </div>

              {/* Content section */}
              <div className="p-5">
                <p className="text-[16px] text-gray-500">By {course.author}</p>
                <h5 className="text-xl font-semibold text-gray-800 mt-1">
                  {course.title}
                </h5>

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

                <div className="border-t border-gray-200 pt-3 mt-4 flex justify-between items-center text-sm">
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
