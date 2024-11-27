'use client';

import { MinusSmallIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';

const faqs = [
  {
    question: 'How are your prices determined?',
    answer:
      'Prices are quoted after an initial consultation and assessment of your specific needs. This allows me to provide a tailored solution that aligns with your goals and budget, ensuring you receive the best value for your investment.',
  },
  {
    question:
      'What’s the typical timeline from starting to launching a website?',
    answer:
      'If we’re aligned on your vision and maintain prompt communication for revisions and feedback, your website will be completed within 4 weeks.',
  },
  {
    question: 'What will my time commitment be for this?',
    answer:
      'We minimize your involvement and take care of all the heavy lifting. All we need from you is an initial consultation to understand your vision, complete a brief questionnaire, and gather your feedback for revisions.',
  },
  {
    question:
      'I get most of my clients through referrals, do I really need a premium website?',
    answer:
      'Even with a strong referral network, a professional website builds credibility, provides valuable information to potential clients, and enhances your firm’s reputation. It can also streamline processes such as appointment scheduling, document sharing, and lead generation, allowing your business to grow more efficiently.',
  },
  {
    question: 'Why should I hire you? What makes you unique?',
    answer:
      'We don’t just build visually appealing websites—we ensure your site is conversion-focused, SEO-optimized, high-performing, and features compelling copywriting, all while professionally showcasing your brand and keeping you competitive in the accounting and tax professional space.',
  },
  {
    question:
      'Why should I invest in a premium website when I can use a DIY platform for less?',
    answer:
      'While DIY platforms are cost-effective, they often lack the customization and functionality needed to drive business results. A professionally designed website is tailored to your specific needs, reflects your brand identity, and is optimized to attract and convert potential clients, ultimately providing a better return on investment.',
  },
  {
    question: 'How do you handle revisions?',
    answer:
      'Our initial consultation and planning phase will lay the foundation for approximately 90% of the website. We will, of course, rely on your input and revisions to ensure the final product fully aligns with your vision. Throughout the project, we will have designated checkpoints to gather your feedback, ensuring we stay in sync from start to finish.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Begin by scheduling a call with us below to discuss your specific needs and vision for your website. From there, we will develop a tailored website plan that aligns with your business goals.',
  },

  // More questions...
];

const Question = ({ faq }) => {
  const [openStatus, setOpenStatus] = useState(false);

  const clickHandler = () => {
    setOpenStatus((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      key={faq.question}
      className="border-t border-dividers-1 pt-8 max-sm:pt-4"
    >
      <button
        onClick={clickHandler}
        aria-label="Read more of our frequently asked questions"
        className={clsx(
          'flex w-full cursor-pointer items-center justify-between gap-3 text-left text-1 transition-all duration-300',
          { 'mb-6 max-sm:mb-4': openStatus },
        )}
      >
        <p className="title-200 bold text-[18px] text-2 lg:text-[28px]">
          {faq.question}
        </p>
        <span className="relative flex h-4 w-4 items-center lg:h-6 lg:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(
              'absolute right-0 h-4 w-4 transition-all duration-300 lg:h-6 lg:w-6',
              {
                'rotate-180': openStatus,
                'rotate-90': !openStatus,
              },
            )}
            width="24"
            height="2"
            viewBox="0 0 24 2"
            fill="none"
          >
            <path
              d="M23.998 1C23.998 1.26522 23.9173 1.51957 23.7737 1.70711C23.6301 1.89464 23.4352 2 23.2321 2H0.764004C0.56086 2 0.366035 1.89464 0.222391 1.70711C0.0787456 1.51957 -0.00195312 1.26522 -0.00195312 1C-0.00195312 0.734784 0.0806988 0.445349 0.224344 0.257812C0.367989 0.0702761 0.56086 0 0.764004 0H23.2321C23.4352 0 23.6301 0.105357 23.7737 0.292894C23.9173 0.48043 23.998 0.734784 23.998 1Z"
              fill="#5A5B60"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 h-4 w-4 transition-all lg:h-6 lg:w-6"
            width="24"
            height="2"
            viewBox="0 0 24 2"
            fill="none"
          >
            <path
              d="M23.998 1C23.998 1.26522 23.9173 1.51957 23.7737 1.70711C23.6301 1.89464 23.4352 2 23.2321 2H0.764004C0.56086 2 0.366035 1.89464 0.222391 1.70711C0.0787456 1.51957 -0.00195312 1.26522 -0.00195312 1C-0.00195312 0.734784 0.0806988 0.445349 0.224344 0.257812C0.367989 0.0702761 0.56086 0 0.764004 0H23.2321C23.4352 0 23.6301 0.105357 23.7737 0.292894C23.9173 0.48043 23.998 0.734784 23.998 1Z"
              fill="#5A5B60"
            />
          </svg>
        </span>
      </button>
      <div
        className={clsx('grid pr-12 transition-all duration-300', {
          'grid-rows-0fr': !openStatus,
          'grid-rows-1fr': openStatus,
        })}
      >
        <div
          className={clsx(
            'title-300 text-invert-1-secondary overflow-hidden text-base leading-7 transition-all duration-500',
            {
              'opacity-0': !openStatus,
            },
          )}
        >
          <p className="title-300 w-full max-w-[1122px] text-[18px] text-3 lg:text-[24px]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section relative flex w-full items-center justify-center pb-[48px] pt-[96px] md:pb-[64px] lg:pt-[128px]"
    >
      <div className="section-container flex w-full flex-col gap-12 lg:gap-11">
        <h2 className="heading-2 bold text-center text-[30px] lg:text-start lg:text-[48px]">
          Frequently asked questions
        </h2>
        <div className="divide-dividers space-y-8 divide-y max-lg:space-y-8 max-sm:space-y-4">
          {faqs.map((faq, i) => (
            <Question key={i} faq={faq} />
          ))}
          <div className="w-full border-b border-dividers-1"></div>
        </div>
      </div>
    </section>
  );
}
