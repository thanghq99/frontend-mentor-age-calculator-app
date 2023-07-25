export default function Home() {
  return (
    <div className="min-h-screen lg:flex lg:justify-between px-6 lg:px-32 font-barlow bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] bg-no-repeat bg-cover text-c-blue text-center">
      <div className='w-full max-w-sm md: md:w-[444px] md:max-w-none mx-auto lg:mx-0 flex flex-col justify-center'>
        <p className='pt-28 uppercase font-barlow-condensed tracking-[2.7px] md:pt-48 md:text-xl lg:text-[28px] md:tracking-[3.38px] lg:tracking-[4.72px]'>
          so, you want to travel to
        </p>
        <p className='my-4 md:my-6 font-bellefair text-[80px] md:text-[150px] leading-[100px] md:leading-[150px] uppercase text-white'>
          space
        </p>
        <p className='text-[15px] leading-[25px] md:text-base lg:text-lg md:leading-7 lg:leading-8'>
          Let’ face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className='flex justify-center items-center'>
        <div className='group relative z-10 flex justify-center items-center mt-[81px] md:mt-48 h-[150px] w-[150px] md:h-[242px] md:w-[242px] lg:w-[247px] lg:h-[247px] rounded-full bg-white'>
          <p className='font-bellefair text-xl tracking-[1.25px] md:text-[32px] md:tracking-[2px] text-c-black uppercase'>
            explore
          </p>
          <div className='hidden lg:block absolute w-[200px] h-[200px] rounded-full transition-all duration-200 hover:bg-white/10 hover:w-[350px] hover:h-[350px]'></div>
        </div>
      </div>
    </div>
  );
}
