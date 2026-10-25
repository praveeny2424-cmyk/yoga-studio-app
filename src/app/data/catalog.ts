import { Article, Faq, Program, Review, ScheduleBlock, Teacher } from '../models/school.models';

export const SCHOOL_NAME = "Ajay's Ashtanga Vinyasa School";

export const school = {
  name: SCHOOL_NAME,
  city: 'Rishikesh, India',
  address: 'Riverside Lane, Upper Tapovan, Rishikesh',
  email: 'ajaypandey199728@gmail.com',
  phoneDisplay: '+91 7668994780',
  phoneTel: '+917668994780',
  whatsappUrl: 'https://wa.me/917668994780',
  instagramUrl: 'https://www.instagram.com/example/',
  blurb:
    'A residential and online yoga school starter. Replace this copy with your own before you publish.',
};

const day: ScheduleBlock[] = [
  { time: '06:00 – 07:30', title: 'Hatha practice' },
  { time: '08:00 – 09:00', title: 'Breathwork and mantra' },
  { time: '09:00 – 09:30', title: 'Breakfast' },
  { time: '11:15 – 12:15', title: 'Anatomy and teaching lab' },
  { time: '13:20 – 14:00', title: 'Lunch' },
  { time: '14:45 – 15:45', title: 'Philosophy or Ayurveda' },
  { time: '16:00 – 17:15', title: 'Vinyasa practice' },
  { time: '17:45 – 18:45', title: 'Meditation' },
  { time: '19:00 – 19:45', title: 'Dinner' },
];

const sharedFaq: Faq[] = [
  {
    question: 'Do I need teaching experience?',
    answer:
      'No. Residential foundations are built for a sincere beginner with a little personal practice. Advanced hours expect a completed foundation course.',
  },
  {
    question: 'What language are classes in?',
    answer: 'Classes, manuals, and exams are in English.',
  },
  {
    question: 'Can meals match a diet?',
    answer:
      'The kitchen serves vegetarian meals. Ask for vegan or gluten-free plates when you book so the kitchen can plan.',
  },
];

const rooms = {
  month: [
    { id: 'private', name: 'Private balcony room', price: 1190, listPrice: 1490 },
    { id: 'shared', name: 'Two-share balcony room', price: 890, listPrice: 1120 },
    { id: 'dorm', name: 'Four-share room', price: 640, listPrice: 820 },
    { id: 'couple', name: 'Private double, two people', price: 1780, listPrice: 2240 },
    { id: 'tuition', name: 'Tuition only, no stay', price: 590, listPrice: 740 },
  ],
  retreat3: [
    { id: 'private', name: 'Private room', price: 380, listPrice: 460 },
    { id: 'shared', name: 'Shared room', price: 280, listPrice: 340 },
  ],
  retreat7: [
    { id: 'private', name: 'Private room', price: 690, listPrice: 840 },
    { id: 'shared', name: 'Shared room', price: 520, listPrice: 640 },
  ],
  online: [{ id: 'digital', name: 'Self-paced access', price: 320, listPrice: 400 }],
};

const cohorts = [
  { id: 'nov', label: '2 Nov – 26 Nov 2026', seats: 4 },
  { id: 'dec', label: '2 Dec – 26 Dec 2026', seats: 6 },
  { id: 'jan', label: '4 Jan – 28 Jan 2027', seats: 8 },
  { id: 'feb', label: '2 Feb – 26 Feb 2027', seats: 8 },
];

