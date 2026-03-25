import { motion } from 'framer-motion';
import { Clock, DollarSign, Award } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Deep Expertise',
    desc: '25+ years at the intersection of data technology, healthcare, and strategy — from MIT and Stanford to IBM and LexisNexis.',
  },
  {
    icon: DollarSign,
    title: 'Free First Consultation',
    desc: 'We offer free discussions to walk you through your needs, the scope of your goals, and your budget — with no obligation.',
  },
  {
    icon: Clock,
    title: '1-Day Response Time',
    desc: 'We respond within one business day. Your challenges are urgent and we treat them that way.',
  },
];

export default function WhySection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Selecting a consultant<br className="hidden md:block" /> is an important decision.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}