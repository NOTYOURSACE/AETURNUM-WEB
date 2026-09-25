/**
 * All site copy lives here so you can edit it without touching components.
 *
 * Only publish facts about the business that are true. When you have real
 * clients and results, add them here (with the client's permission).
 */

export const SITE = {
  name: 'Aeturnum',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
}

export const NAV_LINKS = [
  { href: '#approach', label: 'Our Approach' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'Why Aeturnum' },
  { href: '#process', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
]

// Keep these to promises you will actually deliver.
export const HERO_STATS = [
  { value: '24h', label: 'Reply time on every enquiry', valueClass: 'text-white' },
  { value: 'Free', label: 'Custom growth audit for new clients', valueClass: 'text-purple-400' },
  { value: 'Weekly', label: 'Performance reports on your ads and email', valueClass: 'text-rose-400' },
]

export const SERVICES = [
  {
    icon: 'fa-chart-line',
    title: 'Paid Media & Social Ads',
    description:
      'We build, target, and scale high-performance ad campaigns across Meta and TikTok that put your products or services directly in front of active buyers, without needing a massive organic following.',
    iconClass: 'bg-purple-600/20 border-purple-500/30 text-purple-400',
    checkClass: 'text-purple-400',
    features: [
      'Advanced Audience Targeting',
      'High-Converting Ad Copywriting',
      'Daily Campaign Optimization',
    ],
  },
  {
    icon: 'fa-envelope-open-text',
    title: 'Email Marketing & Automation',
    description:
      'Stop leaving money on the table. We turn your subscriber list into a predictable revenue engine through high-converting welcome sequences, cart-abandonment flows, and targeted promotional campaigns.',
    iconClass: 'bg-rose-600/20 border-rose-500/30 text-rose-400',
    checkClass: 'text-rose-400',
    featured: true,
    features: [
      'Automated Lifecycle Flows',
      'Custom Email Design & Copy',
      'Segmentation & Retention',
    ],
  },
  {
    icon: 'fa-bullseye',
    title: 'Data-Driven Optimization',
    description:
      'We continuously analyze campaign metrics, cut wasted spend, and optimize your conversion funnels every day to keep your profitability high and your growth sustainable.',
    iconClass: 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400',
    checkClass: 'text-indigo-400',
    features: [
      'Real-Time Performance Dashboards',
      'Funnel Conversion Audits',
      'ROAS & LTV Tracking',
    ],
  },
]

export const ABOUT_POINTS = [
  {
    icon: 'fa-shield-halved',
    title: 'Zero Vanity Metrics',
    text: 'Every campaign is tied directly to customer acquisition, sales, and measurable return on investment.',
  },
  {
    icon: 'fa-sliders',
    title: 'Custom Funnels & Strategies',
    text: "No cookie-cutter templates. We build bespoke advertising and email sequences tailored to your brand's specific audience.",
  },
  {
    icon: 'fa-chart-pie',
    title: 'Transparent Reporting',
    text: 'Full visibility into your ad spend, ROAS, and email revenue streams with weekly performance breakdowns.',
  },
]

export const INCLUDED = [
  'A free growth audit of your website, ads and emails',
  'Meta & TikTok campaigns built around your buyers',
  'Welcome and cart-abandonment email flows',
  'Weekly reports on spend, ROAS and email revenue',
]

export const PROCESS_STEPS = [
  {
    title: 'Free growth audit',
    text: 'We review your website, ads and email setup and show you where you are losing sales.',
  },
  {
    title: 'Strategy and build',
    text: 'We plan your campaigns and email flows, then write and design the ads and emails.',
  },
  {
    title: 'Launch and test',
    text: 'We go live, test audiences and creatives, and learn what your buyers respond to.',
  },
  {
    title: 'Report and improve',
    text: 'You get weekly reports. We cut what is not working and put more into what is.',
  },
]

export const GOALS = [
  { value: 'ads', label: 'Scale Paid Social Ads (Meta / TikTok)' },
  { value: 'email', label: 'Email Marketing & Lifecycle Automation' },
  { value: 'both', label: 'Full Growth Suite (Ads + Email)' },
]

// Add more accounts here later, for example:
// { label: 'Aeturnum on LinkedIn', icon: 'fa-linkedin', href: 'https://...' }
export const SOCIAL_LINKS = [
  {
    label: 'Aeturnum on Instagram',
    icon: 'fa-instagram',
    href: 'https://www.instagram.com/aeturnum.co/',
  },
]

/**
 * CALL CENTER STAFFING
 * Separate offering: we supply trained call center agents to businesses
 * in HVAC, Medicare and Solar. Keep this list to verticals you actually
 * staff for.
 */
export const STAFFING_INDUSTRIES = [
  {
    icon: 'fa-fan',
    title: 'HVAC',
    description:
      'Agents trained to handle inbound service calls, book estimates, and qualify leads for HVAC contractors and dealers.',
    iconClass: 'bg-purple-600/20 border-purple-500/30 text-purple-400',
  },
  {
    icon: 'fa-heart-pulse',
    title: 'Medicare',
    description:
      'Agents experienced with Medicare enrollment support, plan comparisons, and compliant lead qualification.',
    iconClass: 'bg-rose-600/20 border-rose-500/30 text-rose-400',
  },
  {
    icon: 'fa-solar-panel',
    title: 'Solar',
    description:
      'Agents who set appointments, qualify homeowners, and handle inbound and outbound calls for solar sales teams.',
    iconClass: 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400',
  },
]

// No stats or numbers here on purpose — we're new to call center staffing and
// aren't going to claim results we don't have yet. These are commitments
// about how we work, not performance claims.
export const STAFFING_INCLUDED = [
  'Agents trained on your scripts, offers and compliance requirements before they take a live call',
  'A dedicated point of contact for feedback, script changes and reporting',
  'Seats added or removed as your call volume changes',
  'Call recordings made available to you for your own quality review',
]

export const STAFFING_GOALS = [
  { value: 'hvac', label: 'HVAC Call Center Agents' },
  { value: 'medicare', label: 'Medicare Call Center Agents' },
  { value: 'solar', label: 'Solar Call Center Agents' },
  { value: 'multiple', label: 'Multiple Verticals / Not Sure Yet' },
]