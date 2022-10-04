import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"

const Hero = () => {
	return (
		<div className='relative flex-grow flex items-center px-6 md:px-12'>
			<div className='flex flex-col -mt-36 flex-grow'>
				<div className='text-flatpurple font-body font-medium text-2xl  -rotate-12 w-max'>
					Hello!
				</div>
				<div className='font-header text-5xl sm:text-6xl leading-[3.5rem] mt-2 mb-4'>
					I am Ariel Okhtenberg
				</div>
				<div className='text-lg md:text-xl font-light text-flatgray'>
					<span>Web Developer</span> & <span>Graphic Designer</span>
				</div>
				<div className='mt-24'>
					<a
						href='/'
						className='text-base bg-flatpurple px-8 py-6 rounded-3xl items-center '
					>
						<span className='mt-[0.2rem] text-white inline-flex'>
							Portfolio{" "}
							<ArrowUpRightIcon className='stroke-white stroke-[2px] w-5 ml-2' />
						</span>
					</a>
				</div>
			</div>
			<div className='absolute bottom-36 -right-4 w-max rotate-90 text-flatgray font-light inline-flex md:bottom-48 md:right-12 select-none text-sm'>
				<hr /> Scroll Down <ArrowRightIcon className='ml-4 w-4' />
			</div>
		</div>
	)
}

export default Hero
