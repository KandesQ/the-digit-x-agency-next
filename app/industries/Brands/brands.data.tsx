import { ReactNode } from "react";

export type Brand = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
};

export const brands: Brand[] = [
  {
    id: 1,
    title: "Ananth Jewellery",
    description:
      "A jewellery business wanted to attract younger customers while keeping the trust of long-time buyers. We refreshed their content, improved local visibility, and built campaigns that increased inquiries and showroom visits.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path>
        <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path>
        <path d="M2 9h20"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Velavan Hyper Market",
    description:
      "A leading hypermarket looking to drive weekend footfall. We built a steady content rhythm with offer reels and local social campaigns that brought more families through the doors.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Cleopatra Theatre",
    description:
      "A cinema brand wanting better fill rates for new releases. We helped with show-day promos, audience targeting and creative posters that lifted bookings on opening weekends.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M7 3v18"></path>
        <path d="M3 7.5h4"></path>
        <path d="M3 12h18"></path>
        <path d="M3 16.5h4"></path>
        <path d="M17 3v18"></path>
        <path d="M17 7.5h4"></path>
        <path d="M17 16.5h4"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Rasi Mom & Babys",
    description:
      "A baby and kids store building trust with new parents. We crafted warm, helpful content and seasonal campaigns that turned followers into loyal repeat customers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path>
        <path d="M15 12h.01"></path>
        <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path>
        <path d="M9 12h.01"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "LIC",
    description:
      "Worked with LIC advisors on personal branding and lead generation campaigns that helped them reach the right audience and book more policy conversations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 18v-7"></path>
        <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path>
        <path d="M14 18v-7"></path>
        <path d="M18 18v-7"></path>
        <path d="M3 22h18"></path>
        <path d="M6 18v-7"></path>
      </svg>
    ),
  },
  {
    id: 6,
    title: "VV Computer",
    description:
      "A computer retailer that needed a stronger online presence. We rebuilt their social identity and ran ads that brought in steady inquiries for laptops, accessories and services.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20v2"></path>
        <path d="M12 2v2"></path>
        <path d="M17 20v2"></path>
        <path d="M17 2v2"></path>
        <path d="M2 12h2"></path>
        <path d="M2 17h2"></path>
        <path d="M2 7h2"></path>
        <path d="M20 12h2"></path>
        <path d="M20 17h2"></path>
        <path d="M20 7h2"></path>
        <path d="M7 20v2"></path>
        <path d="M7 2v2"></path>
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <rect x="8" y="8" width="8" height="8" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: 7,
    title: "W Saloon",
    description:
      "A premium salon looking to attract a high-quality clientele. We crafted aesthetic content and local campaigns that grew their bookings and brand recall.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <path d="M8.12 8.12 12 12"></path>
        <path d="M20 4 8.12 15.88"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M14.8 14.8 20 20"></path>
      </svg>
    ),
  },
  {
    id: 8,
    title: "JN Supermarket",
    description:
      "A neighbourhood supermarket wanting to reach more local customers. Our social and local marketing campaigns helped them grow their weekend audience and average basket size.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    ),
  },
  {
    id: 9,
    title: "Millers Super Market",
    description:
      "A growing supermarket brand that needed consistent online presence. We delivered ongoing content and offer campaigns that kept the brand top of mind for nearby shoppers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    ),
  },
  {
    id: 10,
    title: "Honda Bike Showroom",
    description:
      "A Honda dealership focused on test rides and lead generation. We built targeted ad funnels that delivered qualified leads each month and supported new launches with campaign creatives.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18.5" cy="17.5" r="3.5"></circle>
        <circle cx="5.5" cy="17.5" r="3.5"></circle>
        <circle cx="15" cy="5" r="1"></circle>
        <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
      </svg>
    ),
  },
  {
    id: 11,
    title: "Triumph Bike Showroom",
    description:
      "A premium two wheeler brand needing aspirational storytelling. We created cinematic content and refined targeting to attract serious, high-intent buyers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18.5" cy="17.5" r="3.5"></circle>
        <circle cx="5.5" cy="17.5" r="3.5"></circle>
        <circle cx="15" cy="5" r="1"></circle>
        <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
      </svg>
    ),
  },
  {
    id: 12,
    title: "SHT Info Tech",
    description:
      "An IT services company wanting to look more credible and professional online. We refreshed their brand presence and built content that established authority in their space.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20v2"></path>
        <path d="M12 2v2"></path>
        <path d="M17 20v2"></path>
        <path d="M17 2v2"></path>
        <path d="M2 12h2"></path>
        <path d="M2 17h2"></path>
        <path d="M2 7h2"></path>
        <path d="M20 12h2"></path>
        <path d="M20 17h2"></path>
        <path d="M20 7h2"></path>
        <path d="M7 20v2"></path>
        <path d="M7 2v2"></path>
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <rect x="8" y="8" width="8" height="8" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: 13,
    title: "Abirami Silks",
    description:
      "A textile brand preparing for the wedding season. Our content and campaigns highlighted their silk collections beautifully and helped grow footfall and bridal inquiries.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
      </svg>
    ),
  },
];
