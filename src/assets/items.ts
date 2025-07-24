import { StaticImageData } from "next/image";
import bbq1 from "@/assets/bbq1.png";
import bbq2 from "@/assets/bbq2.png";
import bbq3 from "@/assets/bbq3.png";
import bbq4 from "@/assets/bbq4.png";
import gradeviewer from "@/assets/gradeviewer.png";
import moa from "@/assets/moa.png";
import moa2 from "@/assets/moa2.png";
import nycosmo from "@/assets/nycosmo.png";
import raiderpanther from "@/assets/raiderpanther.png";
import staymindful from "@/assets/staymindful.png";
import sticktimeapp from "@/assets/sticktimeapp.png";

export type Item = {
  index: number;
  name: string;
  description: string;
  url: string;
  image: StaticImageData | StaticImageData[];
};

export const items: Item[] = [
  {
    index: 0,
    name: "The Raider/Panther Reporter",
    image: raiderpanther,
    description:
      "Custom website created for Todd Sliss at the Raider/Panther Reporter. Custom features of this site include an admin portal for Todd to manage his issues, a full database integrated with user accounts and subscriptions, and Cloudflare R2 for storage of his issues which are large PDFs.",
    url: "https://www.raiderpanther.com",
  },
  {
    index: 1,
    name: "NYCOSMO Realty",
    image: nycosmo,
    description:
      "Custom website created for NYCOSMO Realty. This site features multilingual support and uses an embedded IDX to display listings. We cut monthly costs for our customer 80% by moving them off of their previous platform.",
    url: "https://nycosmo.com/en",
  },
  {
    index: 2,
    name: "Barbeque",
    image: [bbq1, bbq2, bbq3, bbq4],
    description:
      "Barbeque is an open-source web application which allows multiple people to control a Spotify Connect device at once.",
    url: "https://github.com/charleywolf/barbeque",
  },
  {
    index: 3,
    name: "Mixture of Agents",
    image: [moa, moa2],
    description:
      "This is an implementation of a mixture of agents, a web application which allows you to pick and choose different AI models and combine them into one, unique response.",
    url: "https://github.com/charleywolf/mixture",
  },
  {
    index: 6,
    name: "StickTime App",
    image: sticktimeapp,
    description:
      "A web app that aggregates open ice for local NY/CT hockey players.",
    url: "https://sticktimeapp.vercel.app",
  },
  {
    index: 5,
    name: "Grade Viewer",
    image: gradeviewer,
    description:
      "An easy way to view your grades as a Scarsdale High School student, where averages are hidden. Simply paste in your raw grades from Classroom and it will calculate your averages for you. 3,555 visits/uses as of 7/2025.",
    url: "https://gradeviewer.staymindful.org",
  },
  {
    index: 4,
    name: "StayMindful",
    image: staymindful,
    description:
      "A platform providing teens the tools and strategies to improve their mental health through educational articles and mindfulness exercises. Available on web and the app store.",
    url: "https://staymindful.org",
  },
];

export const sortedItems = items.sort((a, b) => a.index - b.index);
