"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/icons/Icon";

const CONTACT_EMAIL = "prashastha@loopdelta.com";

const inputClassName =
  "w-full bg-surface-container-lowest border border-[#D2D2D7] rounded-lg px-md py-sm font-body-base text-body-base text-on-background focus:outline-none form-input-glow transition-all duration-200";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Message from ${name || "your website"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className="bg-surface-container-lowest border border-surface-container-highest rounded-xl p-xl shadow-sm hover:shadow-lift hover:-translate-y-[2px] transition-all duration-300">
      <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-sm">
          <label
            htmlFor="name"
            className="font-label-caps text-label-caps text-secondary uppercase tracking-wider"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClassName}
          />
        </div>
        <div className="flex flex-col gap-sm">
          <label
            htmlFor="email"
            className="font-label-caps text-label-caps text-secondary uppercase tracking-wider"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClassName}
          />
        </div>
        <div className="flex flex-col gap-sm">
          <label
            htmlFor="message"
            className="font-label-caps text-label-caps text-secondary uppercase tracking-wider"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="How can I help you?"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClassName} resize-y`}
          />
        </div>
        <button
          type="submit"
          className="mt-sm w-full bg-primary-container text-white rounded-xl py-md px-lg font-title-lg text-title-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-sm"
        >
          Send Message
          <Icon name="send" className="text-[20px]" />
        </button>
        <p className="text-center font-code-mono text-code-mono text-secondary">
          Opens your email app, addressed to {CONTACT_EMAIL}
        </p>
      </form>
    </div>
  );
}
