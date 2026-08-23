import type { PolicyDocument } from '@/types';

/**
 * TEMPLATE LEGAL CONTENT — REQUIRES REVIEW BEFORE LAUNCH.
 *
 * These documents follow standard travel-industry structure so the policy pages
 * can be built and reviewed, but they are drafts. They must be checked by the
 * business owner and a legal advisor, and the placeholder commercial terms
 * (deposit percentages, cancellation windows, registration numbers) replaced
 * with the actual terms Mahadev Miles operates under before going live.
 */

export const policies: PolicyDocument[] = [
  {
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    description:
      'The terms that apply when you book a holiday with Mahadev Miles, including booking, payment and liability.',
    lastUpdated: '2025-03-01',
    sections: [
      {
        heading: 'About these terms',
        paragraphs: [
          'These terms apply to every booking made with Mahadev Miles, whether through this website, over the phone, on WhatsApp or in person. By confirming a booking you accept them on behalf of everyone travelling on that booking.',
          'Please read them alongside your written quotation, which sets out the specific inclusions, exclusions and payment schedule for your trip. Where the two differ, the written quotation for your booking takes precedence.',
        ],
      },
      {
        heading: 'Quotations and pricing',
        paragraphs: [
          'Prices shown on this website are indicative starting prices, quoted per person on a twin-sharing basis unless stated otherwise. They depend on travel dates, group size, hotel category and availability at the time of booking.',
          'A price is only confirmed once we issue a written quotation and you accept it. Prices may change before confirmation due to hotel availability, airline fares, currency movement or changes in government taxes.',
        ],
        bullets: [
          'All prices are in Indian Rupees unless stated otherwise',
          'Airfare is quoted separately unless expressly included',
          'Visa fees, where applicable, are charged at actuals',
          'Prices are not held until a booking is confirmed with an advance payment',
        ],
      },
      {
        heading: 'Booking and payment',
        paragraphs: [
          'A booking is confirmed when we receive the advance payment specified in your quotation and issue a written confirmation. The balance is due by the date stated in your payment schedule.',
          'If a balance payment is not received by the due date, the booking may be treated as cancelled and cancellation charges may apply. Some services — particularly airline tickets, peak-season hotels and fixed departures — require full payment earlier, which we will tell you in writing before you commit.',
        ],
      },
      {
        heading: 'Your responsibilities',
        paragraphs: [
          'You are responsible for ensuring that the names, dates and contact details you give us are accurate, and that every traveller holds valid travel documents for the itinerary booked.',
        ],
        bullets: [
          'Valid passport with sufficient remaining validity for your destination',
          'Correct visas, permits and vaccination requirements',
          'Names matching exactly across passport, tickets and bookings',
          'Arriving at airports, stations and pickup points at the notified time',
          'Complying with local laws and the rules of hotels and service providers',
        ],
      },
      {
        heading: 'Changes by you',
        paragraphs: [
          'We will try to accommodate changes after confirmation, but cannot guarantee them. Any change is subject to availability and to charges levied by hotels, airlines and other suppliers, plus any applicable amendment fee stated in your quotation.',
        ],
      },
      {
        heading: 'Changes and cancellation by us',
        paragraphs: [
          'Occasionally we may need to change part of an itinerary — for example if a hotel becomes unavailable, a road closes, a ferry is cancelled or weather makes an activity unsafe. Where this happens we will provide a comparable alternative wherever possible and tell you promptly.',
          'If we have to cancel a trip entirely for reasons within our control, you will be offered an alternative date or a refund of amounts paid to us, less any non-recoverable supplier costs.',
        ],
      },
      {
        heading: 'Circumstances beyond our control',
        paragraphs: [
          'We are not liable for failure to perform any part of a booking caused by events beyond our reasonable control. This includes but is not limited to natural disasters, extreme weather, road or airport closures, strikes, civil unrest, epidemics, government restrictions and changes in travel advisories.',
          'In such cases we will do what we reasonably can to assist and to recover costs from suppliers on your behalf, but supplier terms will govern what is refundable.',
        ],
      },
      {
        heading: 'Third-party services',
        paragraphs: [
          'Hotels, airlines, transport operators, guides and activity providers are independent suppliers. We select them carefully and act as your agent in booking them, but we are not liable for their acts or omissions beyond what applicable law requires.',
          'Adventure and water activities carry inherent risk. Where these are included or arranged, you participate at your own risk and must follow the operator\'s safety instructions.',
        ],
      },
      {
        heading: 'Travel insurance',
        paragraphs: [
          'We strongly recommend comprehensive travel insurance covering medical treatment, trip cancellation, curtailment and baggage for every traveller. For some destinations, insurance is a visa requirement. Insurance is not included in our packages unless expressly stated.',
        ],
      },
      {
        heading: 'Complaints',
        paragraphs: [
          'If something is wrong during your trip, tell your local representative or contact us immediately so we have the chance to put it right while you are still travelling. Issues raised only after you return are considerably harder to resolve with suppliers.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          'These terms are governed by the laws of India, and disputes are subject to the jurisdiction of the courts at our registered place of business.',
        ],
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description:
      'What personal information Mahadev Miles collects, why we collect it, how we use it and the choices you have.',
    lastUpdated: '2025-03-01',
    sections: [
      {
        heading: 'Scope',
        paragraphs: [
          'This policy explains how Mahadev Miles handles personal information collected through this website, our enquiry forms, WhatsApp conversations, phone calls and email.',
        ],
      },
      {
        heading: 'Information we collect',
        paragraphs: [
          'We only collect what we need to respond to your enquiry and arrange your travel.',
        ],
        bullets: [
          'Contact details you provide: name, phone number and email address',
          'Trip details: destination, travel dates, number of travellers and preferences',
          'Traveller documents where required for a booking, such as passport details',
          'Enquiry context: which page you enquired from and how you reached us',
          'Basic technical data such as device type and pages visited, used to improve the site',
        ],
      },
      {
        heading: 'How we use it',
        paragraphs: [
          'Primarily to do the thing you contacted us for: prepare a quotation, answer your questions and make bookings on your behalf.',
        ],
        bullets: [
          'Responding to enquiries and preparing quotations',
          'Making reservations with hotels, airlines and local operators',
          'Processing visa applications where you have asked us to assist',
          'Sending booking confirmations, itineraries and travel documents',
          'Sending offers and updates, only if you have opted in',
          'Meeting legal, tax and regulatory obligations',
        ],
      },
      {
        heading: 'Sharing with suppliers',
        paragraphs: [
          'To arrange travel, we share necessary traveller details with the suppliers involved in your trip — hotels, airlines, transport operators, visa processing agencies and local partners. We share only what those suppliers require.',
          'We do not sell your personal information, and we do not share it with third parties for their own marketing.',
        ],
      },
      {
        heading: 'Sensitive documents',
        paragraphs: [
          'Passport copies, photographs and similar documents are collected only when a booking or visa application requires them, retained only as long as needed for that purpose, and shared only with the relevant authority or supplier.',
          'Please send such documents through the channel we specify rather than posting them in public or unsecured places.',
        ],
      },
      {
        heading: 'Retention',
        paragraphs: [
          'We keep enquiry and booking records for as long as needed to service your travel, handle any post-travel issues and meet legal and accounting requirements. After that, records are deleted or anonymised.',
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You can ask us to correct or delete your information, or to stop sending marketing messages, at any time using the contact details on our contact page.',
        ],
        bullets: [
          'Request a copy of the information we hold about you',
          'Ask for corrections to inaccurate details',
          'Ask for deletion, subject to records we must retain by law',
          'Opt out of marketing communications at any time',
        ],
      },
      {
        heading: 'Cookies and analytics',
        paragraphs: [
          'This website uses cookies and similar technologies to keep the site working correctly and to understand which pages are useful. Analytics data is used in aggregate and is not used to identify individual visitors.',
          'You can block or delete cookies in your browser settings, though some parts of the site may not work as intended if you do.',
        ],
      },
      {
        heading: 'Security',
        paragraphs: [
          'We take reasonable technical and organisational measures to protect the information we hold. No system is completely secure, so please avoid sending sensitive documents over unsecured channels or to unverified contacts.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'For any privacy question or request, contact us using the details on our contact page and we will respond within a reasonable time.',
        ],
      },
    ],
  },
  {
    slug: 'cancellation-and-refund-policy',
    title: 'Cancellation & Refund Policy',
    description:
      'How cancellations are handled, what charges apply and how refunds are processed.',
    lastUpdated: '2025-03-01',
    sections: [
      {
        heading: 'How cancellation charges work',
        paragraphs: [
          'When you cancel, we recover what we can from hotels, airlines and local operators and retain only what those suppliers do not refund, plus our service charge. Because supplier terms vary considerably, the exact charge depends on your specific booking.',
          'Your written quotation and confirmation set out the cancellation terms that apply to your trip. Those terms take precedence over the general guidance below.',
        ],
      },
      {
        heading: 'Indicative cancellation charges',
        paragraphs: [
          'For most standard packages, cancellation charges increase as the departure date approaches. The bands below are typical, not universal — peak-season bookings, fixed departures and non-refundable hotel rates often carry stricter terms that we will state clearly at the time of booking.',
        ],
        bullets: [
          'More than 45 days before departure: loss of advance payment or booking fee',
          '30 to 45 days before departure: a part of the package cost is retained',
          '15 to 29 days before departure: a larger part of the package cost is retained',
          'Less than 15 days before departure: most or all of the package cost may be non-refundable',
          'No-show or cancellation after departure: no refund',
        ],
      },
      {
        heading: 'Items that are usually non-refundable',
        paragraphs: [
          'Some costs are lost as soon as they are incurred, regardless of when you cancel.',
        ],
        bullets: [
          'Airline tickets, subject to the airline\'s own fare rules',
          'Visa fees, once an application has been submitted',
          'Non-refundable and advance-purchase hotel rates',
          'Train tickets, ferry seats and event or attraction tickets already issued',
          'Travel insurance premiums',
        ],
      },
      {
        heading: 'Cancellation by us',
        paragraphs: [
          'If we cancel a confirmed trip for reasons within our control, you will be offered an alternative date or a refund of amounts paid to us, less any costs we cannot recover from suppliers.',
          'Where a trip cannot proceed because of events beyond anyone\'s control — weather, closures, government restrictions, civil disruption — we will pursue supplier refunds and waivers on your behalf and pass on whatever is recovered. We cannot guarantee a full refund in those circumstances, which is one reason we recommend travel insurance.',
        ],
      },
      {
        heading: 'Unused services',
        paragraphs: [
          'No refund is available for services included in your package but not used during the trip — an unused hotel night, a missed transfer, a skipped excursion or an early departure.',
        ],
      },
      {
        heading: 'How to cancel',
        paragraphs: [
          'Send your cancellation request in writing by email so there is a clear record of the date and time. Cancellation charges are calculated from when we receive that written request, not from an earlier verbal conversation.',
        ],
      },
      {
        heading: 'Refund processing',
        paragraphs: [
          'Approved refunds are made to the original payment method or bank account used for the booking. Once supplier refunds are settled, we aim to process refunds within a reasonable period, typically a few weeks — airline and overseas supplier refunds can take longer, and we will keep you informed.',
          'Bank charges, payment gateway fees and currency conversion losses are not refundable.',
        ],
      },
    ],
  },
  {
    slug: 'payment-policy',
    title: 'Payment Policy',
    description:
      'Accepted payment methods, deposit and balance schedules, and how we handle taxes and currency.',
    lastUpdated: '2025-03-01',
    sections: [
      {
        heading: 'Confirming a booking',
        paragraphs: [
          'A booking becomes confirmed only when the advance payment stated in your quotation has been received and we have issued a written confirmation. Until then, prices, hotels and availability are not held.',
        ],
      },
      {
        heading: 'Advance and balance',
        paragraphs: [
          'Most packages are confirmed with a part-payment at booking, with the balance due before departure. The exact amounts and dates are set out in your quotation and depend on the suppliers involved.',
          'Some components need to be paid in full earlier — airline tickets are issued against full fare, peak-season hotels often require prepayment, and fixed departures have their own schedule. We tell you this before you commit rather than after.',
        ],
        bullets: [
          'Advance payment confirms the booking and blocks services',
          'Balance is due by the date stated in your payment schedule',
          'Airfare, visa fees and non-refundable rates may need earlier payment',
          'Late balance payment may lead to cancellation and charges',
        ],
      },
      {
        heading: 'Accepted payment methods',
        paragraphs: [
          'We accept bank transfer, UPI, and major credit and debit cards. Payment details are issued with your quotation on our official letterhead.',
          'Please make payments only to the account named in our written communication, and only after verifying it directly with us on our published phone number. We will never ask you to transfer money to a personal account or to a number you received unsolicited.',
        ],
      },
      {
        heading: 'Taxes and charges',
        paragraphs: [
          'Applicable Indian taxes, including GST at the prevailing rate for tour operators, are charged as per law and shown on your invoice. Payment gateway or card processing charges, where applicable, are stated before you pay.',
          'Government taxes and levies imposed at a destination — city taxes, tourism levies, park entry fees — are payable locally unless your quotation says otherwise.',
        ],
      },
      {
        heading: 'Currency and exchange rates',
        paragraphs: [
          'International packages are quoted in Indian Rupees based on exchange rates on the date of quotation. If rates move materially before your booking is confirmed, we may need to requote. Once your booking is confirmed and paid as per schedule, the agreed rupee price is held except for changes in government taxes or supplier-imposed surcharges.',
        ],
      },
      {
        heading: 'Invoices and receipts',
        paragraphs: [
          'A receipt is issued for every payment and a tax invoice for the booking. Keep these — they are needed for insurance claims, visa applications and any refund request.',
        ],
      },
      {
        heading: 'A note on payment fraud',
        paragraphs: [
          'Travel bookings are a common target for impersonation fraud. If you receive payment instructions that differ from what we sent, or any request for urgent payment to a new account, stop and call us on the number published on this website before transferring anything.',
        ],
      },
    ],
  },

  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    description:
      'The limits of the information published on this website, including prices, images and third-party content.',
    lastUpdated: '2025-03-01',
    sections: [
      {
        heading: 'General information only',
        paragraphs: [
          'The content on this website is published for general information about the holidays we arrange. It is not a contractual offer. The terms of your trip are those set out in your written quotation and confirmation.',
        ],
      },
      {
        heading: 'Prices and availability',
        paragraphs: [
          'Prices shown are indicative starting prices per person on twin-sharing, and depend on dates, group size, hotel category and availability. They change with season and supplier rates, and the price for your trip is the one in your written quotation.',
          'We make reasonable efforts to keep prices and itineraries current, but cannot guarantee that every figure on the site reflects live availability at the moment you view it.',
        ],
      },
      {
        heading: 'Itineraries and images',
        paragraphs: [
          'Itineraries are representative. Sequence, timings and specific sights may change because of weather, road conditions, local closures, permit availability or operational requirements, and hotels may be substituted with comparable alternatives.',
          'Photographs are used to illustrate destinations and experiences. They may not depict the exact hotel room, vehicle, vessel or activity provider used on your trip.',
        ],
      },
      {
        heading: 'Third-party information',
        paragraphs: [
          'Visa rules, entry requirements, permit conditions, park timings and local regulations change frequently and are set by authorities outside our control. Information about them here is a guide, not an authoritative source. Verify current requirements with the relevant authority before booking non-refundable travel.',
          'Links to external websites are provided for convenience. We are not responsible for their content or accuracy.',
        ],
      },
      {
        heading: 'Reviews and ratings',
        paragraphs: [
          'Where traveller feedback, ratings or statistics are shown, they are published only where genuine and provided with consent. Star ratings for hotels reflect the local classification or supplier description and may differ from what the same rating means elsewhere.',
        ],
      },
      {
        heading: 'Health, safety and activities',
        paragraphs: [
          'Adventure activities, water sports, treks and high-altitude travel carry inherent risks. Assess your own fitness and medical suitability, disclose relevant medical conditions when booking, and follow operator safety instructions. Nothing on this site constitutes medical advice.',
        ],
      },
      {
        heading: 'Limitation',
        paragraphs: [
          'To the extent permitted by law, we are not liable for loss arising from reliance on general information published on this website, as distinct from the specific written terms of a confirmed booking.',
        ],
      },
    ],
  },
];
