/*
 * All of the site's content lives in this file. Components only read from it,
 * so to change text, links, images or order, edit this file and nothing else.
 *
 * Inline formatting you can use inside text:
 *   ==words==   lavender highlight block (used in headings)
 *   **words**   bold
 *
 * Colors for cards / stickers: 'lilac' | 'lime' | 'sky' | 'pink' | 'mint' | 'butter'
 * Files referenced here (photo, resume, screenshots) live in /public.
 */

export const site = {
  name: 'S Sudeep',
  shortName: 'Sudeep',
  title: 'S Sudeep | Aspiring Data Engineer',
  description:
    'Explore S Sudeep’s Data Engineering portfolio featuring Python, SQL, PySpark, Azure Databricks, Delta Lake, data pipelines, and Lakehouse architecture projects.',
  // Your live address (used by link previews, robots.txt and the sitemap). Update after deploying.
  url: 'https://sudeep-portfolio.vercel.app',
  email: 'sudeep7520@gmail.com',
  resume: '/S_Sudeep_Resume.pdf',
  resumeFileName: 'S_Sudeep_Resume.pdf',
  location: 'Tirupati, India',
  jobTitle: 'Aspiring Data Engineer',
  school: 'Sri Venkateswara College of Engineering, Tirupati',
}

// Profiles. `icon` picks the brand icon (see src/lib/icons.js).
export const socials = {
  github: { label: 'GitHub', href: 'https://github.com/sudeep291', icon: 'github' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sudeep-s-70304a374/', icon: 'linkedin' },
  leetcode: { label: 'LeetCode', href: 'https://leetcode.com/u/SUDEEPSARKAR/', icon: 'leetcode' },
  email: { label: 'Email', href: 'mailto:sudeep7520@gmail.com', icon: 'email' },
}

// Icons shown in the top bar next to the Resume button (desktop)
export const headerSocials = ['github', 'linkedin']

// Navbar links. `id` must match a section id below.
export const nav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  badge: 'Open to Data Engineering internships',
  // Two lines, shown in uppercase. The second line gets the lavender block.
  headline: ['Engineering data pipelines.', 'Building scalable data solutions.'],
  stats: [
    'B.Tech CSE at SVCE Tirupati, graduating 2027, CGPA 8.78/10',
    '180+ problems solved on LeetCode · LeetCode Data Navigator badge · IEEE Student Member',
  ],
  intro:
    'Hi, I’m **S Sudeep**, an aspiring Data Engineer passionate about building reliable data pipelines, scalable Lakehouse architectures, and optimized data transformation workflows using Python, SQL, Apache Spark, and Azure technologies.',
  primaryCta: { label: 'Explore My Projects', href: '#projects' },
  secondaryCta: { label: 'Download Resume' },
  tertiaryCta: { label: 'Contact me', href: '#contact' },
  socials: ['github', 'linkedin', 'leetcode', 'email'],
  terminal: {
    filename: 'sudeep.sh',
    session: [
      { command: 'whoami', output: ['s sudeep'] },
      { command: 'cat focus.txt', output: ['aspiring data engineer', 'python · sql · pyspark · azure databricks'] },
      { command: 'ls projects/', output: ['instacart_lakehouse  azure_incremental_pipeline'] },
    ],
  },
}

// Scrolling band under the hero (shown in uppercase)
export const marquee = [
  'Python',
  'SQL',
  'PySpark',
  'Spark SQL',
  'Azure Databricks',
  'Delta Lake',
  'Azure Data Factory',
  'ADLS Gen2',
  'Unity Catalog',
  'Databricks Genie',
]

