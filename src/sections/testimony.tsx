import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Bars3Icon } from '@heroicons/react/24/outline';

const testimonyDetails = [
  [
    {
      review:
        'Startercode finished the task on time and did extensive testing to make sure everything is working. Very knowledgeable in Javascript. Highly recommended for Javascript and any development work, fast response time and easy to communicate to.',

      reviewerDetails: {
        name: 'Ivan Gvardin',
        title: 'Founder of PARIAN',
      },
    },
    {
      review:
        'Startercode has been a pleasure to work with! They built a modern and fully responsive landing page. They handled the entire process which included designing, implementing, and testing it. They are organized, professional, and great communicators.',

      reviewerDetails: {
        name: 'Jonathan Theros',
        title: 'CEO of Dendritic Health AI',
      },
    },
  ],
  [
    {
      review:
        'I have had the pleasure to collaborate with startercode on minor maintenance tasks and a website build. As a developer myself, they are great to work with, and their code is clean and readable for anyone else on my team.',

      reviewerDetails: {
        name: 'Stephanie Hernandez',
        title: 'CEO of BrandingCup Creative Media',
      },
    },
    {
      review:
        'Ronald is an incredible designer who can take conceptual ideas and make them into a stunning design that matches business needs and intentions. Highly reccomend!',

      reviewerDetails: {
        name: 'Charlie Beck',
        title: 'Project Manager of Customer Paradigm',
      },
    },
  ],
  [
    {
      review:
        'Startercode was extremely fast and completed the project exactly how we wanted it in far fewer hours than others had quoted. They were friendly and responsive and great to work with!',

      reviewerDetails: {
        name: 'Michael Blanchard',
        title: 'CEO of BIS Safety Software',
      },
    },
    {
      review:
        "Ronald listened to what was needed for the job, took notes and followed through with what's necessary. Communication was focused and concise. Ronald made himself available after the job to ensure that all was correct. I would definitely hire him again in the future.",

      reviewerDetails: {
        name: 'Phyllip Hall',
        title: 'CEO of NBLK Consulting',
      },
    },
  ],
];
const mobileTestimonyDetails = [
  {
    review:
      'Startercode finished the task on time and did extensive testing to make sure everything is working. Very knowledgeable in Javascript. Highly recommended for Javascript and any development work, fast response time and easy to communicate to.',

    reviewerDetails: {
      name: 'Ivan Gvardin',
      title: 'Founder of PARIAN',
    },
  },
  {
    review:
      'Startercode has been a pleasure to work with! They built a modern and fully responsive landing page. They handled the entire process which included designing, implementing, and testing it. They are organized, professional, and great communicators.',

    reviewerDetails: {
      name: 'Jonathan Theros',
      title: 'CEO of Dendritic Health AI',
    },
  },
  {
    review:
      'I have had the pleasure to collaborate with startercode on minor maintenance tasks and a website build. As a developer myself, they are great to work with, and their code is clean and readable for anyone else on my team.',

    reviewerDetails: {
      name: 'Stephanie Hernandez',
      title: 'CEO of BrandingCup Creative Media',
    },
  },
  {
    review:
      'Ronald is an incredible designer who can take conceptual ideas and make them into a stunning design that matches business needs and intentions. Highly reccomend!',

    reviewerDetails: {
      name: 'Charlie Beck',
      title: 'Project Manager of Customer Paradigm',
    },
  },
  {
    review:
      'Startercode was extremely fast and completed the project exactly how we wanted it in far fewer hours than others had quoted. They were friendly and responsive and great to work with!',

    reviewerDetails: {
      name: 'Michael Blanchard',
      title: 'CEO of BIS Safety Software',
    },
  },
  {
    review:
      "Ronald listened to what was needed for the job, took notes and followed through with what's necessary. Communication was focused and concise. Ronald made himself available after the job to ensure that all was correct. I would definitely hire him again in the future.",

    reviewerDetails: {
      name: 'Phyllip Hall',
      title: 'CEO of NBLK Consulting',
    },
  },
];

export default function Features() {
  return (
    <section
      className="section relative pb-[138px] md:pb-[75px] lg:pb-[128px]"
      id="testimony-home"
    >
      <div className="section-container flex flex-col gap-9">
        <h2 className="heading-3 text-[30px] lg:text-[36px] text-center lg:text-start lg:bold">
          Testimonial
        </h2>

        <TestimonialCarousel
          data={testimonyDetails}
          mobileData={mobileTestimonyDetails}
          gap={36}
        />
      </div>
    </section>
  );
}
