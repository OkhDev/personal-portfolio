import Image from "next/image"

const Hero = () => {
	return (
		<div className='flex-grow flex items-center px-6 md:px-12'>
			<div className='flex flex-col -mt-36 space-y-4'>
				<div className='text-flatpurple font-body font-medium text-2xl -rotate-12 w-max'>
					Hello!
				</div>
				<div className='font-header text-5xl sm:text-6xl leading-normal'>
					I am Ariel Okhtenberg
				</div>
				<div className='text-xl font-light text-flatgray'>
					<span>Web Developer</span> & <span>Graphic Designer</span>
				</div>
				<div></div>
			</div>
		</div>
	)
}

export default Hero
