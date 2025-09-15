

import type { Category, Article } from "../types";

const articles: Article[] = [
  {
    id: '1',
    slug: 'ai-revolution-in-healthcare',
    title: 'Bulvinar Neque Laoreet Suspendisse Interdum',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare…',
    content: `
<p>Artificial intelligence (AI) is rapidly moving from the realm of science fiction to a practical tool in various industries, and healthcare is no exception. From diagnosing diseases earlier and more accurately to personalizing treatment plans, AI is poised to revolutionize how medical professionals work and how patients experience care.</p>
<p>One of the most promising applications of AI in healthcare is in medical imaging analysis. Machine learning algorithms, particularly deep learning models, can be trained on vast datasets of images like X-rays, CT scans, and MRIs. These models learn to identify patterns that might be subtle or invisible to the human eye, leading to earlier detection of conditions like cancer, diabetic retinopathy, and neurological disorders.</p>
<h3>Streamlining Drug Discovery</h3>
<p>The process of developing new drugs is notoriously long and expensive. AI is helping to accelerate this process by analyzing complex biological data to identify potential drug candidates and predict their effectiveness and side effects. This can significantly reduce the time and cost of bringing life-saving medications to market.</p>
<p>Furthermore, AI-powered predictive analytics can help hospitals manage resources more efficiently, predict patient influx, and identify patients at high risk of readmission. By optimizing workflows and providing proactive care, AI not only improves patient outcomes but also reduces the burden on healthcare systems.</p>
<p>However, the integration of AI in healthcare is not without its challenges. Issues of data privacy, algorithmic bias, and the need for regulatory oversight are critical considerations that must be addressed to ensure that AI is used ethically and effectively. As technology continues to evolve, the collaboration between AI developers, clinicians, and policymakers will be key to unlocking the full potential of AI to create a healthier future for all.</p>
`,
    imageUrl: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1756890479/062_home-hero-image_resoma.webp',
    category: 'Technology',
    author: { name: 'Dr. Evelyn Reed', avatarUrl: 'https://i.pravatar.cc/150?u=evelyn' },
    date: 'July 26, 2024',
  },
  {
    id: '2',
    slug: 'future-of-space-exploration',
    title: 'Beyond the Horizon: The Future of Deep Space Exploration',
    excerpt: 'With new technologies and international collaboration, humanity is on the brink of a new era in space exploration, targeting Mars and beyond.',
    content: '<p>Humanity stands on the precipice of a new golden age of space exploration. With advancements in propulsion technology, robotics, and life support systems, missions that were once dreams are now becoming tangible goals. The focus has shifted from near-Earth orbit to ambitious targets like Mars, the moons of Jupiter, and even interstellar space.</p><p>The Artemis program by NASA, in collaboration with international partners, aims to establish a sustainable human presence on the Moon, which will serve as a crucial stepping stone for the first crewed missions to Mars. Private companies like SpaceX and Blue Origin are also playing a pivotal role, driving innovation and reducing the cost of access to space.</p>',
    imageUrl: 'https://picsum.photos/seed/space/800/600',
    category: ['Science', 'World'],
    author: { name: 'Marco Diaz', avatarUrl: 'https://i.pravatar.cc/150?u=marco' },
    date: 'July 25, 2024',
  },
  {
    id: '3',
    slug: 'sustainable-investing-growth',
    title: 'The Rise of Sustainable Investing: Aligning Profit with Purpose',
    excerpt: 'Environmental, Social, and Governance (ESG) criteria are becoming mainstream as investors increasingly seek to fund companies that make a positive impact.',
    content: '<p>Sustainable investing, once a niche market, is now a global phenomenon. Investors are increasingly considering Environmental, Social, and Governance (ESG) factors in their decisions, driven by a desire to see their capital create positive change in the world. This shift is reshaping corporate behavior and financial markets.</p><p>Companies are now under greater pressure to be transparent about their environmental impact, labor practices, and governance structures. Those with strong ESG performance are often seen as less risky and better positioned for long-term growth, attracting a new wave of conscientious investors.</p>',
    imageUrl: 'https://picsum.photos/seed/investing/800/600',
    category: 'Economy',
    author: { name: 'Chloe Kim', avatarUrl: 'https://i.pravatar.cc/150?u=chloe' },
    date: 'July 24, 2024',
  },
  {
    id: '4',
    slug: 'genomics-personalized-medicine',
    title: 'The Genomic Era: How Your DNA is Shaping Personalized Medicine',
    excerpt: 'Advances in genetic sequencing are enabling doctors to tailor treatments to an individual\'s unique genetic makeup, heralding a new age of precision medicine.',
    content: '<p>Welcome to the era of personalized medicine, where your DNA can dictate the most effective treatments for you. Thanks to rapid advancements in genomics, doctors are moving away from a one-size-fits-all approach to healthcare. By sequencing a patient\'s genome, clinicians can identify genetic markers that influence disease risk and response to specific drugs.</p><p>This has profound implications for treating complex diseases like cancer, where therapies can be targeted to the specific mutations driving a tumor\'s growth. It also allows for preventive care, identifying individuals at high risk for certain conditions long before symptoms appear.</p>',
    imageUrl: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1756890448/056_article-thumb-13-300x180_dy5ydc.webp',
    category: 'Technology',
    author: { name: 'Dr. Ben Carter', avatarUrl: 'https://i.pravatar.cc/150?u=ben' },
    date: 'July 23, 2024',
  },
  {
    id: '5',
    slug: 'urban-farming-revolution',
    title: 'The Green Revolution in the Concrete Jungle: Urban Farming Takes Root',
    excerpt: 'Vertical farms and rooftop gardens are sprouting up in cities worldwide, promising a more sustainable and resilient food system for urban populations.',
    content: '<p>As the world\'s urban population continues to grow, ensuring access to fresh, nutritious food has become a critical challenge. Enter urban farming, a movement that is transforming cityscapes with vertical farms, rooftop gardens, and community plots. These innovative approaches to agriculture are bringing food production closer to consumers, cutting down on transportation costs and carbon emissions.</p><p>Vertical farming, in particular, offers a high-tech solution, using controlled environments and hydroponic or aeroponic systems to grow crops year-round, regardless of external weather conditions. This not only increases food security but also reduces water usage and eliminates the need for pesticides.</p>',
    imageUrl: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1756890531/124_article-thumb-17_fxqnuu.webp',
    category: 'Politics',
    author: { name: 'Aisha Khan', avatarUrl: 'https://i.pravatar.cc/150?u=aisha' },
    date: 'July 22, 2024',
  },
  {
    id: '6',
    slug: 'quantum-computing-explained',
    title: 'Quantum Computing: What Is It and Why Does It Matter?',
    excerpt: 'Quantum computers promise to solve problems currently intractable for even the most powerful supercomputers. We break down the basics of this mind-bending technology.',
    content: '<p>Quantum computing harnesses the strange principles of quantum mechanics to process information in fundamentally new ways. Unlike classical computers that use bits (0s and 1s), quantum computers use qubits, which can exist in multiple states simultaneously thanks to a phenomenon called superposition. This, combined with entanglement, allows quantum computers to perform a vast number of calculations at once.</p>',
    imageUrl: 'https://picsum.photos/seed/quantum/800/600',
    category: 'Technology',
    author: { name: 'Dr. Evelyn Reed', avatarUrl: 'https://i.pravatar.cc/150?u=evelyn' },
    date: 'July 21, 2024',
  },
    {
    id: '7',
    slug: 'fusion-energy-breakthrough',
    title: 'A Star in a Jar: The Latest Breakthrough in Fusion Energy',
    excerpt: 'Scientists have achieved a major milestone in nuclear fusion, bringing the dream of clean, limitless energy one step closer to reality.',
    content: '<p>In a landmark experiment, scientists have successfully generated more energy from a fusion reaction than was used to initiate it, a condition known as ignition. This breakthrough has been a long-sought goal in the quest for fusion energy, which mimics the process that powers the sun. If harnessed, fusion could provide a safe, clean, and virtually limitless source of energy for the world.</p>',
    imageUrl: 'https://res.cloudinary.com/dmlavu7is/image/upload/v1756890442/046_article-thumb-15-300x180_apfiie.webp',
    category: 'Science',
    author: { name: 'Marco Diaz', avatarUrl: 'https://i.pravatar.cc/150?u=marco' },
    date: 'July 20, 2024',
  },
  {
    id: '8',
    slug: 'future-of-remote-work',
    title: 'The Evolving Workplace: Is the Future of Work Fully Remote?',
    excerpt: 'The pandemic accelerated the remote work trend, but what does the future hold? We explore the pros and cons of hybrid vs. fully remote models.',
    content: '<p>The global shift to remote work has permanently altered our perception of the workplace. While many employees enjoy the flexibility and autonomy, companies are grappling with how to maintain culture, collaboration, and productivity. The debate between fully remote, hybrid, and fully in-office models continues, with each approach offering its own set of benefits and challenges.</p>',
    imageUrl: 'https://picsum.photos/seed/remote-work/800/600',
    category: 'Economy',
    author: { name: 'Chloe Kim', avatarUrl: 'https://i.pravatar.cc/150?u=chloe' },
    date: 'July 19, 2024',
  },
  {
    id: '9',
    slug: 'mental-health-and-nature',
    title: 'The Nature Cure: How Spending Time Outdoors Benefits Your Mental Health',
    excerpt: 'A growing body of research shows that spending time in nature can reduce stress, improve mood, and boost cognitive function. It\'s a simple yet powerful prescription for well-being.',
    content: '<p>In our fast-paced, digital world, it\'s easy to feel disconnected and stressed. However, a simple antidote may be right outside your door. Studies have consistently shown that spending time in natural environments—a practice known as "ecotherapy"—has significant benefits for mental health. From reducing levels of the stress hormone cortisol to improving focus and creativity, nature has a profound healing effect on the mind.</p>',
    imageUrl: 'https://picsum.photos/seed/bitcoin/800/600',
    category: 'Culture',
    author: { name: 'Dr. Ben Carter', avatarUrl: 'https://i.pravatar.cc/150?u=ben' },
    date: 'July 18, 2024',
  },
  {
    id: '10',
    slug: 'global-supply-chain-disruption',
    title: 'Untangling the Knots: Navigating the Ongoing Global Supply Chain Disruptions',
    excerpt: 'From pandemics to geopolitical tensions, the global supply chain is facing unprecedented challenges. Experts weigh in on how businesses can build resilience.',
    content: '<p>The intricate web of the global supply chain has been stretched to its limits in recent years. A combination of factors, including the COVID-19 pandemic, geopolitical conflicts, and extreme weather events, has created a perfect storm of disruptions. Companies are now rethinking their strategies, focusing on diversification, regionalization, and technology to build more resilient and agile supply chains for the future.</p>',
    imageUrl: 'https://picsum.photos/seed/supply-chain/800/600',
    category: 'World',
    author: { name: 'Aisha Khan', avatarUrl: 'https://i.pravatar.cc/150?u=aisha' },
    date: 'July 17, 2024',
  },
    {
    id: '11',
    slug: 'crispr-gene-editing-ethics',
    title: 'CRISPR and the Future of Humanity: The Ethical Dilemmas of Gene Editing',
    excerpt: 'The revolutionary gene-editing tool CRISPR has the potential to cure genetic diseases, but it also opens a Pandora\'s box of ethical questions. Where do we draw the line?',
    content: '<p>CRISPR-Cas9 has transformed the field of genetics, offering a precise and relatively easy way to edit DNA. While this holds immense promise for eradicating inherited diseases like sickle cell anemia and Huntington\'s disease, it also raises profound ethical concerns, particularly around the possibility of editing the human germline—creating changes that can be passed down to future generations. The scientific community and society at large are now grappling with how to regulate this powerful technology.</p>',
    imageUrl: 'https://picsum.photos/seed/crispr/800/600',
    category: 'Science',
    author: { name: 'Marco Diaz', avatarUrl: 'https://i.pravatar.cc/150?u=marco' },
    date: 'July 16, 2024',
  },
  {
    id: '12',
    slug: 'metaverse-real-estate-boom',
    title: 'Virtual Land, Real Money: Inside the Metaverse Real Estate Boom',
    excerpt: 'People are spending millions on virtual land in metaverses like Decentraland and The Sandbox. Is this the future of property ownership or a speculative bubble?',
    content: '<p>The concept of the metaverse has sparked a digital land rush. Investors and brands are buying up virtual plots of land, hoping to build experiences, storefronts, and entertainment venues in these burgeoning online worlds. While proponents see it as the next frontier of the internet and a massive economic opportunity, critics warn of a speculative bubble fueled by hype, with little long-term value.</p>',
    imageUrl: 'https://picsum.photos/seed/metaverse/800/600',
    category: 'Technology',
    author: { name: 'Chloe Kim', avatarUrl: 'https://i.pravatar.cc/150?u=chloe' },
    date: 'July 15, 2024',
  },
  {
    id: '13',
    slug: 'sleep-science-importance',
    title: 'The Science of Sleep: Why Getting Enough Rest is Crucial for Your Health',
    excerpt: 'Sleep is not a luxury; it\'s a biological necessity. Discover what happens to your brain and body when you sleep and why chronic sleep deprivation is so dangerous.',
    content: '<p>In our 24/7 culture, sleep is often the first thing to be sacrificed. However, a wealth of scientific research highlights the critical importance of adequate rest for both physical and mental health. During sleep, the brain consolidates memories, clears out toxins, and regulates emotions. Chronic sleep deprivation is linked to a host of problems, including an increased risk of obesity, diabetes, cardiovascular disease, and impaired cognitive function. Prioritizing sleep is one of the most effective things you can do for your overall well-being.</p>',
    imageUrl: 'https://picsum.photos/seed/sleep/800/600',
    category: 'Travel',
    author: { name: 'Dr. Ben Carter', avatarUrl: 'https://i.pravatar.cc/150?u=ben' },
    date: 'July 14, 2024',
  },
  {
    id: '14',
    slug: 'circular-economy-principles',
    title: 'Closing the Loop: How the Circular Economy is Redefining Waste',
    excerpt: 'The traditional linear model of "take, make, dispose" is unsustainable. The circular economy offers a new paradigm where products are designed to be reused, repaired, and recycled.',
    content: '<p>Faced with finite resources and a growing waste crisis, the world is turning towards a new economic model: the circular economy. This approach aims to eliminate waste and pollution by design, keeping products and materials in use for as long as possible. It involves rethinking everything from product design and manufacturing to business models, shifting from ownership to access, and creating systems for effective recycling and regeneration.</p>',
    imageUrl: 'https://picsum.photos/seed/circular-economy/800/600',
    category: 'Economy',
    author: { name: 'Aisha Khan', avatarUrl: 'https://i.pravatar.cc/150?u=aisha' },
    date: 'July 13, 2024',
  },
   {
    id: '15',
    slug: 'blockchain-beyond-crypto',
    title: 'Blockchain Beyond Bitcoin: The Myriad Uses of Distributed Ledger Technology',
    excerpt: 'While synonymous with cryptocurrencies, blockchain\'s potential extends far beyond digital money, with applications in supply chain management, voting systems, and more.',
    content: '<p>Blockchain technology, the decentralized and immutable ledger system that underpins cryptocurrencies like Bitcoin, has the potential to disrupt a wide range of industries. Its ability to create a secure, transparent, and tamper-proof record of transactions makes it ideal for applications like tracking goods in a supply chain, creating secure digital identities, and even enabling transparent and fair voting systems. As the technology matures, we are only beginning to scratch the surface of its capabilities.</p>',
    imageUrl: 'https://picsum.photos/seed/blockchain/800/600',
    category: 'Technology',
    author: { name: 'Dr. Evelyn Reed', avatarUrl: 'https://i.pravatar.cc/150?u=evelyn' },
    date: 'July 12, 2024',
  },
   {
    id: '16',
    slug: 'psychology-of-happiness',
    title: 'The Psychology of Happiness: What Science Says About a Well-Lived Life',
    excerpt: 'What truly makes us happy? Scientists are uncovering the key ingredients to a fulfilling life, and they might not be what you expect.',
    content: '<p>The pursuit of happiness is a fundamental human goal, but what does science say about how to achieve it? Research in positive psychology suggests that factors like strong social connections, a sense of purpose, gratitude, and acts of kindness are far more influential on our long-term well-being than material wealth or fleeting pleasures. By focusing on these intrinsic values, we can cultivate a more meaningful and joyful existence.</p>',
    imageUrl: 'https://picsum.photos/seed/happiness/800/600',
    category: 'Culture',
    author: { name: 'Dr. Ben Carter', avatarUrl: 'https://i.pravatar.cc/150?u=ben' },
    date: 'July 11, 2024',
  },
  {
    id: '17',
    slug: 'political-polarization',
    title: 'The Widening Divide: Understanding Political Polarization',
    excerpt: 'Political polarization is on the rise globally, threatening democratic norms and social cohesion. What are the driving forces and potential solutions?',
    content: '<p>Across the globe, political landscapes are becoming increasingly divided. This growing polarization, characterized by deep ideological rifts and animosity towards opposing political groups, poses a significant threat to democratic institutions and social harmony. Experts point to a complex interplay of factors, including social media echo chambers, partisan news sources, and economic inequality, as key drivers of this trend.</p>',
    imageUrl: 'https://picsum.photos/seed/polarization/800/600',
    category: 'Politics',
    author: { name: 'Aisha Khan', avatarUrl: 'https://i.pravatar.cc/150?u=aisha' },
    date: 'July 10, 2024',
  },
  {
    id: '18',
    slug: 'ancient-civilizations',
    title: 'Secrets of the Ancients: Unearthing Lost Civilizations',
    excerpt: 'New archaeological discoveries are rewriting the history books, revealing the incredible achievements of ancient cultures once lost to time.',
    content: '<p>From the jungles of Central America to the deserts of the Middle East, archaeologists are using cutting-edge technology like LiDAR to uncover the remains of ancient cities and civilizations. These discoveries are challenging our understanding of the past, revealing sophisticated societies with advanced knowledge of astronomy, engineering, and art. Each new find offers a glimpse into the rich tapestry of human history.</p>',
    imageUrl: 'https://picsum.photos/seed/civilizations/800/600',
    category: 'Culture',
    author: { name: 'Dr. Ben Carter', avatarUrl: 'https://i.pravatar.cc/150?u=ben' },
    date: 'July 9, 2024',
  },
  {
    id: '19',
    slug: 'protest-art',
    title: 'The Art of Dissent: How Protest Art Shapes Social Change',
    excerpt: 'From murals to posters, art has long been a powerful tool for protest and social commentary. We explore its role in contemporary social movements.',
    content: '<p>Throughout history, art has given voice to the voiceless and challenged the status quo. In today\'s social movements, this tradition continues with renewed vigor. Protest art, in its many forms, serves not only to document and critique injustice but also to inspire solidarity and imagine alternative futures. It is a testament to the enduring power of creativity in the fight for social change.</p>',
    imageUrl: 'https://picsum.photos/seed/protest-art/800/600',
    category: 'Politics',
    author: { name: 'Chloe Kim', avatarUrl: 'https://i.pravatar.cc/150?u=chloe' },
    date: 'July 8, 2024',
  },

  
];

export const categories: { name: Category, slug: string }[] = [
    { name: 'Culture', slug: 'culture' },
    { name: 'Economy', slug: 'economy' },
    { name: 'Politics', slug: 'politics' },
    { name: 'Science', slug: 'science' },
    { name: 'Technology', slug: 'technology' },
    { name: 'Travel', slug: 'travel' },
    { name: 'World', slug: 'world' },
    { name: 'About', slug: 'about' },
    { name: 'Contact', slug: 'contact' },
    
]

// Simulate network delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function getArticles(): Promise<Article[]> {
  await delay(100);
  return articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  await delay(100);
  return articles.find(article => article.slug === slug);
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  await delay(100);
  const categoryName = categories.find(c => c.slug === categorySlug)?.name;
  if (!categoryName) return [];
  const lowercaseCategoryName = categoryName.toLowerCase();

  return articles.filter(article => {
    if (Array.isArray(article.category)) {
      return article.category.some(c => c.toLowerCase() === lowercaseCategoryName);
    }
    return article.category.toLowerCase() === lowercaseCategoryName;
  });
}
