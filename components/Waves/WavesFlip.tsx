function WavesFlip(): JSX.Element {
  return (
    <div
      className='absolute top-0 w-[110%] -ml-2 select-none bg-[url("../public/images/waves-flip.svg")] h-full bg-no-repeat bg-top bg-contain pointer-events-none'
      onMouseDown={(e) => e.preventDefault()}
    />
  )
}

export default WavesFlip
