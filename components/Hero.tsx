import Image from "next/image"

const Hero = () => {
	return (
		<div className='flex-grow flex items-center px-6 md:px-12'>
			<div className='flex flex-col -mt-36 space-y-4'>
				<span className='text-flatpurple font-header text-2xl -rotate-12 w-max'>
					Hello!
				</span>
				<span className='font-header text-7xl'>
					I am Ariel Okhtenberg
				</span>
				<span className='text-xl font-light text-flatgray'>
					React JS Developer & Graphic Designer
				</span>
			</div>
		</div>
	)
}

export default Hero
