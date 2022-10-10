import Image from "next/image"

interface IWaves {
	image: string
	position: string
}

const Waves = ({ image, position }: IWaves): JSX.Element => {
	return (
		<div className='relative align-bottom'>
			{/* bg-center bg-no-repeat aspect-[1200/300] bg-cover */}
			<div className={`absolute ${position}-0 z-[2] w-full`}>
				<Image
					src={image}
					layout='responsive'
					width={1200}
					height={200}
				/>
			</div>
		</div>
	)
}

export default Waves