export const about = {
  label: 'about',
  title: 'I turn raw data into reliable ==pipelines==.',
  paragraphs: [
    'I’m S Sudeep, a Computer Science and Engineering student at Sri Venkateswara College of Engineering, Tirupati, graduating in 2027. I’m focused on Data Engineering and enjoy designing data pipelines, building Lakehouse architectures, and optimizing data transformations.',
    'My hands-on projects involve Python, SQL, PySpark, Azure Data Factory, Azure Databricks, and Delta Lake. I’ve worked on a Lakehouse project processing 33.8M+ transactional records and an Azure incremental data pipeline using watermark-based loading.',
    'I’m seeking Data Engineering internships and entry-level opportunities where I can continue learning, contribute to engineering teams, and build reliable data solutions.',
  ],
  chips: ['Data Pipelines', 'Lakehouse Architecture', 'ETL / ELT', 'Data Modeling'],
  photo: { src: '/profile.jpg', alt: 'S Sudeep', width: 768, height: 960 },
  // Stickers around the photo: top-right, left, bottom-right
  stickers: [
    { label: 'PySpark', color: 'sky' },
    { label: 'SQL', color: 'mint' },
    { label: 'Databricks', color: 'pink' },
  ],
  educationLabel: 'education',
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'Sri Venkateswara College of Engineering, Tirupati',
      period: '2023 – 2027',
      badge: 'CGPA 8.78/10',
    },
    {
      degree: 'Intermediate (MPC)',
      school: 'Sreenivasa Junior College, Kalikiri',
      period: '2021 – 2023',
      badge: '92.8%',
    },
    { degree: 'SSC (10th Standard)', school: 'Zilla Parishat High School, Thummisi', period: '2020 – 2021', badge: '94.5%' },
  ],
}

export const projects = {
  label: 'selected work',
  title: 'Things I’ve ==built==.',
  intro:
    'Currently building practical Data Engineering expertise through hands-on projects in data pipelines, Lakehouse architecture, and large-scale data transformation.',
  items: [
    {
      id: 'instacart-lakehouse',
      title: 'Enterprise Medallion Lakehouse and AI Analytics',
      category: 'Lakehouse · AI Analytics',
      accent: 'lilac',
      sticker: 'Databricks',
      description:
        'An end-to-end Medallion Lakehouse pipeline that processes and transforms more than 33.8 million Instacart transactional records into structured Delta tables, with data cleaning, schema validation, deduplication, dimensional modeling, and performance optimization.',
      metrics: [
        { value: '33.8M+', label: 'records processed' },
        { value: '206K', label: 'unique customers' },
        { value: '3.34M', label: 'order-level fact rows' },
        { value: '33.8M', label: 'order-item fact rows' },
      ],
      highlights: [
        'Bronze, Silver and Gold processing layers on Delta Lake in Azure Databricks',
        'Silver layer: schema validation, type casting, null handling and deduplication of 206K unique customers',
        'Kimball star schema with separate order-level and order-item-level fact tables (project-reported 90% lower scan cost for high-level queries)',
        'Delta Lake Z-Ordering on user_id and product_id, and broadcast hash joins for dimension lookups',
        'Databricks Genie on the Gold tables for natural-language questions translated to Spark SQL',
      ],
      tech: ['Python', 'SQL', 'PySpark', 'Apache Spark', 'Azure Databricks', 'Delta Lake', 'Unity Catalog', 'Databricks Genie'],
      live: null,
      github: 'https://github.com/sudeep291/InstaCart_Online_Grocery_Basket_Project',
      githubLabel: 'View Source Code',
      urlBar: 'github.com/sudeep291/InstaCart_Online_Grocery_Basket_Project',
      // Drawn from the project's README (see src/components/LakehouseDiagram.jsx)
      diagram: 'lakehouse',
    },
    {
      id: 'azure-pipeline',
      title: 'End-to-End Azure Data Pipeline for Car Sales Analytics',
      category: 'Azure ELT Pipeline',
      accent: 'sky',
      sticker: 'Azure',
      description:
        'A cloud ELT pipeline for relational data ingestion, incremental loading, transformation and dimensional modeling: Azure SQL → Azure Data Factory → ADLS Gen2 → Azure Databricks (Bronze, Silver, Gold).',
      highlights: [
        'Orchestrated multi-source relational ingestion from Azure SQL into ADLS Gen2 with Azure Data Factory',
        'Incremental loading with a dynamic watermark table: last/current load lookups, a copy activity and a watermark stored procedure, on scheduled triggers',
        'PySpark transformations for schema validation, record deduplication, null imputation and relational joins',
        'Gold dimension and fact tables using SCD Type 1 and surrogate keys, run with Databricks Workflows under Unity Catalog',
      ],
      tech: ['Azure Data Factory', 'Azure Databricks', 'ADLS Gen2', 'Azure SQL', 'PySpark', 'SQL', 'Delta Lake'],
      live: null,
      github: 'https://github.com/sudeep291/Azure-incremental_data_pipeline',
      githubLabel: 'View Source Code',
      urlBar: 'Azure Data Factory · incre_data_pipeline',
      image: '/projects/azure-pipeline.webp',
      imageAlt:
        'Azure Data Factory incremental pipeline: last_load and current_load lookups feeding a copy from Azure SQL to Bronze, then a watermark stored procedure',
    },
  ],
}

