import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold tracking-tight">
              informatic<span className="font-light">ideas</span>
            </span>
            <p className="mt-4 text-sm text-primary-foreground/60 max-w-md leading-relaxed">
              A specialty consulting practice helping healthcare organizations and businesses solve data acquisition, analytics, interoperability, governance, and strategy challenges.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:info@informaticideas.com" className="hover:text-primary-foreground transition-colors flex items-center gap-1">
                  info@informaticideas.com
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>936 SW 1st Ave, Suite 242</li>
              <li>Miami, FL 33130</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Informatic Ideas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}