import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

///Import Images
import ArrowRightWhite from '/public/arrow-right-white.svg';

export default function CTA() {
  return (
    <section className="section pt-[64px] md:pt-[48px] lg:pt-[72px] pb-[96px] lg:pb-[64px]">
      <div className="section-container bg-invert-2 rounded-primary-desktop flex flex-col items-center px-5 py-7 lg:py-24">
        <h2 className="heading-3 bold text-[30px] lg:text-[36px] mb-5 text-center">
          Ready to Get Started On Your Custom Website?
        </h2>
        <p className="base-100 max-w-[548px] mb-9 lg:mb-12 text-2 text-[20px] text-center">
          Schedule a call today to discover how a custom website can make a difference for your business.
        </p>
        <div className="w-full flex justify-center">
          <Link className="button-primary w-full md:w-auto" href="/">
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
    </section>
  );
}
