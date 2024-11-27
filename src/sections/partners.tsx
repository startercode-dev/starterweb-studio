'use client';

import Image from 'next/image';

export default function Partners() {
  return (
    <section className="section pt-[90px] xl:pb-[96px] xl:pt-[128px]">
      {/* <div className="section-container flex flex-col items-center">
        <ul className="flex w-full flex-col items-center justify-center gap-x-10 gap-y-8 px-0 md:flex-row md:px-[30px] xl:justify-between xl:gap-x-20 xl:px-0">
          {partnersImg &&
            partnersImg.map((partner, i) => {
              return (
                <>
                  <li
                    className={`hidden w-full md:flex max-w-[${Number(partner.mobileMaxWidth)}px] flex h-[auto] md:max-w-none`}
                    key={i}
                  >
                    <Image
                      src={partner.img}
                      alt={partner.alt}
                      width={partner.maxWidth}
                      height={100}
                      quality={100}
                      className={`h-auto w-full`}
                    />
                  </li>
                </>
              );
            })}

          <div className="flex w-full items-center justify-center gap-10 md:hidden">
            <li className="w-full" style={{ maxWidth: 135 }}>
              <Image
                src={'/partners-1.png'}
                alt="startercode"
                width={308}
                height={56}
                quality={100}
                className={`h-auto w-full`}
              />
            </li>
            <li className="w-full" style={{ maxWidth: 125 }}>
              <Image
                src={'/partners-2.png'}
                alt="startercode"
                width={293}
                height={56}
                quality={100}
                className={`h-auto w-full`}
              />
            </li>
          </div>

          <li className="flex w-full md:hidden" style={{ maxWidth: 465 }}>
            <Image
              src={'/partners-3.svg'}
              alt="startercode"
              width={465}
              height={56}
              quality={100}
              className={`h-auto w-full`}
            />
          </li>
        </ul>
      </div> */}

      <ul className="section-container flex flex-row gap-32 max-lg:gap-10 max-sm:flex-col max-sm:items-center max-sm:gap-20">
        <li className="flex w-full max-sm:max-w-72">
          <Image
            src={'/partners-1.png'}
            alt="startercode"
            width={372}
            height={85}
            quality={100}
            unoptimized
            className="w-full object-contain "
          />
        </li>
        <li className="flex w-full max-sm:max-w-72">
          <Image
            src={'/partners-2.png'}
            alt="startercode"
            width={372}
            height={85}
            quality={100}
            unoptimized
            className="w-full object-contain"
          />
        </li>
        <li className="flex w-full max-sm:max-w-72">
          <Image
            src={'/partners-3.png'}
            alt="startercode"
            width={372}
            height={85}
            quality={100}
            unoptimized
            className="w-full object-contain max-sm:max-w-96"
          />
        </li>
      </ul>
    </section>
  );
}
