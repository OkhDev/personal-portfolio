import { HeartIcon } from "@heroicons/react/24/solid"
import { FooterLinks } from "../constants"

export default function Footer() {
	return (
		<footer className='py-8 md:py-12 mx-auto max-w-7xl sm:px-6 md:flex items-center md:justify-between px-8 md:px-12 w-full'>
			<div className='flex justify-center space-x-2 md:order-2'>
				{FooterLinks.map((item) => (
					<a
						key={item.name}
						target={item.target}
						href={item.href}
						className='hover:text-slate-500 text-slate-600'
					>
						<span className='sr-only'>{item.name}</span>
						<item.icon className='w-6 h-6' aria-hidden='true' />
					</a>
				))}
			</div>
			<div className='mt-8 md:order-1 md:mt-0'>
				<p className='leading-4 text-center text-slate-600 font-medium'>
					Made with love
					<HeartIcon className='inline w-5 h-5 mb-[3px] ml-1 fill-red-400' />
				</p>
			</div>
		</footer>
	)
}