export const programs: Program[] = [
  {
    slug: '200-hour-hatha-vinyasa',
    kind: 'residential',
    title: '200-hour Hatha and Vinyasa teacher training',
    shortTitle: '200-hour Hatha & Vinyasa',
    days: 25,
    level: 'Beginner to intermediate',
    certification: 'Foundation certificate, 200 hours',
    summary: 'A 25-day stay covering asana, breath, philosophy, anatomy, and supervised teaching practice.',
    overview: [
      'This foundation course is the main residential training. Mornings are for practice. Afternoons are for anatomy, philosophy, and learning how to teach a safe class.',
      'The sample certificate is issued by the school after attendance, a written paper, and a practical teaching exam. Registering that certificate with any outside body is a separate step you complete yourself.',
    ],
    feeFrom: 590,
    rooms: rooms.month,
    inclusions: [
      'Tuition and a printed manual',
      'Mat, blocks, and a cleansing-practice kit',
      'Three vegetarian meals on residential rates',
      'One group excursion and a weekly kirtan',
      'A sound session and a new-moon gathering',
    ],
    eligibility: [
      'At least 18 years old',
      'Able to follow classes in English',
      'A few months of personal practice is enough',
    ],
    curriculum: [
      { title: 'Practice', items: ['Hatha asana families', 'Sun and moon salutations', 'Vinyasa sequencing', 'Breathwork, mudra, and bandha', 'Meditation and mantra'] },
      { title: 'Study', items: ['Anatomy for teachers', 'Yoga philosophy and ethics', 'Intro to Ayurveda'] },
      { title: 'Teaching', items: ['Alignment and hands-on assists', 'Class design', 'Practice teaching with feedback'] },
    ],
    schedule: day,
    cohorts,
    faqs: sharedFaq,
  },
  {
    slug: '200-hour-ayurveda-hatha',
    kind: 'residential',
    title: '200-hour Ayurveda and Hatha teacher training',
    shortTitle: '200-hour Ayurveda & Hatha',
    days: 25,
    level: 'Beginner to intermediate',
    certification: 'Foundation certificate, 200 hours',
    summary: 'Hatha training with a daily Ayurveda thread: constitution, food, and daily routine.',
    overview: [
      'The asana and teaching hours match the foundation course. Philosophy time is shared with Ayurveda so you can speak about food and rhythm as well as posture.',
    ],
    feeFrom: 590,
    rooms: rooms.month,
    inclusions: ['Tuition and manual', 'Stay and meals on residential rates', 'Ayurveda study circles', 'One excursion'],
    eligibility: ['At least 18 years old', 'English for classroom study'],
    curriculum: [
      { title: 'Ayurveda', items: ['Three doshas', 'Daily routine', 'Food qualities', 'Simple seasonal guidance'] },
      { title: 'Hatha', items: ['Standing, seated, and floor asana', 'Breathwork', 'Teaching practice'] },
    ],
    schedule: day,
    cohorts,
    faqs: sharedFaq,
  },
  {
    slug: '200-hour-meditation-nidra',
    kind: 'residential',
    title: '200-hour Meditation, Yoga Nidra, and Hatha',
    shortTitle: '200-hour Meditation & Nidra',
    days: 25,
    level: 'Beginner to intermediate',
    certification: 'Foundation certificate, 200 hours',
    summary: 'Learn to lead seated meditation and Yoga Nidra, with a Hatha practice to support the body.',
    overview: [
      'Afternoons slow down. You practice leading a short nidra, then study the script, the voice, and how to hold a quiet room.',
    ],
    feeFrom: 590,
    rooms: rooms.month,
    inclusions: ['Tuition and scripts', 'Stay and meals on residential rates', 'Practice leading nidra for peers'],
    eligibility: ['At least 18 years old', 'Comfort sitting for 20 minutes'],
    curriculum: [
      { title: 'Meditation', items: ['Breath awareness', 'Mantra', 'Walking meditation'] },
      { title: 'Yoga Nidra', items: ['Script structure', 'Voice and pacing', 'Holding a group'] },
    ],
    schedule: day,
    cohorts,
    faqs: sharedFaq,
  },
  {
    slug: '200-hour-kundalini',
    kind: 'residential',
    title: '200-hour Kundalini and Hatha teacher training',
    shortTitle: '200-hour Kundalini',
    days: 25,
    level: 'Beginner to intermediate',
    certification: 'Foundation certificate, 200 hours',
    summary: 'Kriya, mantra, and breath practices taught alongside a steady Hatha practice.',
    overview: [
      'The course treats Kundalini as a disciplined practice of breath, sound, and attention. It is not a promise of a particular experience.',
    ],
    feeFrom: 590,
    rooms: rooms.month,
    inclusions: ['Tuition and manual', 'Stay and meals on residential rates', 'Morning kriya practice'],
    eligibility: ['At least 18 years old', 'Willing to practice breathwork slowly'],
    curriculum: [
      { title: 'Kundalini methods', items: ['Kriya sets', 'Mantra', 'Breath ratios', 'Meditation'] },
      { title: 'Teaching', items: ['Safety notes', 'Class arcs', 'Practice teaching'] },
    ],
    schedule: day,
    cohorts,
    faqs: sharedFaq,
  },
  {
    slug: '300-hour-advanced',
    kind: 'residential',
    title: '300-hour advanced teacher training',
    shortTitle: '300-hour advanced',
    days: 28,
    level: 'Intermediate, after a 200-hour course',
    certification: 'Advanced certificate, 300 hours',
    summary: 'Sequencing, adjustments, and therapeutic applications for teachers who already hold a foundation certificate.',
    overview: [
      'Bring a 200-hour certificate from this school or another school. The month is for refining how you see a student and how you build a class.',
    ],
    feeFrom: 790,
    rooms: rooms.month.map((room) => ({ ...room, price: room.price + 200, listPrice: room.listPrice + 250 })),
    inclusions: ['Advanced manual', 'Stay and meals on residential rates', 'Supervised teaching clinics'],
    eligibility: ['Completed 200-hour teacher training', 'At least 18 years old'],
    curriculum: [
      { title: 'Advanced practice', items: ['Deeper asana', 'Props for support', 'Therapeutic themes'] },
      { title: 'Professional skills', items: ['Workshop design', 'Ethics of touch', 'Mentoring'] },
    ],
    schedule: day,
    cohorts,
    faqs: sharedFaq,
  },
  {
    slug: '500-hour-combined',
    kind: 'residential',
    title: '500-hour combined teacher training',
    shortTitle: '500-hour combined',
    days: 56,
    level: 'Beginner through advanced',
    certification: 'Combined certificate, 500 hours',
    summary: 'Foundation and advanced months taken back to back.',
    overview: [
      'Stay for two cycles. The first month matches the 200-hour foundation. The second month matches the 300-hour advanced course.',
    ],
    feeFrom: 1290,
    rooms: [
      { id: 'private', name: 'Private balcony room', price: 2190, listPrice: 2680 },
      { id: 'shared', name: 'Two-share balcony room', price: 1690, listPrice: 2100 },
      { id: 'dorm', name: 'Four-share room', price: 1290, listPrice: 1580 },
    ],
    inclusions: ['Both manuals', 'Stay and meals', 'Foundation and advanced exams'],
    eligibility: ['At least 18 years old', 'Able to stay for two consecutive cycles'],
    curriculum: [
      { title: 'Month one', items: ['Foundation asana, philosophy, anatomy'] },
      { title: 'Month two', items: ['Advanced sequencing and teaching clinics'] },
    ],
    schedule: day,
    cohorts: [{ id: 'nov', label: '2 Nov 2026 – 26 Dec 2026', seats: 3 }],
    faqs: sharedFaq,
  },
  {
    slug: 'yin-weekend',
    kind: 'workshop',
    title: 'Yin yoga teacher intensive',
    shortTitle: 'Yin intensive',
    days: 6,
    level: 'Teachers and dedicated students',
    certification: 'School workshop certificate',
    summary: 'Six days on long-held postures, sequences, and how to teach them without forcing range.',
    overview: ['A short residential intensive. You can add it before or after a month-long training.'],
    feeFrom: 360,
    rooms: [
      { id: 'private', name: 'Private room', price: 520, listPrice: 640 },
      { id: 'shared', name: 'Shared room', price: 420, listPrice: 520 },
      { id: 'tuition', name: 'Tuition only', price: 360, listPrice: 440 },
    ],
    inclusions: ['Workshop manual', 'Practice teaching', 'Stay and meals on room rates'],
    eligibility: ['At least 18 years old', 'Some asana experience'],
    curriculum: [{ title: 'Yin', items: ['Hip, spine, and shoulder families', 'Sequencing', 'Language for sensation'] }],
    schedule: [],
    cohorts: [{ id: 'yin-nov', label: '26 Nov – 1 Dec 2026', seats: 10 }],
    faqs: sharedFaq,
  },
  {
    slug: 'sound-healing',
    kind: 'workshop',
    title: 'Sound practice workshop',
    shortTitle: 'Sound workshop',
    days: 2,
    level: 'Open to beginners',
    certification: 'Attendance certificate',
    summary: 'Two days with bowls, bells, and a simple framework for a group sound session.',
    overview: [
      'You learn a session arc: arrival, sound, silence, and closing. Instruments are shared during class and are not included to take home.',
    ],
    feeFrom: 140,
    rooms: [
      { id: 'level1', name: 'Two-day workshop', price: 140, listPrice: 180 },
      { id: 'all', name: 'Three levels, six days', price: 420, listPrice: 520 },
    ],
    inclusions: ['Shared instruments in class', 'Session outline', 'Optional room add-on, ask when you enquire'],
    eligibility: ['At least 18 years old'],
    curriculum: [{ title: 'Sound', items: ['Listening', 'Bowls and bells', 'Group session shape'] }],
    schedule: [],
    cohorts: [{ id: 'sound', label: '12 Dec – 13 Dec 2026', seats: 12 }],
    faqs: sharedFaq,
  },
  {
    slug: 'kirtan-lab',
    kind: 'workshop',
    title: 'Kirtan, voice, and harmonium lab',
    shortTitle: 'Kirtan lab',
    days: 5,
    level: 'No music background required',
    certification: 'Attendance certificate',
    summary: 'Five afternoons of voice, simple harmonium, and leading a call-and-response chant.',
    overview: ['Harmoniums are provided in the room. You leave able to play a simple bhajan and keep time.'],
    feeFrom: 240,
    rooms: [
      { id: 'tuition', name: 'Tuition only', price: 240, listPrice: 300 },
      { id: 'shared', name: 'Shared room and meals', price: 420, listPrice: 520 },
    ],
    inclusions: ['Instruments during class', 'Three hours of class each day'],
    eligibility: ['Open to complete beginners'],
    curriculum: [{ title: 'Music', items: ['Scale and bellows', 'Chant pronunciation', 'Call and response'] }],
    schedule: [],
    cohorts: [{ id: 'kirtan', label: '5 Jan – 9 Jan 2027', seats: 8 }],
    faqs: sharedFaq,
  },
  {
    slug: 'retreat-3-day',
    kind: 'retreat',
    title: '3-day yoga and rest retreat',
    shortTitle: '3-day retreat',
    days: 3,
    level: 'All levels',
    certification: 'No teaching certificate',
    summary: 'A short reset: practice, one excursion, and quiet evenings.',
    overview: ['Arrive, practice, walk, and leave restored. This is not a teacher training.'],
    feeFrom: 280,
    rooms: rooms.retreat3,
    inclusions: ['Daily practice', 'Three nights', 'Vegetarian meals', 'One short excursion'],
    eligibility: ['At least 18 years old'],
    curriculum: [],
    schedule: [],
    cohorts: [
      { id: 'r3a', label: '24 Oct – 26 Oct 2026', seats: 2 },
      { id: 'r3b', label: '21 Nov – 23 Nov 2026', seats: 5 },
    ],
    faqs: sharedFaq,
  },
  {
    slug: 'retreat-5-day',
    kind: 'retreat',
    title: '5-day practice retreat',
    shortTitle: '5-day retreat',
    days: 5,
    level: 'All levels',
    certification: 'No teaching certificate',
    summary: 'Five days of asana, breath, and a river walk.',
    overview: ['A middle length for people who want more than a weekend and less than a training month.'],
    feeFrom: 420,
    rooms: [
      { id: 'private', name: 'Private room', price: 540, listPrice: 660 },
      { id: 'shared', name: 'Shared room', price: 420, listPrice: 520 },
    ],
    inclusions: ['Daily practice', 'Meals', 'Group walk', 'One kirtan evening'],
    eligibility: ['At least 18 years old'],
    curriculum: [],
    schedule: [],
    cohorts: [{ id: 'r5', label: '8 Feb – 12 Feb 2027', seats: 6 }],
    faqs: sharedFaq,
  },
  {
    slug: 'retreat-7-day',
    kind: 'retreat',
    title: '7-day yoga and stillness retreat',
    shortTitle: '7-day retreat',
    days: 7,
    level: 'All levels',
    certification: 'No teaching certificate',
    summary: 'A week of practice, a sound evening, and time away from work.',
    overview: ['The week is paced for rest. Mornings are guided. Afternoons are partly free.'],
    feeFrom: 520,
    rooms: rooms.retreat7,
    inclusions: ['Daily asana and breath', 'Sound evening', 'Meals', 'Group excursion'],
    eligibility: ['At least 18 years old'],
    curriculum: [],
    schedule: [],
    cohorts: [{ id: 'r7', label: '1 Mar – 7 Mar 2027', seats: 4 }],
    faqs: sharedFaq,
  },
  {
    slug: 'online-200-hour',
    kind: 'online',
    title: '200-hour online foundation',
    shortTitle: 'Online 200-hour',
    days: 0,
    level: 'Beginner to intermediate',
    certification: 'Online completion certificate',
    summary: 'Self-paced lessons, a manual, and a written check. Study from home.',
    overview: [
      'Lessons are pre-recorded. You move at your own pace and send the written assignment when you are ready. A teacher replies by email.',
      'Hosting the videos is left to you. This page is the sales screen. A practical place to put the lessons is an unlisted playlist plus a classroom you already use.',
    ],
    feeFrom: 320,
    rooms: rooms.online,
    inclusions: ['Lesson list and manual outline', 'Written assignment', 'Email support', 'Completion certificate from the school'],
    eligibility: ['At least 18 years old', 'A quiet place to practice'],
    curriculum: [
      { title: 'Modules', items: ['Asana', 'Breath', 'Philosophy', 'Anatomy', 'How to teach'] },
    ],
    schedule: [],
    cohorts: [{ id: 'always', label: 'Start any week', seats: 40 }],
    faqs: sharedFaq,
  },
  {
    slug: 'online-yin',
    kind: 'online',
    title: 'Online Yin study',
    shortTitle: 'Online Yin',
    days: 0,
    level: 'Some asana experience',
    certification: 'Online completion certificate',
    summary: 'A shorter self-paced study of long-held postures and sequencing.',
    overview: ['Ten lessons and one sequence assignment.'],
    feeFrom: 160,
    rooms: [{ id: 'digital', name: 'Self-paced access', price: 160, listPrice: 200 }],
    inclusions: ['Lesson list', 'Sequence assignment', 'Email feedback'],
    eligibility: ['At least 18 years old'],
    curriculum: [{ title: 'Lessons', items: ['Principles', 'Pose families', 'Class planning'] }],
    schedule: [],
    cohorts: [{ id: 'always', label: 'Start any week', seats: 40 }],
    faqs: sharedFaq,
  },
];

