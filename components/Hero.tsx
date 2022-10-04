import Image from "next/image"

const Hero = () => {
	return (
		<div className='flex-1 flex justify-center items-center'>
			<div className='basis-1/2 font-header text-7xl'>
				<span className='text-purple font-header'>Hello!</span>
				<div className='font-header'>I am Ariel Okhtenberg</div>
			</div>
			<div className='basis-1/2 text-7xl'>Testing</div>
		</div>
	)
}

export default Hero
