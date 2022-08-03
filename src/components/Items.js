import {  FaGoogle,FaLightbulb, FaGlobe, FaSearchengin,FaWallet, FaRuler, FaBullhorn, FaMedal } from 'react-icons/fa';

const items = [
  {
    icon: <FaGoogle size={50} />,
    name: "The TLD",
    question: "Does the domain extension math the language of the domain name?",
  },
  {
    icon: <FaRuler size={50}/>,
    name: "Domain Length",
    question: "Is the domain short enough to remember?",
  },
  {
    icon: <FaGlobe size={50}/>,
    name: "Language",
    question: "How complex is the actual domain name?",
  },
  {
    icon:<FaMedal size={50}/>,
    name: "International recognition",
    question: "Can the domain name be used on an international scale?",
  },
  {
    icon: <FaSearchengin size={50}/>,
    name: "Search engine",
    question: "Does the domain follow search engine guidelines?",
  },
  {
    icon: <FaBullhorn size={50}/>,
    name: "Advertising Potential",
    question: "Could the domain be used for advertising campaigns?",
  },
  {
    icon:<FaWallet size={50}/>,
    name: "Sales Opportunities",
    question: "Can the domain name be used on an international scale?",
  },
  {
    icon: <FaLightbulb size={50}/>,
    name: "Typo susceptibility",
    question: "How high is the risk of mistyping the domain name?",
  },
  {
    icon: <FaLightbulb size={50}/>,

    name: "Business potential",
    question: "Can the domain be used as your company?",
  },
];

export default items;