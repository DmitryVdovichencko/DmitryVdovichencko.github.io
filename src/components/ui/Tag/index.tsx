import React, { ComponentProps } from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';


interface TagProps extends ComponentProps<React.FunctionComponent> {
  title: string,
} 

const Tag  = (props: TagProps): React.ReactElement => {
	const { title } = props;
	const path :string = `/tags/${_.kebabCase(title)}/`;
	return <Link to={path}>
		<button className="bg-blue-500 hover:bg-blue-700 mr-2 my-1 py-1 px-4 text-white rounded text-sm">{title}</button>
	</Link>
}

export default Tag