import { Button } from "@/common/components/ui/button";
import { SocialMediaItemInterface } from "@/types";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

function SocialMediaItem({ path, label, title, Icon }: Omit<SocialMediaItemInterface, "uuid">) {
  return (
    <li>
      <Button variant="icon" className="border-none w-6 h-6 text-base-1000/50" asChild>
        <Link href={path} title={title} target="_blank" rel="noopener noreferrer">
          <Icon />
          <VisuallyHidden>{label}</VisuallyHidden>
        </Link>
      </Button>
    </li>
  );
}

export default SocialMediaItem;
