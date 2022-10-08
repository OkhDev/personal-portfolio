import Image from "next/image"

const Wave = () => {
	return (
		<div className='relative mt-6 md:mt-12 lg:mt-28'>
			{/* bg-center bg-no-repeat aspect-[1200/300] bg-cover */}
			<div className='absolute bottom-0 w-full -z-10'>
				<Image
					src='/images/waves1.svg'
					alt='flat waves'
					layout='responsive'
					width={1200}
					height={300}
				/>
			</div>
		</div>
	)
}

export default Wave
