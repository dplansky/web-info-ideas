import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";


const practiceAreas = [
  'Governance (TEFCA, Carequality, DxF, CMS)',
  'Clinical Interoperability',
  'Healthcare Analytics & AI',
  'Data Strategy',
  'Risk Management & Investigative Analytics',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Send email via your preferred service (e.g. Resend, SendGrid, EmailJS)
    // Replace this with your own email integration
    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        reason: form.reason,
        message: form.message,
      }),
    });
    setSending(false);
    setSubmitted(true);
  };

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
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground"
          >
            Let's <span className="text-accent italic">chat.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto"
          >
            Tell us about your challenge. First consultation is always free.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                  Reach Us Directly
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">Location</p>
                      <p className="text-sm text-foreground">936 SW 1st Ave, Suite 242</p>
                      <p className="text-sm text-foreground">Miami, FL 33130</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">Email</p>
                      <a href="mailto:info@informaticideas.com" className="text-sm text-foreground hover:text-accent transition-colors">
                        info@informaticideas.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">Response Time</p>
                      <p className="text-sm text-foreground">One business day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-secondary rounded-2xl p-6">
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  Before You Write
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please be as detailed as possible to help us serve you better. Include your industry along with any specific document requests. Describe the issue you're having before telling us what you're looking to achieve.
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Please do not include confidential or sensitive information in your message.
                </p>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-secondary rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Message sent!</h3>
                  <p className="text-muted-foreground">
                    We'll get back to you within one business day to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 lg:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        First Name *
                      </Label>
                      <Input
                        required
                        placeholder="First name"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        Last Name
                      </Label>
                      <Input
                        placeholder="Last name"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Email Address *
                    </Label>
                    <Input
                      required
                      type="email"
                      placeholder="you@yourcompany.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Phone
                    </Label>
                    <Input
                      placeholder="+1 (305) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Reason for Inquiry *
                    </Label>
                    <Select required onValueChange={(val) => setForm({ ...form, reason: val })}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select a practice area..." />
                      </SelectTrigger>
                      <SelectContent>
                        {practiceAreas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Additional Information *
                    </Label>
                    <Textarea
                      required
                      placeholder="Please describe the challenge you're facing and what you're looking to achieve."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                    {!sending && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}