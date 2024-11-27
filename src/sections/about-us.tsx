import Image from 'next/image';
import Link from 'next/link';

///Import Images
import ArrowRightWhite from '/public/arrow-right-white.svg';

export default function AboutUs() {
  return (
    <section className="section flex items-center xl:bg-invert-1 xl:py-[128px] relative" id='about'>
      <div className='hidden md:flex absolute top-[50px] xl:top-[129px] right-[150px] xl:right-[174px] md:w-[175px] xl:w-[273px] md:h-[175px] xl:h-[273px] rounded-full bg-[#124b684d] items-center justify-center'>
        <h2 className='heading-3 text-[24px] xl:text-[36px] text-invert-1 bold'>About Us</h2>
      </div>

      {/* ADJUST "col-span" FOR FLEXIBLE SIZING */}
      <div className="section-container w-full flex flex-col gap-8 xl:gap-16 bg-invert-1 xl:bg-transparent rounded-xl xl:rounded-none py-8 xl:py-0 px-5 xl:px-0">
        <div className='flex md:hidden w-full justify-center'>
          <h2 className='heading-3 text-invert-1 bold text-center'>About Us</h2>
        </div>

        <div className='w-full flex flex-col gap-4 items-start relative h-auto md:h-[413px] xl:h-auto'>
          {/* HERO IMG  */}
          <div className="xl:min-w-[651px]">
            <Image
              className="rounded-[32px] md:rounded-full h-auto md:h-[300px] xl:h-full w-full md:w-[300px] xl:w-full object-cover"
              src="/about-us-hero.png"
              width={651}
              height={868}
              quality={100}
              alt="Hero Image"
            />
          </div>

          <div className='relative md:absolute w-full md:w-auto top-0 md:top-[140px] xl:top-[215px] left-0 md:left-[257px] xl:left-[561px] z-10 py-2.5 md:py-1 xl:py-2.5 px-6 md:px-2 xl:px-6 rounded-primary-desktop md:rounded-md xl:rounded-primary-desktop flex flex-col bg-yellow-100 opacity-95'>
            <h2 className='heading-2 bold text-[30px] xl:text-[48px] text-primary-7 leading-[120%]'>7+</h2>
            <span className='base-100 semibold text-[18px] xl:text-[20px] text-primary-7 leading-[150%] xl:leading-[160%]'>Years of Experience</span>
          </div>

          {/* HERO DESCRIPTION  */}
          <div className="min-w-full md:min-w-[495px] xl:min-w-[811px] w-full md:w-[495px] xl:w-[811px] bg-primary-05 rounded-primary-desktop relative md:absolute bottom-0 right-0 p-5 md:p-[21px] xl:p-14 flex flex-col gap-2 xl:gap-5">
            <h2 className="heading-3 text-[24px] xl:text-[36px] bold text-1 leading-[120%]">
              A poor website hurts your business
            </h2>
            <p className="title-300 text-[18px] xl:text-[24px] leading-[150%]">
              <span className='semibold text-primary-7'>Hi, I’m Ronald Chan, Co-founder of Starter Web Studio.</span> We build premium websites that help accountants and tax professionals boost their online presence and grow their businesses.
            </p>
          </div>
        </div>

        <div className='w-full xl:p-14 flex flex-col lg:flex-row gap-7 lg:gap-9 rounded-primary-desktop xl:bg-[#3e457166]'>
          <div className='flex flex-1'>
            <p className='title-300 semibold leading-[150%] text-[18px] lg:text-[24px] text-invert-2'>
              <span className='title-100 text-[24px] lg:text-[32px] text-invert-1'>Let’s be honest.</span> Accountants are great at many things, but marketing isn’t usually at the top of that list. If you don’t have a website, you’re likely waiting around for referrals which stunts your business growth and can leave you feeling stuck.
              <br /><br />
              <span className='title-100 text-[24px] lg:text-[32px] text-invert-1'>That’s where we come in.</span> We work with accountants and CPAs to create custom websites that bring life to your business. A solid online presence can do what word of mouth can’t,
              <span className='text-secondary-4'> reach a wider audience and build trust with people actively searching for your services.</span>
            </p>
          </div>

          <div className='flex flex-1 flex-col items-end gap-6'>
            <p className='title-300 semibold leading-[150%] text-[18px] lg:text-[24px] text-invert-2'>
              With over seven years of experience in web development, we have generated over
              <span className='text-secondary-4'> $300k+ revenue</span> through the websites we built.  With our experience I’m confident we can help you achieve the success you deserve.
              <br />
              <br />
              If you’d like to learn more about how we can help, or have any questions,
              <span className='text-secondary-4'> click below to schedule a call.</span> I’d love to chat and walk you through everything!
              <br />
              <br />
            </p>

            <Link className="button-primary hidden lg:flex" href="/">
              Schedule A Call

              <div className='w-[auto] h-[15px]'>
                <Image
                  src={ArrowRightWhite}
                  alt='arrow right icon'
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
