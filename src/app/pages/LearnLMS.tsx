import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function LearnLms() {
  return (
    <div className="flex justify-center items-center bg-white py-16">
      <div className="flex flex-col lg:flex-row items-center gap-[125px]  px-4">
        <div className="w-[644px] h-[469px]">
          <Image
            src="/learn.png"
            alt="Learn with LMS"
            width={600}
            height={400}
            className="w-full h-full"
          />
        </div>

        <div className="w-[520px]">
          <h2 className="text-[32px] font-bold text-gray-900 mb-4 leading-snug">
            Grow Us Your Skill <br /> With LearnPress LMS
          </h2>

          <p className="text-gray-600 mb-6 leading-[24px] text-[18px]">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-gray-800 text-[18px]">
              <FaCheckCircle className="text-green-500" />
              Certification
            </li>
            <li className="flex items-center gap-2 text-gray-800 text-[18px]">
              <FaCheckCircle className="text-green-500" />
              Certification
            </li>
            <li className="flex items-center gap-2 text-gray-800 text-[18px]">
              <FaCheckCircle className="text-green-500" />
              Certification
            </li>
            <li className="flex items-center gap-2 text-gray-800 text-[18px]">
              <FaCheckCircle className="text-green-500" />
              Certification
            </li>
          </ul>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-[16px] font-semibold hover:bg-orange-600 transition duration-300">
            Explorer Course
          </button>
        </div>
      </div>
    </div>
  );
}
