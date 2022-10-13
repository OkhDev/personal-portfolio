import { SocialLinks } from "../../constants"

export default function Footer() {
	return (
		<footer className='relative flex pt-4 md:pt-6 bg-flatpurple'>
			<div className='relative flex flex-col items-center justify-between w-full gap-8 pt-6 pb-12 m-auto md:px-12 md:flex-row max-w-7xl'>
				<div className='inline-flex items-center text-center text-white md:text-left'>
					&copy; All rights reserved &middot; By Ariel Okhtenberg
				</div>
				<div className='inline-flex gap-12 text-white'>
					{SocialLinks.map((item, i) => (
						<a
							key={i}
							target='_blank'
							href={item.href}
							className='items-center'
						>
							<span className='sr-only'>{item.name}</span>
							<span className='fill-white drop-shadow-sm'>
								<item.icon aria-hidden='true' />
							</span>
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}
