import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 h-[72px] w-full ">
      <div className="w-[166.3px] h-[30px]  flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="EduPress Text Logo"
          width={166.3}
          height={30}
        />
      </div>

      <nav className="flex items-center gap-6 text-black font-medium">
        <Link href="/" className="text-orange-500">
          Home
        </Link>
        <Link href="/courses">Courses</Link>
        <Link href="/blog">Blog</Link>
        <div className="relative group">
          <button>Page ▾</button>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded p-2 z-10">
            <Link href="/about" className="block px-4 py-1 hover:bg-gray-100">
              About Us
            </Link>
            <Link href="/contact" className="block px-4 py-1 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        </div>
        <Link href="/learnpress">LearnPress&nbsp;&nbsp;Add-On</Link>
        <Link href="/premium">Premium Theme</Link>
      </nav>
      {/* login/logout */}
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-black font-medium">
          Login / Register
        </Link>
        <div className="flex items-center justify-center rounded-full border-orange-500 border-2 h-[48px] w-[48px]">
          <FaSearch className="text-orange-500 cursor-pointer h-[20px] w-[20px]" />
        </div>
      </div>
    </div>
  );
}
