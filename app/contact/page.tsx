"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjbjdol";

const SUBJECTS = [
  "I want to donate something",
  "I want to volunteer",
  "I know an organization that needs a drive",
  "I want to run a drive at my school",
  "Something else",
];

/* Inputs are printed boxes, same border and offset shadow as everything else. */
const fieldClass =
  "w-full rounded-sm border-2 border-ink bg-paper px-3 py-2.5 text-ink shadow-print-sm placeholder:text-muted-foreground/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: SUBJECTS[0], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="border-b-2 border-ink">
        <div className="container mx-auto px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <h1 className="max-w-[14ch] font-display text-poster font-extrabold text-ink">
            Say hello
          </h1>
          <p className="mt-8 max-w-reading text-lg leading-relaxed text-muted-foreground">
            A real person reads these, usually within a day or two. If
            you&apos;re writing about an organization that needs a drive, say so
            in the subject — those go to the top of the pile.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-headline font-extrabold text-ink">
              Send a message
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-ink">
                  What&apos;s this about
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  {SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <Button type="submit" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message"}
              </Button>

              {/*
                Status lines say what happened and what to do next, in the
                site's voice. The error gives a way through rather than an
                apology.
              */}
              {status === "success" && (
                <p
                  role="status"
                  className="rounded-sm border-2 border-ink bg-moss px-4 py-3 text-sm font-semibold text-paper"
                >
                  Message sent. We&apos;ll write back within a couple of days.
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-sm border-2 border-ink bg-brick px-4 py-3 text-sm font-semibold text-paper"
                >
                  That didn&apos;t send. Email us directly at
                  info.the.global.initiative@gmail.com and we&apos;ll pick it up
                  there.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-10">
            <div className="border-t-2 border-ink pt-5">
              <h2 className="font-display text-xl font-extrabold text-ink">Email</h2>
              <a
                href="mailto:info.the.global.initiative@gmail.com"
                className="mt-2 inline-block break-all font-semibold text-navy underline decoration-2 underline-offset-4 hover:decoration-marigold"
              >
                info.the.global.initiative@gmail.com
              </a>
            </div>

            <div className="border-t-2 border-ink pt-5">
              <h2 className="font-display text-xl font-extrabold text-ink">Phone</h2>
              <a
                href="tel:+17065909734"
                className="tabular mt-2 inline-block font-semibold text-navy underline decoration-2 underline-offset-4 hover:decoration-marigold"
              >
                (706) 590-9734
              </a>
            </div>

            <div className="border-t-2 border-ink pt-5">
              <h2 className="font-display text-xl font-extrabold text-ink">Instagram</h2>
              <a
                href="https://www.instagram.com/theglobal_initiative/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-semibold text-navy underline decoration-2 underline-offset-4 hover:decoration-marigold"
              >
                @theglobal_initiative
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Where open drives get announced first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
