import PortfolioCard from '@/components/PortfolioCard';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

///Import Images
import ArrowRightWhite from '/public/arrow-right-white.svg';

type FeatureDetail = {
  img: string;
  boldTitle: string;
  title: string;
  href: string;
};

const featureDetails: FeatureDetail[] = [
  {
    img: '/portfolio-1.png',
    boldTitle: 'Payroll-Easy',
    title: 'Payroll, Accounting & Tax Service',
    href: 'https://payrolleasy.org/',
  },
  {
    img: '/portfolio-2.png',
    boldTitle: 'Neural Consult',
    title: 'AI Powered Saas Website',
    href: 'https://www.neuralconsult.com/',
  },
  {
    img: '/portfolio-3.png',
    boldTitle: 'Sales Xpress',
    title: 'Sales Platform for Businesses',
    href: 'https://salesxpress.co/',
  },
  {
    img: '/portfolio-4.png',
    boldTitle: 'Eval Genie',
    title: 'Saas Website for the Army',
    href: 'https://evalgenie.netlify.app/',
  },
  {
    img: '/portfolio-5.png',
    boldTitle: 'Startercode',
    title: 'Custom Software Development',
    href: 'https://www.startercode.dev/',
  },
  {
    img: '/portfolio-6.png',
    boldTitle: 'Guzmanc Construction',
    title: 'Construction Website',
    href: 'https://guzmanconstruction.dreamhosters.com/',
  },
];

export default function Features() {
  return (
    <section className="section pb-[96px] pt-[64px]" id="portfolio">
      <div className="section-container flex flex-col items-center gap-9 lg:gap-12">
        <h2 className="heading-2 mb-3 text-center text-[30px] text-1 lg:text-[48px]">
          Latest Work
        </h2>
        <PortfolioCard details={featureDetails} columns={3} card={true} />

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
    </section>
  );
}
