/* =========================================================
   CONTENT — edit everything about the portfolio here.
   Empty strings hide the matching link or section.
   ========================================================= */
const CONFIG = {
  name: 'Dhanush',
  fullName: 'N. Dhanush Venkata SaiRam Krishna',
  role: 'AI Engineer',
  email: 'dhanushjeevan2008@gmail.com',
  linkedin: '',            // e.g. 'https://www.linkedin.com/in/your-handle'
  github: '',              // e.g. 'https://github.com/your-handle'
  resumeFileName: 'Dhanush-Resume.pdf',
  resumeUrl: '/Dhanush-Resume.pdf',      // replace the PDF in the project root to update it
  portraitImage: ''        // optional photo URL or data: URI — replaces the 3D character when set
};


/* visual: 'audit' | 'safety' | 'wellbeing' for featured showcases; thumb for smaller cards */
const PROJECTS = [
  {id:'globalcert', featured:true, visual:'audit', title:'GlobalCert AI Audit Tool', kicker:'AI compliance platform',
   summary:'AI-powered audit and compliance platform that analyses uploaded documents and assists with ISO compliance auditing.',
   tags:['React / Next.js','TypeScript','Supabase','AI / LLM','Vercel','AWS','S3'], links:{live:'',github:''},
   cs:{problem:'ISO compliance audits mean reading large sets of documents against dozens of clauses, then scoring each clause and writing up findings by hand.',
       solution:'Upload the organisation\u2019s documents and the platform uses an LLM to analyse them against ISO clauses, producing clause scores, findings, major and minor non-conformities, and a final audit report.',
       architecture:['Document upload (Next.js)','Storage (AWS S3)','LLM analysis','Audit data (Supabase)','Dashboard and report (Vercel)']}},
  {id:'ai-safety', featured:true, visual:'safety', title:'AI Safety & Content Guardrails', kicker:'Microsoft Azure AI Foundry',
   summary:'A Microsoft Azure AI Foundry project demonstrating custom content filtering and controlled AI responses.',
   tags:['Microsoft Azure','AI Foundry','Content filters','LLM'], links:{live:'',github:''},
   cs:{problem:'A model exposed to users needs clear rules about what it will accept and what it will say. Without them, harmful prompts and responses slip through.',
       solution:'Custom content filters in Azure AI Foundry screen both the user input and the model\u2019s output by category, block unsafe content, let safe requests through and make filtered traffic visible for monitoring.',
       architecture:['User input','Input filter','AI model','Output filter','Safe response and monitoring']}},
  {id:'digital-wellbeing', featured:true, visual:'wellbeing', title:'Digital Wellbeing Platform', kicker:'Parent\u2013child screen time',
   summary:'A parent\u2013child screen-time management app designed around device pairing, usage monitoring and parental controls.',
   tags:['Device pairing','Usage analytics','Parental controls','Notifications'], links:{live:'',github:''},
   cs:{problem:'Parents need a simple, trustworthy way to see and manage how much time their child spends on a device.',
       solution:'A parent dashboard pairs with the child\u2019s device using a pairing code, then shows screen time, device status and usage analytics, and sends notifications, all through an API between the two.',
       architecture:['Parent dashboard','API','Child device']}},
  {id:'ram-setu', thumb:'route', title:'Ram Setu', kicker:'AI travel planner / ramsetu.ai',
   summary:'AI-powered travel planner with AI itineraries, flight and hotel search, interactive maps, route planning and personalised recommendations.',
   tags:['React','Next.js','Node.js','Database','AI'], links:{live:'https://ramsetu.ai',github:''},
   cs:{problem:'Planning a trip means juggling itineraries, flights, hotels and routes across many different tools.',
       solution:'One web app that generates an itinerary with AI and brings flight and hotel search, interactive maps, route planning and recommendations together.',
       architecture:['React / Next.js frontend','Node.js server','Database','AI itinerary generation','Travel, flight, hotel and map integrations'],
       contribution:'Independently designed, developed and deployed at Hrudai NCPL, owning it end to end from architecture through deployment. Claude Code was my primary AI development environment across the stack.',
       results:'Live in production at ramsetu.ai.'}},
  {id:'voice-assistant', thumb:'wave', title:'Voice AI Assistant', kicker:'LLMs + RAG / Ideabytes',
   summary:'Voice-controlled assistant that completes Google Forms from natural language, built on open-source LLMs with RAG.',
   tags:['LLaMA','Mistral','RAG','Google Forms API'], links:{live:'',github:''},
   cs:{problem:'Filling in forms by hand is slow, and plain LLM answers can be inaccurate without the right data behind them.',
       solution:'Speak naturally and the assistant fills the form through the Google Forms API, with RAG pipelines combining database lookups and model responses for accuracy.',
       architecture:['Voice input','LLM (LLaMA / Mistral)','RAG: database lookup','Google Forms API'],
       contribution:'Built during my internship at Ideabytes: integrated open-source models with application logic and built the RAG pipelines.',
       results:'90%+ accuracy in LLM output testing, validated iteratively with stakeholders.'}},
  {id:'smart-wristband', thumb:'band', title:'Smart Wristband for Deaf People', kicker:'Wearable prototype',
   summary:'Wearable prototype that detects incoming calls and emergency alerts, with directional visual indicators for source and urgency.',
   tags:['Wearable','Prototype','Accessibility'], links:{live:'',github:''},
   cs:{problem:'Calls and emergency alerts are sound-based, so they are easy to miss for people who are deaf.',
       solution:'A wristband that detects incoming calls and emergency alerts and shows them as directional visual signals that convey where they come from and how urgent they are.'}},
  {id:'movie-booking', thumb:'seats', title:'Movie Ticket Booking System', kicker:'Web platform',
   summary:'Responsive booking platform with dynamic seat selection and showtime filtering.',
   tags:['HTML','CSS','JavaScript'], links:{live:'',github:''},
   cs:{solution:'A responsive web flow from picking a showtime to choosing seats, with dynamic seat selection and showtime filtering.'}}
];


