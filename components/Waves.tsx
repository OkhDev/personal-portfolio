import Image from "next/image"

interface IWaves {
	image: string
	position: string
	marginBottom?: number
}

const Waves = ({ image, position, marginBottom = 0 }: IWaves): JSX.Element => {
	return (
		<div className={`relative mb-[${marginBottom}%]`}>
			{/* bg-center bg-no-repeat aspect-[1200/300] bg-cover */}
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
