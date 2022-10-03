import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className='flex flex-col justify-between h-screen bg-shortener-100 text-shortener-400'>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
