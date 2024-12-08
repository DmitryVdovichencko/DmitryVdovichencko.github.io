import * as React from "react";
import {
  getImage,
  StaticImage,
} from "gatsby-plugin-image";

interface CardStaticImageProps {
  title: string;
  src: string;
}

const CardStaticImage = ({ title, src }: CardStaticImageProps): React.ReactElement => {
  return (
    <div className="flex-none h-48 md:w-48 md:h-auto relative">
      <StaticImage
        alt={title}
				src={src}
				placeholder="blurred"
        className="absolute rounded-t-lg md:rounded-r-none md:rounded-l-lg inset-0 w-full h-full object-cover mt-0 m-none"
      />
    </div>
  );
};

export default CardStaticImage;