import Image from 'next/image';
import Link from 'next/link';

///Import Images
import ArrowRightWhite from '/public/arrow-right-white.svg';

export default function Hero() {
  return (
    <section className="section relative">
      {/* ADJUST "col-span" FOR FLEXIBLE SIZING */}
      <div className="section-container relative mt-[48px] flex h-[335px] items-center max-lg:max-w-[600px] max-lg:justify-center md:mt-0 md:h-[421px] lg:h-[500px] xl:h-[819px] xl:gap-16">
        <div className="absolute left-[-30px] h-[350px] w-[353px] rounded-full bg-accent-1 opacity-50 max-xl:top-0 md:left-[6px] md:h-[420px] md:w-[424px] md:opacity-100 xl:bottom-0 xl:left-[-117px] xl:h-[796px] xl:w-[796px]"></div>
        <div className="absolute bottom-[0] left-[-30px] h-[115px] w-[115px] rounded-full bg-accent-2 opacity-50 md:bottom-[15px] md:left-[0] md:h-[138px] md:w-[138px] md:opacity-100 xl:bottom-[30px] xl:left-[-129px] xl:h-[257px] xl:w-[257px]"></div>
        <div className="absolute right-[5px] top-[25px] z-10 h-[24px] w-[24px] rounded-full bg-accent-2 opacity-50 md:left-[407px] md:right-0 md:top-[38px] md:h-[28px] md:w-[28px] md:opacity-100 xl:left-[635px] xl:top-[100px] xl:h-[54px] xl:w-[54px]"></div>
        <div className="absolute bottom-[10px] right-0 hidden h-[160px] w-[160px] rounded-full bg-accent-2 md:flex xl:bottom-[18px] xl:right-[-70px] xl:h-[300px] xl:w-[300px]"></div>

        {/* HERO DESCRIPTION  */}
        <div className="relative z-20 flex w-full flex-col items-center lg:items-start">
          <h1 className="heading-1 mb-3 leading-[130%] text-1 max-xl:text-[30px] max-lg:text-center xl:mb-5">
            Custom Websites for Accountants & Tax Professionals
          </h1>
          <p className="title-300 text-[24px] font-[400] leading-[150%] text-2 max-xl:text-[16px] max-lg:text-center xl:pr-8">
            Build a strong online presence, attract more customers, and grow
            your business with a website that truly sets you apart.
          </p>
          <div className="my-5 flex w-full md:w-auto xl:my-9">
            <Link className="button-primary w-full md:w-auto" href="/">
              Schedule A Call
              <div className="h-[15px] w-[auto]">
                <Image
                  src={ArrowRightWhite}
                  alt="arrow right icon"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-3.5 rounded-[8px] bg-[#f1f9feb3] px-3.5 py-3 backdrop-blur-[25px]">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className="flex h-[20px] w-[20px] items-center justify-center xl:h-[30px] xl:w-[30px]"
                  key={i}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 25"
                    fill="none"
                    className="h-[16px] w-[16px] xl:h-[25px] xl:w-[26px]"
                  >
                    <path
                      d="M12.0562 1.19524C12.3688 0.302566 13.6312 0.30257 13.9438 1.19524L16.3155 7.96808C16.4532 8.36125 16.8202 8.62788 17.2366 8.63733L24.4109 8.80001C25.3564 8.82145 25.7466 10.0221 24.9942 10.5952L19.2857 14.9438C18.9543 15.1962 18.8142 15.6276 18.9339 16.0266L20.9961 22.9C21.2679 23.8059 20.2466 24.548 19.469 24.0095L13.5693 19.9242C13.2268 19.6871 12.7732 19.6871 12.4307 19.9242L6.531 24.0095C5.75341 24.548 4.73208 23.8059 5.00389 22.9L7.06613 16.0266C7.18585 15.6276 7.04567 15.1962 6.71429 14.9438L1.00582 10.5952C0.253439 10.0221 0.643555 8.82145 1.58913 8.80001L8.76337 8.63733C9.17984 8.62788 9.54683 8.36125 9.68451 7.96808L12.0562 1.19524Z"
                      fill="#D4AF37"
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <span className="title-200 font-body2 text-[14px] font-medium leading-[150%] text-2 xl:text-[24px]">
                25 Reviews on{' '}
              </span>

              <Image
                src="/google-icon-hero.svg"
                alt="startercode"
                width={30}
                height={30}
                quality={100}
                className="h-[30px] w-[20px] xl:h-[30px] xl:w-[30px]"
              />
            </div>
          </div>
        </div>

        {/* HERO IMG  */}
        <div className="relative z-10 hidden h-fit w-full justify-center lg:flex">
          <Image
            className="rounded-primary relative right-0 top-0 w-full max-w-[450px] object-cover xl:absolute xl:top-2/4 xl:w-[736px] xl:max-w-[736px] xl:-translate-y-1/2"
            src="/hero-img.webp"
            alt="Hero Image"
            width={1024}
            height={1024}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
