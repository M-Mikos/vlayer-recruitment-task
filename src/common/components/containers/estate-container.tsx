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
        <div className="bg-main-primary text-main-white -mx-4 -ml-2 flex h-8 w-24 items-center justify-center gap-1 rounded-lg rounded-bl-none text-xs uppercase">
          <Stars className="h-4 w-4" />
          {category}
        </div>
      )}
      <div className="bg-white p-5">
        <div className="mb-2 flex gap-6">
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
        <span className="text-main-black/50 font-medium">{address}</span>
      </div>
    </article>
  );
}

export default EstateContainer;
