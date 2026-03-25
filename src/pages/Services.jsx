import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceBlock from '../components/services/ServiceBlock';

const services = [
  {
    num: '01',
    title: 'Governance',
    isNew: true,
    tags: ['TEFCA', 'Carequality', 'California DxF', 'CMS Aligned Networks', 'Data Governance', 'AI Governance'],
    description: [
      'Healthcare data sharing is a maze of overlapping frameworks, trust agreements, and regulatory requirements. The landscape has never been more complex — or more consequential.',
      'Informatic Ideas helps organizations understand where they sit in these ecosystems, what participation requires, and how to engage effectively. Whether you are a health system, payer, public health agency, or technology vendor, we can guide you through onboarding, policy compliance, and ongoing governance obligations.',
      'Beyond external frameworks, we also help organizations build internal data governance and AI governance programs — establishing policies, stewardship structures, data quality standards, and accountability frameworks.',
    ],
    bullets: [
      'TEFCA readiness assessment and QHIN engagement strategy',
      'Carequality framework participation and policy alignment',
      'California Data Exchange Framework (DxF) compliance guidance',
      'CMS Aligned Network participation strategy',
      'Enterprise data governance program design',
      'AI governance framework development and policy creation',
    ],
  },
  {
    num: '02',
    title: 'Clinical Interoperability',
    tags: ['Data Governance', 'Data Quality', 'HL7 FHIR', 'Standards Compliance'],
    description: [
      'Healthcare is a complex pastiche of standards, compliance requirements, and competing factions — resulting in a large number of failures and a few successes as companies have tried to create a unified view of patient data.',
      'We provide guidance on data governance and data quality practices that underpin effective interoperability — ensuring that the data exchanged is not just technically compliant, but actually usable and trustworthy.',
    ],
    bullets: [
      'Interoperability architecture assessment and roadmap',
      'HL7 FHIR implementation strategy',
      'Standards selection and vendor evaluation',
      'Data quality framework design',
      'Patient data unification and matching strategies',
    ],
  },
  {
    num: '03',
    title: 'Healthcare Analytics & AI',
    tags: ['AI Governance', 'Algorithm Selection', 'Triple Aim', 'ML & Predictive Analytics'],
    description: [
      'Few domains will benefit more from AI and machine learning than healthcare. Even with access to patient data, many challenges around which algorithms to apply, what data has the most impact, and how to actually use the outputs in a clinician workflow still exist.',
      'Informatic Ideas can provide services such as algorithm selection, exogenous data recommendations, and workflow refactoring — all with the aim of making a measurable impact on your outcomes.',
    ],
    bullets: [
      'Algorithm selection and validation for clinical use cases',
      'Exogenous data source identification and integration',
      'Clinician workflow redesign around AI outputs',
      'AI governance policy and oversight framework development',
      'Population health analytics program design',
    ],
  },
  {
    num: '04',
    title: 'Data Strategy',
    tags: ['Digital Transformation', 'Data Monetization', 'Competitive Intelligence'],
    description: [
      'Many organizations have vast troves of data, but they either don\'t understand how to leverage it to differentiate their existing products or to repackage it to create new sources of revenue for their business.',
      'Informatic Ideas understands how to extract value from your content so that you can stay a step ahead of your competition.',
    ],
    bullets: [
      'Data asset inventory and valuation',
      'Data product design and go-to-market strategy',
      'Competitive landscape analysis using data assets',
      'Data monetization roadmap development',
      'Digital transformation planning and vendor selection',
    ],
  },
  {
    num: '05',
    title: 'Risk Management & Investigative Analytics',
    tags: ['Public Safety Data', 'Fraud Detection', 'Investigative Analytics'],
    description: [
      'Whether you are proactively managing risk or trying to investigate a loss after the fact, Informatic Ideas can help. With experience analyzing public safety data and investigating suspicious activity, we can provide the who\'s and what\'s to look for.',
    ],
    bullets: [
      'Proactive risk monitoring program design',
      'Post-incident investigative analytics',
      'Public safety and fraud data analysis',
      'Suspicious activity pattern identification',
      'Risk reporting framework development',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 lg:py-36 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground"
          >
            Strategic & technical
            <br />
            <span className="text-accent italic">services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto"
          >
            Five practice areas covering the full spectrum of healthcare data challenges.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        {services.map((service) => (
          <ServiceBlock key={service.num} {...service} />
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            First consultation is always free. Tell us about your challenge and we'll point you in the right direction.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}