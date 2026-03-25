import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden"
        >
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">
              Get started
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground leading-tight">
              Let's chat about your{' '}
              <span className="text-accent italic">data challenges.</span>
            </h2>
            <p className="mt-6 text-primary-foreground/60 leading-relaxed max-w-lg">
              Drop your email and we'll reach out within one business day to schedule a free 30-minute consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}