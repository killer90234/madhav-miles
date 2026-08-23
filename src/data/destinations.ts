import { gallery, img } from '@/lib/images';
import type { Destination } from '@/types';

/**
 * Launch catalogue of destinations.
 * Replace this module with a CMS/API fetch later — the shape is what matters.
 */
export const destinations: Destination[] = [
  {
    id: 'dest-goa',
    slug: 'goa',
    name: 'Goa',
    country: 'India',
    region: 'domestic',
    tagline: 'Sunsets, shacks and slow mornings',
    description:
      'Goa works for almost every kind of traveller. North Goa gives you the busy beaches, flea markets and late-night music; South Goa keeps things quiet with wide, clean sands and old Portuguese villages. Add a river cruise, a spice plantation lunch and a morning at Old Goa\'s churches and you have a holiday that never feels rushed.',
    heroImage: img('goa-hero', 'hero'),
    cardImage: img('goa-card', 'card'),
    gallery: gallery('goa', 5),
    bestTimeToVisit: 'November to February for clear skies; June to September for green, low-season Goa',
    idealDuration: '3 to 5 nights',
    startingPrice: 16500,
    featured: true,
    whyVisit: [
      'Short flight or overnight train from most Indian metros',
      'Beaches for every mood, from Baga to Palolem',
      'Excellent food — Goan curries, bakeries and beach shacks',
      'Easy to combine with a family trip, honeymoon or friends getaway',
    ],
    highlights: [
      {
        title: 'North Goa beaches',
        description: 'Baga, Calangute and Vagator for water sports, cafés and evening markets.',
        image: img('goa-north', 'card'),
      },
      {
        title: 'South Goa calm',
        description: 'Palolem and Colva for long, uncrowded walks and quiet resorts.',
        image: img('goa-south', 'card'),
      },
      {
        title: 'Mandovi river cruise',
        description: 'A one-hour sunset cruise with folk music and views of Panjim.',
        image: img('goa-cruise', 'card'),
      },
      {
        title: 'Old Goa heritage',
        description: 'Basilica of Bom Jesus and Se Cathedral, both UNESCO-listed.',
        image: img('goa-heritage', 'card'),
      },
    ],
    faqs: [
      {
        question: 'What is the best time to visit Goa?',
        answer:
          'November to February has the most pleasant weather and the full season of markets and beach shacks. June to September is monsoon — much greener, far cheaper, but water sports are usually closed.',
      },
      {
        question: 'How many days are enough for Goa?',
        answer:
          'Three nights covers either North or South Goa comfortably. Five nights lets you split your stay and still have unhurried beach days.',
      },
      {
        question: 'Is Goa suitable for families with children?',
        answer:
          'Yes. We usually recommend South Goa or a resort in Candolim for families — calmer beaches, resort pools and shorter drives between sights.',
      },
      {
        question: 'Do I need to rent a scooter to get around?',
        answer:
          'Not with our packages. Private transfers and sightseeing are included, so a scooter is optional rather than necessary.',
      },
    ],
  },
  {
    id: 'dest-kashmir',
    slug: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    region: 'domestic',
    tagline: 'Paradise on earth, exactly as described',
    description:
      'Srinagar\'s houseboats, the meadows of Gulmarg and Pahalgam, and the gardens above Dal Lake make Kashmir one of the most photogenic places in India. Roads are scenic but slow, so itineraries here are built around fewer moves and longer stays.',
    heroImage: img('kashmir-hero', 'hero'),
    cardImage: img('kashmir-card', 'card'),
    gallery: gallery('kashmir', 5),
    bestTimeToVisit: 'March to May for blossoms, June to August for meadows, December to February for snow',
    idealDuration: '5 to 7 nights',
    startingPrice: 24900,
    featured: true,
    whyVisit: [
      'Houseboat stays and shikara rides on Dal Lake',
      'Gulmarg Gondola — one of the highest cable cars in the world',
      'Mughal gardens, saffron fields and Himalayan valleys',
      'Genuinely different in every season',
    ],
    highlights: [
      {
        title: 'Dal Lake houseboats',
        description: 'Carved cedar interiors, floating vegetable markets and sunrise shikara rides.',
        image: img('kashmir-dal', 'card'),
      },
      {
        title: 'Gulmarg',
        description: 'Gondola to Apharwat, snow in winter and open meadows in summer.',
        image: img('kashmir-gulmarg', 'card'),
      },
      {
        title: 'Pahalgam',
        description: 'The Lidder valley, Betaab and Aru — a slow, forested day out.',
        image: img('kashmir-pahalgam', 'card'),
      },
      {
        title: 'Sonmarg',
        description: 'Meadow of gold, with the Thajiwas glacier trek close by.',
        image: img('kashmir-sonmarg', 'card'),
      },
    ],
    faqs: [
      {
        question: 'Is Kashmir safe for tourists?',
        answer:
          'The tourist circuit — Srinagar, Gulmarg, Pahalgam, Sonmarg — sees heavy visitor traffic through the year. We track local advisories before every departure and adjust plans if needed.',
      },
      {
        question: 'When does it snow in Gulmarg?',
        answer:
          'Reliable snow usually starts late December and lasts through February. January is the most consistent month for snow activities.',
      },
      {
        question: 'How many days do I need for Kashmir?',
        answer:
          'Five nights covers Srinagar, Gulmarg and Pahalgam. Seven nights adds Sonmarg or Doodhpathri without long driving days.',
      },
      {
        question: 'Are houseboats comfortable for families?',
        answer:
          'Deluxe houseboats have attached bathrooms, heating and dining service. We normally suggest one or two nights on a houseboat with the rest in a hotel.',
      },
    ],
  },
  {
    id: 'dest-kerala',
    slug: 'kerala',
    name: 'Kerala',
    country: 'India',
    region: 'domestic',
    tagline: 'Backwaters, tea hills and quiet coasts',
    description:
      'Kerala fits a lot into a small state: a night on a houseboat in Alleppey, tea estates and spice walks in Munnar, wildlife at Thekkady and beach time in Kovalam. Drives are short and green, which makes it one of the easiest destinations to plan for families and first-time travellers.',
    heroImage: img('kerala-hero', 'hero'),
    cardImage: img('kerala-card', 'card'),
    gallery: gallery('kerala', 5),
    bestTimeToVisit: 'September to March; monsoon for Ayurveda retreats',
    idealDuration: '5 to 7 nights',
    startingPrice: 21500,
    featured: true,
    whyVisit: [
      'Private houseboat stays on the Alleppey backwaters',
      'Tea and cardamom plantations around Munnar',
      'Ayurveda and wellness retreats with genuine credentials',
      'Short, scenic drives between every stop',
    ],
    highlights: [
      {
        title: 'Alleppey backwaters',
        description: 'An overnight houseboat with meals cooked on board and village canals to explore.',
        image: img('kerala-alleppey', 'card'),
      },
      {
        title: 'Munnar tea country',
        description: 'Tea museum, Top Station viewpoints and Eravikulam National Park.',
        image: img('kerala-munnar', 'card'),
      },
      {
        title: 'Thekkady',
        description: 'Periyar boat safari, spice plantations and a bamboo-raft morning.',
        image: img('kerala-thekkady', 'card'),
      },
      {
        title: 'Fort Kochi',
        description: 'Chinese fishing nets, Jew Town and Kathakali evenings.',
        image: img('kerala-kochi', 'card'),
      },
    ],
    faqs: [
      {
        question: 'What is the best time to visit Kerala?',
        answer:
          'September to March is comfortable and dry. If you are coming specifically for Ayurveda treatments, the monsoon months are traditionally considered the most effective and are much quieter.',
      },
      {
        question: 'Is one night on a houseboat enough?',
        answer:
          'Yes, for most travellers. Houseboats anchor by evening, so a second night adds rest rather than sightseeing. We usually pair one houseboat night with a resort stay.',
      },
      {
        question: 'How much driving is involved?',
        answer:
          'Kochi to Munnar is about four hours, Munnar to Thekkady three, Thekkady to Alleppey four. Nothing longer than half a day.',
      },
      {
        question: 'Is Kerala good for elderly travellers?',
        answer:
          'Very much so. We can keep walking to a minimum, choose ground-floor rooms and swap hill drives for coastal or backwater stays.',
      },
    ],
  },
  {
    id: 'dest-rajasthan',
    slug: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    region: 'domestic',
    tagline: 'Forts, palaces and desert light',
    description:
      'Rajasthan is India at its most cinematic — Amber Fort above Jaipur, the blue lanes of Jodhpur, Udaipur\'s lake palaces and camel camps in the Thar. Heritage hotels here are part of the experience, not just a place to sleep.',
    heroImage: img('rajasthan-hero', 'hero'),
    cardImage: img('rajasthan-card', 'card'),
    gallery: gallery('rajasthan', 5),
    bestTimeToVisit: 'October to March; avoid May and June heat',
    idealDuration: '6 to 9 nights',
    startingPrice: 22900,
    whyVisit: [
      'Stay inside restored forts and havelis',
      'Jaipur, Jodhpur, Udaipur and Jaisalmer in one loop',
      'Desert camps with folk music under open sky',
      'Outstanding crafts, textiles and blue pottery shopping',
    ],
    highlights: [
      {
        title: 'Amber Fort, Jaipur',
        description: 'Mirror halls, ramparts and a hilltop view over Maota Lake.',
        image: img('rajasthan-amber', 'card'),
      },
      {
        title: 'Mehrangarh, Jodhpur',
        description: 'One of India\'s most intact forts, standing straight above the blue city.',
        image: img('rajasthan-jodhpur', 'card'),
      },
      {
        title: 'Lake Pichola, Udaipur',
        description: 'Sunset boat rides, City Palace and Jag Mandir.',
        image: img('rajasthan-udaipur', 'card'),
      },
      {
        title: 'Sam dunes, Jaisalmer',
        description: 'Camel ride, desert camp dinner and Rajasthani folk performance.',
        image: img('rajasthan-jaisalmer', 'card'),
      },
    ],
    faqs: [
      {
        question: 'What is the ideal Rajasthan route?',
        answer:
          'Jaipur to Jodhpur to Udaipur is the classic six-night loop. Adding Jaisalmer and a desert camp needs two or three more nights.',
      },
      {
        question: 'Is summer travel possible?',
        answer:
          'April to June crosses 40°C most afternoons. It is doable with early starts and pool-heavy hotels, and prices drop sharply, but October to March is far more comfortable.',
      },
      {
        question: 'Can we stay in heritage properties?',
        answer:
          'Yes. We book restored havelis and palace hotels across all four cities and can mix them with modern hotels to manage budget.',
      },
      {
        question: 'How do we travel between cities?',
        answer:
          'Private car with a driver is standard and most flexible. Jaipur to Udaipur and Jodhpur to Jaisalmer also have good trains if you prefer.',
      },
    ],
  },

  {
    id: 'dest-himachal',
    slug: 'himachal',
    name: 'Himachal',
    country: 'India',
    region: 'domestic',
    tagline: 'Pine air and mountain towns',
    description:
      'Shimla\'s colonial ridge, Manali\'s river valleys, Tirthan for slower stays and Dharamshala for Tibetan monasteries. Himachal is the default Indian mountain holiday for good reason — accessible, varied and affordable.',
    heroImage: img('himachal-hero', 'hero'),
    cardImage: img('himachal-card', 'card'),
    gallery: gallery('himachal', 5),
    bestTimeToVisit: 'March to June and September to November; winter for snow',
    idealDuration: '4 to 7 nights',
    startingPrice: 17900,
    whyVisit: [
      'Snow at Solang and Kufri in season',
      'Riverside stays in Kullu, Tirthan and Kasol',
      'Paragliding at Bir Billing',
      'Easy overnight access from Delhi and Chandigarh',
    ],
    highlights: [
      {
        title: 'Shimla ridge',
        description: 'Colonial architecture, the toy train and long evening walks on Mall Road.',
        image: img('himachal-shimla', 'card'),
      },
      {
        title: 'Solang Valley',
        description: 'Snow activities in winter, zorbing and ropeway in summer.',
        image: img('himachal-solang', 'card'),
      },
      {
        title: 'Old Manali',
        description: 'Cafés, Hadimba temple and walks along the Beas.',
        image: img('himachal-manali', 'card'),
      },
      {
        title: 'McLeod Ganj',
        description: 'Tsuglagkhang monastery, Bhagsu waterfall and the Triund trailhead.',
        image: img('himachal-mcleod', 'card'),
      },
    ],
    faqs: [
      {
        question: 'When can we see snow in Himachal?',
        answer:
          'Late December through February is most reliable at Solang and Kufri. Rohtang Pass usually opens around May once snow clearing is complete.',
      },
      {
        question: 'Shimla and Manali together — how many days?',
        answer:
          'Six nights is comfortable: two in Shimla, three in Manali and one buffer, since the road between them takes seven to eight hours.',
      },
      {
        question: 'Is Himachal good for honeymoons?',
        answer:
          'Yes — riverside resorts in Manali and boutique stays in Tirthan or Chail work very well for couples.',
      },
      {
        question: 'How do we reach Himachal?',
        answer:
          'Fly to Chandigarh, Kullu or Dharamshala, or take an overnight coach from Delhi. We arrange transfers either way.',
      },
    ],
  },
  {
    id: 'dest-andaman',
    slug: 'andaman',
    name: 'Andaman',
    country: 'India',
    region: 'domestic',
    tagline: 'Clear water without leaving India',
    description:
      'Radhanagar beach on Havelock, coral reefs at Elephanta and North Bay, and the colonial history of Port Blair. The Andamans give you island-holiday water and snorkelling on a domestic ticket, no visa required.',
    heroImage: img('andaman-hero', 'hero'),
    cardImage: img('andaman-card', 'card'),
    gallery: gallery('andaman', 5),
    bestTimeToVisit: 'October to May; seas are roughest during the monsoon',
    idealDuration: '5 to 7 nights',
    startingPrice: 27500,
    featured: true,
    whyVisit: [
      'Radhanagar, regularly rated among Asia\'s best beaches',
      'Scuba diving and snorkelling for complete beginners',
      'Cellular Jail light and sound show in Port Blair',
      'No visa, no currency exchange, no jet lag',
    ],
    highlights: [
      {
        title: 'Havelock Island',
        description: 'Radhanagar sunsets, Kalapathar beach and easy dive sites.',
        image: img('andaman-havelock', 'card'),
      },
      {
        title: 'Neil Island',
        description: 'Bharatpur and Laxmanpur beaches, natural coral bridge, bicycles everywhere.',
        image: img('andaman-neil', 'card'),
      },
      {
        title: 'Cellular Jail',
        description: 'The colonial prison and its evening light-and-sound narration.',
        image: img('andaman-jail', 'card'),
      },
      {
        title: 'North Bay coral',
        description: 'Glass-bottom boats, sea walking and beginner snorkelling.',
        image: img('andaman-northbay', 'card'),
      },
    ],
    faqs: [
      {
        question: 'Do Indians need a permit for the Andamans?',
        answer:
          'Indian nationals do not need a permit for the main tourist islands. Foreign nationals need a permit, which is issued on arrival at Port Blair.',
      },
      {
        question: 'Can non-swimmers scuba dive?',
        answer:
          'Yes. Introductory dives are guided one-on-one by an instructor and need no swimming ability or certification.',
      },
      {
        question: 'How do we travel between islands?',
        answer:
          'Private air-conditioned catamaran ferries. We book these in advance since seats sell out in peak season.',
      },
      {
        question: 'How many days do we need?',
        answer:
          'Five nights covers Port Blair, Havelock and Neil comfortably. Anything shorter means most of your time is spent on ferries.',
      },
    ],
  },

  {
    id: 'dest-dubai',
    slug: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    region: 'international',
    tagline: 'Where ambition meets adventure',
    description:
      'Dubai is the easiest first international trip for Indian travellers — a short flight, a straightforward visa, familiar food and an itinerary that mixes desert safaris with the world\'s tallest building. It works equally well for families, couples and groups.',
    heroImage: img('dubai-hero', 'hero'),
    cardImage: img('dubai-card', 'card'),
    gallery: gallery('dubai', 5),
    bestTimeToVisit: 'November to March; December to February is peak season',
    idealDuration: '4 to 6 nights',
    startingPrice: 46500,
    featured: true,
    whyVisit: [
      'Three-and-a-half hour flight from most Indian metros',
      'Burj Khalifa, desert safaris and dhow cruises in one trip',
      'Excellent Indian food everywhere',
      'Theme parks and aquariums that genuinely work for children',
    ],
    highlights: [
      {
        title: 'Burj Khalifa',
        description: 'At the Top on levels 124 and 125, best booked for sunset.',
        image: img('dubai-burj', 'card'),
      },
      {
        title: 'Desert safari',
        description: 'Dune bashing, camel rides, BBQ dinner and a live desert camp show.',
        image: img('dubai-desert', 'card'),
      },
      {
        title: 'Dubai Marina',
        description: 'Dhow dinner cruise, JBR beach and the Ain Dubai skyline.',
        image: img('dubai-marina', 'card'),
      },
      {
        title: 'Old Dubai',
        description: 'Gold and spice souks, an abra ride across the creek, Al Fahidi quarter.',
        image: img('dubai-old', 'card'),
      },
    ],
    faqs: [
      {
        question: 'Do Indians need a visa for Dubai?',
        answer:
          'Yes. Most Indian passport holders need a tourist visa, typically issued in three to five working days. Holders of a valid US visa or green card may be eligible for visa on arrival. We handle the application as part of the package.',
      },
      {
        question: 'What is the best time to visit Dubai?',
        answer:
          'November to March has pleasant daytime weather. Summer months cross 45°C, though hotel rates fall sharply and everything worth doing is indoors or after sunset.',
      },
      {
        question: 'How many days are enough for Dubai?',
        answer:
          'Four nights covers the city highlights and a desert safari. Add two nights if you want theme parks or a day trip to Abu Dhabi.',
      },
      {
        question: 'What currency is used and is card accepted?',
        answer:
          'The UAE Dirham. Cards are accepted almost everywhere, but keep some cash for the souks and taxis.',
      },
      {
        question: 'Is Dubai family friendly?',
        answer:
          'Very. It is safe, clean, easy to get around and has more child-focused attractions than almost any city its size.',
      },
    ],
  },
  {
    id: 'dest-bali',
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'international',
    tagline: 'Island of endless escapes',
    description:
      'Bali balances two very different holidays: Ubud with its rice terraces, temples and jungle villas, and the southern beaches of Seminyak, Nusa Dua and Uluwatu. Add a day trip to Nusa Penida and you have the trip most people picture when they think of Bali.',
    heroImage: img('bali-hero', 'hero'),
    cardImage: img('bali-card', 'card'),
    gallery: gallery('bali', 5),
    bestTimeToVisit: 'April to October, the dry season',
    idealDuration: '6 to 8 nights',
    startingPrice: 52900,
    featured: true,
    whyVisit: [
      'Visa on arrival for Indian passport holders',
      'Private-pool villas at reasonable prices',
      'Tegallalang rice terraces and Ubud temples',
      'Nusa Penida day trips and world-class surf breaks',
    ],
    highlights: [
      {
        title: 'Ubud',
        description: 'Rice terraces, Monkey Forest, Tegenungan waterfall and art markets.',
        image: img('bali-ubud', 'card'),
      },
      {
        title: 'Uluwatu',
        description: 'Cliffside temple, Kecak fire dance at sunset and Padang Padang beach.',
        image: img('bali-uluwatu', 'card'),
      },
      {
        title: 'Nusa Penida',
        description: 'Kelingking cliff, Angel\'s Billabong and Broken Beach on a full-day boat trip.',
        image: img('bali-penida', 'card'),
      },
      {
        title: 'Seminyak',
        description: 'Beach clubs, sunset dinners and the best shopping on the island.',
        image: img('bali-seminyak', 'card'),
      },
    ],
    faqs: [
      {
        question: 'Do Indians need a visa for Bali?',
        answer:
          'Indian passport holders get a visa on arrival for tourism, extendable once. You will need a return ticket and a passport valid at least six months.',
      },
      {
        question: 'What is the best time to visit Bali?',
        answer:
          'April to October is the dry season. January and February see the heaviest rain, though it usually falls in short afternoon bursts.',
      },
      {
        question: 'How should we split our stay?',
        answer:
          'Three nights in Ubud followed by three or four in the south — Seminyak for nightlife, Nusa Dua for families, Uluwatu for views.',
      },
      {
        question: 'Is Bali good for a honeymoon?',
        answer:
          'It is one of our most requested honeymoon destinations. Private-pool villas, floating breakfasts and candlelit beach dinners are all easy to arrange.',
      },
    ],
  },

  {
    id: 'dest-thailand',
    slug: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    region: 'international',
    tagline: 'Beaches, temples and street food',
    description:
      'Bangkok\'s temples and markets paired with Phuket or Krabi\'s islands make Thailand the best-value international beach holiday from India. Island hopping around Phi Phi and James Bond Island is the highlight for most travellers.',
    heroImage: img('thailand-hero', 'hero'),
    cardImage: img('thailand-card', 'card'),
    gallery: gallery('thailand', 5),
    bestTimeToVisit: 'November to March',
    idealDuration: '5 to 7 nights',
    startingPrice: 42900,
    featured: true,
    whyVisit: [
      'Short flights and very good value for money',
      'Phi Phi, Krabi and James Bond Island boat trips',
      'Grand Palace and Wat Arun in Bangkok',
      'Some of the best street food anywhere',
    ],
    highlights: [
      {
        title: 'Bangkok temples',
        description: 'Grand Palace, Wat Pho\'s reclining Buddha and Wat Arun by the river.',
        image: img('thailand-bangkok', 'card'),
      },
      {
        title: 'Phi Phi Islands',
        description: 'Maya Bay, snorkelling stops and a speedboat day from Phuket.',
        image: img('thailand-phiphi', 'card'),
      },
      {
        title: 'Krabi',
        description: 'Railay limestone cliffs, four-island tour and Ao Nang sunsets.',
        image: img('thailand-krabi', 'card'),
      },
      {
        title: 'Floating markets',
        description: 'Damnoen Saduak and Maeklong railway market as a half-day trip.',
        image: img('thailand-market', 'card'),
      },
    ],
    faqs: [
      {
        question: 'Do Indians need a visa for Thailand?',
        answer:
          'Indian passport holders currently enter visa-free for short tourist stays. Entry rules change periodically, so we confirm the current requirement before every departure.',
      },
      {
        question: 'Bangkok, Phuket or Krabi?',
        answer:
          'Bangkok for city and shopping, Phuket for nightlife and island tours, Krabi for calmer beaches and scenery. Most trips combine Bangkok with one beach.',
      },
      {
        question: 'When is the best time to go?',
        answer:
          'November to March is dry and pleasant. The Andaman coast sees heavy rain from May to October.',
      },
      {
        question: 'Is Thailand suitable for families?',
        answer:
          'Yes. We build family versions with beach resorts, aquariums, elephant sanctuaries and shorter boat rides.',
      },
    ],
  },
  {
    id: 'dest-maldives',
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'international',
    tagline: 'Nothing but water and time',
    description:
      'One island, one resort, and very little to do beyond swimming, eating and sleeping — which is exactly the point. The Maldives is our most requested honeymoon destination, and local-island stays now make it far more affordable than its reputation suggests.',
    heroImage: img('maldives-hero', 'hero'),
    cardImage: img('maldives-card', 'card'),
    gallery: gallery('maldives', 5),
    bestTimeToVisit: 'November to April, the dry season',
    idealDuration: '4 to 6 nights',
    startingPrice: 68500,
    featured: true,
    whyVisit: [
      'Overwater and beach villas with direct lagoon access',
      'Free visa on arrival for Indian passport holders',
      'Exceptional snorkelling straight off the beach',
      'Short flight from Bengaluru, Kochi, Mumbai and Delhi',
    ],
    highlights: [
      {
        title: 'Overwater villas',
        description: 'Private decks, glass floor panels and steps into the lagoon.',
        image: img('maldives-villa', 'card'),
      },
      {
        title: 'House reef snorkelling',
        description: 'Reef sharks, turtles and rays within swimming distance of your villa.',
        image: img('maldives-reef', 'card'),
      },
      {
        title: 'Sandbank picnic',
        description: 'A private lunch on a bare sandbank in the middle of the ocean.',
        image: img('maldives-sandbank', 'card'),
      },
      {
        title: 'Sunset dolphin cruise',
        description: 'Spinner dolphins alongside the boat most evenings.',
        image: img('maldives-dolphin', 'card'),
      },
    ],
    faqs: [
      {
        question: 'Do Indians need a visa for the Maldives?',
        answer:
          'A free 30-day visa on arrival is issued to Indian passport holders with a confirmed hotel booking and return ticket.',
      },
      {
        question: 'Is the Maldives only for honeymooners?',
        answer:
          'No. Several resorts have kids clubs and family villas, and local islands like Maafushi work well for budget-conscious travellers.',
      },
      {
        question: 'How do resort transfers work?',
        answer:
          'By speedboat, domestic flight or seaplane depending on distance from Male. We include the correct transfer in every quote, since it materially affects the total price.',
      },
      {
        question: 'Is food expensive at the resorts?',
        answer:
          'Resort dining is costly, so we usually recommend a half-board or all-inclusive meal plan rather than room-only.',
      },
    ],
  },

  {
    id: 'dest-singapore',
    slug: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'international',
    tagline: 'A city that works, beautifully',
    description:
      'Gardens by the Bay, Sentosa and Universal Studios, hawker centres and Little India — Singapore is compact, spotless and simple to navigate, which makes it the easiest international city break for families and first-time flyers.',
    heroImage: img('singapore-hero', 'hero'),
    cardImage: img('singapore-card', 'card'),
    gallery: gallery('singapore', 5),
    bestTimeToVisit: 'Year-round; February to April is driest',
    idealDuration: '4 to 5 nights',
    startingPrice: 58900,
    whyVisit: [
      'Universal Studios and Sentosa for families',
      'Gardens by the Bay light show every evening',
      'Outstanding vegetarian and Indian food',
      'World-class public transport — no car needed',
    ],
    highlights: [
      {
        title: 'Gardens by the Bay',
        description: 'Cloud Forest, Flower Dome and the Supertree light show after dark.',
        image: img('singapore-gardens', 'card'),
      },
      {
        title: 'Sentosa Island',
        description: 'Universal Studios, S.E.A. Aquarium, cable car and beaches.',
        image: img('singapore-sentosa', 'card'),
      },
      {
        title: 'Marina Bay',
        description: 'Skyline views, Merlion Park and the Spectra water show.',
        image: img('singapore-marina', 'card'),
      },
      {
        title: 'Night Safari',
        description: 'Tram ride through nocturnal animal habitats after sunset.',
        image: img('singapore-safari', 'card'),
      },
    ],
    faqs: [
      {
        question: 'Do Indians need a visa for Singapore?',
        answer:
          'Yes, an e-visa is required and is usually issued within three to five working days through an authorised agent. We handle this for you.',
      },
      {
        question: 'How many days do we need?',
        answer:
          'Four nights is enough for the city plus a full day on Sentosa. Five if you want both Universal Studios and the zoo or Night Safari.',
      },
      {
        question: 'Can Singapore be combined with another destination?',
        answer:
          'Very easily. Singapore with Malaysia or Bali are our two most popular twin-destination itineraries.',
      },
      {
        question: 'Is Singapore expensive?',
        answer:
          'Hotels and alcohol are, but food at hawker centres and public transport are inexpensive. We can control cost mainly through hotel choice.',
      },
    ],
  },

  {
    id: 'dest-vietnam',
    slug: 'vietnam',
    name: 'Vietnam',
    country: 'Vietnam',
    region: 'international',
    tagline: 'Green bays and lantern-lit streets',
    description:
      'Ha Long Bay\'s limestone karsts, Hanoi\'s old quarter, the lantern-lit riverfront of Hoi An and the energy of Ho Chi Minh City. Vietnam gives you the most variety per rupee of any Southeast Asian destination right now.',
    heroImage: img('vietnam-hero', 'hero'),
    cardImage: img('vietnam-card', 'card'),
    gallery: gallery('vietnam', 5),
    bestTimeToVisit: 'February to April and August to October',
    idealDuration: '6 to 8 nights',
    startingPrice: 44900,
    featured: true,
    whyVisit: [
      'Overnight cruise on Ha Long Bay',
      'Hoi An old town, a UNESCO World Heritage site',
      'Excellent value hotels and food',
      'Direct flights from Delhi, Mumbai and Ahmedabad',
    ],
    highlights: [
      {
        title: 'Ha Long Bay',
        description: 'Overnight junk boat cruise, kayaking and cave visits.',
        image: img('vietnam-halong', 'card'),
      },
      {
        title: 'Hoi An',
        description: 'Lantern-lit streets, tailor shops and the Thu Bon river by night.',
        image: img('vietnam-hoian', 'card'),
      },
      {
        title: 'Ba Na Hills',
        description: 'The Golden Bridge, cable car and French village near Da Nang.',
        image: img('vietnam-banahills', 'card'),
      },
      {
        title: 'Mekong Delta',
        description: 'Sampan boats through coconut channels and floating markets.',
        image: img('vietnam-mekong', 'card'),
      },
    ],
    faqs: [
      {
        question: 'Do Indians need a visa for Vietnam?',
        answer:
          'Yes, an e-visa is required and is generally approved within three to five working days. We apply on your behalf.',
      },
      {
        question: 'What is the best route for a first visit?',
        answer:
          'Hanoi with Ha Long Bay, then Da Nang and Hoi An, and optionally Ho Chi Minh City. Domestic flights keep the travel time manageable.',
      },
      {
        question: 'Is the Ha Long Bay overnight cruise worth it?',
        answer:
          'Yes. A day trip involves nearly six hours of driving for a few hours on the water; an overnight cruise is far more relaxed and includes kayaking and caves.',
      },
      {
        question: 'Is vegetarian food available?',
        answer:
          'Widely. Buddhist vegetarian restaurants are common, and we brief hotels and guides about dietary requirements in advance.',
      },
    ],
  },

  {
    id: 'dest-europe',
    slug: 'europe',
    name: 'Europe',
    country: 'Multi-country',
    region: 'international',
    tagline: 'The trip you have been saving for',
    description:
      'Switzerland\'s Alps, Paris, Amsterdam, Venice and Rome — our Europe itineraries are built around train travel and fewer hotel changes, so you spend your time in cities rather than in transit.',
    heroImage: img('europe-hero', 'hero'),
    cardImage: img('europe-card', 'card'),
    gallery: gallery('europe', 5),
    bestTimeToVisit: 'April to June and September to October',
    idealDuration: '8 to 14 nights',
    startingPrice: 149000,
    featured: true,
    whyVisit: [
      'Jungfraujoch, Mount Titlis and Swiss rail journeys',
      'Paris, Rome, Venice and Amsterdam in one trip',
      'Comfortable, scenic train connections',
      'Indian meals arranged along the entire route',
    ],
    highlights: [
      {
        title: 'Swiss Alps',
        description: 'Jungfraujoch, Mount Titlis, Interlaken and Lake Lucerne.',
        image: img('europe-swiss', 'card'),
      },
      {
        title: 'Paris',
        description: 'Eiffel Tower, Seine cruise, Louvre and Montmartre.',
        image: img('europe-paris', 'card'),
      },
      {
        title: 'Venice and Rome',
        description: 'Gondolas, St Mark\'s Square, the Colosseum and Vatican City.',
        image: img('europe-italy', 'card'),
      },
      {
        title: 'Amsterdam',
        description: 'Canal cruise, Zaanse Schans windmills and Keukenhof in spring.',
        image: img('europe-amsterdam', 'card'),
      },
    ],
    faqs: [
      {
        question: 'How long does a Schengen visa take?',
        answer:
          'Appointment availability varies by season, so we advise starting eight to ten weeks before departure. We prepare the full documentation set and cover letter.',
      },
      {
        question: 'How many countries should we cover?',
        answer:
          'For a first ten-night trip, two or three countries is comfortable. More than that and most of your holiday becomes travel days.',
      },
      {
        question: 'Is Indian food available?',
        answer:
          'Yes, in every major city. Our group departures include Indian dinners on most nights.',
      },
      {
        question: 'Train or coach travel?',
        answer:
          'We prefer trains for city-to-city legs — faster, more comfortable and more scenic, particularly in Switzerland.',
      },
    ],
  },

];
