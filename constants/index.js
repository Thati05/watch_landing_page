//Live data 

import { big_watch_1, big_watch_2, big_watch_3, thumbnail, }
  from "../assets/images";

import { small_watch_1, small_watch_2, small_watch_3, small_watch_4 } from "../assets/images";



import {
  calendar,
  check,
  credit,
  donate,
  droplet,
  heart, packagebox,
  time, battery, instagram,
  facebook, twitter,
} from "../assets/icons"

import { person_1, person_2 } from "../assets/images";


export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo"
  },
  {
    src: twitter,
    alt: "twitter logo"
  },
  {
    src: instagram,
    alt: "instagram logo"
  },
];

export const footerLinks = [

  {
    title: "Products",
    links: [
      { name: "Vanguard Voyage", link: "/" },
      { name: "Eclipse Elite", link: "/" },
      { name: "Nova Navigator", link: "/" },
      { name: "Zenith Zephyr", link: "/" }
    ],
  },

  {
    title: "Help",
    links: [
      {
        name: "FAQs", link: "/"
      },
      {
        name: "Track Your Order", link: "/"
      },
      {
        name: "Return Policy ", link: "/"
      },
      {
        name: "Terms and Conditions", link: "/"
      },
    ],
  },

  {
    title: "Get in touch",
    links: [
      {
        name: "123-456-7890", link: "tel:+123-456-7890"
      },
      {
        name: "customer@kenako.com", link: "mailto:customer@kenako.com"
      },

      {
        name: "123 Main Street, Monotown, SA", link: "address:123 Main Street, Monotown, SA"
      },

    ]
  }

];

export const slides = [
  {
    url: big_watch_1
  },

  {
    url: big_watch_2
  },
  {
    url: big_watch_3
  },

]












export const reviews = [

  {
    imgURL: person_1,
    review: "I've been wearing my Nako watch for months now, and it still looks brand new. Very impressed with the durability! - Michael "
  },

  {
    imgURL: person_2,
    review: "Absolutely love my Nako watch! The quality is superb, and it looks even better in person. Highly recommend!- Sarah"
  },


];







export const services = [
  {
    imgURL: packagebox,
    label: "Free Shipping",
    subtext: "Experience the convenience of free shipping on all orders from Nako Watches. We believe that every customer deserves a seamless shopping experience, which is why we offer complimentary shipping on our entire collection"


  },
  {
    imgURL: credit,
    label: "Secure Payments",
    subtext: "Shop with confidence knowing your payments are secure with Nako Watches. We use trusted payment gateways to ensure your transactions are safe and protected."
  },
  {
    imgURL: donate,
    label: "Time For Giving Back",
    subtext: "With every purchase, a portion of proceeds goes toward charitable organizations dedicated to meaningful causes. Join us in giving back and making an impact with Nako Watches."
  }

];








export const rightFeature = [

  {
    imgURL: battery,
    title: "Automatic Movement",
    description: " Self-winding mechanism eliminates the need for batteries"
  },

  {
    imgURL: time,
    title: "Dual Time Zone",
    description: "Track two time zones simultaneously for easy travel. "
  },

  {
    imgURL: droplet,
    title: "Water Resistance",
    description: "Suitable for swimming and snorkeling activities "
  },
];




export const leftFeature = [

  {
    imgURL: heart,
    title: "Heart Rate Monitor",
    description: "This feature allows the watch to track your heart rate. "
  },

  {
    imgURL: check,
    title: "Comfort Fit",
    description: "Ensures the watch is comfortable to wear for extended periods. "
  },

  {
    imgURL: calendar,
    title: "Perpetual Calendar",
    description: "calendar with Automatic Adjustment for Leap Years and Short Months "
  },
];










export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: '1K+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '1M', label: 'Customer' },

];

export const watches = [
  {
    thumbnail: thumbnail,
    bigWatch: big_watch_1
  },
  {
    thumbnail: thumbnail,
    bigWatch: big_watch_2
  },
  {
    thumbnail: thumbnail,
    bigWatch: big_watch_3
  },
];

export const products = [
  {
    imgURL: small_watch_1,
    name: "Vanguard Voyage",
    price: " R10,786",
  },
  {
    imgURL: small_watch_2,
    name: "Eclipse Elite",
    price: " R8,573",
  },
  {
    imgURL: small_watch_3,
    name: "Nova Navigator",
    price: " R12,172",
  },

  {
    imgURL: small_watch_4,
    name: "Zenith Zephyr",
    price: " R13,172",
  },
];

