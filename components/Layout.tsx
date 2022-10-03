import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className='flex flex-col'>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
