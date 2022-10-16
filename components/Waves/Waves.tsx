function Waves(): JSX.Element {
  return (
    <div
      className='absolute bottom-0 w-[110%] -ml-2 select-none bg-[url("../public/images/waves.svg")] h-full bg-no-repeat bg-bottom bg-contain pointer-events-none'
      onMouseDown={(e) => e.preventDefault()}
    />
  )
}

export default Waves
