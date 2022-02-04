import axios from "axios";

const DUMMY_BLOG_EVENTS = [
  {
    id: "e1",
    title: "Home cleaning service",
    description:
      "We use only high-technology equipment that can remove any dirt. We use only high-technology equipment that can remove any dirt.",
    Author: "Raj Kapoor",
    tag: "#TopQuality, #BestServicesEver",
    date: "2020-01-12",
    image: "../images/blog1bg.png",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Home cleaning service",
    description:
      "We use only high-technology equipment that can remove any dirt.",
    Author: "Raj Kapoor",
    tag: "#TopQuality, #BestServicesEver",
    date: "2020-01-12",
    image: "../images/blog2bg.png",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Home cleaning service",
    description:
      "We use only high-technology equipment that can remove any dirt.",
    Author: "Raj Kapoor",
    tag: "#TopQuality, #BestServicesEver",
    date: "2021-05-12",
    image: "../images/blog3bg.png",
    isFeatured: false,
  },
  {
    id: "e4",
    title: "Home cleaning service",
    description:
      "We use only high-technology equipment that can remove any dirt.",
    Author: "Raj Kapoor",
    tag: "#TopQuality, #BestServicesEver",
    date: "2020-01-12",
    image: "../images/blog4bg.png",
    isFeatured: false,
  },
  {
    id: "e5",
    title: "Home cleaning service",
    description:
      "We use only high-technology equipment that can remove any dirt.",
    Author: "Raj Kapoor",
    tag: "#TopQuality, #BestServicesEver",
    date: "2021-05-12",
    image: "../images/blog5bg.png",
    isFeatured: false,
  },
  {
    id: "e6",
    title: "Home cleaning service",
    description:
      "We use only high-technology equipment that can remove any dirt.",
    Author: "Raj Kapoor",
    tag: "#TopQuality, #BestServicesEver",
    date: "2021-05-12",
    image: "../images/blog6bg.png",
    isFeatured: false,
  },
  {
    id: "e7",
    title: "Home cleaning service",
    description:
      "We use only high-technology equipment that can remove any dirt.",
    Author: "Raj Kapoor",
    tag: "#TopQuality, #BestServicesEver",
    date: "2021-05-12",
    image: "../images/blog1bg.png",
    isFeatured: false,
  },
  {
    id: "e8",
    title: "Home cleaning service",
    description:
      "We use only high-technology equipment that can remove any dirt.",
    Author: "Raj Kapoor",
    tag: "#TopQuality, #BestServicesEver",
    date: "2021-05-12",
    image: "../images/blog3bg.png",
    isFeatured: false,
  },
];

const DUMMY_HERO_AREA = [
  {
    id: "ha1",
    title: "CARE FOR YOUR HOME",
    description: "Cleaning services Available near you ! ",
    isFeatured: true,
  },
];

const DUMMY_CARD_DATA = [
  {
    id: "01",
    title: "Home deep cleaning",
    description:
      "We provide a wide range of Home cleaning service near by you. ",
    image: "images/cardimg.png",
    isFeatured: true,
  },
  {
    id: "02",
    title: "Office and shop cleaning",
    description:
      "We provide a wide range of Home cleaning service near by you. ",
    image: "images/cardimg.png",
    isFeatured: true,
  },
  {
    id: "03",
    title: "kitchen deep cleaning",
    description:
      "We provide a wide range of Home cleaning service near by you. ",
    image: "images/cardimg.png",
    isFeatured: true,
  },
  {
    id: "04",
    title: "bathroom deep cleaning",
    description:
      "We provide a wide range of Home cleaning service near by you. ",
    image: "images/cardimg.png",
    isFeatured: true,
  },
  {
    id: "05",
    title: "sofa cleaning",
    description:
      "We provide a wide range of Home cleaning service near by you. ",
    image: "images/cardimg.png",
    isFeatured: true,
  },
  {
    id: "06",
    title: "carpet cleaning",
    description:
      "We provide a wide range of Home cleaning service near by you. ",
    image: "images/cardimg.png",
    isFeatured: true,
  },
  {
    id: "07",
    title: "water tank cleaning",
    description:
      "We provide a wide range of Home cleaning service near by you. ",
    image: "images/cardimg.png",
    isFeatured: true,
  },
  {
    id: "08",
    title: "car cleaning",
    description:
      "We provide a wide range of Home cleaning service near by you. ",
    image: "images/cardimg.png",
    isFeatured: true,
  },
];

const DUMMY_STEPS_DATA = [
  {
    id: "S1",
    title: "Tell Us Your Requirement",
    description: "Select What Needs To Be Cleaned And Location",
    image: "images/stp1.svg",
    stepimg: "images/1ststep.svg",
    isFeatured: true,
  },
  {
    id: "S2",
    title: "Select A Convenient Date",
    description: "The Date When You Would Want The Service",
    image: "images/stp2.svg",
    stepimg: "images/2ndstep.svg",
    isFeatured: true,
  },
  {
    id: "S3",
    title: "Get Quotes And Hire The Best",
    description: "Receive Charges from Professional ",
    image: "images/stp3.svg",
    stepimg: "images/3rdstep.svg",
    isFeatured: true,
  },
];