// `span` = how many of the 4 desktop columns a card takes (1, 2, 3 or 4).
// Skills listed in `primary` are shown as filled chips.
export const skills = {
  label: 'skills',
  title: 'What I ==work== with.',
  intro: 'Centered on Python, SQL, PySpark and Azure Databricks, with Delta Lake and Azure Data Factory for building pipelines.',
  primary: ['Python', 'SQL', 'PySpark', 'Azure Databricks', 'Delta Lake', 'Azure Data Factory (ADF)'],
  groups: [
    {
      title: 'Programming & Querying',
      icon: 'code',
      color: 'lilac',
      span: 2,
      items: ['Python', 'SQL', 'PySpark', 'Spark SQL'],
    },
    {
      title: 'Big Data & Storage',
      icon: 'bigdata',
      color: 'lime',
      span: 2,
      items: ['Apache Spark', 'Delta Lake', 'ACID Transactions', 'Schema Enforcement & Evolution', 'Data Skipping'],
    },
    {
      title: 'Cloud & Data Platforms',
      icon: 'cloud',
      color: 'sky',
      span: 2,
      items: ['Azure Databricks', 'Azure Data Factory (ADF)', 'ADLS Gen2', 'Azure SQL', 'Unity Catalog', 'Databricks Genie'],
    },
    {
      title: 'Data Architecture & Modeling',
      icon: 'modeling',
      color: 'pink',
      span: 2,
      items: ['Medallion Architecture (Bronze, Silver, Gold)', 'Kimball Star Schema', 'Fact & Dimension Modeling', 'SCD Type 1'],
    },
    {
      title: 'Data Pipeline Engineering',
      icon: 'pipelines',
      color: 'mint',
      span: 3,
      items: [
        'ETL / ELT Pipelines',
        'Incremental Loading',
        'Watermark Pattern',
        'Data Deduplication',
        'Schema Validation',
        'Delta Lake Z-Ordering',
        'Broadcast Hash Joins',
      ],
    },
    { title: 'Developer Tools', icon: 'tools', color: 'butter', span: 1, items: ['Git', 'GitHub'] },
  ],
}

// "How I build" cards: the steps of a typical pipeline, as done in the projects above
export const services = {
  label: 'workflow',
  title: 'How I build data pipelines.',
  items: [
    {
      title: 'Ingest',
      text: 'Azure Data Factory pulls source tables incrementally using a watermark.',
      icon: 'ingest',
      color: 'lime',
    },
    {
      title: 'Bronze',
      text: 'Raw data lands in ADLS Gen2 / Delta tables, unchanged.',
      icon: 'bronze',
      color: 'lilac',
    },
    {
      title: 'Silver',
      text: 'PySpark validates schemas, fixes types and nulls, and removes duplicates.',
      icon: 'silver',
      color: 'sky',
    },
    {
      title: 'Gold',
      text: 'Kimball star schemas with fact and dimension tables, SCD Type 1.',
      icon: 'gold',
      color: 'pink',
    },
    {
      title: 'Optimize & serve',
      text: 'Z-Ordering and broadcast joins, then Databricks Genie for questions in plain English.',
      icon: 'optimize',
      color: 'mint',
    },
  ],
}

