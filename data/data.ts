import type { WorkItem, ServiceItem } from '../types';

// Work Items
export const workItems: WorkItem[] = [
  {
    title: "Check Mate",
    subtitle: "iOS app for daily reminder",
    jobDesc: "As a Project Manager, I helped lead the team in building Check Mate — from planning and managing the project to jumping into development when needed. It was my first time stepping into a PM role, and I even got the chance to pitch the app to an Apple staff member from Singapore, which was an exciting experience for me.",
    image: "CheckMate.png",
    glide: "checkmate_glide.png",
    description:
      "CheckMate is a location-based and time-based reminder app designed to help users keep track of important items. It’s particularly useful for individuals who frequently forget essential belongings when leaving specific locations. CheckMate leverages location detection to trigger reminders if a user exits a designated area without a specified item. Additionally, users can set reminders based on time, receiving notifications when scheduled.",
  },
  {
    title: "Day Out",
    subtitle: "iOS app to check weather for outdoor family activity",
    jobDesc: "As a Full Stack Developer, I worked closely with the design team to bring their ideas into the app, integrating the UI seamlessly into iOS. I also handled the API integration for real-time weather forecasts and built a unique calendar picker to make planning outdoor family activities more fun and intuitive.",
    image: "DayOut.png",
    glide: "dayout-glide.png",
    description:
      "Day Out is a weather app tailored for families planning outdoor activities. It provides up-to-date weather forecasts, ensuring users can make informed decisions about their day. The app is user-friendly and ideal for parents who want to ensure safe and enjoyable outdoor adventures for their children.",
  },
  {
    title: "Sing Eling",
    subtitle: "iOS game that helps you to learn Javanese",
    jobDesc: "As the Tech Lead for Sing Eling, I managed the development team and integrated the code with the overall game mechanics. I worked closely with the Project Manager and Design Lead to align our vision, brainstorm solutions, and tackle the main challenge we wanted to solve — helping students learn Javanese in a fun and interactive way.",
    image: "SingEling.png",
    glide: "singeling-glide.png",
    description:
      "Sing Eling is an interactive game that makes learning Javanese fun and engaging. The app combines traditional elements of the language with modern gamification techniques, helping users develop vocabulary, grammar, and cultural insights in an enjoyable way.",
  },
  {
    title: "Blooma",
    subtitle: "Mac app for learning tracker",
    jobDesc: "As a Front-End Developer, I helped bring Blooma to life — my first experience building a Mac app. I worked on implementing the interface and making the learning tracker smooth and enjoyable to use. Along the way, I explored gamification concepts, especially the Octalysis Framework, to understand how motivation could make the app more engaging.",
    image: "blooma.png",
    glide: "blooma-glide.png",
    description:
      "A Learning Tracker app that enhances self-awareness and internal motivation in learners by integrating gamification elements, fostering a personalized and engaging learning journey.",
  },
  {
    title: "RattUI",
    subtitle: "Interactive app to learn and explore iOS components.",
    jobDesc: "RattUI was my first experience stepping into a designer role, where I took on the challenge of handling an iOS project from a design perspective. I focused on creating intuitive layouts, experimenting with iOS design components, and working with the team to shape a smooth learning experience. This project helped me understand the design process more deeply and how design decisions directly affect usability and engagement.",
    image: "rattui.png",
    glide: "rattui-glide.png",
    description:
      "RattUI is an interactive learning app aiming to help beginner designers and developers overcome challenges in understanding iOS design components The app provides hands-on simulations and practical exercises, helping users master essential design elements. By integrating gamification elements, RattUI also keeps users engaged and motivated, ensuring they can learn at their own pace.",
  },
  {
    title: "PeePeace",
    subtitle: "A lighthearted gyro-based game that turns explicit humor into a fun and silly challenge.",
    jobDesc: "As a Coder, I implemented the core game mechanics of PeePeace, using the device’s gyroscope to create an interactive and hilarious gameplay experience. Our team’s unique twist was transforming explicit content into a funny and engaging game concept, which pushed me to experiment with physics, controls, and playful design elements.",
    image: "peepeace.jpeg",
    glide: "peepeace-glide.jpeg",
    description:
      "PeePeace is designed to replicate the experience of a man taking a pee. The objective of this game is to direct the piss into the hole of the toilet accurately and avoid its splatter into unwanted areas.",
  },
  {
    title: "BOXing",
    subtitle: "An AR boxing game powered by ARKit, RealityKit, and Vision framework.",
    jobDesc: "As a solo developer, I designed and built BOXing from the ground up. I implemented ARKit and RealityKit to create an immersive augmented reality environment, while integrating Apple’s Vision framework for real-time hand position detection using the front camera. This project challenged me to combine AR interaction, camera-based tracking, and game mechanics into a seamless experience, showcasing my ability to handle both technical implementation and creative design independently.",
    image: "BOXing.png",
    glide: "boxing-glide.png",
    description:
      "Developing an augmented reality (AR) game for iOS using ARKit, RealityKit, and the Vision framework, with a focus on utilizing the front camera for immersive user experiences. The game leverages hand position detection and AR technologies to create an engaging and interactive gameplay environment. Additionally, it references the project that i made called BOXing as a practical example. Augmented Reality (AR) has transformed the way users interact with digital content, providing immersive experiences by blending the virtual world with the real one. Apple’s ARKit and RealityKit frameworks offer powerful tools for creating AR experiences on iOS devices. When combined with the Vision framework, which provides robust hand position detection capabilities, developers can create unique AR applications that use the front camera to enhance interactivity. This publication includes a case study of the BOXing project, an AR game utilizing these technologies.",
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