"use client";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import { usePathname } from "next/navigation";

export default function FBbtn({ finalRes }) {
  const pathname = usePathname();
  return (
    <FacebookShareButton
      url={"https://iqtest-tawny.vercel.app/"}
      hashtag={
        "Just got my IQ results! 🌟 Ready to take on the world armed with a " +
        finalRes +
        "IQ !"
      }
      className=" col-span-4 md:col-span-1"
    >
      <button className="bg-white h-full border-black border-2 px-4 py-2 rounded-lg text-white w-full justify-center flex gap-3 hover:bg-gray-200">
        <div className="text-black md:hidden">Share on </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          width="20px"
          className="h-full"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 310 310"
          xmlSpace="preserve"
        >
          <g id="XMLID_834_">
            <path
              id="XMLID_835_"
              d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
            />
          </g>
        </svg>
      </button>
    </FacebookShareButton>
  );
}
