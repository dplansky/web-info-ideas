import { motion } from 'framer-motion';

export default function ServiceBlock({ num, title, tags, description, bullets, isNew }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b border-border py-16 lg:py-20 last:border-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-muted-foreground">{num}</span>
            {isNew && (
              <span className="px-2.5 py-0.5 bg-accent text-accent-foreground text-[10px] font-bold tracking-wider uppercase rounded-full">
                New
              </span>
            )}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-secondary text-xs font-medium text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <div className="text-muted-foreground leading-relaxed space-y-4 mb-8">
            {description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {bullets && bullets.length > 0 && (
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-sm text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}