// `unit` is used for the count under each group name ("2 ACHIEVEMENTS", "1 MEMBERSHIP").
export const certifications = {
  label: 'achievements',
  title: 'Achievements & ==coding profiles==.',
  intro: 'Coding practice and community involvement, as listed on my resume.',
  groups: [
    {
      issuer: 'LeetCode',
      unit: 'achievement',
      items: [
        {
          title: '180+ Problems Solved',
          note: 'Data Structures, Algorithms and SQL',
          link: { label: 'View profile', href: 'https://leetcode.com/u/SUDEEPSARKAR/' },
        },
        {
          title: 'Data Navigator Badge',
          note: 'Multi-table SQL queries, joins, aggregations and window functions',
        },
      ],
    },
    {
      issuer: 'IEEE',
      unit: 'membership',
      items: [
        {
          title: 'IEEE Student Member',
          note: 'Technical workshops and engineering student chapters',
        },
      ],
    },
  ],
}

export const faq = {
  label: 'faqs',
  title: 'Questions, answered.',
  items: [
    {
      q: 'What do you mainly work with?',
      a: 'Python, SQL and PySpark on Azure Databricks with Delta Lake, plus Azure Data Factory and ADLS Gen2 for ingestion and storage.',
    },
    {
      q: 'Do you have work experience?',
      a: 'Not yet. I’m applying as a Data Engineering fresher and building practical experience through hands-on projects in data pipelines, Lakehouse architecture and large-scale data transformation.',
    },
    {
      q: 'How do you approach a data pipeline?',
      a: 'Ingest incrementally, land raw data in Bronze, clean and validate it in Silver, model it into a star schema in Gold, then optimize the tables for the queries people actually run.',
    },
    {
      q: 'Do you practice SQL and DSA?',
      a: 'Yes. I’ve solved 180+ LeetCode problems across data structures, algorithms and SQL, and earned the LeetCode Data Navigator badge.',
      links: ['leetcode'],
    },
    {
      q: 'Where can I see your work?',
      a: 'Both projects above link to their source code on GitHub, along with my other data engineering repositories.',
      links: ['github'],
    },
    {
      q: 'Are you open to opportunities?',
      a: 'Yes, I’m looking for Data Engineering internships and entry-level Data Engineer roles.',
    },
  ],
}

export const contact = {
  label: 'contact',
  title: 'Let’s build something with ==data.==',
  text: 'I’m open to Data Engineering internships and entry-level opportunities where I can apply my skills, learn from experienced engineers, and contribute to meaningful data projects.',
  socials: ['linkedin', 'github', 'leetcode'],
  form: {
    label: 'or send a message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@company.com',
    subjectPlaceholder: 'Internship opportunity',
    messagePlaceholder: 'Hi Sudeep, I’d like to talk about...',
    note: 'Your message comes straight to my inbox.',
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Thanks! Your message was sent.',
    error: 'Sorry, the message didn’t go through. Please email me directly at',
    subject: 'Portfolio message',
    // Messages are delivered to site.email by FormSubmit (formsubmit.co), no account or key.
    // The very first message triggers an "Activate Form" email: click it once, then every
    // message arrives in the inbox. A new domain (e.g. after deploying) asks to activate again.
    endpoint: 'https://formsubmit.co/ajax/',
  },
}

export const footer = {
  builtWith: 'Built with React, Vite & Tailwind CSS',
  socials: ['linkedin', 'github', 'leetcode'],
}
