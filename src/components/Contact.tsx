import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── Contact submission ───────────────────────────────────────────────────────
// Using Formspree — free tier, no backend needed.
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form and copy your form ID (e.g. "xzzpqabc").
// 3. Replace YOUR_FORMSPREE_ID below with your actual form ID.
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

async function submitContactForm(data: ContactFormData): Promise<{ message: string }> {
  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? "Submission failed");
  }
  return { message: "Message sent successfully! I'll reply within 24 hours." };
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "rabia.gullrabia369@gmail.com", href: "mailto:gullrabia369@gmail.com" },
  { icon: MapPin, label: "Location", value: "Pakistan", href: null },
  { icon: Phone, label: "Availability", value: "Mon – Fri, 9am – 6pm PKT", href: null },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rabia-gull-007a84405/", label: "LinkedIn" },

  { icon: Mail, href: "mailto:gullrabia369@gmail.com", label: "Email" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const submitContact = useMutation({
    mutationFn: submitContactForm,
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContact.mutate(data, {
      onSuccess: (res) => {
        toast({ title: "Message sent!", description: res.message });
        form.reset();
      },
      onError: (err) => {
        toast({
          title: "Something went wrong",
          description: err.message || "Please try again or email me directly.",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-muted/20 relative" aria-labelledby="contact-heading">
      <div className="absolute left-0 top-1/3 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form below
            and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4">Find me on</h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.15, y: -2 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  Currently Available
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to freelance projects, part-time, and full-time opportunities.
                Response within 24 hours guaranteed.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl border border-border bg-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this about?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project, timeline, and budget..."
                            className="min-h-[140px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 transition-all"
                    whileHover={!submitContact.isPending ? { scale: 1.02 } : {}}
                    whileTap={!submitContact.isPending ? { scale: 0.98 } : {}}
                  >
                    {submitContact.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
