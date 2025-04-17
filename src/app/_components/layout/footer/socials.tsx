import { SocialMediaItemInterface } from "@/types";
import Facebook from "@/common/components/icons/facebook";
import Instagram from "@/common/components/icons/instagram";
import Twitter from "@/common/components/icons/twitter";
import Linkedin from "@/common/components/icons/linkedin";
import SocialMediaItem from "./social-media-item";

function Socials() {
  const socialMediaItems: SocialMediaItemInterface[] = [
    {
      uid: "1",
      path: "#",
      label: "Facebook",
      title: "Visit Facebook",
      Icon: Facebook,
    },
    {
      uid: "2",
      path: "#",
      label: "Instagram",
      title: "Visit Instagram",
      Icon: Instagram,
    },
    {
      uid: "3",
      path: "#",
      label: "Twitter",
      title: "Visit Twitter",
      Icon: Twitter,
    },
    {
      uid: "4",
      path: "#",
      label: "Linkedin",
      title: "Visit Linkedin",
      Icon: Linkedin,
    },
  ];

  return (
    <ul className="flex gap-8">
      {socialMediaItems.map((item) => (
        <SocialMediaItem
          key={item.uid}
          path={item.path}
          label={item.label}
          title={item.title}
          Icon={item.Icon}
          uid={""}
        />
      ))}
    </ul>
  );
}

export default Socials;
