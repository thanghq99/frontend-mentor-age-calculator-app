export default function Home() {
  return (
    <div className="min-h-screen px-6 font-barlow bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] bg-no-repeat bg-cover text-c-blue text-center">
      <div className='w-full max-w-sm md: md:w-[444px] md:max-w-none mx-auto flex flex-col justify-center'>
        <p className='pt-28 uppercase font-barlow-condensed tracking-[2.7px] md:pt-48 md:text-xl md:tracking-[3.38px]'>
          so, you want to travel to
        </p>
        <p className='my-4 font-bellefair text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] uppercase text-white'>
          space
        </p>
        <p className='text-[15px] leading-[25px] md:text-base md:leading-7'>
          Let’ face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center mt-[81px] md:mt-48 h-[150px] w-[150px] md:h-[242px] md:w-[242px] rounded-full bg-white'>
          <p className='font-bellefair text-xl tracking-[1.25px] md:text-[32px] md:tracking-[2px] text-c-black uppercase'>
            explore
          </p>
        </div>
      </div>
    </div>
  );
}
