import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const affiliations = [
  { name: 'HIMSS', status: 'Current' },
  { name: 'INCOSE', status: 'Current' },
  { name: 'Carequality Advisory Board', status: 'Former' },
  { name: 'eHealth Exchange Coordinating Committee', status: 'Former' },
  { name: 'QHIN Caucus', status: 'Former' },
  { name: 'Interoperability Boards — NY, MI, TX & CA', status: 'Former' },
];

export default function PrincipalSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Principal
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              Derek Plansky
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a technologist and product strategist, Derek has spent the last 25 years working with companies at the vanguard of data technologies — including Loral, LexisNexis, Quest Diagnostics, and IBM.
              </p>
              <p>
                Over the last 15 years his focus has been on the secure, interoperable exchange of clinical, claims, and administrative data to make the American healthcare system run more efficiently.
              </p>
            </div>

            {/* Education */}
            <div className="mt-10 space-y-4">
              {[
                { school: 'Stanford University', degree: 'Doctoral Candidate, Aeronautics & Astronautics' },
                { school: 'MIT', degree: 'M.S., Aeronautics & Astronautics' },
                { school: 'University of Toronto', degree: 'B.A.Sc., Aerospace Engineering' },
              ].map((edu) => (
                <div key={edu.school} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Full bio & affiliations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right - Quote + Affiliations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            {/* Quote */}
            <div className="bg-primary rounded-2xl p-10 lg:p-12 mb-8">
              <blockquote className="text-xl md:text-2xl font-light text-primary-foreground/90 leading-relaxed italic">
                "If you can't explain it simply, you don't understand it well enough."
              </blockquote>
              <p className="mt-6 text-sm text-primary-foreground/50">— Albert Einstein</p>
            </div>

            {/* Affiliations */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                Activities & Affiliations
              </p>
              <div className="space-y-3">
                {affiliations.map((a) => (
                  <div
                    key={a.name}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="text-sm text-foreground">{a.name}</span>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        a.status === 'Current'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {a.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}