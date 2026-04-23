import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import site from "@/content/site.json";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "@/components/ui/form";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Legal Eyes" },
      { name: "description", content: "Begin a conversation with Legal Eyes. A partner will respond within one business day." },
      { property: "og:title", content: "Contact — Legal Eyes" },
      { property: "og:description", content: "Reach our partners directly for confidential counsel." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  caseType: z.string().min(1, "Select a case type"),
  message: z.string().trim().min(20, "Please share at least a sentence (20+ chars)").max(1500),
});

type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", caseType: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    toast.success("Inquiry received", {
      description: `Thank you, ${values.name.split(" ")[0]}. A partner will respond within one business day.`,
    });
    form.reset();
  };

  return (
    <SiteLayout>
      <Section eyebrow="Contact" title={site.contact.title} description={site.contact.description} className="pt-40">
        <div className="grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-7">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Full name</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-12 rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold" />
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
                        <FormLabel className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="h-12 rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} className="h-12 rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="caseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Case type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus:ring-0 data-[state=open]:border-gold">
                              <SelectValue placeholder="Select…" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none">
                            {site.contact.caseTypes.map((c) => (
                              <SelectItem key={c} value={c}>{c}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell us about your matter</FormLabel>
                      <FormControl>
                        <Textarea rows={6} {...field} className="rounded-none border-x-0 border-t-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-gold resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button type="submit" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-none h-12 px-10 tracking-wide">
                    Send inquiry <ArrowRight className="ml-1" />
                  </Button>
                </div>
              </form>
            </Form>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="border border-border/60 bg-card/60 backdrop-blur p-8 space-y-6">
              <h3 className="font-serif text-2xl text-foreground">Office</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-4"><MapPin className="text-gold mt-0.5 shrink-0" size={18} /><span className="text-foreground/85 leading-relaxed">{site.contact.address}</span></li>
                <li className="flex gap-4"><Mail className="text-gold mt-0.5 shrink-0" size={18} /><a href={`mailto:${site.contact.email}`} className="text-foreground/85 hover:text-gold">{site.contact.email}</a></li>
                <li className="flex gap-4"><Phone className="text-gold mt-0.5 shrink-0" size={18} /><a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-foreground/85 hover:text-gold">{site.contact.phone}</a></li>
                <li className="flex gap-4"><Clock className="text-gold mt-0.5 shrink-0" size={18} /><span className="text-foreground/85">{site.contact.hours}</span></li>
              </ul>
            </div>

            <div className="mt-8 aspect-[4/3] relative border border-border/60 overflow-hidden bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-bronze/12" />
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gold mx-auto mb-3" size={28} />
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Liberty Street · NY</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </SiteLayout>
  );
}
