import { SocialMediaItemInterface } from "@/types";
import { v4 as uuidv4 } from "uuid";
import Facebook from "@/common/components/icons/facebook";
import Instagram from "@/common/components/icons/instagram";
import Twitter from "@/common/components/icons/twitter";
import Linkedin from "@/common/components/icons/linkedin";
import SocialMediaItem from "./social-media-item";

function Socials() {
  const socialMediaItems: SocialMediaItemInterface[] = [
    { uuid: uuidv4(), path: "#", label: "Facebook", title: "Visit Facebook", Icon: Facebook },
    { uuid: uuidv4(), path: "#", label: "Instagram", title: "Visit Instagram", Icon: Instagram },
    { uuid: uuidv4(), path: "#", label: "Twitter", title: "Visit Twitter", Icon: Twitter },
    { uuid: uuidv4(), path: "#", label: "Linkedin", title: "Visit Linkedin", Icon: Linkedin },
  ];

  return (
    <ul className="flex gap-8">
      {socialMediaItems.map((item) => (
        <SocialMediaItem key={item.uuid} path={item.path} label={item.label} title={item.title} Icon={item.Icon} />
      ))}
    </ul>
  );
}

export default Socials;
