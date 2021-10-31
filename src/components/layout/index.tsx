import * as React from "react";
import Header from './header'
import Footer from './footer'
const RootLayout:React.FC = ({ children }) => {
	return <div className="prose container mx-auto max-w-5xl min-h-screen flex flex-col">
	<Header />
	<main className="flex flex-col flex-1">
	{children}
	</main>
	<Footer />
	</div>
}

export default RootLayout