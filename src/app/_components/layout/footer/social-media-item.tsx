import { Button } from "@/common/components/ui/button";
import { SocialMediaItemInterface } from "@/types";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

function SocialMediaItem({ path, label, title, Icon }: Omit<SocialMediaItemInterface, "uuid">) {
  return (
    <li>
      <Link href={path} title={title} target="_blank" rel="noopener noreferrer">
        <Button variant="icon" className="border-none w-6 h-6 text-base-1000/50">
          <Icon />
          <VisuallyHidden>{label}</VisuallyHidden>
        </Button>
      </Link>
    </li>
  );
}

export default SocialMediaItem;
