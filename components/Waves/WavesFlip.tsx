const WavesFlip = (): JSX.Element => {
	return (
		<div
			className='absolute top-0 w-[105%] select-none bg-[url("../public/images/waves2.svg")] h-full bg-no-repeat bg-top bg-contain pointer-events-none'
			onMouseDown={(e) => e.preventDefault()}
		></div>
	)
}

export default WavesFlip
