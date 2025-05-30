import Image from "next/image";

export default function CenterBanner() {
  return (
    <div className="flex justify-center items-center bg-white py-10">
      <div className="relative w-[1290px] h-[324px] rounded-[20px] overflow-hidden">
        <Image
          src="/banner2.png"
          alt="Banner Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-0 left-0 w-full h-full flex items-center px-12">
          <div className="max-w-[500px] text-black z-10">
            <p className="text-[16px] font-semibold uppercase text-[#555555]">
              Get More Power From
            </p>
            <h2 className="text-[32px] font-bold leading-tight mt-2">
              LearnPress Add-Ons
            </h2>
            <p className="text-[18px] mt-3 text-[#555555]">
              The next level of LearnPress - LMS WordPress Plugin. More
              Powerful, Flexible and Magical Inside.
            </p>
            <button className=" h-[48px] w-[177px] mt-6 bg-orange-500 hover:bg-orange-600 text-white text-[16px] font-semibold px-6 py-3 rounded-[24px] transition duration-300">
              Explorer Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
