import { SIS,edutopia,jenkins,inventory,vote,hds,mangopay } from "../assets/index";
export const projects = [
  {
    _id: 1001,
    title: "Hedless Design System",
    des: "Design and implementation of a headless design System as internal company project that could minimize the time needed to complete project in the future, The result of this design system is a component library as a npm package with its documentation as a storybook.",
    tools:" React, Storybook, CSS, JS, Git, GitHub Actions, GitHub Pages, ClickUp",
    src:hds,
    thesis:"Thesis_1.pdf",
  
    
  },
  {
    _id: 1002,
    title: "Digital Market Place",
    des: "Implementation of a payment process feature for a digital marketplace.",
    tools:" Angular, NestJs, Mango DB, Mangopay API, Google Cloud Services, ClickUp",
    src:mangopay
  },
  {
    _id: 1003,
    title: "Edutopia: Smart Virtual Classroom",
    des: "Design and development of a MERN stack web application for universities and companies, to expand their classroom limits and to make the interaction between the students and the professors much easier by centralizing all the resources (login with professional social networks/start and participate in a real-time video conference / courses / quizzes / projects).",
    tools:" MongoDB, Express, React, Node, Git",
    src:edutopia,
    git:"https://github.com/karunaro/Smart-Virtual-Classroom"
   
  },
  {
    _id: 1004,
    title: "DevOps Project CI-CD",
    des: "Implementation of all the links of the chain of delivery of an application Spring Boot from design to programming to testing and deployment.",
    tools:" Git, Spring Boot, Jenkins, Sonar, Nexus",
    src:jenkins,
    git:"https://github.com/karunaro/Devops_Project"
  },
  {
    _id: 1005,
    title: " Smart Irrigation System",
    des: " Design and Implementation of a Smart Irrigation System to make a wireless sensor network to achieve precise irrigation helped avoiding water wastage, minimize runoffs, neglect human errors and save energy, time, and valuable resources.",
    tools:"  Lora WAN, Arduino IDE, Microsoft Azure, Xamarin ",
    src:SIS,
    thesis:"Thesis_2.pdf",
  },
  {
    _id: 1006,
    title: "Inventory : Warehouse Management",
    des: "Design and development of a Desktop, Web, and Mobile application that helps with the management of a Warehouse.",
    tools:" JAVA (JavaFX), symfony3, MySQL, Codename One, Git, Scrum",
    src:inventory
  },
  {
    _id: 1007,
    title: "Vote DAPP",
    des: "Developed a Vote DAPP web3 application using Ethereum blockchain technology, enabling users to participate in secure and transparent voting processes. Implemented smart contract logic to record and tally the voting results, and utilized ReactJS for the front-end development. The application was deployed on the Ethereum network, ensuring the integrity and immutability of the voting results.",
    tools:" Solidity, Web3-react , ReactJs , Ganache ,Metamask,Kovan Ethereum",
    src:vote,
    git:"https://github.com/karunaro/voteDapp"
  },
  
];