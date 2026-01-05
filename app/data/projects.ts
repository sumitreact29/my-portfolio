// "use client";

export type Platform = "iOS" | "Android" | "Web" | "React Native" | "Flutter";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  platform: string[];
  image: string;
  link: string;
};

export const projects = [
  {
    title: "Miles App",
    subtitle: "Travel, Shop & Earn Rewards",
    description:
      "A large-scale universal rewards and travel platform. Optimized API performance to reduce data load times by 30% and implemented gamification-driven SwiftUI flows that increased user retention by 25%. Contributed to CI/CD automation for reliable releases.",
    tech: ["SwiftUI", "Combine", "REST APIs", "Firebase", "Fastlane", "CI/CD"],
    platform: ["iOS"],
    image: "/images/demo.jpg",
    link: "https://apps.apple.com/us/app/miles-travel-shop-get-cash/id1393913947",
  },
  {
    title: "Fitburn",
    subtitle: "Real-Time Fitness Tracking",
    description:
      "A real-time fitness and health tracking application with Firebase-backed live data synchronization. Implemented background processing for continuous tracking and improved overall app stability by 20% using performance-focused SwiftUI architecture.",
    tech: ["SwiftUI", "Firebase", "HealthKit", "Background Tasks"],
    platform: ["iOS"],
    image: "/images/fitburn1.jpg",
    link: "https://apps.apple.com/us/app/fitburn-watch/id6502515644",
  },
  {
    title: "Stored App",
    subtitle: "E-Commerce & Social Shopping",
    description:
      "A production-grade e-commerce and social shopping platform with real-time updates and Firebase-powered push notifications. Achieved a 98% crash-free experience through memory optimization, efficient threading, and comprehensive XCTest-based testing.",
    tech: ["Swift", "UIKit", "Firebase", "REST APIs", "XCTest"],
    platform: ["iOS", "Android"],
    image: "/images/Img1.jpg",
    link: "https://apps.apple.com/in/app/stored-social-shopping/id1663518540",
  },
  {
    title: "Soniq",
    subtitle: "Music Discovery & Artist Tracking",
    description:
      "A music discovery and tracking application built completely from scratch using SwiftUI. Integrated Apple MusicKit and Spotify APIs with a custom artist-tracking algorithm to deliver real-time notifications for new music releases.",
    tech: ["SwiftUI", "Combine", "MusicKit", "Spotify APIs"],
    platform: ["iOS"],
    image: "/images/Soniq2.jpg",
    link: "https://apps.apple.com/in/app/soniq-your-music-companion/id6744140818",
  },
  {
    title: "Flocco",
    subtitle: "IoT Grocery Automation",
    description:
      "An IoT-enabled grocery automation application that reduced order processing time by 15%. Integrated Razorpay for secure in-app payments and ensured reliable real-time communication between mobile and backend systems.",
    tech: ["Swift", "IoT", "Payments", "REST APIs"],
    platform: ["iOS", "Android", "Web"],
    image: "/images/Img1.jpg",
    link: "https://apps.apple.com/in/app/flocco/id1629581523",
  },
  {
    title: "Adawatie",
    subtitle: "Multilingual E-Commerce Platform",
    description:
      "A multilingual (Arabic-supported) e-commerce application with multiple payment gateway integrations. Improved in-app search performance by approximately 40% through optimized indexing and query strategies.",
    tech: ["Swift", "UIKit", "Localization", "Payments"],
    platform: ["iOS", "Android"],
    image: "/images/demo.jpg",
    link: "https://apps.apple.com/in/app/adawatie/id1473815126",
  },
  {
    title: "Meal ID",
    subtitle: "Meal Prep & Nutrition Planner",
    description:
      "A meal planning and nutrition tracking application focused on personalized meal prep and dietary organization. Contributed to UI improvements, data handling, and performance optimization for a smooth user experience.",
    tech: ["Swift", "UIKit", "Core Data"],
    platform: ["iOS"],
    image: "/images/Img2.jpg",
    link: "https://apps.apple.com/us/app/meal-id-meal-prep-planner/id1504099975",
  },
  {
    title: "Palace App",
    subtitle: "Luxury Retail & Lifestyle Platform",
    description:
      "A high-end retail and lifestyle application delivering curated content and shopping experiences. Focused on UI responsiveness, stability, and seamless API-driven content updates.",
    tech: ["Swift", "UIKit", "REST APIs"],
    platform: ["iOS", "Android"],
    image: "/images/Img3.jpg",
    link: "https://apps.apple.com/gb/app/palaceapp/id1439058382",
  },
  {
    title: "LilRequester",
    subtitle: "Task & Request Management",
    description:
      "A lightweight productivity application designed for managing requests and tasks efficiently. Improved app stability and usability through UI refinements and bug fixes.",
    tech: ["Swift", "UIKit"],
    platform: ["iOS", "Android"],

    image: "/images/Img4.jpg",
    link: "https://apps.apple.com/us/app/lil-requester/id1488416772",
  },
  {
    title: "Dynamite Travel",
    subtitle: "Travel Booking Platform",
    description:
      "A travel booking and management application enabling users to explore and book travel experiences. Contributed to feature development, API integration, and performance improvements.",
    tech: ["Swift", "UIKit", "REST APIs"],
    platform: ["iOS", "Android"],
    image: "/images/Img5.jpg",
    link: "https://apps.apple.com/us/app/dynamite-travel-1-0/id998736815",
  },
];
