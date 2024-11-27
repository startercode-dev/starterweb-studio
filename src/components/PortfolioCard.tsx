import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

///Import Images
import ArrowIcon from '/public/portfolio-arrow-icon.svg';

type FeatureDetail = {
  img: string;
  boldTitle: string;
  title: string;
  href: string;
};

type FeatureCardsProps = {
  details?: FeatureDetail[]; // Define `details` as an array of `FeatureDetail`
  columns?: number;
  card?: boolean;
  classes?: string;
};

export default function FeatureCards({
  details = [],
  columns = 3,
  card = true,
  classes = '',
}: FeatureCardsProps) {
  return (
    <ul
      className={clsx(
        `${classes} grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[32px] lg:grid-cols-3 lg:gap-x-10`,
      )}
    >
      {details.map((detail, i) => {
        return (
          <Link
            href={detail.href}
            target="_blank"
            className="group flex"
            key={i}
          >
            <li
              className={clsx(
                `flex flex-col items-start ${!card ? 'max-w-xl' : ''} gap-3.5`,
              )}
            >
              <div className="relative flex overflow-hidden rounded-secondary-mobile lg:rounded-primary-desktop">
                <Image
                  src={detail.img}
                  alt="startercode"
                  width={1290}
                  height={837}
                  quality={100}
                  className="object-cover"
                />

                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#d4d4d4b3] opacity-0 transition-all lg:group-hover:opacity-100">
                  <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-secondary-7">
                    <Image
                      src={ArrowIcon}
                      alt="startercode"
                      width={20}
                      height={22}
                    />
                  </div>
                </div>
              </div>
              <p className="base-100 text-[20px] text-2">
                <span className="semibold">{detail.boldTitle} </span>-{' '}
                {detail.title}
              </p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
