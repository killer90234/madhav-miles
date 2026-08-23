import { gallery, img } from '@/lib/images';
import type { Package } from '@/types';
import {
  COMMON_PACKAGE_FAQS,
  DOMESTIC_EXCLUSIONS,
  DOMESTIC_INCLUSIONS,
  experience,
  hotel,
  standardVariants,
} from './shared';

/** Domestic (India) holiday packages. */
export const domesticPackages: Package[] = [
  {
    id: 'pkg-goa-beach-escape',
    slug: 'goa-beach-escape-3-nights',
    title: 'Goa Beach Escape',
    destinationId: 'dest-goa',
    category: 'weekend',
    categories: ['weekend', 'family', 'honeymoon'],
    duration: 3,
    startingPrice: 16500,
    compareAtPrice: 19900,
    heroImage: img('pkg-goa-escape', 'wide'),
    gallery: gallery('pkg-goa-escape', 5),
    shortDescription:
      'Three unhurried nights in North Goa with a sunset river cruise and a day for the beaches you actually want to see.',
    overview:
      'A short, easy Goa break built around beach time rather than a checklist. You stay in Candolim or Calangute, close enough to the action to walk to dinner but far enough to sleep. Day two covers the North Goa beach belt, day three is a heritage morning in Old Goa followed by a Mandovi sunset cruise. Everything else is deliberately left open.',
    highlights: [
      'Stay in the North Goa beach belt',
      'Sunset cruise on the Mandovi river',
      'Old Goa churches and Panjim\'s Latin quarter',
      'Private transfers — no scooter hunting',
    ],
    mealPlan: 'Breakfast included',
    hotelCategory: '3 to 5 Star',
    transfer: 'Private air-conditioned vehicle',
    tourType: 'Private tour',
    rating: 4.6,
    reviewCount: 128,
    featured: true,
    offerBadge: 'Save 17%',
    inclusions: DOMESTIC_INCLUSIONS,
    exclusions: DOMESTIC_EXCLUSIONS,
    priceVariants: standardVariants(16500),
    itinerary: [
      {
        day: 1,
        title: 'Arrival and a slow first evening',
        description:
          'Met at Goa airport or Madgaon station and driven to your hotel in North Goa. The rest of the day is yours — most guests walk down to the beach for sunset and eat at a shack.',
        activities: ['Airport or railway station pickup', 'Hotel check-in', 'Evening free at the beach'],
        image: img('pkg-goa-escape-d1', 'card'),
      },
      {
        day: 2,
        title: 'North Goa beaches',
        description:
          'A relaxed loop through the beaches that define North Goa, with time to stop wherever you like rather than a fixed schedule.',
        activities: ['Baga and Calangute', 'Anjuna and Vagator', 'Chapora fort viewpoint', 'Optional water sports'],
        image: img('pkg-goa-escape-d2', 'card'),
      },
      {
        day: 3,
        title: 'Old Goa and a sunset cruise',
        description:
          'Morning at the UNESCO-listed churches of Old Goa and a walk through Panjim\'s Fontainhas quarter, then a one-hour cruise down the Mandovi as the light drops.',
        activities: [
          'Basilica of Bom Jesus',
          'Se Cathedral',
          'Fontainhas Latin quarter walk',
          'Mandovi river sunset cruise',
        ],
        image: img('pkg-goa-escape-d3', 'card'),
      },
      {
        day: 4,
        title: 'Departure',
        description:
          'Breakfast, an unhurried checkout and a private transfer to the airport or station.',
        activities: ['Breakfast', 'Checkout', 'Departure transfer'],
      },
    ],
    hotels: [
      hotel(
        'Sandview Resort Candolim',
        3,
        'Candolim, North Goa',
        'A relaxed low-rise resort a five-minute walk from Candolim beach, with a garden pool and open-air restaurant.',
        'hotel-goa-sandview',
      ),
      hotel(
        'Baywalk Premier Calangute',
        4,
        'Calangute, North Goa',
        'Contemporary rooms, a large pool deck and easy access to the Calangute–Baga strip.',
        'hotel-goa-baywalk',
        'Superior room',
      ),
      hotel(
        'The Estuary Goa',
        5,
        'Nerul, North Goa',
        'A riverside luxury property with a spa, two restaurants and boat access to the Mandovi.',
        'hotel-goa-estuary',
        'Deluxe room',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Mandovi sunset cruise', 'One hour on the river with folk music and views of Panjim.', 'exp-goa-cruise'),
      experience('Water sports at Baga', 'Parasailing, jet ski and banana boat, bookable on the spot.', 'exp-goa-water'),
      experience('Spice plantation lunch', 'A guided plantation walk followed by a Goan thali.', 'exp-goa-spice'),
      experience('Dudhsagar day trip', 'Jeep safari to the four-tier waterfall on the Karnataka border.', 'exp-goa-dudhsagar'),
    ],
    faqs: [
      {
        question: 'North Goa or South Goa for this package?',
        answer:
          'This itinerary uses North Goa, which suits first-timers and anyone who wants restaurants and markets nearby. We can move it to South Goa if you prefer quieter beaches.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-01-12',
    popularity: 92,
  },
  {
    id: 'pkg-kashmir-valley',
    slug: 'kashmir-valley-classic-5-nights',
    title: 'Kashmir Valley Classic',
    destinationId: 'dest-kashmir',
    category: 'family',
    categories: ['family', 'honeymoon', 'luxury'],
    duration: 5,
    startingPrice: 24900,
    compareAtPrice: 28900,
    heroImage: img('pkg-kashmir-valley', 'wide'),
    gallery: gallery('pkg-kashmir-valley', 5),
    shortDescription:
      'Srinagar, Gulmarg, Pahalgam and a houseboat night — the full valley without long driving days.',
    overview:
      'The itinerary most people mean when they say Kashmir. Two nights in Srinagar including one on a Dal Lake houseboat, a day in the Gulmarg meadows with the gondola, and two nights in Pahalgam for the Lidder valley. Distances are short and we keep one afternoon completely free, because Kashmir rewards sitting still.',
    highlights: [
      'One night on a deluxe Dal Lake houseboat',
      'Gulmarg Gondola to Kongdoori',
      'Betaab and Aru valleys near Pahalgam',
      'Shikara ride at sunrise or sunset',
      'Mughal gardens above Srinagar',
    ],
    mealPlan: 'Breakfast and dinner included',
    hotelCategory: '3 to 5 Star',
    transfer: 'Private air-conditioned vehicle',
    tourType: 'Private tour',
    rating: 4.8,
    reviewCount: 214,
    featured: true,
    offerBadge: 'Popular',
    inclusions: [
      ...DOMESTIC_INCLUSIONS,
      'One night stay on a deluxe Dal Lake houseboat',
      'Shikara ride on Dal Lake',
    ],
    exclusions: [
      ...DOMESTIC_EXCLUSIONS,
      'Gulmarg Gondola tickets (booked on your behalf, payable directly)',
      'Pony rides and local union taxis at Gulmarg, Sonmarg and Pahalgam',
    ],
    priceVariants: standardVariants(24900, { mealPlan: 'Breakfast and dinner included' }),
    itinerary: [
      {
        day: 1,
        title: 'Arrive Srinagar and the Mughal gardens',
        description:
          'Picked up at Srinagar airport and driven to your hotel. Afternoon at Nishat and Shalimar Bagh, the terraced Mughal gardens looking down over Dal Lake, followed by a shikara ride as the light softens.',
        activities: ['Airport pickup', 'Nishat Bagh', 'Shalimar Bagh', 'Shikara ride on Dal Lake'],
        image: img('pkg-kashmir-valley-d1', 'card'),
      },
      {
        day: 2,
        title: 'Day trip to Gulmarg',
        description:
          'A two-hour drive through pine forest to Gulmarg. The gondola climbs to Kongdoori for views across to Apharwat — snow in winter, open meadow in summer. Back in Srinagar by evening.',
        activities: ['Drive to Gulmarg', 'Gulmarg Gondola phase one', 'Meadow walk or snow activities', 'Return to Srinagar'],
        image: img('pkg-kashmir-valley-d2', 'card'),
      },
      {
        day: 3,
        title: 'Srinagar to Pahalgam',
        description:
          'Drive south through saffron fields and cricket-bat workshops to Pahalgam. Afternoon in the Lidder valley, which is as close to a walking holiday as this trip gets.',
        activities: ['Pampore saffron fields', 'Awantipora ruins', 'Check-in at Pahalgam', 'Lidder river walk'],
        image: img('pkg-kashmir-valley-d3', 'card'),
      },
      {
        day: 4,
        title: 'Betaab and Aru valleys',
        description:
          'A local vehicle takes you up to Betaab valley, Chandanwari and Aru — three short, very scenic stops with plenty of time to stop for chai.',
        activities: ['Betaab Valley', 'Chandanwari', 'Aru Valley', 'Evening free in Pahalgam'],
        image: img('pkg-kashmir-valley-d4', 'card'),
      },
      {
        day: 5,
        title: 'Back to Srinagar and the houseboat',
        description:
          'Return to Srinagar and check in to a deluxe houseboat on Dal Lake. Afternoon in the old city — Jamia Masjid, the shrine at Hazratbal and the covered markets for pashmina and papier-mâché.',
        activities: ['Drive to Srinagar', 'Houseboat check-in', 'Old city and market walk', 'Dinner on the houseboat'],
        image: img('pkg-kashmir-valley-d5', 'card'),
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Breakfast on the houseboat, then a transfer to Srinagar airport.',
        activities: ['Breakfast', 'Checkout', 'Airport transfer'],
      },
    ],
    hotels: [
      hotel(
        'Lake Crest Srinagar',
        3,
        'Boulevard Road, Srinagar',
        'Simple, warm rooms a short walk from the Dal Lake boulevard and shikara ghats.',
        'hotel-kashmir-lakecrest',
      ),
      hotel(
        'Chinar Retreat Pahalgam',
        4,
        'Lidder Valley, Pahalgam',
        'Riverside property with wood-panelled rooms, in-house dining and heating throughout.',
        'hotel-kashmir-chinar',
        'Valley-view room',
        'Breakfast and dinner included',
      ),
      hotel(
        'Heritage Houseboat Dal Lake',
        4,
        'Dal Lake, Srinagar',
        'A traditional carved-cedar houseboat with attached bathrooms, a sun deck and home-cooked Kashmiri meals.',
        'hotel-kashmir-houseboat',
        'Deluxe houseboat room',
        'Breakfast and dinner included',
      ),
      hotel(
        'The Vale Srinagar',
        5,
        'Nishat, Srinagar',
        'Luxury lakefront hotel with a spa, mountain-facing rooms and a well-regarded Kashmiri restaurant.',
        'hotel-kashmir-vale',
        'Lake-view deluxe room',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Sunrise shikara ride', 'The floating vegetable market on Dal Lake, best seen before 7am.', 'exp-kashmir-shikara'),
      experience('Gulmarg Gondola', 'Cable car to Kongdoori with Apharwat views.', 'exp-kashmir-gondola'),
      experience('Thajiwas glacier', 'A short pony ride or trek from Sonmarg to the glacier face.', 'exp-kashmir-glacier'),
      experience('Kashmiri wazwan dinner', 'A multi-course traditional meal arranged on request.', 'exp-kashmir-wazwan'),
    ],
    faqs: [
      {
        question: 'Will we definitely see snow?',
        answer:
          'Between late December and February, snow at Gulmarg is very likely. Outside those months the gondola still runs but the meadows are green rather than white.',
      },
      {
        question: 'Are the pony rides compulsory?',
        answer:
          'No. Local pony and taxi unions operate at Gulmarg, Pahalgam and Sonmarg and are entirely optional. Your driver will tell you the standard rates so you are not overcharged.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-02-04',
    popularity: 97,
  },
  {
    id: 'pkg-kerala-backwaters',
    slug: 'kerala-backwaters-and-hills-5-nights',
    title: 'Kerala Backwaters & Hills',
    destinationId: 'dest-kerala',
    category: 'family',
    categories: ['family', 'honeymoon', 'weekend'],
    duration: 5,
    startingPrice: 21500,
    compareAtPrice: 25500,
    heroImage: img('pkg-kerala-backwaters', 'wide'),
    gallery: gallery('pkg-kerala-backwaters', 5),
    shortDescription:
      'Munnar tea hills, a Periyar boat safari and an overnight houseboat on the Alleppey backwaters.',
    overview:
      'Kerala in its most efficient shape: hills first, then wildlife, then water. You start in Kochi, climb to Munnar for two nights of tea estates and cool air, spend a night at Thekkady for the Periyar reserve, and finish on a private houseboat drifting through Alleppey\'s canals. No drive is longer than four hours.',
    highlights: [
      'Overnight stay on a private Alleppey houseboat',
      'Tea plantations and Mattupetty Dam in Munnar',
      'Periyar boat safari at Thekkady',
      'Fort Kochi heritage walk and Kathakali performance',
    ],
    mealPlan: 'Breakfast included; all meals on the houseboat',
    hotelCategory: '3 to 5 Star',
    transfer: 'Private air-conditioned vehicle',
    tourType: 'Private tour',
    rating: 4.7,
    reviewCount: 186,
    featured: true,
    offerBadge: 'Save 16%',
    inclusions: [
      ...DOMESTIC_INCLUSIONS,
      'One night on a private deluxe houseboat with lunch, dinner and breakfast',
      'Periyar Lake boat safari tickets',
    ],
    exclusions: DOMESTIC_EXCLUSIONS,
    priceVariants: standardVariants(21500),
    itinerary: [
      {
        day: 1,
        title: 'Kochi to Munnar',
        description:
          'Met at Kochi airport and driven up into the Western Ghats, stopping at the Cheeyappara waterfalls and a spice garden on the way. Evening free at your Munnar hotel.',
        activities: ['Kochi airport pickup', 'Valara and Cheeyappara waterfalls', 'Spice garden stop', 'Munnar check-in'],
        image: img('pkg-kerala-backwaters-d1', 'card'),
      },
      {
        day: 2,
        title: 'Munnar tea country',
        description:
          'A full day among the tea estates — the Tata Tea Museum, Mattupetty Dam, Echo Point and the viewpoint at Top Station looking down into Tamil Nadu.',
        activities: ['Tea Museum', 'Mattupetty Dam', 'Echo Point', 'Top Station viewpoint'],
        image: img('pkg-kerala-backwaters-d2', 'card'),
      },
      {
        day: 3,
        title: 'Munnar to Thekkady',
        description:
          'Drive to Thekkady and take the afternoon boat safari on Periyar Lake, where elephants and gaur come down to the water. Evening spice plantation walk.',
        activities: ['Drive to Thekkady', 'Periyar Lake boat safari', 'Spice plantation walk', 'Optional Kalaripayattu show'],
        image: img('pkg-kerala-backwaters-d3', 'card'),
      },
      {
        day: 4,
        title: 'Thekkady to the Alleppey houseboat',
        description:
          'Board your private houseboat at midday. The rest of the day is spent drifting through the backwaters with lunch, tea and dinner cooked on board while village life goes past the deck.',
        activities: ['Drive to Alleppey', 'Houseboat check-in', 'Backwater cruise', 'Dinner and overnight on board'],
        image: img('pkg-kerala-backwaters-d4', 'card'),
      },
      {
        day: 5,
        title: 'Alleppey to Fort Kochi',
        description:
          'Disembark after breakfast and drive to Kochi. Afternoon walking tour of Fort Kochi — the Chinese fishing nets, Jew Town, St Francis Church — ending with a Kathakali performance.',
        activities: ['Houseboat breakfast', 'Fort Kochi heritage walk', 'Chinese fishing nets', 'Kathakali performance'],
        image: img('pkg-kerala-backwaters-d5', 'card'),
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Breakfast at the hotel and a transfer to Kochi airport or railway station.',
        activities: ['Breakfast', 'Checkout', 'Departure transfer'],
      },
    ],
    hotels: [
      hotel(
        'Misty Ridge Munnar',
        3,
        'Chithirapuram, Munnar',
        'Valley-facing rooms on the edge of a tea estate, with a garden restaurant and bonfire area.',
        'hotel-kerala-mistyridge',
        'Valley-view room',
      ),
      hotel(
        'Periyar Woods Thekkady',
        4,
        'Kumily, Thekkady',
        'Set in a cardamom plantation ten minutes from the reserve gate, with an Ayurveda centre on site.',
        'hotel-kerala-periyarwoods',
        'Superior room',
      ),
      hotel(
        'Deluxe Backwater Houseboat',
        4,
        'Punnamada, Alleppey',
        'A private one or two-bedroom houseboat with air-conditioned cabins, an open deck and a resident chef.',
        'hotel-kerala-houseboat',
        'Air-conditioned cabin',
        'All meals included',
      ),
      hotel(
        'Fort House Kochi',
        5,
        'Fort Kochi',
        'A restored waterfront property with harbour-facing rooms, a courtyard pool and a seafood restaurant.',
        'hotel-kerala-forthouse',
        'Harbour-view room',
      ),
    ],
    experiences: [
      experience('Overnight houseboat', 'Private houseboat with meals cooked on board as you cruise.', 'exp-kerala-houseboat'),
      experience('Periyar boat safari', 'Ninety minutes on the lake watching for elephants and gaur.', 'exp-kerala-safari'),
      experience('Ayurveda massage', 'A traditional treatment at a certified centre in Thekkady or Kochi.', 'exp-kerala-ayurveda'),
      experience('Kathakali performance', 'Classical Kerala dance-drama with a pre-show make-up demonstration.', 'exp-kerala-kathakali'),
    ],
    faqs: [
      {
        question: 'Is the houseboat private or shared?',
        answer:
          'Private. Your family or group has the entire boat, along with a chef and crew. Shared houseboats are available at a lower price if you prefer.',
      },
      {
        question: 'Does the houseboat cruise at night?',
        answer:
          'No. Backwater regulations require boats to anchor by around 5:30pm, so evenings are spent moored in a quiet canal.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-01-28',
    popularity: 89,
  },
  {
    id: 'pkg-rajasthan-royal',
    slug: 'rajasthan-royal-heritage-6-nights',
    title: 'Rajasthan Royal Heritage',
    destinationId: 'dest-rajasthan',
    category: 'luxury',
    categories: ['luxury', 'family', 'group'],
    duration: 6,
    startingPrice: 32900,
    heroImage: img('pkg-rajasthan-royal', 'wide'),
    gallery: gallery('pkg-rajasthan-royal', 5),
    shortDescription:
      'Jaipur, Jodhpur and Udaipur across six nights, with heritage stays and an unhurried fort at every stop.',
    overview:
      'The classic Rajasthan triangle done properly. Two nights each in Jaipur, Jodhpur and Udaipur means you see one fort a day rather than three, with evenings free for rooftop dinners and markets. We use restored havelis and heritage hotels wherever the budget allows, because in Rajasthan the hotel is genuinely part of the trip.',
    highlights: [
      'Amber Fort with a jeep ascent',
      'Mehrangarh Fort above the blue city',
      'Sunset boat ride on Lake Pichola',
      'Heritage haveli stays in all three cities',
      'Block printing and blue pottery workshops',
    ],
    mealPlan: 'Breakfast included',
    hotelCategory: '3 to 5 Star Heritage',
    transfer: 'Private air-conditioned vehicle with driver',
    tourType: 'Private tour',
    rating: 4.7,
    reviewCount: 143,
    featured: true,
    inclusions: [...DOMESTIC_INCLUSIONS, 'Heritage hotel stays where mentioned'],
    exclusions: DOMESTIC_EXCLUSIONS,
    priceVariants: standardVariants(32900),
    itinerary: [
      {
        day: 1,
        title: 'Arrive Jaipur',
        description:
          'Airport or station pickup and check-in. Evening at Chokhi Dhani or a rooftop restaurant looking at the old city walls.',
        activities: ['Arrival transfer', 'Hotel check-in', 'Evening at leisure'],
        image: img('pkg-rajasthan-royal-d1', 'card'),
      },
      {
        day: 2,
        title: 'Jaipur forts and palaces',
        description:
          'Amber Fort in the morning before the heat, then Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal. Afternoon for bazaars — Johari for jewellery, Bapu for textiles.',
        activities: ['Amber Fort', 'Jal Mahal', 'City Palace', 'Hawa Mahal', 'Bazaar shopping'],
        image: img('pkg-rajasthan-royal-d2', 'card'),
      },
      {
        day: 3,
        title: 'Jaipur to Jodhpur',
        description:
          'A five-hour drive west, stopping at the Ajmer dargah or Pushkar lake if you want to break the journey. Evening walk through the blue lanes below the fort.',
        activities: ['Drive to Jodhpur', 'Optional Pushkar stop', 'Blue city walk', 'Clock tower market'],
        image: img('pkg-rajasthan-royal-d3', 'card'),
      },
      {
        day: 4,
        title: 'Mehrangarh and Jaswant Thada',
        description:
          'Mehrangarh Fort with an audio guide is the highlight of most Rajasthan trips — allow three hours. Then Jaswant Thada\'s marble cenotaph and Umaid Bhawan\'s museum.',
        activities: ['Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan Palace museum', 'Evening free'],
        image: img('pkg-rajasthan-royal-d4', 'card'),
      },
      {
        day: 5,
        title: 'Jodhpur to Udaipur',
        description:
          'Drive south via the Jain temple complex at Ranakpur, one of the most intricate marble structures in India. Reach Udaipur by evening for a boat ride on Lake Pichola.',
        activities: ['Ranakpur Jain temple', 'Drive to Udaipur', 'Lake Pichola sunset boat ride'],
        image: img('pkg-rajasthan-royal-d5', 'card'),
      },
      {
        day: 6,
        title: 'Udaipur city',
        description:
          'City Palace and its museum, Jagdish Temple, Saheliyon ki Bari gardens and the Bagore ki Haveli evening folk performance.',
        activities: ['City Palace', 'Jagdish Temple', 'Saheliyon ki Bari', 'Bagore ki Haveli show'],
        image: img('pkg-rajasthan-royal-d6', 'card'),
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Breakfast and a transfer to Udaipur airport or railway station.',
        activities: ['Breakfast', 'Checkout', 'Departure transfer'],
      },
    ],
    hotels: [
      hotel(
        'Haveli Rang Mahal Jaipur',
        3,
        'Bani Park, Jaipur',
        'A family-run haveli with frescoed walls, a courtyard pool and home-style Rajasthani cooking.',
        'hotel-rajasthan-rangmahal',
      ),
      hotel(
        'Indra Vilas Jodhpur',
        4,
        'Old City, Jodhpur',
        'Sandstone boutique hotel with a rooftop restaurant facing Mehrangarh Fort.',
        'hotel-rajasthan-indravilas',
        'Fort-view room',
      ),
      hotel(
        'Amrit Bagh Udaipur',
        5,
        'Lake Pichola, Udaipur',
        'Lakefront luxury with a stepwell-style pool, spa and rooms overlooking the City Palace.',
        'hotel-rajasthan-amritbagh',
        'Lake-view suite',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Elephant or jeep ascent to Amber', 'Ride up the ramparts to the fort gate.', 'exp-rajasthan-amber'),
      experience('Block printing workshop', 'Hand-print your own textile in a Sanganer workshop.', 'exp-rajasthan-blockprint'),
      experience('Lake Pichola boat ride', 'Sunset cruise past Jag Mandir and the Lake Palace.', 'exp-rajasthan-pichola'),
      experience('Zip line over Mehrangarh', 'Six ziplines over the fort walls and Rao Jodha park.', 'exp-rajasthan-zipline'),
    ],
    faqs: [
      {
        question: 'Is six nights enough for Rajasthan?',
        answer:
          'For Jaipur, Jodhpur and Udaipur, yes — two nights each with one fort per day. Adding Jaisalmer or Pushkar needs two or three more nights.',
      },
      {
        question: 'Are heritage hotels comfortable?',
        answer:
          'The ones we use have air conditioning, modern bathrooms and lifts where possible. If anyone in your group has mobility concerns, tell us and we will pick accordingly.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2024-12-08',
    popularity: 84,
  },
  {
    id: 'pkg-andaman-island',
    slug: 'andaman-island-hopping-5-nights',
    title: 'Andaman Island Hopping',
    destinationId: 'dest-andaman',
    category: 'honeymoon',
    categories: ['honeymoon', 'family', 'adventure'],
    duration: 5,
    startingPrice: 27500,
    compareAtPrice: 31900,
    heroImage: img('pkg-andaman-island', 'wide'),
    gallery: gallery('pkg-andaman-island', 5),
    shortDescription:
      'Port Blair, Havelock and Neil across five nights, with snorkelling, Radhanagar sunsets and no visa required.',
    overview:
      'Island water without leaving the country. You start in Port Blair with the Cellular Jail and North Bay coral, then take the fast catamaran to Havelock for Radhanagar and Kalapathar, and finish on Neil Island where everything is within cycling distance. Ferry seats are booked well in advance, which is what usually goes wrong when people plan this trip themselves.',
    highlights: [
      'Radhanagar beach at sunset',
      'Snorkelling at North Bay or Elephant beach',
      'Cellular Jail light and sound show',
      'Private catamaran ferry transfers between islands',
      'Natural coral bridge on Neil Island',
    ],
    mealPlan: 'Breakfast included',
    hotelCategory: '3 to 5 Star',
    transfer: 'Private vehicle and air-conditioned ferry',
    tourType: 'Private tour',
    rating: 4.7,
    reviewCount: 167,
    featured: true,
    offerBadge: 'Save 14%',
    inclusions: [
      ...DOMESTIC_INCLUSIONS,
      'Air-conditioned catamaran ferry tickets between all islands',
      'Cellular Jail light and sound show tickets',
      'Glass-bottom boat ride at North Bay',
    ],
    exclusions: [
      ...DOMESTIC_EXCLUSIONS,
      'Scuba diving and sea walking (bookable on request)',
      'Ferry rescheduling charges if a departure is cancelled due to weather',
    ],
    priceVariants: standardVariants(27500),
    itinerary: [
      {
        day: 1,
        title: 'Arrive Port Blair',
        description:
          'Airport pickup and check-in, then Corbyn\'s Cove beach in the afternoon and the Cellular Jail light and sound show after dark — a good, sober introduction to why these islands matter.',
        activities: ['Airport pickup', 'Corbyn\'s Cove beach', 'Cellular Jail', 'Light and sound show'],
        image: img('pkg-andaman-island-d1', 'card'),
      },
      {
        day: 2,
        title: 'North Bay and Ross Island',
        description:
          'A boat day. Ross Island\'s colonial ruins are now overrun by deer and banyan roots; North Bay is where you snorkel or take a glass-bottom boat over the coral.',
        activities: ['Ross Island ruins', 'North Bay coral', 'Snorkelling or glass-bottom boat', 'Optional sea walk'],
        image: img('pkg-andaman-island-d2', 'card'),
      },
      {
        day: 3,
        title: 'Ferry to Havelock and Radhanagar',
        description:
          'Morning catamaran to Havelock. After check-in, head to Radhanagar beach for sunset — a wide, clean, tree-lined stretch that deserves its reputation.',
        activities: ['Catamaran to Havelock', 'Hotel check-in', 'Radhanagar beach sunset'],
        image: img('pkg-andaman-island-d3', 'card'),
      },
      {
        day: 4,
        title: 'Elephant Beach and Kalapathar',
        description:
          'A short boat ride to Elephant beach for snorkelling and optional water sports, then Kalapathar in the late afternoon when the light is best.',
        activities: ['Elephant Beach boat trip', 'Snorkelling', 'Optional jet ski or sea kayaking', 'Kalapathar beach'],
        image: img('pkg-andaman-island-d4', 'card'),
      },
      {
        day: 5,
        title: 'Havelock to Neil Island',
        description:
          'Ferry across to Neil. The whole island can be covered in an afternoon — Bharatpur for snorkelling, Laxmanpur for sunset and the natural coral bridge at low tide.',
        activities: ['Ferry to Neil Island', 'Bharatpur beach', 'Natural coral bridge', 'Laxmanpur sunset'],
        image: img('pkg-andaman-island-d5', 'card'),
      },
      {
        day: 6,
        title: 'Neil to Port Blair and departure',
        description:
          'Morning ferry back to Port Blair, a stop at the Samudrika Naval Museum if time allows, then your airport transfer.',
        activities: ['Ferry to Port Blair', 'Optional museum visit', 'Airport transfer'],
      },
    ],
    hotels: [
      hotel(
        'Sea Shell Port Blair',
        3,
        'Marine Hill, Port Blair',
        'Comfortable base near the harbour, ten minutes from Cellular Jail and the ferry terminal.',
        'hotel-andaman-seashell',
      ),
      hotel(
        'Coral Reef Havelock',
        4,
        'Govind Nagar, Havelock',
        'Garden cottages a short drive from Radhanagar, with an in-house dive centre.',
        'hotel-andaman-coralreef',
        'Garden cottage',
      ),
      hotel(
        'Blue Lagoon Neil',
        4,
        'Laxmanpur, Neil Island',
        'Quiet beachfront rooms with bicycles included and an open-air seafood kitchen.',
        'hotel-andaman-bluelagoon',
        'Sea-facing room',
      ),
      hotel(
        'Havelock Beach Resort',
        5,
        'Vijaynagar Beach, Havelock',
        'Premium beachfront villas with a spa, private beach access and sunrise views.',
        'hotel-andaman-beachresort',
        'Beachfront villa',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Scuba diving for beginners', 'A guided introductory dive with no certification needed.', 'exp-andaman-scuba'),
      experience('Sea walking at North Bay', 'Walk the seabed in a helmet with air supplied from the surface.', 'exp-andaman-seawalk'),
      experience('Snorkelling at Elephant Beach', 'Shallow, calm reef ideal for first-timers.', 'exp-andaman-snorkel'),
      experience('Kayaking through mangroves', 'A quiet paddle through Havelock\'s mangrove creeks.', 'exp-andaman-kayak'),
    ],
    faqs: [
      {
        question: 'What if a ferry gets cancelled?',
        answer:
          'Cancellations due to weather are rare but possible, mostly during the monsoon. We rebook you on the next available sailing and adjust hotel nights; any fare difference is passed on at actuals.',
      },
      {
        question: 'Can we add scuba diving?',
        answer:
          'Yes. Introductory dives at Havelock can be added to your quote, and PADI certification courses are available if you have three or four spare days.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2025-02-18',
    popularity: 88,
  },
  {
    id: 'pkg-himachal-hills',
    slug: 'himachal-shimla-manali-6-nights',
    title: 'Shimla & Manali Hill Retreat',
    destinationId: 'dest-himachal',
    category: 'family',
    categories: ['family', 'honeymoon', 'weekend', 'adventure'],
    duration: 6,
    startingPrice: 17900,
    heroImage: img('pkg-himachal-hills', 'wide'),
    gallery: gallery('pkg-himachal-hills', 5),
    shortDescription:
      'Two nights in Shimla, three in Manali and a buffer day, so the long mountain drive never eats your holiday.',
    overview:
      'Most Shimla–Manali itineraries try to fit both towns into four nights and end up spending half the trip in a car. This one gives you six: Kufri and the Shimla ridge first, then the Beas valley, Solang and Old Manali, with a spare afternoon because mountain roads do not always cooperate.',
    highlights: [
      'Shimla ridge, Mall Road and Christ Church',
      'Kufri viewpoint and Himalayan Nature Park',
      'Solang Valley activities and the Atal Tunnel drive',
      'Hadimba temple and Old Manali cafés',
      'Riverside stay along the Beas',
    ],
    mealPlan: 'Breakfast and dinner included',
    hotelCategory: '3 to 5 Star',
    transfer: 'Private air-conditioned vehicle',
    tourType: 'Private tour',
    rating: 4.5,
    reviewCount: 152,
    inclusions: [...DOMESTIC_INCLUSIONS, 'Daily dinner at the hotel'],
    exclusions: [
      ...DOMESTIC_EXCLUSIONS,
      'Solang Valley adventure activities such as paragliding and zorbing',
      'Local union taxi to Rohtang or Atal Tunnel where private vehicles are restricted',
    ],
    priceVariants: standardVariants(17900, { mealPlan: 'Breakfast and dinner included' }),
    itinerary: [
      {
        day: 1,
        title: 'Chandigarh or Delhi to Shimla',
        description:
          'Met at Chandigarh airport or the railway station and driven up to Shimla, with a stop at the Timber Trail or Barog on the way. Evening walk on the Ridge.',
        activities: ['Arrival pickup', 'Drive to Shimla', 'Ridge and Mall Road walk', 'Christ Church'],
        image: img('pkg-himachal-hills-d1', 'card'),
      },
      {
        day: 2,
        title: 'Kufri and around Shimla',
        description:
          'Half day at Kufri for the viewpoint and nature park, then Jakhoo temple and the Viceregal Lodge. Afternoon free for the Lakkar Bazaar.',
        activities: ['Kufri viewpoint', 'Himalayan Nature Park', 'Jakhoo temple', 'Viceregal Lodge'],
        image: img('pkg-himachal-hills-d2', 'card'),
      },
      {
        day: 3,
        title: 'Shimla to Manali',
        description:
          'The long leg — roughly seven hours along the Sutlej and Beas rivers, with stops at Sundernagar lake and the Pandoh dam. Evening at leisure in Manali.',
        activities: ['Drive to Manali', 'Sundernagar lake', 'Pandoh dam viewpoint', 'Manali check-in'],
        image: img('pkg-himachal-hills-d3', 'card'),
      },
      {
        day: 4,
        title: 'Solang Valley and the Atal Tunnel',
        description:
          'Up the valley to Solang for snow or summer activities, and through the Atal Tunnel to Sissu if the road is open — a genuinely dramatic drive into Lahaul.',
        activities: ['Solang Valley', 'Atal Tunnel and Sissu', 'Optional ropeway', 'Return to Manali'],
        image: img('pkg-himachal-hills-d4', 'card'),
      },
      {
        day: 5,
        title: 'Manali local and Old Manali',
        description:
          'Hadimba temple in the cedar forest, the Vashisht hot springs, Manu temple and the Tibetan monastery, then an afternoon in Old Manali\'s cafés.',
        activities: ['Hadimba temple', 'Vashisht hot springs', 'Tibetan monastery', 'Old Manali cafés'],
        image: img('pkg-himachal-hills-d5', 'card'),
      },
      {
        day: 6,
        title: 'Naggar and a free afternoon',
        description:
          'Naggar castle and the Roerich art gallery in the morning. The afternoon is deliberately unplanned — river time, shopping or simply resting before the drive down.',
        activities: ['Naggar castle', 'Roerich gallery', 'Riverside time', 'Mall Road shopping'],
        image: img('pkg-himachal-hills-d6', 'card'),
      },
      {
        day: 7,
        title: 'Departure',
        description:
          'Breakfast and a transfer to Bhuntar airport, or the drive down to Chandigarh or Delhi.',
        activities: ['Breakfast', 'Checkout', 'Departure transfer'],
      },
    ],
    hotels: [
      hotel(
        'Pine Crest Shimla',
        3,
        'Circular Road, Shimla',
        'Valley-facing rooms a ten-minute walk from the Ridge, with heating and in-house dining.',
        'hotel-himachal-pinecrest',
        'Valley-view room',
        'Breakfast and dinner included',
      ),
      hotel(
        'Beas Riverside Manali',
        4,
        'Left Bank, Manali',
        'Rooms overlooking the Beas with a riverside deck, bonfire area and multi-cuisine restaurant.',
        'hotel-himachal-beas',
        'River-view room',
        'Breakfast and dinner included',
      ),
      hotel(
        'Cedar Lodge Manali',
        5,
        'Log Huts Area, Manali',
        'Luxury wooden suites in a cedar grove with a spa, indoor pool and mountain views.',
        'hotel-himachal-cedar',
        'Premium suite',
        'Breakfast and dinner included',
      ),
    ],
    experiences: [
      experience('Paragliding at Solang', 'Short tandem flights over the valley, weather permitting.', 'exp-himachal-paragliding'),
      experience('River rafting on the Beas', 'A seven-kilometre run from Pirdi, suitable for beginners.', 'exp-himachal-rafting'),
      experience('Atal Tunnel to Sissu', 'Drive through the tunnel into the Lahaul valley.', 'exp-himachal-atal'),
      experience('Snow activities at Solang', 'Skiing, snow tubing and sledging in season.', 'exp-himachal-snow'),
    ],
    faqs: [
      {
        question: 'Is the Shimla to Manali drive difficult?',
        answer:
          'It is long — seven to eight hours — but on a well-maintained highway for most of the way. We break it with stops and start early to avoid arriving after dark.',
      },
      {
        question: 'Can we visit Rohtang Pass?',
        answer:
          'Rohtang requires a separate permit and is usually open from May to October. We can arrange it subject to availability; the Atal Tunnel is open year-round and needs no permit.',
      },
      ...COMMON_PACKAGE_FAQS,
    ],
    createdAt: '2024-11-20',
    popularity: 79,
  },
];
