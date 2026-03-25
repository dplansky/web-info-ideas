import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const currentAffiliations = [
  { name: 'HIMSS' },
  { name: 'INCOSE' },
];

const formerAffiliations = [
  { name: 'Carequality Advisory Board' },
  { name: 'eHealth Exchange Coordinating Committee' },
  { name: 'QHIN Caucus' },
  { name: 'QHIN Technical Workgroup' },
  { name: 'Interoperability Boards — NY, MI, TX & CA' },
];

const education = [
  { school: 'Stanford University', degree: 'Doctoral Candidate, Aeronautics & Astronautics' },
  { school: 'Massachusetts Institute of Technology', degree: 'Master of Science (S.M.), Aeronautics & Astronautics' },
  { school: 'University of Toronto', degree: 'Bachelor of Applied Science (B.A.Sc.), Aerospace Engineering' },
];

export default function About() {
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
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground"
          >
            Expertise. Experience.
            <br />
            <span className="text-accent italic">Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto"
          >
            25 years at the vanguard of healthcare data — from interoperability to governance to AI.
          </motion.p>
        </div>
      </section>

      {/* Principal */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Bio - 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Principal</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">Derek Plansky</h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  As a technologist and product strategist, Derek has spent the last 25 years working with companies at the vanguard of data technologies — including Loral, LexisNexis, Quest Diagnostics, and IBM.
                </p>
                <p>
                  Over the last 15 years his focus has been on the secure, interoperable exchange of clinical, claims, and administrative data to make the American healthcare system run more efficiently. He has previously served on the Interoperability boards of New York, Michigan, Texas, and California and is currently on the Advisory Board of Carequality.
                </p>
                <p>
                  Informatic Ideas was founded on the idea that analytics can provide powerful insights — but only if put into use. Engagements are about getting the right insights into the hands of those who can benefit from them most, and incorporating that information into the workflow of our clients.
                </p>
              </div>

              {/* Education */}
              <div className="mt-12">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">Education</p>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.school} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Affiliations - 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-10"
            >
              {/* Quote */}
              <div className="bg-secondary rounded-2xl p-8">
                <blockquote className="text-lg font-light text-foreground leading-relaxed italic">
                  "If you can't explain it simply, you don't understand it well enough."
                </blockquote>
                <p className="mt-4 text-sm text-muted-foreground">— Albert Einstein</p>
              </div>

              {/* Current */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">Current Affiliations</p>
                <div className="space-y-3">
                  {currentAffiliations.map((a) => (
                    <div key={a.name} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">{a.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Former */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Former Affiliations</p>
                <div className="space-y-3">
                  {formerAffiliations.map((a) => (
                    <div key={a.name} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-border" />
                      <span className="text-sm text-muted-foreground">{a.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the firm */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">About the Firm</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              A specialty consulting practice
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-left md:text-center">
              <p>
                Informatic Ideas is a specialty consulting practice focused on helping clients solve their data problems in healthcare and other domains. With experience from household names of data like LexisNexis, Ikon, and Quest Diagnostics, we tackle data analysis, data governance, and data strategy challenges for clients.
              </p>
              <p>
                With a special focus in healthcare analytics and interoperability, Informatic Ideas provides both hands-on technical and strategic services. Our engagements are about getting the right insights into the hands of those who can benefit from them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Free consultation, no obligation.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We offer free discussions to walk you through your needs, the scope of your goals, and your budget — with no strings attached.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Free Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}