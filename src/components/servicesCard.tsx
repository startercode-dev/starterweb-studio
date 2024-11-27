import clsx from 'clsx';
import Image from 'next/image';

type serviceDetail = {
  icon: string;
  header: string;
  description: string;
};

type ServiceCardsProps = {
  details?: serviceDetail[]; // Define `details` as an array of `FeatureDetail`
  columns?: number;
  card?: boolean;
  classes?: string;
};

export default function FeatureCards({
  details = [],
  columns = 3,
  card = true,
  classes = '',
}: ServiceCardsProps) {
  return (
    <ul
      className={clsx(
        `${classes} grid gap-10 max-lg:grid-cols-1 ${!card ? 'gap-6 lg:gap-10' : 'gap-6 lg:gap-10'}`,
        {
          'grid-cols-1': columns == 1,
          'grid-cols-2': columns == 2,
          'grid-cols-3': columns == 3,
          'grid-cols-4': columns == 4,
          'grid-cols-5': columns == 5,
          'grid-cols-6': columns == 6,
        },
      )}
    >
      {details.map((detail, i) => {
        return (
          <li
            key={i}
            className={clsx(
              `flex flex-col items-start gap-[10px] ${!card ? 'max-w-xl' : ''}`,
              {
                card,
              },
            )}
          >
            <div className="flex items-center justify-center">
              <Image
                src={detail.icon}
                alt="startercode"
                width={70}
                height={70}
                className="h-[48px] w-[48px] lg:h-[70px] lg:w-[70px]"
              />
            </div>
            <h2 className="title-200 font-body text-[20px] font-semibold leading-[160%] text-1 lg:text-[28px] lg:leading-[150%]">
              {detail.header}
            </h2>
            <p className="base-100 text-[16px] text-3 lg:text-[20px]">
              {detail.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