const DUMMY_WHYUS__DATA = [
  {
    id: "1",
    title: "Assured service quality",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit. sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "images/whyus1.svg",
    isFeatured: true,
  },
  {
    id: "2",
    title: "5-star rated cleaing expert",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit. sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "images/whyus2.svg",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Eco frendly products ",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit. sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "images/whyus3.svg",
    isFeatured: true,
  },
  {
    id: "4",
    title: "Free quatation",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit. sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "images/whyus4.svg",
    isFeatured: true,
  },
  {
    id: "5",
    title: "Affordable price",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit. sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "images/whyus5.svg",
    isFeatured: true,
  },
  {
    id: "6",
    title: "On-time service",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit. sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "images/whyus6.svg",
    isFeatured: true,
  },
  {
    id: "7",
    title: "Advance equipments",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit. sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "images/whyus7.svg",
    isFeatured: true,
  },
];

const DUMMY_PRICE__DATA = [
  {
    id: "1",
    price: "8000/m",
    title: "regular",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    isFeatured: true,
  },
  {
    id: "2",
    price: "8000/m",
    title: "regular",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    isFeatured: true,
  },
  {
    id: "3",
    price: "8000/m",
    title: "regular",
    description:
      "Lorem ipsum doloLorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    isFeatured: true,
  },
];

const PRICE__LIST_DATA = [
  {
    id: "1",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "2",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "3",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "4",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "5",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "6",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "7",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "8",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "9",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
  {
    id: "10",
    description:
      "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque.",
    isFeatured: true,
  },
];

const COMMERCIAL_DATA = [
  {
    id: "1",
    description: "Office Cleaning",
    isFeatured: true,
  },
  {
    id: "2",
    description: " Floor Cleaning",
    isFeatured: true,
  },
  {
    id: "3",
    description: "Chair Cleaning",
    isFeatured: true,
  },
  {
    id: "4",
    description: "Hotel Cleaning",
    isFeatured: true,
  },
  {
    id: "5",
    description: "Restsurant Cleaning",
    isFeatured: true,
  },
  {
    id: "6",
    description: " Office Window Cleaning",
    isFeatured: true,
  },
  {
    id: "7",
    description: "Commercial Pest Control",
    isFeatured: true,
  },
  {
    id: "8",
    description: " Commercial Painting",
    isFeatured: true,
  },
];
const RESIDENCIAL_DATA = [
  {
    id: "1",
    description: "House Cleaning",
    isFeatured: true,
  },
  {
    id: "2",
    description: " Sofa Cleaning",
    isFeatured: true,
  },
  {
    id: "3",
    description: "Bathroom Cleaning",
    isFeatured: true,
  },
  {
    id: "4",
    description: " Car Cleaning",
    isFeatured: true,
  },
  {
    id: "5",
    description: "Kitchen Cleaning",
    isFeatured: true,
  },
  {
    id: "6",
    description: "Floor Buffing",
    isFeatured: true,
  },
  {
    id: "7",
    description: "Carpet Cleaning",
    isFeatured: true,
  },
  {
    id: "8",
    description: "Pest Control",
    isFeatured: true,
  },
];
const HOMEIMPROVEMENT_DATA = [
  {
    id: "1",
    description: "House Painting",
    isFeatured: true,
  },
  {
    id: "2",
    description: "House Interior",
    isFeatured: true,
  },
  {
    id: "3",
    description: "Home Renovation",
    isFeatured: true,
  },
  {
    id: "4",
    description: "Modular Kitchen",
    isFeatured: true,
  },
];

const CoursePlanningData = [
  {
    title: "Course Planning",
    Data1: "Target Audience",
    Data2: "Course Structuring",
    Data3: "Create a Test Video",
  },
  {
    title: "Course Planning",
    Data1: "Target Audience",
    Data2: "Course Structuring",
    Data3: "Create a Test Video",
  },
  {
    title: "Course Planning",
    Data1: "Target Audience",
    Data2: "Course Structuring",
    Data3: "Create a Test Video",
  },
];

export function getCourseData() {
  return CoursePlanningData;
}

export function getFeaturedEvents() {
  return DUMMY_BLOG_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_BLOG_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const {year, month} = dateFilter;

  let filteredEvents = DUMMY_BLOG_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_BLOG_EVENTS.find((event) => event.id === id);
}

//New data

export function getFeaturedHeroData() {
  return DUMMY_HERO_AREA.filter((data) => data.isFeatured);
}

export function getAllHeroData() {
  return DUMMY_HERO_AREA;
}

export async function getCardData() {
  let response = await axios.get(`/api/services`);
  // axios.post(url, {data})
  console.log({response});
  return response;
  // return DUMMY_CARD_DATA;
}

export function getStepsData() {
  return DUMMY_STEPS_DATA;
}

export function getWhyUSData() {
  return DUMMY_WHYUS__DATA;
}

export function getPriceData() {
  return DUMMY_PRICE__DATA;
}

export function getPricelist() {
  return PRICE__LIST_DATA;
}

export function getCommercialData() {
  return COMMERCIAL_DATA;
}

export function getResidencialData() {
  return RESIDENCIAL_DATA;
}

export function getHomeImprovementData() {
  return HOMEIMPROVEMENT_DATA;
}
