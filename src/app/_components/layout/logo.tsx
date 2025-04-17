import Image from "next/image";
import logo from "@/../public/estatery-logotype.svg";

function Logo() {
  return (
    <Image className="w-full aspect-[4]" src={logo} alt="Estatery Logo" width="120" height="30" unoptimized={true} />
  );
}

export default Logo;