export const teachers: Teacher[] = [
  { name: 'Anika Rao', years: '18 years teaching', education: 'Philosophy studies, Rishikesh', expertise: 'Philosophy and ethics', bio: 'Leads the afternoon philosophy sessions and the student council before exams.' },
  { name: 'Dev Sharma', years: '12 years teaching', education: 'Ashtanga practice, Mysore and Rishikesh', expertise: 'Asana and sequencing', bio: 'Teaches the morning practice and the hands-on alignment lab.' },
  { name: 'Meera Iyer', years: '9 years teaching', education: 'Yoga Nidra mentor training', expertise: 'Meditation and nidra', bio: 'Holds the evening sit and trains students to lead a short nidra.' },
  { name: 'Kabir Nair', years: '11 years teaching', education: 'Movement anatomy coursework', expertise: 'Anatomy for teachers', bio: 'Translates joint and breath anatomy into cues a new teacher can use.' },
  { name: 'Leela Joshi', years: '15 years teaching', education: 'Ayurveda foundation course', expertise: 'Food and daily rhythm', bio: 'Guides the kitchen briefings and the Ayurveda study circles.' },
  { name: 'Arun Bhatt', years: '10 years teaching', education: 'Harmonium and kirtan apprenticeship', expertise: 'Sound and chant', bio: 'Runs the kirtan lab and the sound workshop.' },
];

