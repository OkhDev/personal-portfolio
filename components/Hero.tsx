import Image from "next/image"

const Hero = () => {
	return (
		<div className='flex-grow flex items-center px-6 md:px-12'>
			<div className='flex flex-col -mt-36 space-y-4'>
				<span className='text-flatpurple font-body font-medium text-2xl -rotate-12 w-max'>
					Hello!
				</span>
				<span className='font-header text-6xl'>
					I am Ariel Okhtenberg
				</span>
				<div className='text-xl font-light text-flatgray'>
					Web Developer & Graphic Designer
				</div>
			</div>
		</div>
	)
}

export default Hero
