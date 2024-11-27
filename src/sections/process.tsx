import Link from 'next/link';
import Image from 'next/image';

///Import Images
import ArrowRightWhite from '/public/arrow-right-white.svg';
import GoogleIcon from '/public/google-icon.svg';
import MeetingIcon from '/public/meeting-icon.svg';
import WebpageIcon from '/public/webpage-icon.svg';

const faqDetails = [
  {
    question: 'Consultation & Strategy',
    answer:
      'Our process starts with a consultation to understand your unique brand and business vision. Based on these insights, we craft a tailor plan for your website. ',
  },
  {
    question: 'Build Your Custom Website & Functionalities',
    answer:
      'Our expert website designers and developers will work to bring the tailor plan to life, including SEO, speed optimization and custom functionalities.',
  },
  {
    question: 'Preparation for Google',
    answer:
      'We help you complete all the proper registrations and setup with Google so your website is discoverable and working for you upon launch.',
  },
  {
    question: 'Revisions & Feedbacks',
    answer:
      'We get your last minute revisions and feedback to make sure the website completely reflects your vision.  ',
  },
  {
    question: 'Finalize & Launch',
    answer:
      'We update the website based on your feedback, conduct thorough testing and launch the website for the world to see. ',
  },
];

export default function FAQ() {
  return (
    <section
      className="section pt-[54px] xl:pb-[128px] xl:pt-[96px]"
      id="process"
    >
      <div className="section-container relative flex flex-col rounded-primary-desktop bg-2 py-4 xl:flex-row xl:items-start xl:gap-20 xl:p-16">
        <div className="absolute bottom-[410px] left-[114px] hidden h-[140px] w-[140px] rounded-full bg-accent-05 xl:flex"></div>
        <div className="absolute bottom-[305px] left-[286px] hidden h-[226px] w-[226px] items-center justify-center rounded-full bg-accent-05 xl:flex">
          <Image
            src={GoogleIcon}
            alt="startercode"
            className="h-[98px] w-[98px]"
          />
        </div>
        <div className="absolute bottom-[125px] left-[18px] hidden h-[254px] w-[254px] items-center justify-center rounded-full bg-accent-05 xl:flex">
          <Image
            src={MeetingIcon}
            alt="startercode"
            className="h-[144px] w-[144px]"
          />
        </div>
        <div className="absolute bottom-[115px] left-[298px] hidden h-[150px] w-[150px] items-center justify-center rounded-full bg-accent-05 xl:flex">
          <Image
            src={WebpageIcon}
            alt="startercode"
            className="h-[96px] w-[96px]"
          />
        </div>
        <div className="absolute bottom-[25px] left-[192px] hidden h-[89px] w-[89px] rounded-full bg-accent-05 xl:flex"></div>
        <div className="absolute bottom-[28px] left-[432px] hidden h-[120px] w-[120px] rounded-full bg-accent-05 xl:flex"></div>

        <div className="flex max-w-[100%] flex-col md:flex-row xl:max-w-[444px]">
          <div className="flex w-full flex-col px-7 py-6 xl:px-0 xl:py-0">
            <h2 className="heading-3 bold mb-[10px] text-[24px] leading-[120%] text-1 lg:mb-[22px] xl:text-[36px]">
              How We Build Your Premium Website
            </h2>
            <p className="title-300 mb-[10px] flex text-[16px] leading-[150%] text-2 lg:mb-[46px] xl:text-[24px]">
              We make sure your custom website has everything you need for
              marketing success!
            </p>

            <div className="flex w-full items-start justify-start lg:w-[auto]">
              <Link className="button-primary w-full lg:w-[auto]" href="/">
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
          </div>

          <div className="flex w-full justify-center py-6 xl:hidden">
            <div className="relative h-[250px] w-[255px]">
              <div className="absolute left-[45px] top-0 h-[66px] w-[66px] rounded-full bg-accent-05"></div>
              <div className="absolute left-[128px] top-[9px] flex h-[108px] w-[108px] items-center justify-center rounded-full bg-accent-05">
                <Image
                  src={GoogleIcon}
                  alt="startercode"
                  className="h-[47px] w-[47px]"
                />
              </div>
              <div className="absolute left-[0] top-[80px] flex h-[121px] w-[121px] items-center justify-center rounded-full bg-accent-05">
                <Image
                  src={MeetingIcon}
                  alt="startercode"
                  className="h-[69px] w-[69px]"
                />
              </div>
              <div className="absolute bottom-[43px] right-[50px] flex h-[71px] w-[71px] items-center justify-center rounded-full bg-accent-05">
                <Image
                  src={WebpageIcon}
                  alt="startercode"
                  className="h-[45px] w-[45px]"
                />
              </div>
              <div className="absolute bottom-[0] left-[83px] h-[43px] w-[43px] rounded-full bg-accent-05"></div>
              <div className="absolute bottom-[0] right-[0] h-[57px] w-[57px] rounded-full bg-accent-05"></div>
            </div>
          </div>
        </div>

        <ul className="flex flex-1 flex-col gap-16 px-7 py-6 xl:px-0 xl:py-0">
          {faqDetails.map((detail, i) => (
            <li
              className="flex flex-col items-start gap-5 md:flex-row md:gap-3 lg:gap-5"
              key={i}
            >
              <h3 className="heading-3 bold text-[48px] leading-[70%] text-2 lg:text-[64px]">
                {(i += 1)}.
              </h3>
              <div className="flex flex-col gap-3">
                <h3 className="title-200 bold text-[24px] leading-[150%] text-2 lg:text-[28px]">
                  {detail.question}
                </h3>
                <p className="base-100 text-[16px] text-3 lg:text-[20px]">
                  {detail.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
