const Waves = (): JSX.Element => {
	return (
		<div
			className='absolute bottom-0 w-[105%] select-none bg-[url("../public/images/waves1.svg")] h-full bg-no-repeat bg-bottom bg-contain pointer-events-none'
			onMouseDown={(e) => e.preventDefault()}
		></div>
	)
}

export default Waves
