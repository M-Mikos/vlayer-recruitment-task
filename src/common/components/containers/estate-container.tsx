import Image from "next/image";
import { Button } from "../ui/button";
import Heart from "../icons/heart";
import Stars from "../icons/stars";

interface EstateContainerProps {
  title: string;
  price: number;
  address: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryVisible: boolean;
  addToFavVisible: boolean;
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
}: EstateContainerProps) {
  return (
    <article className="w-full max-w-[22rem] rounded-lg overflow-hidden border border-base-200">
      <div className="w-full h-48 mb-32">
        <Image src={imageSrc} alt={imageAlt} fill />
      </div>
      {categoryVisible && (
        <div className="flex gap-1 items-center justify-center w-24 h-8 text-xs rounded-lg rounded-bl-none bg-main-primary text-main-white uppercase -mx-4 -ml-2">
          <Stars className="w-4 h-4" />
          {category}
        </div>
      )}
      <div className="flex gap-6 mb-2">
        <div>
          <div className="flex items-center mb-1">
            <span className="font-extrabold text-2xl text-secondary-500 tracking-tight">${price}</span>
            <span className="font-medium text-main-black/50">/month</span>
          </div>
          <h4 className="font-bold text-2xl tracking-tight">{title}</h4>
        </div>
        {addToFavVisible && (
          <Button variant="icon">
            <Heart />
          </Button>
        )}
      </div>
      <address className="font-medium text-main-black/50">{address}</address>
    </article>
  );
}

export default EstateContainer;
