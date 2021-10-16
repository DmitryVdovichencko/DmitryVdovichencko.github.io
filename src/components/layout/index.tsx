import * as React from "react";
import Header from './header'

const RootLayout:React.FC = ({ children }) => {
	return <div className="prose container mx-auto">
	<Header />
	{children}
	</div>
}

export default RootLayout