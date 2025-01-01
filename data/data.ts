import type { WorkItem, ServiceItem } from '../types';

// Work Items
export const workItems: WorkItem[] = [
  {
    title: "Check Mate",
    subtitle: "iOS app for daily reminder",
    image: "CheckMate.png",
    description:
      "CheckMate is a location-based and time-based reminder app designed to help users keep track of important items. It’s particularly useful for individuals who frequently forget essential belongings when leaving specific locations. CheckMate leverages location detection to trigger reminders if a user exits a designated area without a specified item. Additionally, users can set reminders based on time, receiving notifications when scheduled.",
  },
  {
    title: "Day Out",
    subtitle: "iOS app to check weather for outdoor family activity",
    image: "DayOut.png",
    description:
      "Day Out is a weather app tailored for families planning outdoor activities. It provides up-to-date weather forecasts, ensuring users can make informed decisions about their day. The app is user-friendly and ideal for parents who want to ensure safe and enjoyable outdoor adventures for their children.",
  },
  {
    title: "Sing Eling",
    subtitle: "iOS game that helps you to learn Javanese",
    image: "SingEling.png",
    description:
      "Sing Eling is an interactive game that makes learning Javanese fun and engaging. The app combines traditional elements of the language with modern gamification techniques, helping users develop vocabulary, grammar, and cultural insights in an enjoyable way.",
  },
];

// Services
export const services: ServiceItem[] = [
  {
    title: "IOS Developer",
    description:
      "Gained 10 months of hands-on experience as a Junior Developer at Apple Developer Academy @BINUS, specializing in building innovative iOS applications.",
    icon: "swiftLogo.png",
  },
  {
    title: "Software Developer",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science at BINUS University Alam Sutera, focusing on mastering software engineering principles and practices.",
    icon: "htmlLogo.png",
  },
  {
    title: "Mobile Programmer",
    description:
      "Experienced in developing robust mobile applications using the Flutter framework and Dart language, ensuring high performance and cross-platform compatibility.",
    icon: "flutterLogo.svg",
  },
];


export default {
  workItems,
  services,
};