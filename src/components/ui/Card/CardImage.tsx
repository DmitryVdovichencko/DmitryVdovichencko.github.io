import * as React from "react";
import {
  getImage,
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";

interface CardImageProps {
  title: string;
  data: ImageDataLike;
}

const CardImage = ({ title, data }: CardImageProps): React.ReactElement => {
  return (
    <div className="flex-none h-48 md:w-48 md:h-auto relative">
      <GatsbyImage
        alt={title}
        className="absolute rounded-t-lg md:rounded-r-none md:rounded-l-lg inset-0 w-full h-full object-cover mt-0 m-none"
        image={getImage(data)}

      />
    </div>
  );
};

export default CardImage;
