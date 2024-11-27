'use client';

import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

///Import Images
import Logo from '/public/logo.svg';
import ArrowRightWhite from '/public/arrow-right-white.svg';

const navLinks = [
  {
    name: 'Services',
    link: '/#services',
    label: 'Learn more about our services',
  },
  {
    name: 'Process',
    link: '/#process',
    label: 'Hear about our company process',
  },
  {
    name: 'Portfolio',
    link: '/#portfolio',
    label: 'Hear what our clients say about our Portfolio',
  },
  {
    name: 'About',
    link: '/#about',
    label: 'See the answers to frequently asked questions',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenuOpen((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    const body = document.body;
    const hasClass = document
      .querySelector('.overlay')
      .classList.contains('hidden');

    if (mobileMenuOpen && hasClass) {
      document.querySelector('.overlay').classList.remove('hidden');
      body.classList.add('overflow-hidden');
    } else if (!mobileMenuOpen && !hasClass) {
      document.querySelector('.overlay').classList.add('hidden');
      body.classList.remove('overflow-hidden');
    }
  }, [mobileMenuOpen]);

  return (
    <header className="header align-items-center bg-primary relative z-50 flex h-[56px] w-full bg-1 max-lg:border-none lg:h-[100px]">
      {/* DESKTOP SECTION */}
      <section className="header-container flex w-full flex-row items-center justify-between max-lg:hidden">
        <div className="flex flex-1 justify-start">
          <Link href="/" aria-label="Company Logo">
            {/* <div className="bg-secondary flex h-12 w-12 items-center">LOGO</div> */}
            <div className="h-[auto] w-[auto]">
              <Image
                src={Logo}
                alt="Startercode Logo"
                quality={100}
                className="h-[26px] w-[231px]"
              />
            </div>
          </Link>
        </div>
        <nav>
          <ul className="grid grid-flow-col gap-[40px] max-xl:gap-7">
            {navLinks.map((link, i) => {
              return (
                <li
                  className="group relative cursor-pointer overflow-hidden"
                  key={i}
                >
                  <Link
                    aria-label={link.label}
                    className="base-100 text-[20px] font-semibold group-hover:text-grey-400"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                  <div className="absolute bottom-0 right-[100%] h-[2px] w-[calc(100%-8px)] bg-grey-300 transition-all duration-300 group-hover:right-1"></div>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex flex-1 flex-row items-center justify-end gap-5">
          <Link className="button-primary" href="/">
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

      {/* MOBILE GROUP */}
      <div className="hidden h-full w-full flex-col max-lg:flex">
        {/* MOBILE HEADER SECTION */}
        <section className="flex h-full w-full flex-row items-center justify-between px-[16px] md:px-[48px]">
          <Link href="/" className="w-auto flex-none">
            <div className="h-[auto] w-[auto]">
              <Image
                src={Logo}
                alt="Startercode Logo"
                quality={100}
                className="h-[auto] w-[174px]"
              />
            </div>
          </Link>
          <button
            onClick={mobileMenuHandler}
            className="relative z-20 hidden cursor-pointer max-lg:block"
            aria-label="Mobile Menu button to see website navigation"
          >
            <Bars3Icon
              aria-hidden="true"
              className={clsx(
                'h-8 w-8 fill-[var(--grey-800)] max-sm:h-7 max-sm:w-7',
                {
                  'opacity-0': mobileMenuOpen,
                },
              )}
            />
            <XMarkIcon
              aria-hidden="true"
              className={clsx(
                'absolute top-0 h-8 w-8 fill-[var(--grey-800)] max-sm:h-7 max-sm:w-7',
                {
                  'opacity-0': !mobileMenuOpen,
                },
              )}
            />
          </button>
        </section>

        {/* MOBILE DROPDOWN */}
        <div className="w-full">
          <div
            className={clsx(
              'bg-primary absolute z-30 grid w-full transition-all duration-300',
              {
                'px-[36px] py-[28px] max-lg:grid-rows-1fr md:px-[48px]':
                  mobileMenuOpen,
                'max-lg:grid-rows-0fr ': !mobileMenuOpen,
              },
            )}
          >
            <div className="overflow-hidden">
              <nav>
                <ul className="grid grid-flow-row gap-6">
                  {navLinks.map((link, i) => {
                    return (
                      <li
                        className="group relative flex h-auto cursor-pointer justify-center overflow-hidden py-1"
                        key={i}
                      >
                        <Link
                          className="base-100 h-full text-[20px] font-[400] leading-[160%] text-2 group-hover:text-grey-500"
                          href={link.link}
                          onClick={mobileMenuHandler}
                        >
                          {link.name}
                        </Link>
                        <div className="oup-hover:right-0 absolute bottom-0 right-[100%] h-[2px] w-full bg-grey-300 transition-all duration-300"></div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="my-[32px] border-t border-dividers-2"></div>
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-1 pb-1">
                <Link className="button-primary max-md:w-[100%]" href="/">
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
          </div>
        </div>
      </div>
    </header>
  );
}
