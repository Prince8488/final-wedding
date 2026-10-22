const image = (filename: string) =>
  `${import.meta.env.BASE_URL}images/${filename}`;

export const weddingConfig = {
  couple: {
    groom: {
      firstName: "Prince",
      fullName: "Prince",
      familyName: "Groom",
      parents: "Mr. Narath & Mrs. Munni",
      familyMessage:
        "We eagerly look forward to welcoming {{bride}} into our home and family with boundless love.",
    },
    bride: {
      firstName: "Meenakshi",
      fullName: "Meenakshi",
      familyName: "Bride",
      parents: "Mr. Birbal & Mrs. Sunita",
      familyMessage:
        "With utmost warmth and happiness, we invite you to bless our daughter as she embarks on this magical journey.",
    },
    displayNames: "Prince & Meenakshi",
    initials: "P&M",
    hashtag: "#PrinceMeenakshiForever",
  },
  event: {
    displayDate: "Wednesday, November 25, 2026",
    shortDate: "25 Nov 2026",
    footerDate: "November 25, 2026",
    countdownTarget: "2026-11-25T22:00:00",
    calendarStart: "20261125T103000Z",
    calendarEnd: "20261125T163000Z",
    rsvpDeadline: "October 25, 2026",
    countdownLabel: "Counting Down To The Sacred Vows",
  },
  venue: {
    name: "Hotel Meenakshi Rooms & Rooftop Restaurant",
    shortName: "Hotel Meenakshi Rooms & Rooftop",
    address:
      "NH69, near Maruti Showroom, Infinity Cars, Pratap Nagar, Rasuliya, Narmadapuram, Madhya Pradesh 461001",
    city: "Narmadapuram",
    region: "Madhya Pradesh",
    mapUrl:
      "https://www.google.com/maps/place/Hotel+Meenakshi+Rooms+%26+Rooftop+Restaurant/@22.741072,77.717884,17z/data=!4m9!3m8!1s0x397dcf10b9fb7a59:0x71131b4e1f7c3fc2!5m2!4m1!1i2!8m2!3d22.7410671!4d77.7204643!16s%2Fg%2F11j8t1p62l?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D/data=!4m20!1m10!3m9!1s0x397dcf10b9fb7a59:0x71131b4e1f7c3fc2!2sHotel+Meenakshi+Rooms+%26+Rooftop+Restaurant!5m2!4m1!1i2!8m2!3d22.7410671!4d77.7204643!16s%2Fg%2F11j8t1p62l!3m8!1s0x397dcf10b9fb7a59:0x71131b4e1f7c3fc2!5m2!4m1!1i2!8m2!3d22.7410671!4d77.7204643!16s%2Fg%2F11j8t1p62l?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
    phoneNumber: "09708080804",
    phoneHref: "tel:+919708080804",
    image: image("hero-palace.webp"),
    imageAlt: "Wedding celebration venue",
    description:
      "Located in Narmadapuram, Madhya Pradesh, the venue welcomes family and friends to celebrate the wedding.",
    airport:
      "Raja Bhoj Airport (BHO), Bhopal, is approximately 2 hours 30 minutes by cab to Narmadapuram railway station (as advised by the family); confirm the journey time before travel.",
    rail: "The train journey is approximately 4 hours; the departure station and service should be confirmed before travel.",
  },
  hero: {
    tagline: "The Wedding Celebration",
    invitation:
      "Together with their families, request the honour of your presence as they unite in sacred matrimony.",
    image: image("hero-palace.webp"),
    imageAlt: "Hotel Meenakshi Wedding Venue, Narmadapuram",
  },
  story: {
    introduction:
      "Some love stories are destined to unfold in the simplest moments. Ours began with a glance, grew through friendship, and blossomed into a love woven with laughter, countless memories, and an unbreakable bond. Through every season of life, our hearts found their way closer, until two separate journeys became one beautiful story.",
    quote:
      "Of all the unexpected things life brought us, finding each other was the most beautiful. And choosing each other, our forever",
    milestones: [
      {
        //     year: "November 2018",
        //     title: "The First Glance",
        //     location: "Our First Company",
        //     description:
        //       "{{groom}} first saw {{bride}} when she joined the company as an intern. It was love at first sight for him — a feeling that began quietly, before either of them knew how much their story would come to mean.",
        image: image("couple-portrait.webp"),
      },
      //   {
      //     year: "2018 onwards",
      //     title: "From Friendship to Forever",
      //     location: "Bus Rides, Parks & Little Adventures",
      //     description:
      //       "Little by little, we became friends, shared our feelings, and grew closer. We spent long hours talking on bus rides, stayed on phone calls until midnight, met in parks, went out together, and made countless happy memories. There was no single formal proposal; our relationship developed naturally, through time, trust, and the joy of being together. Even as we changed companies, we stayed connected.",
      //     image: image("sangeet-night.jpg"),
      //   },
      //   {
      //     year: "November 2026",
      //     title: "The Eternal Promise",
      //     location: "Narmadapuram, Madhya Pradesh",
      //     description:
      //       "Our journey has carried us through beautiful memories and real challenges, including the effort to earn family approval. Now, on 25 November 2026, we look forward to beginning our married life surrounded by our loved ones, carrying every conversation, every laugh, and every chapter that brought us here into the future we will build together.",
      //     image: image("mandap-decor.jpg"),
      //   },
    ],
  },
  families: [
    { role: "The Groom", person: "groom" },
    { role: "The Bride", person: "bride" },
  ],
  familyInviteTokens: {
    iK7XxhutALuheoIJOyYHpZtBxfGbKqAs: "groom",
    buaVGRlGsuZHep5P2zBx6lEINTnVcdbo: "bride",
  },
  familyNameScenarios: {
    groom: {
      groom: {
        fullName: "Prince Gupta",
        familyName: "Gupta",
        parents: "Mr. Narath Prasad Gupta & Mrs. Munni Gupta",
      },
      bride: {
        fullName: "Meenakshi Gupta",
        familyName: "Gupta",
        parents: "Mr. Birbal Gupta & Mrs. Sunita Gupta",
      },
    },
    bride: {
      groom: {
        fullName: "Prince Patel",
        familyName: "Patel",
        parents: "Mr. Narath Prasad Patel & Mrs. Munni Patel",
      },
      bride: {
        fullName: "Meenakshi Patel",
        familyName: "Patel",
        parents: "Mr. Birbal Patel & Mrs. Sunita Patel",
      },
    },
  },
  events: [
    {
      id: "sangeet",
      category: "pre-wedding",
      name: "Sangeet & Engagement",
      subTitle: "Starlight, Beats & High Spirits",
      date: "Tuesday, Nov 24, 2026",
      time: "7:00 PM onwards",
      venue: "Hotel Meenakshi Rooms & Rooftop Restaurant",
      locationDetails:
        "Hotel Meenakshi Rooms & Rooftop Restaurant, Narmadapuram, Madhya Pradesh",
      mapUrl:
        "https://www.google.com/maps/place/Hotel+Meenakshi+Rooms+%26+Rooftop+Restaurant/@22.741072,77.717884,17z/data=!4m9!3m8!1s0x397dcf10b9fb7a59:0x71131b4e1f7c3fc2!5m2!4m1!1i2!8m2!3d22.7410671!4d77.7204643!16s%2Fg%2F11j8t1p62l?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D/",
      image: image("sangeet-night.webp"),
      calendarParams: { start: "20261124T133000Z", end: "20261124T200000Z" },
      rsvpLabel: "Sangeet Night",
    },
    {
      id: "haldi-mehendi",
      category: "pre-wedding",
      name: "Haldi & Mehendi Soiree",
      subTitle: "Hues of Sun & Henna Blessings",
      date: "Wednesday, Nov 25, 2026",
      time: "7:00 AM onwards",
      venue: "Hotel Meenakshi Rooms & Rooftop Restaurant",
      locationDetails:
        "Hotel Meenakshi Rooms & Rooftop Restaurant, Narmadapuram, Madhya Pradesh",
      mapUrl:
        "https://www.google.com/maps/place/Hotel+Meenakshi+Rooms+%26+Rooftop+Restaurant/@22.741072,77.717884,17z/data=!4m9!3m8!1s0x397dcf10b9fb7a59:0x71131b4e1f7c3fc2!5m2!4m1!1i2!8m2!3d22.7410671!4d77.7204643!16s%2Fg%2F11j8t1p62l?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D/",
      image: image("haldi-ceremony.webp"),
      calendarParams: { start: "20261125T050000Z", end: "20261125T100000Z" },
      rsvpLabel: "Haldi & Mehendi",
    },

    {
      id: "wedding-pheras",
      category: "wedding",
      name: "Baraat & Sacred Pheras",
      subTitle: "The Royal Union & Vows",
      date: "Wednesday, Nov 25, 2026",
      time: "4:00 PM onwards",
      venue: "Hotel Meenakshi Rooms & Rooftop Restaurant",
      locationDetails:
        "Hotel Meenakshi Rooms & Rooftop Restaurant, Narmadapuram, Madhya Pradesh",
      mapUrl:
        "https://www.google.com/maps/place/Hotel+Meenakshi+Rooms+%26+Rooftop+Restaurant/@22.741072,77.717884,17z/data=!4m9!3m8!1s0x397dcf10b9fb7a59:0x71131b4e1f7c3fc2!5m2!4m1!1i2!8m2!3d22.7410671!4d77.7204643!16s%2Fg%2F11j8t1p62l?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D/",
      image: image("mandap-decor.webp"),
      calendarParams: { start: "20261125T103000Z", end: "20261125T160000Z" },
      rsvpLabel: "Wedding Pheras",
    },
    {
      id: "reception",
      category: "reception",
      name: "Grand Royal Reception",
      subTitle: "An Evening of Elegance & Gratitude",
      date: "Monday, Nov 30, 2026",
      time: "7:30 PM onwards",
      venue: "Classic Banquet",
      locationDetails: "Birgunj, Madhesh Province 44300, Nepal",
      mapUrl:
        "https://www.google.com/maps/place/Classic+Banquet/@27.0166167,84.8807681,20z/data=!4m17!1m10!3m9!1s0x3993543e3d35a3eb:0x7f4cf210873b3426!2sHotel+Kailash!5m2!4m1!1i2!8m2!3d27.0106433!4d84.873905!16s%2Fg%2F1tkb3j6g!3m5!1s0x39935518b78129d1:0xe8e0692c41c7dcf4!8m2!3d27.0166167!4d84.8807681!16s%2Fg%2F11x026x06t?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
      phoneNumber: "+9779855021524",
      image: image("hero-palace.webp"),
      calendarParams: { start: "20261130T134500Z", end: "20261130T184500Z" },
      rsvpLabel: "Royal Reception",
    },
  ],
  gallery: [
    {
      id: 1,
      category: "prewedding",
      title: "At the Wedding Entrance",
      subtitle: "Prince & Meenakshi",
      url: image("couple-portrait.webp"),
    },
    {
      id: 2,
      category: "venue",
      title: "A Dance Together",
      subtitle: "A Celebration Moment",
      url: image("wedding.webp"),
    },
    {
      id: 3,
      category: "decor",
      title: "Courtyard Portrait",
      subtitle: "Prince & Meenakshi",
      url: image("couple.webp"),
    },
  ],
  //   rsvp: {
  //     guestLimit: 8,
  //     defaultDiet: "Traditional Rajasthani Thali & Multi-Cuisine",
  //     diets: [
  //       {
  //         value: "Traditional Rajasthani Thali & Multi-Cuisine",
  //         label: "Standard Multi-Cuisine Deluxe",
  //       },
  //       {
  //         value: "Pure Jain (No Onion & Garlic)",
  //         label: "Pure Jain (No Onion / Garlic)",
  //       },
  //       {
  //         value: "Strict Sattvic Vegetarian",
  //         label: "Strict Sattvic Vegetarian",
  //       },
  //     ],
  //   },
  //   blessings: [
  //     {
  //       id: "1",
  //       name: "Rohan & Meera Kapoor",
  //       relation: "Groom's Cousin & Family • Mumbai",
  //       message:
  //         "May your lives be filled with endless laughter, sunset lake cruises, and unconditional warmth. We cannot wait to dance our hearts out at the Sangeet!",
  //       date: "Nov 12, 2026",
  //     },
  //     {
  //       id: "2",
  //       name: "Dr. Vikram & Shailja Sharma",
  //       relation: "Bride's Uncle & Aunt • Jaipur",
  //       message:
  //         "Dearest {{bride}} & {{groom}}, watching you both grow into such wonderful individuals has been a privilege. May Lord Ganesha bless your sacred union with eternal harmony.",
  //       date: "Nov 14, 2026",
  //     },
  //     {
  //       id: "3",
  //       name: "Karan Johar & College Crew",
  //       relation: "Best Friends • New Delhi",
  //       message:
  //         "From college canteen debates to your wedding day, we always knew you guys were soulmates! Ready to toast to {{hashtag}}!",
  //       date: "Nov 16, 2026",
  //     },
  //   ],
  gift: {
    title: "Your Blessings Are Our Greatest Gift",
    message:
      "Your presence at our wedding celebration is the sweetest gift we could ever ask for. Please bless us with your love, affection, and joyful memories.",
    quote: "Blessings in person are priceless.",
  },
} as const;
