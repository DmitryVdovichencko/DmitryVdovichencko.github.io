import React from 'react';
import { getImage, GatsbyImage, GatsbyImageProps, ImageDataLike } from 'gatsby-plugin-image';

interface PostImageProps extends GatsbyImageProps {
  title: string,
	imageData: ImageDataLike
}

const PostImage = (props:PostImageProps):React.ReactElement => {
	const { imageData, alt, children } = props;
	return <div className="my-8">
		<GatsbyImage alt={alt} image={getImage(imageData)} />
		<p className="text-sm mt-4 italic text-gray-400 text-center">{children}</p>
	</div>
}

export default PostImage