const EXPERIENCE = [
  {role:'AI Engineer Intern', org:'Hrudai NCPL', when:'Dec 2025 – Jul 2026',
   text:'Owned Ram Setu, a full-stack AI travel planner, end to end — from architecture through deployment.',
   points:['Independently designed, developed and deployed Ram Setu (ramsetu.ai).','Built a responsive React / Next.js frontend backed by a Node.js server and database.','Integrated AI itinerary planning, flight and hotel search, interactive maps, route planning and personalised recommendations.','Used Claude Code as the primary AI development environment across the full stack.'],
   tech:['React','Next.js','Node.js','Database','AI','Claude Code']},
  {role:'Intern', org:'Ideabytes', when:'May 2025 – Jul 2025',
   text:'Connected custom applications to open-source large language models and made their answers more accurate with retrieval.',
   points:['Integrated custom applications with LLaMA and Mistral, connecting internal logic to external model APIs.','Built RAG pipelines that combine database lookups with LLM responses.','Built a voice-controlled assistant on the Google Forms API for natural-language form completion.','Worked iteratively with stakeholders to validate model output.'],
   metric:['90%+','accuracy in LLM output testing'],
   tech:['LLaMA','Mistral','RAG','Google Forms API','Python']}
];


const ROLES = ['AI Engineer','Full-Stack Developer','GenAI Builder'];

