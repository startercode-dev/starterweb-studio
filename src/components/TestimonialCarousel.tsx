'use client';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

export default function TestimonialCarousel({ data, mobileData, gap = 32 }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [mobileCurrIndex, setMobileCurrIndex] = useState(0);

  const mobileGap = 16;

  const nextItem = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevItem = () => {
    setCurrIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const mobileNextItem = () => {
    setMobileCurrIndex((prevIndex) => (prevIndex + 1) % mobileData.length);
  };

  const mobilePrevItem = () => {
    setMobileCurrIndex((prevIndex) =>
      prevIndex === 0 ? mobileData.length - 1 : prevIndex - 1,
    );
  };

  return (
    <>
      <div className="rounded-primary relative z-30 h-fit">
        {/* NAVIGATION ARROWS  */}
        {/* DESKTOP BUTTONS  */}
        <div className="absolute top-2/4 z-30 w-full translate-y-[-50%] max-[768px]:hidden">
          <div className="content-container">
            <div className="flex items-center justify-between">
              <button
                className={clsx(
                  'transition-scale flex h-[40px] w-[40px] translate-x-[-16px] items-center justify-center rounded-full bg-secondary-3 duration-500 ease-in-out md:translate-x-[-20px] lg:h-[56px] lg:w-[56px] lg:translate-x-[-43px] lg:hover:scale-110 lg:active:scale-95',
                )}
                onClick={prevItem}
                aria-label="Move portfolio slider to the left"
              >
                <Image
                  className={clsx(
                    '',
                    {
                      'text-primary-5': false,
                      'text-primary-7': true,
                    },
                    'h-[27px] w-[27px] lg:h-[36px] lg:w-[36px]',
                  )}
                  src="/testimony-arrow-left.svg"
                  width={36}
                  height={36}
                  alt="Arrow Left"
                  aria-hidden="true"
                />
              </button>
              <button
                className={clsx(
                  'transition-scale flex h-[40px] w-[40px] translate-x-[16px] items-center justify-center rounded-full bg-secondary-3 duration-500 ease-in-out md:translate-x-[20px] lg:h-[56px] lg:w-[56px] lg:translate-x-[43px] lg:hover:scale-110 lg:active:scale-95',
                )}
                onClick={nextItem}
                aria-label="Move portfolio slider to the right"
              >
                <Image
                  className={clsx(
                    '',
                    {
                      'text-green-600': true,
                      'text-green-100': false,
                    },
                    'h-[27px] w-[27px] lg:h-[36px] lg:w-[36px]',
                  )}
                  src="/testimony-arrow-right.svg"
                  width={36}
                  height={36}
                  alt="Arrow Right"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Desktop*/}
        <div className="w-full overflow-hidden">
          <ul
            className="hidden h-fit md:flex"
            style={{
              gap: `${gap}px`,
              width: `calc(${100 * data.length}% + ${gap * (data.length - 1)}px)`,
            }}
          >
            {data.map((testimony, i) => {
              return (
                <li
                  className="relative w-full transition-transform duration-1000 ease-in-out"
                  key={i}
                  style={{
                    transform: `translate(calc(${-100 * currIndex}% - ${currIndex == 0 ? '0' : gap * currIndex}px))`,
                  }}
                >
                  {/* WEBSITE THUMBNAIL */}
                  <div className="relative flex gap-4 lg:gap-6">
                    <div className="content-container w-[100%]">
                      <Link
                        href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
                        className="group"
                        target="_blank"
                      >
                        <div className="relative flex h-full w-full flex-col justify-between gap-6 rounded-primary-desktop bg-accent-1 px-10 py-5 transition-colors duration-300 lg:px-6 lg:py-9">
                          <p className="base-100 line-clamp-5 text-center text-[20px] text-2 lg:text-start">
                            {testimony[0].review}
                          </p>
                          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
                            <div className="flex flex-col items-center gap-1 lg:items-start lg:gap-0">
                              <p className="title-300 bold font-body2 text-[18px] text-1 lg:text-[20px]">
                                {testimony[0].reviewerDetails.name}
                              </p>
                              <p className="base-100 text-center font-body2 text-3 lg:text-start">
                                {testimony[0].reviewerDetails.title}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Image
                                  key={i}
                                  src="/testimony-star.svg"
                                  alt="Google Rating"
                                  height={30}
                                  width={30}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="content-container w-[100%]">
                      <Link
                        href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
                        className="group"
                        target="_blank"
                      >
                        <div className="relative flex h-full w-full flex-col justify-between gap-6 rounded-primary-desktop bg-accent-1 px-10 py-5 transition-colors duration-300 lg:px-6 lg:py-9">
                          <p className="base-100 line-clamp-5 text-center text-[20px] text-2 lg:text-start">
                            {testimony[1].review}
                          </p>
                          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
                            <div className="flex flex-col items-center gap-1 lg:items-start lg:gap-0">
                              <p className="title-300 bold font-body2 text-[18px] text-1 lg:text-[20px]">
                                {testimony[1].reviewerDetails.name}
                              </p>
                              <p className="base-100 text-center font-body2 text-3 lg:text-start">
                                {testimony[1].reviewerDetails.title}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Image
                                  key={i}
                                  src="/testimony-star.svg"
                                  alt="Google Rating"
                                  height={30}
                                  width={30}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Carousel Tablet & Smaller */}
          <ul
            className="grid h-fit grid-flow-col md:hidden"
            style={{
              gap: `${mobileGap}px`, // Apply the mobile gap
              width: `calc(${100 * mobileData.length}% + ${mobileGap * (mobileData.length - 1)}px)`, // Correct total width
            }}
          >
            {mobileData.map((testimony, i) => (
              <li
                className="relative h-full w-full transition-transform duration-1000 ease-in-out"
                key={i}
                style={{
                  transform: `translate(calc(${-100 * mobileCurrIndex}% - ${mobileGap * mobileCurrIndex}px))`, // Include gap in transform
                }}
              >
                {/* Slide Content */}
                <div className="relative grid h-full grid-cols-4 gap-4 lg:gap-6">
                  <div className="content-container col-span-4 h-full">
                    <Link
                      href="https://www.upwork.com/freelancers/~01f1b62f384148c5d1"
                      className="group"
                      target="_blank"
                    >
                      <div className="relative flex h-full w-full flex-col justify-between gap-6 rounded-primary-desktop bg-accent-1 px-10 py-5 transition-colors duration-300 lg:px-6 lg:py-9">
                        <p className="base-100 line-clamp-5 text-center text-[20px] text-2 lg:text-start">
                          {testimony.review}
                        </p>
                        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
                          <div className="flex flex-col items-center gap-1 lg:items-start lg:gap-0">
                            <p className="title-300 bold font-body2 text-[18px] text-1 lg:text-[20px]">
                              {testimony.reviewerDetails.name}
                            </p>
                            <p className="base-100 text-center font-body2 text-3 lg:text-start">
                              {testimony.reviewerDetails.title}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Image
                                key={i}
                                src="/testimony-star.svg"
                                alt="Google Rating"
                                height={30}
                                width={30}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="absolute top-2/4 z-30 w-full translate-y-[-50%] md:hidden">
          <div className="content-container">
            <div className="flex items-center justify-between">
              <button
                className={clsx(
                  'transition-scale flex h-[40px] w-[40px] translate-x-[-12px] items-center justify-center rounded-full bg-secondary-3 duration-500 ease-in-out md:translate-x-[-20px] lg:h-[56px] lg:w-[56px] lg:translate-x-[-43px] lg:hover:scale-110 lg:active:scale-95',
                )}
                onClick={mobilePrevItem}
                aria-label="Move portfolio slider to the left"
              >
                <Image
                  className={clsx(
                    '',
                    {
                      'text-primary-5': false,
                      'text-primary-7': true,
                    },
                    'h-[27px] w-[27px] lg:h-[36px] lg:w-[36px]',
                  )}
                  src="/testimony-arrow-left.svg"
                  width={36}
                  height={36}
                  alt="Arrow Left"
                  aria-hidden="true"
                />
              </button>
              <button
                className={clsx(
                  'transition-scale flex h-[40px] w-[40px] translate-x-[12px] items-center justify-center rounded-full bg-secondary-3 duration-500 ease-in-out md:translate-x-[20px] lg:h-[56px] lg:w-[56px] lg:translate-x-[43px] lg:hover:scale-110 lg:active:scale-95',
                )}
                onClick={mobileNextItem}
                aria-label="Move portfolio slider to the right"
              >
                <Image
                  className={clsx(
                    '',
                    {
                      'text-green-600': true,
                      'text-green-100': false,
                    },
                    'h-[27px] w-[27px] lg:h-[36px] lg:w-[36px]',
                  )}
                  src="/testimony-arrow-right.svg"
                  width={36}
                  height={36}
                  alt="Arrow Right"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
