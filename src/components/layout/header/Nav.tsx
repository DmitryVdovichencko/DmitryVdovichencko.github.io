import * as React from "react";
import { Link } from "gatsby";

const Nav:React.FC = () =>{
	return <nav className="mb-2.5 h-8">
		
		<Link className="uppercase text-sm font-light" to='/blog/'>Blog</Link>
		<Link className="ml-2 uppercase text-sm font-light" to='/projects/'>Projects</Link>
		<Link className="ml-2 uppercase text-sm font-light" to='/about/'>About</Link>
	</nav>
}
export default Nav;