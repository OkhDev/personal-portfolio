import "../styles/globals.css"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='w-full mx-auto max-w-7xl'>
			<Component {...pageProps} />
		</div>
	)
}
