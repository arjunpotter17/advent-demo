import { ContentData } from "../types/content";

export const content: ContentData = {
  company: {
    name: "Advent Stones Calibration Pvt Ltd",
    logo: "/images/Advent/advent_logo.svg",
    phone: "+91 - 9886765133 / +91 8970535109",
    email: "info@adventstones.com",
    address: `ADVENT STONE CALIBRATION PVT LTD
    #19/1, Chokkanahalli Village
    Hesarghatta Bangalore North 
    Rajankunte Bangalore-560064.`,
    social: {
      facebook: "https://facebook.com/graniteelite",
      instagram: "https://instagram.com/graniteelite",
      twitter: "https://twitter.com/graniteelite",
    },
  },

  landing: {
    hero: {
      title: "Premium Granite Solutions",
      subtitle: "Transform your space with elegant, durable granite surfaces",
      images: [
        "/images/Advent/IMG_2589.jpg",
        "/images/Advent/IMG_2590.jpg",
        "/images/Advent/IMG_2591.jpg",
        "/images/Advent/IMG_2592.jpg",
        "/images/Advent/IMG_2593.jpg",
      ],
    },
    intro: {
      title: "Crafting Excellence in Stone",
      description:
        "With over two decades of experience, we've mastered the art of transforming raw granite into stunning architectural features. Our commitment to quality and attention to detail has made us the preferred choice for both residential and commercial projects. We take pride in sourcing the finest materials and employing skilled craftsmen who share our passion for excellence.",
      image: "/images/tombs/IMG_2565.jpg",
    },
    features: [
      {
        title: "Quality Materials",
        description: "Hand-selected premium granite from the finest quarries",
        icon: "/icons/quality-icon.svg",
      },
      {
        title: "Expert Craftsmanship",
        description: "Skilled artisans with decades of experience",
        icon: "/icons/craftsman-icon.svg",
      },
      {
        title: "Lifetime Warranty",
        description: "Our confidence in quality backed by warranty",
        icon: "/icons/warranty-icon.svg",
      },
    ],
    process: {
      title: "Our Process",
      description:
        "From raw material to finished product, every step is handled with precision and care",
      image: "/images/Advent/IMG_2594.jpg",
      steps: [
        {
          title: "Raw Material Procurement",
          description:
            "Selecting the finest quality materials from trusted sources",
          longDescription:
            "Our procurement process begins with careful selection of raw materials from the most reputable quarries. Each block of granite is personally inspected for quality, consistency, and structural integrity. We maintain strong relationships with our suppliers to ensure we always have access to the best materials available.",
          image: "/images/Advent/IMG_2597.jpg",
        },
        {
          title: "Capital Goods and Production Facilities",
          description: "State-of-the-art equipment and modern facilities",
          longDescription:
            "Our production facility is equipped with the latest technology in stone processing. From advanced cutting machines to precision polishing equipment, we invest in the best tools to ensure superior quality. Our facility is designed for efficient workflow and maintains strict safety and quality control standards.",
          image: "/images/Advent/IMG_2598.jpg",
        },
        {
          title: "Manufacturing Process",
          description: "Expert craftsmanship and precision engineering",
          longDescription:
            "Our manufacturing process combines traditional craftsmanship with modern technology. Each piece is cut, shaped, and finished with meticulous attention to detail. Our skilled artisans ensure that every surface is perfectly polished and every edge is precisely finished.",
          image: "/images/Advent/IMG_2599.jpg",
        },
        {
          title: "Internal Inspection",
          description: "Rigorous quality control standards",
          longDescription:
            "Every product undergoes thorough internal quality checks at multiple stages of production. Our quality control team inspects each piece for consistency in color, pattern, finish, and structural integrity. Only pieces that meet our strict standards move forward in the process.",
          image: "/images/Advent/IMG_2600.jpg",
        },
        // {
        //   title: "External Inspection",
        //   description: "Third-party verification for quality assurance",
        //   longDescription: "To ensure unbiased quality assessment, we engage third-party inspectors to verify our products. These independent experts evaluate our work against industry standards and provide certification of quality. This extra step ensures that our customers receive only the highest quality products.",
        //   image: "/images/Advent/IMG_2601.jpg"
        // },
        {
          title: "Shipping to Customer",
          description: "Safe and timely delivery",
          longDescription:
            "We take great care in packaging and shipping our products. Each piece is carefully wrapped and secured for transport. We work with reliable logistics partners to ensure safe and timely delivery to our customers, with real-time tracking and delivery updates.",
          image: "/images/Advent/IMG_2602.jpg",
        },
      ],
    },
  },

  process: {
    title: "Our Process",
    description:
      "Excellence in every step, from raw material to finished product",
    image: "/images/Advent/IMG_2594.jpg",
    steps: [
      {
        title: "Raw Material Procurement",
        description:
          "Selecting the finest quality materials from trusted sources",
        longDescription:
          "Our procurement process begins with careful selection of raw materials from the most reputable quarries. Each block of granite is personally inspected for quality, consistency, and structural integrity. We maintain strong relationships with our suppliers to ensure we always have access to the best materials available.",
        image: "/images/Advent/IMG_2597.jpg",
      },
      {
        title: "Capital Goods and Production Facilities",
        description: "State-of-the-art equipment and modern facilities",
        longDescription:
          "Our production facility is equipped with the latest technology in stone processing. From advanced cutting machines to precision polishing equipment, we invest in the best tools to ensure superior quality. Our facility is designed for efficient workflow and maintains strict safety and quality control standards.",
        image: "/images/Advent/raw_material.jpg",
      },
      {
        title: "Manufacturing Process",
        description: "Expert craftsmanship and precision engineering",
        longDescription:
          "Our manufacturing process combines traditional craftsmanship with modern technology. Each piece is cut, shaped, and finished with meticulous attention to detail. Our skilled artisans ensure that every surface is perfectly polished and every edge is precisely finished.",
        image: "/images/Advent/manufacturing.jpg",
      },
      {
        title: "Internal Inspection",
        description: "Rigorous quality control standards",
        longDescription:
          "Every product undergoes thorough internal quality checks at multiple stages of production. Our quality control team inspects each piece for consistency in color, pattern, finish, and structural integrity. Only pieces that meet our strict standards move forward in the process.",
        image: "/images/Advent/inspection.jpg",
      },
      // {
      //   title: "External Inspection",
      //   description: "Third-party verification for quality assurance",
      //   longDescription: "To ensure unbiased quality assessment, we engage third-party inspectors to verify our products. These independent experts evaluate our work against industry standards and provide certification of quality. This extra step ensures that our customers receive only the highest quality products.",
      //   image: "/images/Advent/IMG_2601.jpg"
      // },
      {
        title: "Shipping to Customer",
        description: "Safe and timely delivery",
        longDescription:
          "We take great care in packaging and shipping our products. Each piece is carefully wrapped and secured for transport. We work with reliable logistics partners to ensure safe and timely delivery to our customers, with real-time tracking and delivery updates.",
        image: "/images/Advent/packed_goods.jpg",
      },
    ],
  },

  products: {
    categories: [
      {
        name: "Classic Memorials",
        description: "Timeless designs honoring loved ones",
        image: "/images/tombs/IMG_2561.jpg",
        items: [
          {
            name: "Classic Memorial 1",
            description: "Traditional design with elegant finish",
            image: "/images/tombs/IMG_2561.jpg",
            price: "Contact for price",
          },
          {
            name: "Classic Memorial 2",
            description: "Timeless tribute with custom engraving",
            image: "/images/tombs/IMG_2562.jpg",
            price: "Contact for price",
          },
          // Add 2-3 more items per category
        ],
      },
      {
        name: "Custom Monuments",
        description: "Personalized memorial tributes",
        image: "/images/tombs/IMG_2562.jpg",
        items: [
          {
            name: "Classic Memorial 1",
            description: "Traditional design with elegant finish",
            image: "/images/tombs/IMG_2561.jpg",
            price: "Contact for price",
          },
          {
            name: "Classic Memorial 2",
            description: "Timeless tribute with custom engraving",
            image: "/images/tombs/IMG_2562.jpg",
            price: "Contact for price",
          },
        ],
      },
      {
        name: "Heritage Collection",
        description: "Traditional craftsmanship",
        image: "/images/tombs/IMG_2563.jpg",
        items: [
          {
            name: "Classic Memorial 1",
            description: "Traditional design with elegant finish",
            image: "/images/tombs/IMG_2561.jpg",
            price: "Contact for price",
          },
          {
            name: "Classic Memorial 2",
            description: "Timeless tribute with custom engraving",
            image: "/images/tombs/IMG_2562.jpg",
            price: "Contact for price",
          },
        ],
      },
      {
        name: "Modern Designs",
        description: "Contemporary memorial solutions",
        image: "/images/tombs/IMG_2564.jpg",
        items: [
          {
            name: "Classic Memorial 1",
            description: "Traditional design with elegant finish",
            image: "/images/tombs/IMG_2561.jpg",
            price: "Contact for price",
          },
          {
            name: "Classic Memorial 2",
            description: "Timeless tribute with custom engraving",
            image: "/images/tombs/IMG_2562.jpg",
            price: "Contact for price",
          },
        ],
      },
      {
        name: "Family Estates",
        description: "Multi-generation memorials",
        image: "/images/tombs/IMG_2565.jpg",
        items: [
          {
            name: "Classic Memorial 1",
            description: "Traditional design with elegant finish",
            image: "/images/tombs/IMG_2561.jpg",
            price: "Contact for price",
          },
          {
            name: "Classic Memorial 2",
            description: "Timeless tribute with custom engraving",
            image: "/images/tombs/IMG_2562.jpg",
            price: "Contact for price",
          },
        ],
      },
    ],
  },

  gallery: {
    projects: [
      {
        title: "Modern Kitchen Renovation",
        description:
          "Complete kitchen transformation with Baltic Brown granite",
        image: "/images/gallery-1.jpg",
        category: "Kitchen",
      },
      {
        title: "Luxury Bathroom Remodel",
        description: "Elegant bathroom featuring Black Galaxy granite",
        image: "/images/gallery-2.jpg",
        category: "Bathroom",
      },
      {
        title: "Commercial Project",
        description:
          "High-traffic commercial space with durable granite surfaces",
        image: "/images/gallery-3.jpg",
        category: "Commercial",
      },
    ],
  },

  about: {
    mission: "Delivering excellence in stone craftsmanship since 1995",
    story:
      "Our journey began in 1995 with a profound passion for natural stone and an unwavering commitment to quality craftsmanship. What started as a modest workshop with just three skilled artisans has blossomed into one of the region's most respected names in premium granite solutions. Through the years, we've carefully built our reputation by maintaining the highest standards in material selection, investing in cutting-edge technology, and nurturing relationships with both suppliers and clients. Our team has grown to include over fifty skilled craftsmen, each bringing their unique expertise and dedication to the art of stone working. We've had the privilege of working on thousands of projects, from intimate residential renovations to large-scale commercial installations, each one teaching us valuable lessons and helping us refine our craft.\n\nAs we've evolved, we've remained true to our founding principles while embracing innovation and sustainable practices. Our state-of-the-art facility now spans 25,000 square feet, housing the latest in stone cutting and finishing technology, but we still maintain the personal touch and attention to detail that defined our early days. We've developed proprietary techniques for stone finishing that combine traditional craftsmanship with modern precision, resulting in surfaces that are not just beautiful but built to last generations. Our commitment to environmental responsibility has led us to implement water recycling systems and adopt eco-friendly practices throughout our production process. Through all our growth and evolution, our dedication to quality, attention to detail, and customer satisfaction remains unwavering, driving us to continue pushing the boundaries of what's possible in stone craftsmanship.",
    team: [
      {
        name: "Rudramurthy",
        position: "Partner & Head of Administration",
        image: "/images/Advent/partners/rudramurthy.webp",
        bio: "20+ years of industry leadership",
      },
      {
        name: "Ponnappa K.M",
        position: "Partner & Head of Sales",
        image: "/images/Advent/partners/ponnappa.webp",
        bio: "Expert in production optimization",
      },
      {
        name: "Iftiquar Ahmed",
        position: "Partner & Head of Manufacturing",
        image: "/images/Advent/partners/ahmed.webp",
        bio: "Master of stone craftsmanship",
      },
      {
        name: "Naresh Babu",
        position: "Partner & Head of Sales and Procurement",
        image: "/images/Advent/partners/naresh.webp",
        bio: "Innovative design specialist",
      },
      {
        name: "Nataraj M",
        position: "Partner & Head of Manufacturing",
        image: "/images/Advent/partners/natraj.webp",
        bio: "Strategic sales leader",
      },
    ],
  },
};
