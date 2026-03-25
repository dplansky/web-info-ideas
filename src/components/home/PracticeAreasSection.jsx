import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Activity, Brain, BarChart3, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const areas = [
  {
    num: '01',
    title: 'Governance',
    desc: 'Navigate TEFCA, Carequality, California DxF, CMS Aligned Networks, and build internal data & AI governance programs.',
    tags: ['TEFCA', 'Carequality', 'AI Governance'],
    icon: Shield,
    isNew: true,
  },
  {
    num: '02',
    title: 'Clinical Interoperability',
    desc: 'Guidance on standards, compliance, data quality, and creating a unified view of patient data across systems.',
    tags: ['HL7 FHIR', 'Data Quality'],
    icon: Activity,
  },
  {
    num: '03',
    title: 'Healthcare Analytics & AI',
    desc: 'Algorithm selection, exogenous data recommendations, and workflow refactoring aimed at the Triple Aim.',
    tags: ['ML & AI', 'Triple Aim'],
    icon: Brain,
  },
  {
    num: '04',
    title: 'Data Strategy',
    desc: 'Differentiate products and create new revenue sources from your existing data assets.',
    tags: ['Data Monetization', 'Digital Transformation'],
    icon: BarChart3,
  },
  {
    num: '05',
    title: 'Risk Management',
    desc: 'Proactive risk monitoring and investigative analytics for public safety and fraud detection.',
    tags: ['Fraud Detection', 'Public Safety'],
    icon: Search,
  },
];

export default function PracticeAreasSection() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Practice Areas
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Strategic & technical<br />services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to="/services"
                  className="group block bg-card rounded-2xl border border-border p-8 h-full hover:shadow-lg hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex items-center gap-2">
                      {area.isNew && (
                        <span className="px-2.5 py-0.5 bg-accent text-accent-foreground text-[10px] font-bold tracking-wider uppercase rounded-full">
                          New
                        </span>
                      )}
                      <span className="text-sm font-medium text-muted-foreground">{area.num}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{area.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}