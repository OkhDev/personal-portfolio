import Image from "next/image"

interface IWaves {
	image: string
	position: string
}

const Waves = ({ image, position }: IWaves): JSX.Element => {
	return (
		<div className='relative' onMouseDown={(e) => e.preventDefault()}>
			<div
				className={`absolute ${position}-0 z-[2] w-[105%] -ml-1 select-none object-contain`}
			>
				<Image
					src={image}
					layout='responsive'
					width={150} // 1200px
					height={25} // 200px
					priority={true}
				/>
			</div>
		</div>
	)
}

export default Waves
