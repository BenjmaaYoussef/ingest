"use client";
import { TwitterShareButton } from "react-share";
import { usePathname } from "next/navigation";

export default function Twiiterbtn({ finalRes }) {
  const pathname = usePathname();
  return (
    <TwitterShareButton
      url={"https://iqtest-tawny.vercel.app/"}
      title={
        "Just got my IQ results! 🌟 Ready to take on the world armed with a " +
        finalRes +
        "IQ !"
      }
      className=" grow "
    >
      <div className="bg-white h-full border-black border-2 items-center px-4 py-2 rounded-lg text-white w-full justify-center flex gap-3 hover:bg-gray-200">
        <div className="text-black">Share on </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzArllT3OlZ_oaqOTCCigwY0CWVu50szLpSTTaoOlSg&s"
          alt=""
          width={20}
        />
      </div>
    </TwitterShareButton>
  );
}
