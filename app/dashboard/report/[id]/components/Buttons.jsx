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

export default function Buttons() {
  const pathname = usePathname();
  return (
    <div>
      <FacebookShareButton url={"https://iqtest-tawny.vercel.app/" + pathname}>
        button
      </FacebookShareButton>
    </div>
  );
}
