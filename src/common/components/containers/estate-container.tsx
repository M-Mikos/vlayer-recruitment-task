import Image from "next/image";
import { Button } from "../ui/button";
import Heart from "../icons/heart";
import Stars from "../icons/stars";
import { Heading } from "../ui/heading";
import clsx from "clsx";

interface EstateContainerProps {
  title: string;
  price: number;
  address: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryVisible: boolean;
  addToFavVisible: boolean;
  className?: string;
}

function EstateContainer({
  title,
  price,
  address,
  imageSrc,
  imageAlt,
  category,
  categoryVisible,
  addToFavVisible,
  className,
}: EstateContainerProps) {
  return (
    <article
      className={clsx(
        "border-base-200 w-full max-w-[22rem] overflow-hidden rounded-lg border transition-all hover:shadow-[0_4px_40px_rgba(230,230,237,1)]",
        className,
      )}
    >
      <div className="h-48 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={352}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
      {categoryVisible && (
        <div className="bg-main-primary text-main-white after:bg-main-primary absolute -mt-4 -ml-2 flex h-8 min-w-24 items-center justify-center gap-1 rounded-lg rounded-bl-none px-4 text-xs uppercase after:absolute after:-bottom-2 after:left-0 after:block after:h-2 after:w-2 after:content-[''] after:[clip-path:polygon(0%_0%,100%_0%,100%_100%)]">
          <Stars className="h-4 w-4" />
          {category}
        </div>
      )}
      <div className="bg-white p-5">
        <div className="mb-2 flex justify-between gap-6">
          <div>
            <div className="mb-1 flex items-center gap-1">
              <span className="text-secondary-500 text-2xl font-extrabold tracking-tight">
                ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
              <span className="text-main-black/50 font-medium">/month</span>
            </div>
            <Heading variant="h4">{title}</Heading>
          </div>
          {addToFavVisible && (
            <Button variant="icon">
              <Heart />
            </Button>
          )}
        </div>
        <span className="text-main-black/50 text-sm font-medium">
          {address}
        </span>
      </div>
    </article>
  );
}

export default EstateContainer;
