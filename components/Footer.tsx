import { HeartIcon } from "@heroicons/react/24/solid"
import { Links } from "../constants"

export default function Footer() {
	return (
		<div className='flex justify-end'>
			<footer className='items-center w-full px-8 py-8 mx-auto md:py-12 max-w-7xl sm:px-6 md:flex md:justify-between md:px-12'>
				<div className='flex justify-center space-x-2 md:order-2'>
					{Links.map((item) => (
						<a
							key={item.name}
							target='_blank'
							href={item.href}
							className='hover:text-slate-500 text-slate-600'
						>
							<span className='sr-only'>{item.name}</span>
							<item.icon aria-hidden='true' />
						</a>
					))}
				</div>
				<div className='mt-8 md:order-1 md:mt-0'>
					<p className='font-medium leading-4 text-center text-slate-600'>
						Made with love
						<HeartIcon className='inline w-5 h-5 mb-[3px] ml-1 fill-red-400' />
					</p>
				</div>
			</footer>
		</div>
	)
}
