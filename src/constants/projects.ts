import danielmsyImg from '../assets/projects/images/danielmsy.png';
import danielmsy2Img from '../assets/projects/images/danielmsy_2.png';
import buwuhImg from '../assets/projects/images/buwuh.png';
import buwuh2Img from '../assets/projects/images/buwuh_2.png';
import buwuh3Img from '../assets/projects/images/buwuh_3.png';
import buwuh4Img from '../assets/projects/images/buwuh_4.png';
import buwuh5Img from '../assets/projects/images/buwuh_5.png';
import lllImg from '../assets/projects/images/lll.png';
import lll2Img from '../assets/projects/images/lll_2.png';
import lll3Img from '../assets/projects/images/lll_3.png';
import lll4Img from '../assets/projects/images/lll_4.png';
import lll5Img from '../assets/projects/images/lll_5.png';
import lll6Img from '../assets/projects/images/lll_6.png';
import lll7Img from '../assets/projects/images/lll_7.png';
import lll8Img from '../assets/projects/images/lll_8.png';
import cuplikImg from '../assets/projects/images/cuplik.png';
import tanyapadiImg from '../assets/projects/images/tanyapadi.jpg';
import tanyapadi2Img from '../assets/projects/images/tanyapadi_2.jpg';
import tanyapadi3Img from '../assets/projects/images/tanyapadi_3.jpg';
import tanyapadi4Img from '../assets/projects/images/tanyapadi_4.png';
import tanyapadi5Img from '../assets/projects/images/tanyapadi_5.png';
import tanyapadi6Img from '../assets/projects/images/tanyapadi_6.jpeg';
import simpegImg from '../assets/projects/images/simpeg.png';

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  image?: string;
  images?: string[];
  github?: string;
  live?: string;
  figma?: string;
};

export const projects: Project[] = [
  {
    id: "simpeg",
    title: "SIMPEG - Employee Leave Management",
    description: "An employee leave management system developed for Politeknik Negeri Indramayu, streamlining leave requests and approval workflows.",
    longDescription:
      "SIMPEG is an institutional employee leave management application designed to digitize administrative processes. As a Backend Developer, I developed the leave request and approval workflow, helping reduce the time spent on leave-approval bureaucracy by 80%.",
    tags: ["Backend Development", "Web Application", "PHP", "Laravel"],
    features: ["Digital employee leave request management", "Leave approval workflow", "Streamlined administrative processes", "Reduced leave-approval bureaucracy by 80%"],
    image: simpegImg,
    images: [simpegImg],
  },
  {
    id: "tanyapadi",
    title: "TanyaPadi - RAG Agricultural Chatbot",
    description: "A RAG-based agricultural advisory chatbot that provides rice farmers with planting guidance using local soil and climate data.",
    longDescription:
      "TanyaPadi is an AI-powered agricultural advisory application built using Retrieval-Augmented Generation (RAG). It integrates IoT Automatic Weather Station (AWS) data, including soil and climate conditions, to provide contextual planting recommendations for rice farmers in Indramayu. I contributed as an AI Engineer and Mobile Developer, developing the mobile application using Dart and Flutter.",
    tags: ["RAG", "AI", "Flutter", "Dart", "IoT", "Python"],
    features: [
      "Retrieval-Augmented Generation (RAG) implementation",
      "Integration with IoT Automatic Weather Station data",
      "Soil and climate condition-based recommendations",
      "Mobile application developed with Flutter",
      "Localized planting guidance for rice farmers",
    ],
    image: tanyapadiImg,
    images: [tanyapadiImg, tanyapadi2Img, tanyapadi3Img, tanyapadi4Img, tanyapadi5Img, tanyapadi6Img],
  },
  {
    id: "cuplik",
    title: "Cuplik - News Portal Redesign",
    description: "A full-stack rewrite and redesign of a news portal using Laravel, delivering a refreshed web experience.",
    longDescription:
      "Cuplik is a news portal that underwent a complete application rewrite and interface redesign. As a Full-Stack Developer, I contributed to rebuilding the application using Laravel and improving its overall website experience. The platform has reached approximately 2,000 total visits.",
    tags: ["Laravel", "PHP", "Full-Stack Development", "UI/UX"],
    features: ["Complete application rewrite", "News portal interface redesign", "Backend development using Laravel", "Approximately 2,000 total website visits"],
    image: cuplikImg,
    images: [cuplikImg],
    live: "https://cuplik.com",
  },

  {
    id: "daniel-mutaqien-website",
    title: "Daniel Mutaqien - DPR RI Member Official Website",
    description: "An official profile and public engagement website for an Indonesian House of Representatives (DPR RI) member, providing public information, news, and an aspiration platform.",
    longDescription:
      "A professional website developed for H. Daniel Mutaqien Syafiuddin, S.T., a member of the Indonesian House of Representatives (DPR RI). The platform serves as a digital communication channel between the representative and the public, providing information about his profile, activities, latest news, and public engagement. It also features an aspiration platform that allows constituents to submit their concerns, feedback, and expectations directly to his team.",
    tags: ["Web Development", "Laravel", "PHP", "Public Relation"],
    features: ["Official member profile and public information", "Public aspiration submission platform", "Latest news and activity updates", "Activity photo gallery", "Social media integration", "Public communication and engagement"],
    image: danielmsyImg,
    images: [danielmsyImg, danielmsy2Img],
    live: "https://danielmsy.com/",
  },

  {
    id: "buwuh",
    title: "Buwuh - Digital Invitation & Contribution Tracking",
    description: "A digital invitation and contribution tracking platform designed to help manage wedding celebrations and community events.",
    longDescription:
      "Buwuh is a web-based platform that combines digital wedding invitations with a contribution and debt tracking system for traditional celebrations. As a Backend Developer, I developed the platform functionality to help users organize contributions and monitor outstanding debts. The platform is currently used by an early user base of up to 100 users, with ongoing feedback collection for further improvements.",
    tags: ["Backend Development", "Web Application", "JavaScript", "Vite", "React", "NodeJS"],
    features: ["Digital wedding invitations", "Contribution tracking", "Debt management during celebrations", "Support for up to 100 early users", "Continuous improvement based on user feedback"],
    image: buwuhImg,
    images: [buwuhImg, buwuh2Img, buwuh3Img, buwuh4Img, buwuh5Img],
    live: "https://buwuh.com",
  },
  {
    id: "long-life-learning",
    title: "Long Life Learning - RAG Learning Platform",
    description: "A web-based learning material application with RAG capabilities, designed as a Progressive Web App for the KMIPN VIII competition.",
    longDescription:
      "Long Life Learning is a learning material platform developed in preparation for the KMIPN VIII competition. The application incorporates Retrieval-Augmented Generation (RAG) and is designed as a Progressive Web App (PWA), providing a consistent user experience across desktop browsers and mobile devices. I contributed as a UI/UX Designer, focusing on the interface and user experience.",
    tags: ["UI/UX Design", "Figma", "PWA", "RAG"],
    features: ["Learning material platform", "RAG-based learning experience", "Progressive Web App (PWA)", "Responsive desktop and mobile interface", "UI/UX design using Figma"],
    image: lllImg,
    images: [lllImg, lll2Img, lll3Img, lll4Img, lll5Img, lll6Img, lll7Img, lll8Img],
    figma: "https://www.figma.com/design/MGZbX3uUlLBrQJ0jshNUMI/OFA-Learns?node-id=0-1&t=WU7nWsbTRZ68w2bb-1",
  },
];
