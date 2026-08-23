import { gallery, img } from '@/lib/images';
import type { Package } from '@/types';
import {
  COMMON_PACKAGE_FAQS,
  INTERNATIONAL_EXCLUSIONS,
  INTERNATIONAL_INCLUSIONS,
  experience,
  hotel,
  standardVariants,
} from './shared';

/** International holiday packages. */
export const internationalPackages: Package[] = [
  {
    id: 'pkg-dubai-premium',
    slug: 'dubai-premium-holiday-4-nights',
    title: 'Dubai Premium Holiday',
    destinationId: 'dest-dubai',
    category: 'family',
    categories: ['family', 'luxury', 'honeymoon', 'group'],
    duration: 4,
    startingPrice: 46500,
    compareAtPrice: 54900,
    heroImage: img('pkg-dubai-premium', 'wide'),
    gallery: gallery('pkg-dubai-premium', 5),
    shortDescription:
      'City tour, Burj Khalifa at sunset, a desert safari and a dhow cruise — Dubai\'s highlights in four well-paced nights.',
    overview:
      'A first-time Dubai itinerary that does not exhaust you. Day two covers the old city and the souks before the modern skyline; day three is the desert safari, which is the single experience nobody regrets; day four is Burj Khalifa and Dubai Mall with a dhow dinner on the Marina. Visa assistance and all transfers are handled, so you arrive with nothing left to arrange.',
    highlights: [
      'At the Top, Burj Khalifa levels 124 and 125',
      'Evening desert safari with BBQ dinner and live show',
      'Dhow dinner cruise at Dubai Marina',
      'Old Dubai souks and an abra ride across the creek',
      'Visa processing assistance included',
    ],
    mealPlan: 'Breakfast included, plus two dinners',
    hotelCategory: '3 to 5 Star',
    transfer: 'Airport transfers and shared tour coaches',
    tourType: 'Group tours with private transfers',
    rating: 4.8,
    reviewCount: 312,
    featured: true,
    offerBadge: 'Save 15%',
    inclusions: [
      ...INTERNATIONAL_INCLUSIONS,
      'Half-day Dubai city tour',
      'Desert safari with dune bashing, camel ride and BBQ dinner',
      'Burj Khalifa At the Top tickets (levels 124 and 125)',
      'Dhow dinner cruise at Dubai Marina',
    ],
    exclusions: INTERNATIONAL_EXCLUSIONS,
    priceVariants: standardVariants(46500, { mealPlan: 'Breakfast included, plus two dinners' }),
    itinerary: [
      {
        day: 1,
        title: 'Arrive Dubai',
        description:
          'Met at Dubai International after immigration and transferred to your hotel. The rest of the evening is free — most guests walk down to the nearest metro station or mall to get their bearings.',
        activities: ['Airport pickup', 'Hotel check-in', 'Evening at leisure'],
        image: img('pkg-dubai-premium-d1', 'card'),
      },
      {
        day: 2,
        title: 'Old and new Dubai',
        description:
          'A half-day city tour starting in Al Fahidi and the Dubai Museum, then an abra across the creek to the gold and spice souks, followed by the drive past Jumeirah Mosque, Burj Al Arab and the Palm.',
        activities: [
          'Al Fahidi historic quarter',
          'Abra ride across Dubai Creek',
          'Gold and spice souks',
          'Jumeirah Mosque and Burj Al Arab photo stop',
        ],
        image: img('pkg-dubai-premium-d2', 'card'),
      },
      {
        day: 3,
        title: 'Desert safari',
        description:
          'Morning free for the beach or a mall. Around 3pm a 4x4 collects you for dune bashing in the Lahbab desert, then a camp with camel rides, henna, tanoura and belly dance performances and a BBQ dinner under the sky.',
        activities: ['Morning at leisure', 'Dune bashing', 'Camel ride and henna', 'Live desert camp show', 'BBQ dinner'],
        image: img('pkg-dubai-premium-d3', 'card'),
      },
      {
        day: 4,
        title: 'Burj Khalifa and Marina cruise',
        description:
          'Timed entry to At the Top for the late-afternoon light, time in Dubai Mall for the aquarium and fountain show, then a dhow dinner cruise along the Marina with the towers lit up on both sides.',
        activities: ['Burj Khalifa At the Top', 'Dubai Mall and Aquarium', 'Dubai Fountain show', 'Marina dhow dinner cruise'],
        image: img('pkg-dubai-premium-d4', 'card'),
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Breakfast, checkout and a private transfer to the airport.',
        activities: ['Breakfast', 'Checkout', 'Airport transfer'],
      },
    ],
    hotels: [
      hotel(
        'Citymax Al Barsha',
        3,
        'Al Barsha, Dubai',
        'Reliable, well-located hotel a short walk from Mall of the Emirates and the metro.',
        'hotel-dubai-citymax',
      ),
      hotel(
        'Marina Byblos',
        4,
        'Dubai Marina',
        'Marina-side hotel with a rooftop pool and walking access to JBR beach and The Walk.',
        'hotel-dubai-byblos',
        'Superior room',
      ),
      hotel(
        'Address Skyview Downtown',
        5,
        'Downtown Dubai',
        'Luxury tower with Burj Khalifa views, a sky bridge pool and direct access to Dubai Mall.',
        'hotel-dubai-address',
        'Burj-view deluxe room',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Desert safari with BBQ dinner', 'Dune bashing, camel rides and a live camp show.', 'exp-dubai-safari'),
      experience('Burj Khalifa At the Top', 'Observation decks on levels 124 and 125, best at sunset.', 'exp-dubai-burj'),
      experience('Dhow dinner cruise', 'Two hours along Dubai Marina with a buffet dinner.', 'exp-dubai-dhow'),
      experience('Abu Dhabi day trip', 'Sheikh Zayed Grand Mosque and the Louvre Abu Dhabi.', 'exp-dubai-abudhabi'),
      experience('Miracle Garden', 'Seasonal flower park, open roughly November to May.', 'exp-dubai-miracle'),
      experience('Aquaventure Waterpark', 'Atlantis waterpark on The Palm — a full day for families.', 'exp-dubai-aquaventure'),
    ],
    faqs: [
      {
        question: 'Is the visa included in the price?',
        answer:
          'Visa processing assistance is included; the government visa fee is charged separately at actuals so you only pay what the consulate charges.',
      },
      {
        question: 'Is the desert safari suitable for children or elderly travellers?',
        answer:
          'Yes. We can request a no-dune-bashing vehicle that goes straight to the camp, which works well for young children, pregnant travellers and anyone with back problems.',
      },
      {
        question: 'Can we add Abu Dhabi or a theme park?',
        answer:
          'Both are popular additions. Abu Dhabi works as a full-day trip and theme parks need a dedicated day, so we usually extend the trip by one or two nights.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-01-05',
    popularity: 99,
  },
  {
    id: 'pkg-bali-escape',
    slug: 'bali-6-nights-7-days',
    title: 'Bali Escape',
    destinationId: 'dest-bali',
    category: 'honeymoon',
    categories: ['honeymoon', 'luxury', 'family', 'adventure'],
    duration: 6,
    startingPrice: 52900,
    compareAtPrice: 61500,
    heroImage: img('pkg-bali-escape', 'wide'),
    gallery: gallery('pkg-bali-escape', 5),
    shortDescription:
      'Three nights in Ubud among the rice terraces, three by the southern beaches, and a full day at Nusa Penida.',
    overview:
      'Bali split the way it should be. You begin inland in Ubud — waterfalls, rice terraces, temples and a jungle villa — then move south to Seminyak or Nusa Dua for beach clubs, Uluwatu\'s cliff temple and the Kecak dance at sunset. A full day at Nusa Penida gives you the Kelingking cliff view that most people come for. Private car and driver throughout, so nothing runs on a stranger\'s schedule.',
    highlights: [
      'Private-pool villa option in Ubud',
      'Tegallalang rice terraces and the Bali swing',
      'Nusa Penida full-day boat trip',
      'Uluwatu temple and Kecak fire dance at sunset',
      'Tanah Lot sunset and Tirta Empul water temple',
    ],
    mealPlan: 'Breakfast included',
    hotelCategory: '4 to 5 Star',
    transfer: 'Private car with English-speaking driver',
    tourType: 'Private tour',
    rating: 4.9,
    reviewCount: 268,
    featured: true,
    offerBadge: 'Save 14%',
    inclusions: [
      ...INTERNATIONAL_INCLUSIONS,
      'Private car with driver for all sightseeing days',
      'Nusa Penida day trip with fast boat and lunch',
      'Uluwatu temple entry and Kecak dance tickets',
    ],
    exclusions: [
      ...INTERNATIONAL_EXCLUSIONS,
      'Water sports at Tanjung Benoa',
      'Bali tourist levy payable on arrival',
    ],
    priceVariants: standardVariants(52900),
    itinerary: [
      {
        day: 1,
        title: 'Arrive Bali and transfer to Ubud',
        description:
          'Visa on arrival at Denpasar, then a ninety-minute drive inland to Ubud. Evening free — the Campuhan ridge walk at dusk is a good, gentle start.',
        activities: ['Airport pickup', 'Drive to Ubud', 'Villa check-in', 'Optional Campuhan ridge walk'],
        image: img('pkg-bali-escape-d1', 'card'),
      },
      {
        day: 2,
        title: 'Ubud rice terraces and waterfalls',
        description:
          'Tegallalang terraces early before the crowds, then the Bali swing, Tegenungan waterfall and the Tirta Empul spring temple. Afternoon at the Monkey Forest and the art market.',
        activities: ['Tegallalang rice terraces', 'Bali swing', 'Tegenungan waterfall', 'Tirta Empul temple', 'Monkey Forest'],
        image: img('pkg-bali-escape-d2', 'card'),
      },
      {
        day: 3,
        title: 'Nusa Penida day trip',
        description:
          'An early fast boat from Sanur to Nusa Penida for the west-coast circuit — Kelingking beach viewpoint, Angel\'s Billabong, Broken Beach and Crystal Bay. A long day, and the best one.',
        activities: ['Fast boat to Nusa Penida', 'Kelingking viewpoint', 'Angel\'s Billabong', 'Broken Beach', 'Crystal Bay'],
        image: img('pkg-bali-escape-d3', 'card'),
      },
      {
        day: 4,
        title: 'Ubud to the south coast',
        description:
          'Check out and drive south, stopping at the Tanah Lot sea temple for sunset before checking in at Seminyak or Nusa Dua.',
        activities: ['Drive south', 'Tanah Lot temple', 'Beach hotel check-in', 'Evening at leisure'],
        image: img('pkg-bali-escape-d4', 'card'),
      },
      {
        day: 5,
        title: 'Uluwatu and the Kecak dance',
        description:
          'Morning free for the beach or a beach club. Afternoon at Padang Padang beach, then Uluwatu temple on its cliff edge and the Kecak fire dance as the sun goes down.',
        activities: ['Morning at leisure', 'Padang Padang beach', 'Uluwatu temple', 'Kecak fire dance', 'Jimbaran seafood dinner'],
        image: img('pkg-bali-escape-d5', 'card'),
      },
      {
        day: 6,
        title: 'Free day in the south',
        description:
          'Nothing scheduled. Options include water sports at Tanjung Benoa, a spa afternoon, Seminyak shopping or simply the hotel pool.',
        activities: ['Optional water sports', 'Optional spa', 'Seminyak shopping', 'Beach time'],
        image: img('pkg-bali-escape-d6', 'card'),
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Breakfast, checkout and a transfer to Denpasar airport.',
        activities: ['Breakfast', 'Checkout', 'Airport transfer'],
      },
    ],
    hotels: [
      hotel(
        'Jungle Nest Ubud',
        4,
        'Payangan, Ubud',
        'Valley-facing rooms in a ravine setting, with an infinity pool over the treetops.',
        'hotel-bali-junglenest',
        'Valley-view room',
      ),
      hotel(
        'Private Pool Villa Ubud',
        5,
        'Tegallalang, Ubud',
        'One-bedroom villa with a private plunge pool, outdoor shower and floating breakfast on request.',
        'hotel-bali-poolvilla',
        'Private pool villa',
      ),
      hotel(
        'Seminyak Sands',
        4,
        'Seminyak',
        'A short walk from Double Six beach, with a large pool deck and rooftop bar.',
        'hotel-bali-seminyaksands',
        'Deluxe room',
      ),
      hotel(
        'Nusa Dua Beach Resort',
        5,
        'Nusa Dua',
        'Beachfront resort with a lagoon pool, kids club and three restaurants — the family choice.',
        'hotel-bali-nusadua',
        'Ocean-view room',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Nusa Penida day trip', 'Kelingking, Broken Beach and Crystal Bay by fast boat.', 'exp-bali-penida'),
      experience('Kecak fire dance', 'Uluwatu\'s cliffside performance at sunset.', 'exp-bali-kecak'),
      experience('Floating breakfast', 'Breakfast served on a tray in your private villa pool.', 'exp-bali-breakfast'),
      experience('Mount Batur sunrise trek', 'A pre-dawn climb to the crater rim with breakfast at the top.', 'exp-bali-batur'),
      experience('Balinese massage', 'Traditional two-hour treatment at a Ubud spa.', 'exp-bali-spa'),
      experience('Water sports at Benoa', 'Banana boat, jet ski, parasailing and sea walking.', 'exp-bali-watersports'),
    ],
    faqs: [
      {
        question: 'Is Nusa Penida too tiring to include?',
        answer:
          'It is a long day with an early start and rough roads on the island, but it is the highlight for most travellers. If you would rather not, we swap in a Kintamani volcano and coffee plantation day.',
      },
      {
        question: 'Can we get a private-pool villa?',
        answer:
          'Yes — it is the 5-star option on this package, and one of the main reasons Bali is such good value for honeymoons.',
      },
      {
        question: 'How far apart are Ubud and the beaches?',
        answer:
          'About ninety minutes by car. Splitting the stay avoids doing that drive twice a day, which is why we do not base the whole trip in one place.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-02-11',
    popularity: 96,
  },

  {
    id: 'pkg-thailand-bangkok-phuket',
    slug: 'thailand-bangkok-phuket-5-nights',
    title: 'Bangkok & Phuket Discovery',
    destinationId: 'dest-thailand',
    category: 'group',
    categories: ['group', 'family', 'weekend', 'honeymoon'],
    duration: 5,
    startingPrice: 42900,
    heroImage: img('pkg-thailand-discovery', 'wide'),
    gallery: gallery('pkg-thailand-discovery', 5),
    shortDescription:
      'Two nights of temples and markets in Bangkok, three of islands and beaches in Phuket, with a Phi Phi boat day.',
    overview:
      'The standard Thailand first trip, and it works. Bangkok gives you the Grand Palace, Wat Arun and a floating market; a short domestic flight then puts you in Phuket for the Phi Phi speedboat day and Phang Nga Bay. We keep one Phuket day completely free, because the boat days start early and you will want it.',
    highlights: [
      'Grand Palace, Wat Pho and Wat Arun in Bangkok',
      'Damnoen Saduak floating market',
      'Phi Phi Islands speedboat day with snorkelling',
      'Phang Nga Bay and James Bond Island',
      'Domestic flight between Bangkok and Phuket included',
    ],
    mealPlan: 'Breakfast included, plus lunch on both boat days',
    hotelCategory: '3 to 5 Star',
    transfer: 'Airport transfers and shared tour transport',
    tourType: 'Group tours with private transfers',
    rating: 4.6,
    reviewCount: 241,
    featured: true,
    inclusions: [
      ...INTERNATIONAL_INCLUSIONS,
      'Bangkok to Phuket domestic flight',
      'Bangkok city temple tour with guide',
      'Phi Phi Islands speedboat tour with lunch',
      'Phang Nga Bay tour with lunch',
    ],
    exclusions: [
      ...INTERNATIONAL_EXCLUSIONS,
      'National park fees at Phi Phi and Phang Nga, payable locally',
      'Optional shows and nightlife',
    ],
    priceVariants: standardVariants(42900, { mealPlan: 'Breakfast included, plus two lunches' }),
    itinerary: [
      {
        day: 1,
        title: 'Arrive Bangkok',
        description:
          'Airport pickup and transfer to your hotel in Sukhumvit or Silom. Evening free — Asiatique riverfront or a Chao Phraya dinner boat are both easy first nights.',
        activities: ['Airport pickup', 'Hotel check-in', 'Evening at leisure'],
        image: img('pkg-thailand-discovery-d1', 'card'),
      },
      {
        day: 2,
        title: 'Bangkok temples and floating market',
        description:
          'Early start for the Damnoen Saduak floating market and the Maeklong railway market, then back into the city for the Grand Palace, Wat Pho\'s reclining Buddha and Wat Arun across the river.',
        activities: ['Damnoen Saduak floating market', 'Maeklong railway market', 'Grand Palace', 'Wat Pho', 'Wat Arun'],
        image: img('pkg-thailand-discovery-d2', 'card'),
      },
      {
        day: 3,
        title: 'Bangkok to Phuket',
        description:
          'Morning flight to Phuket and transfer to your beach hotel in Patong, Kata or Karon. Afternoon on the beach and sunset at Promthep Cape.',
        activities: ['Flight to Phuket', 'Beach hotel check-in', 'Beach time', 'Promthep Cape sunset'],
        image: img('pkg-thailand-discovery-d3', 'card'),
      },
      {
        day: 4,
        title: 'Phi Phi Islands by speedboat',
        description:
          'A full day on the water — Maya Bay, Pileh Lagoon, Viking Cave, snorkelling at Bamboo Island and lunch on Phi Phi Don.',
        activities: ['Speedboat to Phi Phi', 'Maya Bay', 'Pileh Lagoon', 'Snorkelling at Bamboo Island', 'Lunch on Phi Phi Don'],
        image: img('pkg-thailand-discovery-d4', 'card'),
      },
      {
        day: 5,
        title: 'Phang Nga Bay and James Bond Island',
        description:
          'Longtail boat through the limestone karsts of Phang Nga Bay, canoeing through sea caves, a stop at James Bond Island and the floating village at Koh Panyee for lunch.',
        activities: ['Phang Nga Bay longtail boat', 'Sea cave canoeing', 'James Bond Island', 'Koh Panyee floating village'],
        image: img('pkg-thailand-discovery-d5', 'card'),
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Breakfast, checkout and a transfer to Phuket airport.',
        activities: ['Breakfast', 'Checkout', 'Airport transfer'],
      },
    ],
    hotels: [
      hotel(
        'Bangkok Palace Sukhumvit',
        3,
        'Sukhumvit, Bangkok',
        'Practical city hotel on the BTS line, walking distance to Terminal 21 and street food.',
        'hotel-thailand-bangkokpalace',
      ),
      hotel(
        'Riverside Grand Bangkok',
        4,
        'Chao Phraya riverside, Bangkok',
        'River-facing rooms with a pool terrace and free shuttle boat to the Skytrain pier.',
        'hotel-thailand-riverside',
        'River-view room',
      ),
      hotel(
        'Kata Sands Phuket',
        4,
        'Kata Beach, Phuket',
        'A quieter alternative to Patong, two minutes from Kata beach with a large pool.',
        'hotel-thailand-katasands',
        'Deluxe room',
      ),
      hotel(
        'Patong Bay Resort',
        5,
        'Patong, Phuket',
        'Beachfront luxury with a spa, three pools and an in-house Thai restaurant.',
        'hotel-thailand-patongbay',
        'Sea-view room',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Phi Phi speedboat tour', 'Maya Bay, Pileh Lagoon and snorkelling stops.', 'exp-thailand-phiphi'),
      experience('Phang Nga Bay canoeing', 'Paddle through limestone sea caves and hidden lagoons.', 'exp-thailand-phangnga'),
      experience('Thai cooking class', 'Market visit followed by a hands-on class in Bangkok.', 'exp-thailand-cooking'),
      experience('Elephant sanctuary visit', 'An ethical, no-riding sanctuary near Phuket.', 'exp-thailand-elephant'),
      experience('Chao Phraya dinner cruise', 'Buffet dinner past Wat Arun and the Rama VIII bridge.', 'exp-thailand-cruise'),
    ],
    faqs: [
      {
        question: 'Patong, Kata or Karon in Phuket?',
        answer:
          'Patong is the busiest with the most nightlife, Kata is calmer and good for families, Karon sits between the two. We will match it to your group.',
      },
      {
        question: 'Are the national park fees really extra?',
        answer:
          'Yes — Phi Phi and Phang Nga charge park entry per person at the pier, collected by the authorities rather than the operator. We tell you the current amount before you travel.',
      },
      {
        question: 'Can we swap Phuket for Krabi?',
        answer:
          'Easily. Krabi is quieter and more scenic, with the same island tours run from Ao Nang instead.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-01-22',
    popularity: 93,
  },
  {
    id: 'pkg-maldives-honeymoon',
    slug: 'maldives-overwater-honeymoon-4-nights',
    title: 'Maldives Overwater Honeymoon',
    destinationId: 'dest-maldives',
    category: 'honeymoon',
    categories: ['honeymoon', 'luxury'],
    duration: 4,
    startingPrice: 68500,
    compareAtPrice: 79900,
    heroImage: img('pkg-maldives-honeymoon', 'wide'),
    gallery: gallery('pkg-maldives-honeymoon', 5),
    shortDescription:
      'Four nights on one island — two in a beach villa, two overwater — with a sandbank picnic and a sunset cruise.',
    overview:
      'A deliberately simple itinerary, because the Maldives is not a sightseeing destination. You split the stay between a beach villa and an overwater villa, snorkel the house reef, take a private sandbank lunch and a dolphin cruise at sunset. Half board is included since resort dining is expensive, and the correct speedboat or seaplane transfer is built into the price rather than added later.',
    highlights: [
      'Two nights in an overwater villa with lagoon access',
      'Half-board meal plan included',
      'Private sandbank picnic lunch',
      'Sunset dolphin cruise',
      'House reef snorkelling with equipment included',
      'Honeymoon amenities arranged with the resort',
    ],
    mealPlan: 'Breakfast and dinner included',
    hotelCategory: '5 Star Resort',
    transfer: 'Speedboat or seaplane resort transfer',
    tourType: 'Resort stay',
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    offerBadge: 'Save 14%',
    inclusions: [
      'Four nights at a five-star resort, two in a beach villa and two overwater',
      'Breakfast and dinner daily (half board)',
      'Return speedboat or seaplane transfer from Male',
      'Private sandbank picnic with lunch',
      'Sunset dolphin cruise',
      'Snorkelling equipment for the duration of the stay',
      'Honeymoon cake and room decoration on request',
      'Visa on arrival assistance and documentation',
    ],
    exclusions: [
      'International airfare to Male',
      'Lunch unless upgraded to full board',
      'Alcoholic and premium beverages',
      'Spa treatments and motorised water sports',
      'Green tax and resort service charges where billed separately',
      'Travel insurance and personal expenses',
    ],
    priceVariants: [
      {
        label: 'Beach Villa',
        hotelCategory: '5 Star Resort',
        roomType: 'Beach villa with private deck',
        mealPlan: 'Breakfast and dinner',
        pricePerPerson: 68500,
        inclusions: ['Beach villa for all four nights', 'Half board', 'Speedboat transfers', 'Snorkelling equipment'],
      },
      {
        label: 'Split Stay',
        hotelCategory: '5 Star Resort',
        roomType: 'Two nights beach villa, two nights overwater villa',
        mealPlan: 'Breakfast and dinner',
        pricePerPerson: 84900,
        inclusions: ['Split beach and overwater stay', 'Half board', 'Sandbank picnic', 'Sunset dolphin cruise'],
      },
      {
        label: 'Overwater Villa',
        hotelCategory: '5 Star Resort',
        roomType: 'Overwater villa with pool and lagoon steps',
        mealPlan: 'Breakfast, lunch and dinner',
        pricePerPerson: 106500,
        inclusions: [
          'Overwater villa with private pool for all four nights',
          'Full board',
          'Seaplane transfers',
          'Floating breakfast and candlelit beach dinner',
        ],
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Male and transfer to the resort',
        description:
          'Visa on arrival at Velana International, where the resort representative meets you. A speedboat or seaplane takes you across to the island; check in to your beach villa and spend the afternoon in the lagoon.',
        activities: ['Airport meet and greet', 'Speedboat or seaplane transfer', 'Beach villa check-in', 'Lagoon swim'],
        image: img('pkg-maldives-honeymoon-d1', 'card'),
      },
      {
        day: 2,
        title: 'House reef and sandbank picnic',
        description:
          'Morning snorkelling on the house reef, where turtles and reef sharks are common. Midday you are taken by boat to a bare sandbank for a private lunch with nothing around you but water.',
        activities: ['House reef snorkelling', 'Private sandbank picnic', 'Afternoon at leisure', 'Dinner at the resort'],
        image: img('pkg-maldives-honeymoon-d2', 'card'),
      },
      {
        day: 3,
        title: 'Move overwater and sunset cruise',
        description:
          'Shift to your overwater villa — glass floor panel, private deck, steps straight into the lagoon. Late afternoon dolphin cruise, with spinner dolphins usually alongside the boat.',
        activities: ['Overwater villa check-in', 'Lagoon time from your deck', 'Sunset dolphin cruise', 'Dinner at the resort'],
        image: img('pkg-maldives-honeymoon-d3', 'card'),
      },
      {
        day: 4,
        title: 'A day with nothing in it',
        description:
          'Entirely free. Optional additions include a couples spa treatment, a floating breakfast in your pool, a candlelit beach dinner or a guided dive.',
        activities: ['Optional spa', 'Optional floating breakfast', 'Optional beach dinner', 'Optional dive or water sports'],
        image: img('pkg-maldives-honeymoon-d4', 'card'),
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Breakfast, checkout and the transfer back to Male for your flight home.',
        activities: ['Breakfast', 'Checkout', 'Speedboat or seaplane to Male'],
      },
    ],
    hotels: [
      hotel(
        'Lagoon Pearl Resort',
        5,
        'South Male Atoll',
        'A 25-minute speedboat from Male, with a strong house reef and both beach and overwater villas.',
        'hotel-maldives-lagoonpearl',
        'Beach villa',
        'Breakfast and dinner included',
      ),
      hotel(
        'Coral Horizon Maldives',
        5,
        'Baa Atoll',
        'Seaplane access, overwater villas with private pools and a UNESCO biosphere reef on the doorstep.',
        'hotel-maldives-coralhorizon',
        'Overwater pool villa',
        'Full board included',
      ),
    ],
    experiences: [
      experience('Private sandbank picnic', 'Lunch on an uninhabited sandbank in the middle of the atoll.', 'exp-maldives-sandbank'),
      experience('Sunset dolphin cruise', 'Spinner dolphins alongside the boat most evenings.', 'exp-maldives-dolphin'),
      experience('Floating breakfast', 'Breakfast served on a tray in your villa pool.', 'exp-maldives-breakfast'),
      experience('Couples spa treatment', 'Overwater treatment room with a glass floor.', 'exp-maldives-spa'),
      experience('Guided reef dive', 'A boat dive with an instructor, suitable for first-timers.', 'exp-maldives-dive'),
    ],
    faqs: [
      {
        question: 'Speedboat or seaplane — does it matter?',
        answer:
          'Considerably. Speedboats run all day and cost less; seaplanes only fly in daylight and cost more, so a late arrival may mean a night in Male. We match the resort to your flight timings.',
      },
      {
        question: 'Is half board enough?',
        answer:
          'For most couples, yes — breakfast and dinner covered, with a light lunch bought at the resort café. If you would rather not think about it at all, we quote full board or all-inclusive.',
      },
      {
        question: 'Can we do the Maldives on a smaller budget?',
        answer:
          'Yes. Local-island guesthouses at Maafushi or Thulusdhoo bring the cost down substantially while keeping the same water and snorkelling. Tell us your budget and we will quote both.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-03-02',
    popularity: 95,
  },
  {
    id: 'pkg-vietnam-north-central',
    slug: 'vietnam-hanoi-halong-hoi-an-6-nights',
    title: 'Vietnam: Hanoi, Ha Long & Hoi An',
    destinationId: 'dest-vietnam',
    category: 'adventure',
    categories: ['adventure', 'family', 'group', 'honeymoon'],
    duration: 6,
    startingPrice: 44900,
    heroImage: img('pkg-vietnam-journey', 'wide'),
    gallery: gallery('pkg-vietnam-journey', 5),
    shortDescription:
      'Hanoi\'s old quarter, an overnight Ha Long Bay cruise, the Golden Bridge at Ba Na Hills and lantern-lit Hoi An.',
    overview:
      'Northern and central Vietnam in six nights, using one domestic flight to avoid a very long overland leg. The Ha Long Bay night on a junk boat is the centrepiece — kayaking, caves and a quiet anchorage — and Hoi An at the end is where most people wish they had booked another night.',
    highlights: [
      'Overnight cruise on Ha Long Bay with kayaking',
      'Hanoi old quarter and the Hoan Kiem lake area',
      'Golden Bridge and cable car at Ba Na Hills',
      'Hoi An ancient town after dark',
      'Domestic flight from Hanoi to Da Nang included',
    ],
    mealPlan: 'Breakfast included; all meals on the cruise',
    hotelCategory: '3 to 5 Star',
    transfer: 'Private vehicle with driver and guide',
    tourType: 'Private tour',
    rating: 4.7,
    reviewCount: 176,
    featured: true,
    inclusions: [
      ...INTERNATIONAL_INCLUSIONS,
      'One-night Ha Long Bay cruise with all meals and kayaking',
      'Hanoi to Da Nang domestic flight',
      'Ba Na Hills cable car and entry tickets',
      'Hoi An walking tour with guide',
    ],
    exclusions: [
      ...INTERNATIONAL_EXCLUSIONS,
      'Vietnam e-visa fee, payable at actuals',
      'Optional cooking classes and lantern boat rides',
    ],
    priceVariants: standardVariants(44900),
    itinerary: [
      {
        day: 1,
        title: 'Arrive Hanoi',
        description:
          'Airport pickup and transfer to a hotel in the old quarter. Evening free to walk to Hoan Kiem lake and eat at a street kitchen — the best introduction the city offers.',
        activities: ['Airport pickup', 'Hotel check-in', 'Hoan Kiem lake walk', 'Old quarter street food'],
        image: img('pkg-vietnam-journey-d1', 'card'),
      },
      {
        day: 2,
        title: 'Hanoi city and the Train Street area',
        description:
          'A guided half day covering the Ho Chi Minh complex, the One Pillar Pagoda, the Temple of Literature and the Old Quarter\'s narrow trading lanes. Afternoon free for coffee and the water puppet theatre.',
        activities: ['Ho Chi Minh complex', 'One Pillar Pagoda', 'Temple of Literature', 'Water puppet show'],
        image: img('pkg-vietnam-journey-d2', 'card'),
      },
      {
        day: 3,
        title: 'Ha Long Bay overnight cruise',
        description:
          'Drive to Ha Long and board your cruise at midday. The afternoon is spent sailing between limestone karsts, kayaking in a sheltered bay and visiting a cave, with dinner and a night on board at anchor.',
        activities: ['Drive to Ha Long', 'Board the cruise', 'Kayaking', 'Cave visit', 'Dinner and overnight on board'],
        image: img('pkg-vietnam-journey-d3', 'card'),
      },
      {
        day: 4,
        title: 'Ha Long to Da Nang and Hoi An',
        description:
          'Sunrise tai chi on deck, brunch as the boat returns to harbour, then the drive to Hanoi airport for the flight to Da Nang. Transfer to Hoi An in the evening.',
        activities: ['Sunrise on deck', 'Brunch on board', 'Flight to Da Nang', 'Transfer to Hoi An'],
        image: img('pkg-vietnam-journey-d4', 'card'),
      },
      {
        day: 5,
        title: 'Ba Na Hills and the Golden Bridge',
        description:
          'Up the mountain by cable car to the Golden Bridge held by two stone hands, the French village and the gardens. Back in Hoi An for the lantern-lit old town in the evening.',
        activities: ['Ba Na Hills cable car', 'Golden Bridge', 'French Village', 'Hoi An old town by night'],
        image: img('pkg-vietnam-journey-d5', 'card'),
      },
      {
        day: 6,
        title: 'Hoi An at your own pace',
        description:
          'A guided walk through the ancient town — the Japanese covered bridge, assembly halls and merchant houses — then free time for tailors, cafés and a boat on the Thu Bon river at dusk.',
        activities: ['Hoi An walking tour', 'Japanese covered bridge', 'Tailor visit', 'Evening river boat and lanterns'],
        image: img('pkg-vietnam-journey-d6', 'card'),
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Breakfast, checkout and a transfer to Da Nang airport.',
        activities: ['Breakfast', 'Checkout', 'Airport transfer'],
      },
    ],
    hotels: [
      hotel(
        'Old Quarter Boutique Hanoi',
        3,
        'Old Quarter, Hanoi',
        'Small, friendly hotel in the middle of the old quarter, walking distance to Hoan Kiem lake.',
        'hotel-vietnam-oldquarter',
      ),
      hotel(
        'Ha Long Heritage Cruise',
        4,
        'Ha Long Bay',
        'A wooden junk-style cruise boat with private balconies, a sun deck and an onboard restaurant.',
        'hotel-vietnam-cruise',
        'Cabin with balcony',
        'All meals included',
      ),
      hotel(
        'Hoi An Garden Villa',
        4,
        'Hoi An',
        'Low-rise villa rooms around a pool, ten minutes on foot from the ancient town.',
        'hotel-vietnam-gardenvilla',
        'Pool-view room',
      ),
      hotel(
        'Da Nang Beach Resort',
        5,
        'My Khe Beach, Da Nang',
        'Beachfront luxury between Da Nang and Hoi An, with a spa and three restaurants.',
        'hotel-vietnam-danangbeach',
        'Ocean-view room',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Ha Long Bay kayaking', 'Paddle into sheltered lagoons between the karsts.', 'exp-vietnam-kayak'),
      experience('Golden Bridge at Ba Na Hills', 'The stone-hands bridge and cable car up the mountain.', 'exp-vietnam-goldenbridge'),
      experience('Hoi An lantern boat', 'A short river ride with a paper lantern at dusk.', 'exp-vietnam-lantern'),
      experience('Vietnamese cooking class', 'Market shopping followed by a hands-on class in Hoi An.', 'exp-vietnam-cooking'),
      experience('Mekong Delta day trip', 'Sampan boats and floating markets, if you extend to the south.', 'exp-vietnam-mekong'),
    ],
    faqs: [
      {
        question: 'Is the overnight cruise better than a day trip?',
        answer:
          'Yes, clearly. A day trip means around six hours of driving for three on the water. The overnight cruise reaches quieter parts of the bay and includes kayaking and caves.',
      },
      {
        question: 'How long does the Vietnam e-visa take?',
        answer:
          'Usually three to five working days. We prepare and submit the application; the government fee is charged at actuals.',
      },
      {
        question: 'Can we add Ho Chi Minh City?',
        answer:
          'Yes, with two or three extra nights and one more domestic flight — enough for the city, the Cu Chi tunnels and a Mekong Delta day.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-02-26',
    popularity: 91,
  },
  {
    id: 'pkg-singapore-family',
    slug: 'singapore-family-fun-4-nights',
    title: 'Singapore Family Fun',
    destinationId: 'dest-singapore',
    category: 'family',
    categories: ['family', 'luxury', 'weekend'],
    duration: 4,
    startingPrice: 58900,
    heroImage: img('pkg-singapore-family', 'wide'),
    gallery: gallery('pkg-singapore-family', 5),
    shortDescription:
      'Universal Studios, Gardens by the Bay, the Night Safari and a Sentosa day — built for travelling with children.',
    overview:
      'Singapore is the easiest international trip you can take with children, and this itinerary leans into that. One full day at Universal Studios, one on Sentosa for the aquarium and cable car, Gardens by the Bay in the evening when the Supertrees light up, and the Night Safari tram. Everything runs on the MRT, so no one spends the holiday in traffic.',
    highlights: [
      'Universal Studios Singapore full-day pass',
      'S.E.A. Aquarium and Sentosa cable car',
      'Gardens by the Bay with the Supertree light show',
      'Night Safari tram ride',
      'City tour including Little India and Chinatown',
    ],
    mealPlan: 'Breakfast included',
    hotelCategory: '3 to 5 Star',
    transfer: 'Airport transfers and MRT-based city travel',
    tourType: 'Semi-private tour',
    rating: 4.7,
    reviewCount: 204,
    inclusions: [
      ...INTERNATIONAL_INCLUSIONS,
      'Universal Studios Singapore one-day ticket',
      'S.E.A. Aquarium and Sentosa cable car tickets',
      'Gardens by the Bay conservatory tickets',
      'Night Safari entry with tram ride',
    ],
    exclusions: [
      ...INTERNATIONAL_EXCLUSIONS,
      'MRT and public transport cards',
      'Meals inside the theme parks',
    ],
    priceVariants: standardVariants(58900),
    itinerary: [
      {
        day: 1,
        title: 'Arrive Singapore',
        description:
          'Airport pickup and hotel check-in. Evening at Marina Bay for the Spectra light and water show, with the skyline behind it.',
        activities: ['Airport pickup', 'Hotel check-in', 'Marina Bay waterfront', 'Spectra light show'],
        image: img('pkg-singapore-family-d1', 'card'),
      },
      {
        day: 2,
        title: 'City tour and Gardens by the Bay',
        description:
          'Half-day city tour through the Civic District, Merlion Park, Chinatown and Little India. Afternoon at Gardens by the Bay for the Cloud Forest and Flower Dome, staying for the Supertree show after dark.',
        activities: ['Merlion Park', 'Chinatown and Little India', 'Cloud Forest', 'Flower Dome', 'Supertree light show'],
        image: img('pkg-singapore-family-d2', 'card'),
      },
      {
        day: 3,
        title: 'Universal Studios',
        description:
          'A full day at Universal Studios on Sentosa. Arrive at opening for the popular rides, and the park is compact enough to leave and return to your hotel if younger children need a break.',
        activities: ['Universal Studios Singapore', 'Themed zones and rides', 'Evening free'],
        image: img('pkg-singapore-family-d3', 'card'),
      },
      {
        day: 4,
        title: 'Sentosa and the Night Safari',
        description:
          'Morning at the S.E.A. Aquarium and the Sentosa cable car with beach time afterwards. Evening at the Night Safari, where the tram runs through nocturnal habitats after dusk.',
        activities: ['S.E.A. Aquarium', 'Sentosa cable car', 'Siloso beach', 'Night Safari tram ride'],
        image: img('pkg-singapore-family-d4', 'card'),
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Breakfast, checkout and a transfer to Changi airport — leave time for the Jewel waterfall.',
        activities: ['Breakfast', 'Checkout', 'Airport transfer'],
      },
    ],
    hotels: [
      hotel(
        'Hotel Boss Singapore',
        3,
        'Lavender, Singapore',
        'Large, practical hotel next to Lavender MRT with a rooftop pool and food court downstairs.',
        'hotel-singapore-boss',
      ),
      hotel(
        'Village Hotel Bugis',
        4,
        'Bugis, Singapore',
        'Central location by Bugis MRT with family rooms and an outdoor pool.',
        'hotel-singapore-bugis',
        'Family room',
      ),
      hotel(
        'Marina View Grand',
        5,
        'Marina Bay, Singapore',
        'Skyline-facing rooms, an infinity pool and a five-minute walk to Gardens by the Bay.',
        'hotel-singapore-marinaview',
        'Bay-view room',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Universal Studios', 'Seven themed zones, easily a full day.', 'exp-singapore-universal'),
      experience('Night Safari', 'Tram ride through nocturnal animal enclosures.', 'exp-singapore-nightsafari'),
      experience('Singapore Flyer', 'Thirty minutes on the observation wheel over Marina Bay.', 'exp-singapore-flyer'),
      experience('River cruise', 'Bumboat along the Singapore River past Clarke Quay.', 'exp-singapore-rivercruise'),
    ],
    faqs: [
      {
        question: 'Is four nights enough for Singapore?',
        answer:
          'Yes for the city plus Universal Studios and Sentosa. Add a night if you also want the zoo, Jurong Bird Park or a day trip across to Johor.',
      },
      {
        question: 'Do we need a car?',
        answer:
          'No. The MRT reaches almost everything on this itinerary and is faster than driving. We include airport transfers and use taxis only where it helps.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2024-12-19',
    popularity: 86,
  },
  {
    id: 'pkg-europe-classic',
    slug: 'europe-classic-switzerland-france-italy-9-nights',
    title: 'Classic Europe: Switzerland, France & Italy',
    destinationId: 'dest-europe',
    category: 'group',
    categories: ['group', 'luxury', 'family', 'honeymoon'],
    duration: 9,
    startingPrice: 149000,
    heroImage: img('pkg-europe-classic', 'wide'),
    gallery: gallery('pkg-europe-classic', 5),
    shortDescription:
      'Paris, the Swiss Alps, Venice and Rome across nine nights, connected by trains rather than long coach days.',
    overview:
      'Three countries, four bases and no daily hotel changes. Paris first for the Eiffel Tower and a Seine cruise, then the train to Switzerland for Jungfraujoch and Mount Titlis, south to Venice for the canals, and finally Rome for the Colosseum and Vatican City. Indian dinners are arranged in every city, and we handle the Schengen visa documentation from start to finish.',
    highlights: [
      'Jungfraujoch, the Top of Europe, by cog railway',
      'Mount Titlis rotating cable car and glacier walk',
      'Eiffel Tower second level and a Seine river cruise',
      'Venice gondola ride and St Mark\'s Square',
      'Colosseum and Vatican Museums with skip-the-line entry',
      'Indian dinners arranged across the route',
    ],
    mealPlan: 'Breakfast and dinner included',
    hotelCategory: '3 to 4 Star',
    transfer: 'High-speed trains and private coaches',
    tourType: 'Group departure or private tour',
    rating: 4.8,
    reviewCount: 158,
    featured: true,
    inclusions: [
      'Nine nights in centrally located 3 or 4-star hotels',
      'Daily breakfast and Indian dinners as per itinerary',
      'All inter-city train tickets and airport transfers',
      'Jungfraujoch and Mount Titlis excursion tickets',
      'Eiffel Tower second level and Seine cruise tickets',
      'Venice water taxi and gondola ride',
      'Colosseum and Vatican Museums skip-the-line entry',
      'Professional tour manager on group departures',
      'Schengen visa documentation and appointment assistance',
    ],
    exclusions: [
      'International airfare to and from Europe',
      'Schengen visa fee and travel insurance premium',
      'City taxes payable directly at hotels',
      'Lunches and any meals not listed',
      'Optional excursions and tips',
      'Anything not listed under inclusions',
    ],
    priceVariants: [
      {
        label: 'Group Departure',
        hotelCategory: '3 Star',
        roomType: 'Twin-sharing room',
        mealPlan: 'Breakfast and dinner',
        pricePerPerson: 149000,
        inclusions: ['Fixed departure with tour manager', 'Coach and train travel', 'All listed excursions'],
      },
      {
        label: 'Private Tour',
        hotelCategory: '4 Star',
        roomType: 'Superior twin room',
        mealPlan: 'Breakfast and dinner',
        pricePerPerson: 214000,
        inclusions: ['Private guided tour on your own dates', 'First-class trains', 'Central 4-star hotels'],
      },
    ],

    itinerary: [
      {
        day: 1,
        title: 'Arrive Paris',
        description:
          'Met at Charles de Gaulle and transferred to your hotel. Evening orientation walk and an Indian dinner nearby.',
        activities: ['Airport pickup', 'Hotel check-in', 'Orientation walk', 'Indian dinner'],
        image: img('pkg-europe-classic-d1', 'card'),
      },
      {
        day: 2,
        title: 'Paris highlights',
        description:
          'Eiffel Tower second level, then a coach tour past the Arc de Triomphe, Champs-Élysées and Notre-Dame, finishing with a Seine river cruise at dusk.',
        activities: ['Eiffel Tower', 'Arc de Triomphe', 'Champs-Élysées', 'Seine river cruise'],
        image: img('pkg-europe-classic-d2', 'card'),
      },
      {
        day: 3,
        title: 'Louvre and Montmartre',
        description:
          'Morning at the Louvre, then Montmartre and Sacré-Cœur in the afternoon. Optional evening at Disneyland Paris or the Moulin Rouge.',
        activities: ['Louvre Museum', 'Montmartre', 'Sacré-Cœur', 'Optional evening excursion'],
        image: img('pkg-europe-classic-d3', 'card'),
      },
      {
        day: 4,
        title: 'Paris to Switzerland',
        description:
          'High-speed train to Switzerland and transfer to Interlaken or Lucerne. Afternoon free by the lake — this is the day everyone slows down.',
        activities: ['Train to Switzerland', 'Hotel check-in', 'Lakeside walk'],
        image: img('pkg-europe-classic-d4', 'card'),
      },
      {
        day: 5,
        title: 'Jungfraujoch, the Top of Europe',
        description:
          'Cog railway from Grindelwald up to Jungfraujoch at 3,454 metres — the Sphinx observatory, the Ice Palace and the Aletsch glacier. A long, spectacular day.',
        activities: ['Cog railway to Jungfraujoch', 'Sphinx observatory', 'Ice Palace', 'Snow plateau'],
        image: img('pkg-europe-classic-d5', 'card'),
      },
      {
        day: 6,
        title: 'Mount Titlis and Lucerne',
        description:
          'Rotating cable car to Mount Titlis, the cliff walk and glacier cave, then Lucerne for the Chapel Bridge, Lion Monument and lakefront.',
        activities: ['Mount Titlis rotair', 'Titlis cliff walk', 'Lucerne Chapel Bridge', 'Lion Monument'],
        image: img('pkg-europe-classic-d6', 'card'),
      },
      {
        day: 7,
        title: 'Switzerland to Venice',
        description:
          'Scenic train south into Italy. Arrive Venice by evening and take a water taxi to your hotel on the lagoon side.',
        activities: ['Train to Venice', 'Water taxi transfer', 'Hotel check-in', 'Evening at leisure'],
        image: img('pkg-europe-classic-d7', 'card'),
      },
      {
        day: 8,
        title: 'Venice and on to Rome',
        description:
          'Morning in Venice — St Mark\'s Square, the Doge\'s Palace exterior, a glass-blowing demonstration and a gondola ride. Afternoon high-speed train to Rome.',
        activities: ['St Mark\'s Square', 'Gondola ride', 'Glass-blowing demonstration', 'Train to Rome'],
        image: img('pkg-europe-classic-d8', 'card'),
      },
      {
        day: 9,
        title: 'Rome and Vatican City',
        description:
          'Colosseum and Roman Forum with skip-the-line entry, then the Vatican Museums, Sistine Chapel and St Peter\'s Basilica. Evening at the Trevi Fountain.',
        activities: ['Colosseum', 'Roman Forum', 'Vatican Museums', 'St Peter\'s Basilica', 'Trevi Fountain'],
        image: img('pkg-europe-classic-d9', 'card'),
      },
      {
        day: 10,
        title: 'Departure',
        description: 'Breakfast, checkout and a transfer to Rome Fiumicino for your flight home.',
        activities: ['Breakfast', 'Checkout', 'Airport transfer'],
      },
    ],
    hotels: [
      hotel(
        'Hotel Lumière Paris',
        3,
        'Montparnasse, Paris',
        'Compact, well-kept rooms two minutes from a metro station with direct lines to the major sights.',
        'hotel-europe-lumiere',
      ),
      hotel(
        'Alpenblick Interlaken',
        4,
        'Interlaken, Switzerland',
        'Mountain-facing rooms between the two lakes, walking distance to Interlaken Ost station.',
        'hotel-europe-alpenblick',
        'Mountain-view room',
        'Breakfast and dinner included',
      ),
      hotel(
        'Laguna Venice',
        3,
        'Mestre, Venice',
        'Practical base with fast rail access to Venice island — the standard choice for value in Venice.',
        'hotel-europe-laguna',
      ),
      hotel(
        'Roma Centrale',
        4,
        'Termini district, Rome',
        'Near Termini station with easy metro access to the Colosseum and Vatican.',
        'hotel-europe-romacentrale',
        'Superior room',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Jungfraujoch cog railway', 'The highest railway station in Europe at 3,454 metres.', 'exp-europe-jungfrau'),
      experience('Mount Titlis glacier walk', 'Cliff walk and glacier cave above Engelberg.', 'exp-europe-titlis'),
      experience('Seine river cruise', 'One hour past Notre-Dame and the Eiffel Tower.', 'exp-europe-seine'),
      experience('Venice gondola ride', 'Thirty minutes through the smaller canals.', 'exp-europe-gondola'),
      experience('Vatican Museums', 'Sistine Chapel and the Raphael Rooms with skip-the-line entry.', 'exp-europe-vatican'),
    ],
    faqs: [
      {
        question: 'When should we start the Schengen visa process?',
        answer:
          'Eight to ten weeks before departure. Appointment slots are the bottleneck, not the visa itself. We prepare the full document set, cover letter and itinerary for your application.',
      },
      {
        question: 'Is this a group tour or private?',
        answer:
          'Both are available. Group departures run on fixed dates with a tour manager and cost less; private tours run on your dates with your own guide and vehicle.',
      },
      {
        question: 'What happens if Jungfraujoch is closed for weather?',
        answer:
          'It occasionally shuts in severe conditions. We substitute Schilthorn or Harder Kulm and refund the difference in ticket cost.',
      },
      {
        question: 'Will we get Indian food?',
        answer:
          'Yes — Indian dinners are arranged in Paris, Switzerland, Venice and Rome. Jain and vegetarian requirements can be accommodated with advance notice.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2024-11-05',
    popularity: 82,
  },
];

