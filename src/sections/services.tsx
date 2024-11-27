import ServicesCard from '@/components/servicesCard';
import { Bars3Icon } from '@heroicons/react/24/outline';

type serviceDetail = {
  icon: string;
  header: string;
  description: string;
};

const featureDetails: serviceDetail[] = [
  {
    icon: '/service-icon-1.svg',
    header: 'Web Design & Development',
    description:
      'We design and develop a custom website unique to your business brand focused on client conversion.  ',
  },
  {
    icon: '/service-icon-2.svg',
    header: 'Content Writing',
    description:
      'Integrate your brand and business message into your website so it’s engaging, informative, and optimized for both users and search engines.',
  },
  {
    icon: '/service-icon-3.svg',
    header: 'Web Optimization',
    description:
      'We make sure your website is optimized for SEO, fast with speed performance and responsiveness in mobile devices.',
  },
  {
    icon: '/service-icon-4.svg',
    header: 'Web Functionalities',
    description:
      'Integrate and build web functionalities that improves the marketing process and makes it easier to run your business.',
  },
  {
    icon: '/service-icon-5.svg',
    header: 'Host & Launch',
    description:
      'Securely host and launch your new website so it’s live for the world to see.  ',
  },
  {
    icon: '/service-icon-6.svg',
    header: 'Maintenance',
    description:
      'Provide ongoing support and updates for your website solution, so it meets your evolving business needs.',
  },
];

export default function Features() {
  return (
    <section className="section pt-[96px] xl:pb-[96px]" id="services">
      <div className="section-container flex flex-col items-start justify-start">
        <div className="relative mb-[16px] flex lg:mb-[20px]">
          <h2 className="heading-2 text-[24px] leading-[120%] text-primary-7 lg:text-[48px]">
            Hope won’t drive sales, but a
            <strong className="bold relative">
              {' '}
              great website will.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[-27px] right-[-10px] md:right-[10px]"
                width="100%"
                height="29"
                viewBox="0 0 430 29"
                fill="none"
              >
                <path
                  d="M2.04907 12.1943C111.75 10.3063 221.436 5.85382 331.322 3.71701C362.394 3.1128 393.476 2.61568 424.551 2.08085C444.943 1.72988 383.691 3.33566 363.916 4.57689C300.835 8.5364 240.261 14.7695 181.125 20.6371C162.593 22.4759 107.129 27.2745 127.449 26.8339C182.109 25.6489 231.879 19.2783 284.491 16.9951"
                  stroke="#D4AF37"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </strong>
          </h2>
        </div>
        <p className="base-100 mb-[36px] flex w-full max-w-[879px] text-[16px] text-2 lg:mb-[90px] lg:text-[20px]">
          The reality is, clients don’t trust accountants and tax professionals
          with poor websites. To get customers beyond your network, you need a
          strong online presence that helps clients find you, understand your
          services, and feel confident working with you.
        </p>
        <ServicesCard details={featureDetails} columns={3} card={true} />
      </div>
    </section>
  );
}