/* Skillset: [skill, where it was used] — the second value is optional */
const SKILLSET = [
  {title:'AI / ML', items:[['Generative AI','GlobalCert, Ram Setu'],['LLM applications','Ideabytes'],['RAG pipelines','Ideabytes'],['LLaMA & Mistral','Ideabytes'],['Prompt engineering','Coursework'],['AI safety','Azure AI Foundry']]},
  {title:'Languages', items:[['Python','LLM + RAG work'],['JavaScript',''],['TypeScript','GlobalCert'],['Java',''],['C','']]},
  {title:'Frontend', items:[['React','Ram Setu'],['Next.js','Ram Setu, GlobalCert'],['HTML / CSS','Movie booking']]},
  {title:'Backend & APIs', items:[['Node.js','Ram Setu'],['Express',''],['API integration','Google Forms API']]},
  {title:'Databases', items:[['Supabase','GlobalCert'],['PostgreSQL',''],['SQLite',''],['MySQL','RAG pipelines']]},
  {title:'Cloud & DevOps', items:[['Microsoft Azure','AI Foundry'],['AWS','S3'],['Vercel','GlobalCert'],['GitHub','']]},
  {title:'Tools', items:[['Claude & Claude Code','Ram Setu'],['Cursor',''],['Google AI Studio',''],['Microsoft Foundry',''],['Power BI',''],['Unity3D','']]}
];

const BEYOND = [
  {icon:'pen', kicker:'UI / UX design', title:'NovaMart', text:'A multi-vendor e-commerce marketplace designed through Zidio Development — vendor onboarding, product discovery, cart and checkout, order tracking, a vendor dashboard and an admin moderation panel.', tags:['Case study','Design system','Figma']},
  {icon:'mic', kicker:'Public speaking', title:'Talk on Generative AI', text:'Delivered a public talk on Generative AI during my internship — explaining what the technology can do and how it gets built into real products.', tags:['Generative AI','Speaking']}
];

const JOURNEY = [
  {when:'Aug 2019 – Jun 2020', badge:'SCHOOL', title:'Class X', sub:'KKR Gowtham Concept School', text:'Scored 595 / 600.'},
  {when:'Jun 2020 – Jun 2022', badge:'SCHOOL', title:'Intermediate', sub:'Sri Chaitanya Junior College', text:'Scored 909 / 1000.'},
  {when:'Sep 2022', badge:'UNIVERSITY', title:'Started B.Tech in Computer Science', sub:'GITAM University', text:'Programming in Python, Java and C, databases and software engineering.'},
  {when:'May – Jul 2025', badge:'INTERNSHIP', title:'Intern — LLMs and RAG', sub:'Ideabytes', text:'Integrated LLaMA and Mistral, built RAG pipelines and a voice assistant, 90%+ output accuracy.'},
  {when:'During internship', badge:'SPEAKING', title:'Public talk on Generative AI', sub:'Speaker', text:'Presented Generative AI to an audience.'},
  {when:'Dec 2025 – Jul 2026', badge:'INTERNSHIP', title:'AI Engineer Intern — Ram Setu', sub:'Hrudai NCPL', text:'Designed, built and deployed a full-stack AI travel planner end to end.', hot:true},
  {when:'Apr 2026', badge:'MILESTONE', title:'Graduated — B.Tech CSE', sub:'GITAM University', text:'Finished with a CGPA of 8.86.', hot:true}
];

const CERTS = [
  {title:'IT Automation with Python', by:'Google, via Coursera'},
  {title:'AI with Python', by:'Certificate'},
  {title:'Software Testing', by:'NPTEL'},
  {title:'Microsoft Azure AI Foundry', by:'Coursework — model deployment', course:true},
  {title:'Prompt Engineering', by:'Coursework — few-shot, CoT, JSON/SQL', course:true}
];

const SOFT = [
  {e:'🚀', title:'Ownership', text:'Took Ram Setu from architecture to deployment on my own.'},
  {e:'🤝', title:'Cross-functional collaboration', text:'Working across product, design and engineering to ship.'},
  {e:'🎯', title:'Stakeholder focus', text:'Iterating with stakeholders until AI output is right.'},
  {e:'💬', title:'Communication', text:'Clear, structured updates for technical and non-technical people.'},
  {e:'🎤', title:'Public speaking', text:'Presented Generative AI to an audience.'},
  {e:'⏱️', title:'Time management', text:'Balancing internships, coursework and projects to deadline.'}
];
