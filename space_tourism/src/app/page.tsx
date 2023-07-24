export default function Home() {
  return (
    <div className="min-h-screen px-6 font-barlow bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat bg-contain text-c-blue text-center">
      <p className='pt-28 uppercase font-barlow-condensed tracking-[2.7px]'>
        so, you want to travel to
      </p>
      <p className='my-4 font-bellefair text-[80px] leading-[100px] uppercase text-white'>
        space
      </p>
      <p className='text-[15px] leading-[25px]'>
        Let’ face it; if you want to go to space, you might as well genuinely go
        to outer space and not hover kind of on the edge of it. Well sit back,
        and relax because we’ll give you a truly out of this world experience!
      </p>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center mt-[81px] h-[150px] w-[150px] rounded-full bg-white'>
          <p className='font-bellefair text-xl tracking-[1.25px] text-c-black uppercase'>
            explore
          </p>
        </div>
      </div>
    </div>
  );
}
