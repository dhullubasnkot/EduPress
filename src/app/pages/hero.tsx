import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative w-full h-[700px] flex items-center justify-between"
      style={{
        backgroundImage: "linear-gradient(to right, #fdf6e4, #d8f6e7)",
        paddingLeft: "6rem",
      }}
    >
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold text-black leading-tight">
          Build Skills With <br /> Online Course
        </h1>
        <p className="text-gray-600 text-lg">
          We denounce with righteous indignation and dislike men who are <br />
          so beguiled and demoralized that cannot trouble.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
          Posts Comment
        </button>
      </div>

      <div className="relative h-[1043px] w-[696px]">
        <Image
          src="/kt.png"
          alt="Student"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}
