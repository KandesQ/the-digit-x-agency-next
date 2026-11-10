import { ReactNode } from "react";

type ClientReview = {
  id: number;
  reviewText: string;
  clientName: string;
  icon: ReactNode;
};

export const clientsReviews: ClientReview[] = [
  {
    id: 1,
    reviewText:
      "The Digitx helped us modernize our marketing without losing the trust we've built over the years. We saw more inquiries within the first few months and our showroom footfall grew steadily.",
    clientName: "Ananth Jewellery",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
    reviewText:
      "Working with The Digitx felt like having an in-house marketing team. Communication was excellent, the creatives matched our brand perfectly, and the results exceeded our expectations.",
    clientName: "Abirami Silks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
  {
    id: 3,
    reviewText:
      "They understood our business quickly and helped us attract more customers through social media and local marketing. Reliable, creative, and easy to work with.",
    clientName: "JN Supermarket",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
    id: 4,
    reviewText:
      "The team captured the elegance of our bridal collections beautifully. Their reels and campaigns brought a steady stream of bridal inquiries during peak wedding season.",
    clientName: "Bridal Jewellery Studio",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
    id: 5,
    reviewText:
      "From festive shoots to wedding season campaigns, The Digitx made our textile brand look premium and approachable. Our showroom walk-ins grew month after month.",
    clientName: "Heritage Silks & Sarees",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
  {
    id: 6,
    reviewText:
      "Consistent content, strong offer creatives and smart local targeting. We genuinely felt the impact on weekend footfall and overall brand awareness.",
    clientName: "Velavan Hyper Market",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
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
];