export const reviews: Review[] = [
  { name: 'Nora Keller', source: 'Sample guest note', title: 'Clear days, kind teachers', quote: 'The timetable was full and still felt humane. I knew what I was learning each afternoon.' },
  { name: 'Luis Ortega', source: 'Sample guest note', title: 'I came for the asana', quote: 'The teaching labs changed how I see a class. The room was quiet enough to sleep.' },
  { name: 'Hana Suzuki', source: 'Sample guest note', title: 'Food that matched the practice', quote: 'Meals were simple, and the kitchen adjusted a gluten-free plate without a fuss.' },
];

export const articles: Article[] = [
  {
    slug: 'a-day-on-a-training',
    title: 'What a training day actually feels like',
    date: '12 March 2026',
    excerpt: 'The day is long. The useful part is knowing which hours are practice and which hours are study.',
    paragraphs: [
      'A residential teacher training day starts before sunrise and ends after dinner. The point of publishing the timetable is so a student can see the shape before they book a flight.',
      'Practice hours are for your own body. Lab hours are for learning to watch someone else. Mixing those up is how people leave exhausted and unsure what they were taught.',
      'Use the free afternoon gap for rest. The school day is the practice. Extra classes every evening are optional.',
    ],
  },
  {
    slug: 'choosing-a-room',
    title: 'How to choose a room for a month-long stay',
    date: '2 February 2026',
    excerpt: 'The cheapest bed is not always the right one if you sleep lightly.',
    paragraphs: [
      'Private rooms cost more because the month is long. If you wake easily, that quiet is part of the training.',
      'A shared room is a good fit if you like company and you can sleep with a fan and a second person in the room.',
      'Tuition-only rates are for students who already have a place to stay nearby. Meals are then arranged day by day.',
    ],
  },
  {
    slug: 'sattvic-plate',
    title: 'A simple plate for training weeks',
    date: '18 January 2026',
    excerpt: 'Rice, lentils, cooked vegetables, fruit, and enough water.',
    paragraphs: [
      'Training weeks are easier when lunch is warm and not a puzzle. The sample kitchen serves that kind of plate.',
      'Tell the school about vegan or gluten-free needs in the booking note. The cook can plan. A surprise on arrival is harder.',
    ],
  },
];

export const homeFaqs: Faq[] = [
  ...sharedFaq,
  {
    question: 'How do I pay?',
    answer:
      'This starter saves your enquiry in the browser and shows the fee. Connect Razorpay or PayPal when you are ready to take money. Do not collect card numbers in this form.',
  },
];

export function programsByKind(kind: 'in-person' | 'retreat' | 'online'): Program[] {
  if (kind === 'in-person') {
    return programs.filter((item) => item.kind === 'residential' || item.kind === 'workshop');
  }
  if (kind === 'retreat') {
    return programs.filter((item) => item.kind === 'retreat');
  }
  return programs.filter((item) => item.kind === 'online');
}

export function findProgram(slug: string | null | undefined): Program | undefined {
  return programs.find((item) => item.slug === slug);
}

export function findArticle(slug: string | null | undefined): Article | undefined {
  return articles.find((item) => item.slug === slug);
}
