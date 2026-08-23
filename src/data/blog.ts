import { img } from '@/lib/images';
import type { BlogPost } from '@/types';

/** Editorial content. Bodies are structured sections so a CMS can supply them later. */
export const blogPosts: BlogPost[] = [
  {
    id: 'blog-kashmir-when-to-visit',
    slug: 'best-time-to-visit-kashmir',
    title: 'The best time to visit Kashmir, season by season',
    excerpt:
      'Kashmir is genuinely four different destinations across the year. Here is what each season actually looks like, and which one suits the trip you have in mind.',
    category: 'Destination Guides',
    destinationSlug: 'kashmir',
    author: 'Mahadev Miles Travel Desk',
    publishedAt: '2025-03-04',
    readingMinutes: 7,
    heroImage: img('blog-kashmir-seasons', 'wide'),
    featured: true,
    body: [
      {
        paragraphs: [
          'Most questions we get about Kashmir come down to one thing: when should we go? It matters more here than in almost any other Indian destination, because the valley changes completely between seasons — not just in temperature, but in what is open, what is reachable and what the landscape looks like.',
          'There is no single best month. There is a best month for what you want.',
        ],
      },
      {
        heading: 'Spring: March to early May',
        paragraphs: [
          'The almond and cherry blossoms come out in late March, and the Srinagar tulip garden opens for a few weeks in April — usually the first half, though the exact dates shift with the weather each year.',
          'Days are cool and clear, the gardens are at their best, and there is still snow on the higher slopes at Gulmarg without the winter crowds. This is our favourite window for photographs.',
        ],
        bullets: [
          'Tulip garden open for roughly three weeks in April',
          'Blossoms across Srinagar in late March',
          'Snow still visible at Gulmarg and Sonmarg',
          'Book early — April is one of the busiest months',
        ],
      },
      {
        heading: 'Summer: June to August',
        paragraphs: [
          'The meadows are fully open. Gulmarg is green, Sonmarg is reachable, Pahalgam\'s valleys are at their most walkable and the Amarnath yatra route operates. Temperatures sit comfortably in the low twenties.',
          'This is peak family season, which means higher hotel rates and busier viewpoints. If you want the classic postcard Kashmir with everything accessible, this is when to come.',
        ],
      },
      {
        heading: 'Autumn: September to November',
        paragraphs: [
          'The chinar trees turn in late October and the valley goes gold and rust for about three weeks. It is quieter than summer, the light is excellent and the air is crisp without being cold.',
          'Underrated, in our view. If you are flexible on dates and want fewer people around, late October is the sweet spot.',
        ],
      },
      {
        heading: 'Winter: December to February',
        paragraphs: [
          'Snow arrives at Gulmarg from late December, and January is the most reliable month for it. Skiing, snowboarding and the Apharwat slopes are the draw, and Srinagar under snow is a different city entirely.',
          'Be realistic about the cold — nights drop below freezing, and roads to Gulmarg or Sonmarg occasionally close for a few hours after heavy snowfall. Houseboats are heated but still chilly. We build a buffer day into winter itineraries for exactly this reason.',
        ],
        bullets: [
          'January is the most dependable month for snow',
          'Sonmarg is usually cut off through deep winter',
          'Expect occasional road closures after heavy snow',
          'Lowest hotel rates of the year outside the New Year week',
        ],
      },
      {
        heading: 'So which should you pick?',
        paragraphs: [
          'For blossoms and tulips, go in April. For open meadows and full access, June or July. For colour and calm, late October. For snow, January.',
          'If you tell us what you want out of the trip rather than which dates you have, we can usually suggest a better week than the one you were planning.',
        ],
      },
    ],
  },
  {
    id: 'blog-dubai-visa-guide',
    slug: 'dubai-visa-guide-for-indians',
    title: 'Dubai visa for Indian passport holders: what you actually need',
    excerpt:
      'Documents, timelines, costs and the exemptions people miss. A practical walkthrough of the UAE tourist visa process from India.',
    category: 'Visa Guides',
    destinationSlug: 'dubai',
    author: 'Mahadev Miles Travel Desk',
    publishedAt: '2025-02-20',
    readingMinutes: 6,
    heroImage: img('blog-dubai-visa', 'wide'),
    featured: true,
    body: [
      {
        paragraphs: [
          'The UAE tourist visa is one of the more straightforward applications an Indian traveller will make, but the details change often enough that second-hand advice is frequently out of date. Here is how it works as of writing — and we always reconfirm current rules before your departure.',
        ],
      },
      {
        heading: 'Who needs a visa',
        paragraphs: [
          'Indian passport holders generally require a tourist visa to enter the UAE, arranged in advance through an airline, hotel or authorised travel agent rather than applied for directly.',
          'There is one significant exemption worth checking: holders of a valid US visa, US green card, or UK or EU residence permit may be eligible for a visa on arrival. Eligibility depends on the specific document and its validity, so confirm before assuming it applies to you.',
        ],
      },
      {
        heading: 'Documents to prepare',
        paragraphs: [
          'The list is short and the applications that get delayed are almost always the ones with a poor-quality scan or a passport too close to expiry.',
        ],
        bullets: [
          'Passport with at least six months validity from your travel date',
          'Clear colour scan of the passport first and last pages',
          'Recent photograph with a white background, matching the required dimensions',
          'Confirmed return flight tickets',
          'Confirmed hotel booking or host details',
        ],
      },
      {
        heading: 'How long it takes',
        paragraphs: [
          'Three to five working days is typical for a 30-day tourist visa, and 14-day and 60-day options also exist. Applications submitted on a Thursday often only start moving the following week because of the UAE working week, so we advise applying at least two weeks before departure.',
          'Express processing exists but is not a guarantee. Building in buffer time is cheaper than paying for urgency.',
        ],
      },
      {
        heading: 'Cost, and what is and is not included',
        paragraphs: [
          'The visa fee is set by the UAE authorities and varies by visa duration. When a package includes "visa assistance", that normally means the documentation and submission service — the government fee itself is a pass-through cost.',
          'We quote the two separately for exactly this reason. If a quote bundles them into one number without breaking it down, ask what the actual visa fee is.',
        ],
      },
      {
        heading: 'Common reasons applications get held up',
        paragraphs: [
          'Almost all of them are avoidable.',
        ],
        bullets: [
          'Photograph does not meet the background or dimension requirement',
          'Passport scan is cropped, blurred or missing the last page',
          'Name spelling differs between the passport and the flight booking',
          'Passport validity falls short of six months',
          'Previous UAE visa still active or unresolved',
        ],
      },
      {
        heading: 'A note on accuracy',
        paragraphs: [
          'Visa rules change, sometimes with little notice. Treat this as an orientation rather than a legal reference, and verify current requirements with the UAE authorities or through us before you book non-refundable travel.',
        ],
      },
    ],
  },
  {
    id: 'blog-first-international-trip',
    slug: 'planning-your-first-international-trip',
    title: 'Planning your first international trip: a practical checklist',
    excerpt:
      'Passports, visas, forex, insurance and the mistakes that cost first-time travellers money. What to do, in what order.',
    category: 'Travel Tips',
    author: 'Mahadev Miles Travel Desk',
    publishedAt: '2025-02-06',
    readingMinutes: 8,
    heroImage: img('blog-first-trip', 'wide'),
    body: [
      {
        paragraphs: [
          'A first international trip involves about a dozen small decisions that all feel urgent at once. They are not equally urgent, and doing them in the wrong order is what leads to rushed visas and expensive flights.',
          'Here is the sequence we recommend.',
        ],
      },
      {
        heading: 'Three months out: passport and destination',
        paragraphs: [
          'Check your passport validity first, before anything else. Most countries require at least six months of validity beyond your travel date, and renewal in India takes weeks. If your passport expires within a year of your planned trip, renew it now.',
          'Then choose the destination with visa difficulty in mind, not just cost. Thailand, Bali, the Maldives and Nepal are among the easiest for Indian passport holders. Dubai and Singapore are straightforward with an agent. Schengen Europe, the UK and the US need serious lead time.',
        ],
        bullets: [
          'Passport valid at least six months beyond return date',
          'At least two blank pages for stamps and visas',
          'Check whether your destination needs a visa in advance',
        ],
      },
      {
        heading: 'Two months out: visa and flights',
        paragraphs: [
          'Start the visa process before booking non-refundable flights where possible. For visa-on-arrival destinations this does not matter; for Schengen, it very much does — appointment slots, not approval, are the bottleneck.',
          'Book flights once you are confident about dates. Tuesday and Wednesday departures are usually cheaper than weekends, and a one-stop flight can save a meaningful amount if you do not mind the extra hours.',
        ],
      },
      {
        heading: 'One month out: insurance and forex',
        paragraphs: [
          'Travel insurance is mandatory for Schengen and strongly advisable everywhere else. It is inexpensive relative to what it covers — medical treatment abroad, trip cancellation, lost baggage.',
          'For currency, carry a mix. A forex card for most spending, some cash for taxis and markets, and an international-enabled debit or credit card as backup. Tell your bank you are travelling so a fraud filter does not block your card on day one.',
        ],
        bullets: [
          'Travel insurance covering medical and cancellation',
          'Forex card loaded in the destination currency',
          'Some local cash for arrival — airport rates are poor, so change a small amount only',
          'Inform your bank of your travel dates',
        ],
      },
      {
        heading: 'One week out: documents and connectivity',
        paragraphs: [
          'Keep digital and physical copies of your passport, visa, tickets, hotel bookings and insurance. Email them to yourself so they are reachable even if your phone is not.',
          'Sort out connectivity in advance. An international roaming pack, a local SIM on arrival or an eSIM all work; deciding at the airport is where people overpay.',
        ],
      },
      {
        heading: 'Mistakes we see most often',
        paragraphs: [
          'None of these are exotic. They are the same five things every time.',
        ],
        bullets: [
          'Leaving the visa application until the last three weeks',
          'Booking the cheapest flight with a two-hour international layover',
          'Packing for the weather at home rather than the destination',
          'Skipping insurance to save a small amount',
          'Over-scheduling — three cities in five days is travel, not holiday',
        ],
      },
      {
        heading: 'What we handle',
        paragraphs: [
          'On our international packages, visa documentation, hotel confirmations, transfers and local support are arranged for you. Flights and insurance are quoted separately so you can compare rather than take our word for it.',
          'If it is your first trip abroad, say so when you enquire. We plan those differently — fewer moves, more buffer, longer layovers.',
        ],
      },
    ],
  },
  {
    id: 'blog-bali-7-day-itinerary',
    slug: 'bali-7-day-itinerary',
    title: 'A 7-day Bali itinerary that does not exhaust you',
    excerpt:
      'Three nights inland, three by the coast, one boat day. How to split a week in Bali so you are not driving across the island twice a day.',
    category: 'Itineraries',
    destinationSlug: 'bali',
    author: 'Mahadev Miles Travel Desk',
    publishedAt: '2025-01-30',
    readingMinutes: 7,
    heroImage: img('blog-bali-itinerary', 'wide'),
    body: [
      {
        paragraphs: [
          'The most common Bali mistake is booking one hotel for the whole week. Ubud and the southern beaches are about ninety minutes apart, and if you base yourself in one you will spend a large part of your holiday in a car getting to the other.',
          'Split the stay. Here is the week we recommend.',
        ],
      },
      {
        heading: 'Days 1 to 3: Ubud',
        paragraphs: [
          'Start inland while you are still adjusting. Ubud is green, cooler and slower, and the sights around it are close together.',
          'Day one is arrival and nothing else — the Campuhan ridge walk at dusk is enough. Day two covers the Tegallalang rice terraces early, then the Bali swing, Tegenungan waterfall and Tirta Empul temple, finishing at the Monkey Forest and art market. Day three is your Nusa Penida boat day, which starts early from Sanur.',
        ],
        bullets: [
          'Tegallalang before 8am, before the tour buses',
          'Nusa Penida is a long day — Kelingking, Broken Beach, Crystal Bay',
          'Book a jungle or valley-facing villa; the view is the point',
        ],
      },
      {
        heading: 'Day 4: move south via Tanah Lot',
        paragraphs: [
          'Check out of Ubud and drive south, timing it so you reach the Tanah Lot sea temple for sunset before continuing to your beach hotel. It turns a transfer day into a sightseeing day, which is the only reason to schedule it this way.',
        ],
      },
      {
        heading: 'Days 5 to 7: the south coast',
        paragraphs: [
          'Where you stay depends on what you want. Seminyak for beach clubs, restaurants and shopping. Nusa Dua for calm water and family resorts. Uluwatu for cliffs and surf.',
          'Day five is the Uluwatu run — Padang Padang beach, the cliff temple and the Kecak fire dance at sunset, then seafood on the sand at Jimbaran. Day six should be free: a spa, a beach club, water sports at Benoa, or nothing at all. Day seven is departure.',
        ],
      },
      {
        heading: 'What to leave out',
        paragraphs: [
          'A week is not enough for everything, and trying makes it worse. The Mount Batur sunrise trek means a 2am start and a lost day afterwards — skip it unless it is specifically why you came. North Bali and Lovina are beautiful but too far for a seven-day trip. The Gili Islands need their own three nights.',
          'Better to do six things properly than twelve badly.',
        ],
      },
      {
        heading: 'Practical notes',
        paragraphs: [
          'Hire a car with a driver for sightseeing days rather than a scooter — traffic around Kuta and Canggu is heavy, and drivers cost less than most people expect. Indian passport holders get a visa on arrival, and there is a tourist levy payable on entry.',
          'April to October is the dry season. January and February see the most rain, usually in short afternoon bursts rather than all day.',
        ],
      },
    ],
  },
  {
    id: 'blog-honeymoon-destinations',
    slug: 'honeymoon-destinations-by-budget',
    title: 'Honeymoon destinations, sorted by what you can actually spend',
    excerpt:
      'Six honeymoon options across three budget bands, with an honest note on what each one costs once flights and food are counted.',
    category: 'Travel Inspiration',
    author: 'Mahadev Miles Travel Desk',
    publishedAt: '2025-01-16',
    readingMinutes: 6,
    heroImage: img('blog-honeymoon', 'wide'),
    body: [
      {
        paragraphs: [
          'Honeymoon planning usually starts with a destination and ends with a budget shock. It is easier the other way around. Below are options grouped by realistic per-couple spend, including flights, hotels and food — not just the package headline.',
          'All figures are indicative and move with season and airfare.',
        ],
      },
      {
        heading: 'Under ₹1,00,000 per couple',
        paragraphs: [
          'Domestic, and better than its reputation. Kashmir in spring or autumn gives you houseboats and meadows for very little. Kerala pairs a houseboat night with a hill resort. Andaman gets you clear water and snorkelling without a visa or currency exchange.',
          'The advantage here is that almost the entire budget goes into experience rather than airfare.',
        ],
        bullets: [
          'Kashmir — houseboat, Gulmarg, Pahalgam, 5 nights',
          'Kerala — Munnar, Thekkady and an Alleppey houseboat, 5 nights',
          'Andaman — Havelock and Neil with snorkelling, 5 nights',
        ],
      },
      {
        heading: '₹1,00,000 to ₹2,00,000 per couple',
        paragraphs: [
          'This is where international opens up properly. Bali gives you a private-pool villa for a fraction of what the equivalent costs elsewhere. Thailand offers islands and city in one trip. Vietnam is currently the best value in Southeast Asia.',
          'Bali is the one we recommend most often in this band, mainly because the villa standard at this price is genuinely high.',
        ],
        bullets: [
          'Bali — Ubud villa plus southern beaches, 6 nights',
          'Thailand — Bangkok with Phuket or Krabi, 5 nights',
          'Vietnam — Hanoi, Ha Long Bay and Hoi An, 6 nights',
        ],
      },
      {
        heading: 'Above ₹2,00,000 per couple',
        paragraphs: [
          'The Maldives is the obvious answer and deserves it — an overwater villa, half board and a house reef is a specific experience nothing else replicates. Mauritius offers more to actually do. Switzerland and the Alps suit couples who would rather be cold and outdoors than warm and still.',
          'One caution on the Maldives: the resort transfer can add substantially to the cost, and food at resorts is expensive. Ask for the all-in number, not the room rate.',
        ],
        bullets: [
          'Maldives — overwater villa with half board, 4 to 5 nights',
          'Mauritius — beach resort with island excursions, 6 nights',
          'Switzerland — Interlaken and Lucerne with alpine excursions, 7 nights',
        ],
      },
      {
        heading: 'A few things worth spending on',
        paragraphs: [
          'In our experience, couples rarely regret paying for a better room, a private transfer or one genuinely special dinner. They frequently regret an itinerary with too many moves in it.',
          'Tell us your total budget rather than a destination, and we will show you what it buys in three or four places. It is a more useful conversation.',
        ],
      },
    ],
  },
  {
    id: 'blog-rajasthan-route',
    slug: 'rajasthan-itinerary-how-many-days',
    title: 'How many days do you need for Rajasthan?',
    excerpt:
      'Six nights, nine nights or twelve — what each version of a Rajasthan trip actually covers, and which cities to drop if you are short on time.',
    category: 'Itineraries',
    destinationSlug: 'rajasthan',
    author: 'Mahadev Miles Travel Desk',
    publishedAt: '2024-12-12',
    readingMinutes: 6,
    heroImage: img('blog-rajasthan-route', 'wide'),
    body: [
      {
        paragraphs: [
          'Rajasthan is large, and the distances between its cities are longer than the map suggests. Jaipur to Jodhpur is five hours; Jodhpur to Jaisalmer another five. Any itinerary that ignores this ends up being a driving holiday.',
          'Here is what each trip length realistically covers.',
        ],
      },
      {
        heading: 'Six nights: the golden triangle of Rajasthan',
        paragraphs: [
          'Two nights each in Jaipur, Jodhpur and Udaipur. This is the version we book most often, and it works because it gives you one major fort per day rather than three.',
          'Jaipur covers Amber Fort, City Palace and the bazaars. Jodhpur is Mehrangarh and the blue city. Udaipur is the City Palace and a boat on Lake Pichola. Ranakpur fits neatly as a stop between the last two.',
        ],
        bullets: [
          'Jaipur 2 nights, Jodhpur 2 nights, Udaipur 2 nights',
          'Ranakpur Jain temple en route to Udaipur',
          'Fly out of Udaipur to avoid backtracking',
        ],
      },
      {
        heading: 'Nine nights: add Jaisalmer and the desert',
        paragraphs: [
          'Jaisalmer is the one addition most worth the extra days. The living fort, the havelis and a night at a desert camp on the Sam dunes are a genuinely different experience from the other three cities.',
          'It costs you two travel days, so nine nights is the minimum for a comfortable version. Jaipur, Jodhpur, Jaisalmer, Udaipur, in that order.',
        ],
      },
      {
        heading: 'Twelve nights: the full state',
        paragraphs: [
          'With twelve you can add Pushkar, Bikaner, Mount Abu or Ranthambore for a tiger safari. Ranthambore needs at least two nights to make two safari attempts worthwhile — one safari is a coin flip.',
          'This is also the point at which we would suggest slowing down instead: three nights in Udaipur rather than two, and an afternoon doing nothing in each city.',
        ],
      },
      {
        heading: 'If you only have four nights',
        paragraphs: [
          'Pick two cities, not three. Jaipur and Jodhpur, or Udaipur on its own with day trips to Kumbhalgarh and Chittorgarh. Trying to fit the triangle into four nights means roughly fifteen hours in a car.',
        ],
      },
      {
        heading: 'When to go',
        paragraphs: [
          'October to March. November to February is the most comfortable, with cool mornings and warm afternoons. April to June regularly crosses 40°C — the hotels are cheap for a reason, though a pool-heavy heritage property and early starts make it survivable.',
          'The monsoon months bring a brief green to the state and are underrated for photography, particularly around Udaipur and Mount Abu.',
        ],
      },
    ],
  },
];
