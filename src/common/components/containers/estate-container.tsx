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
        "w-full max-w-[22rem] transition-all rounded-lg overflow-hidden border border-base-200 hover:shadow-[0_4px_40px_rgba(230,230,237,1)]",
        className
      )}
    >
      <div className="w-full h-48">
        <Image src={imageSrc} alt={imageAlt} width={352} height={200} className="w-full h-full object-cover" />
      </div>
      {categoryVisible && (
        <div className="flex gap-1 items-center justify-center w-24 h-8 text-xs rounded-lg rounded-bl-none bg-main-primary text-main-white uppercase -mx-4 -ml-2">
          <Stars className="w-4 h-4" />
          {category}
        </div>
      )}
      <div className="p-5 bg-white">
        <div className="flex gap-6 mb-2">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="font-extrabold text-2xl text-secondary-500 tracking-tight">
                ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
              <span className="font-medium text-main-black/50">/month</span>
            </div>
            <Heading variant="h4">{title}</Heading>
          </div>
          {addToFavVisible && (
            <Button variant="icon">
              <Heart />
            </Button>
          )}
        </div>
        <span className="font-medium text-main-black/50">{address}</span>
      </div>
    </article>
  );
}

export default EstateContainer;
