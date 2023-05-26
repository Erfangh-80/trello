import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface IProfileProps {
  className: string;
  address: StaticImageData;
  alt: string;
}

export const ImageProfile: FC<IProfileProps> = ({ className, address, alt }) => {
  return <Image className={className} src={address} alt={alt} />;
};

