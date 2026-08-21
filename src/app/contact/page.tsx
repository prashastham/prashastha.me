import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/contact/SocialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Prashastha Mudannayake.",
};

export default function ContactPage() {
  return (
    <div className="pt-[112px] pb-section-desktop px-margin-mobile md:px-margin-desktop w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-[36rem]">
        <div className="text-center mb-section-mobile md:mb-section-desktop">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-md">
            Get in touch
          </h1>
          <p className="font-body-lg text-body-lg text-secondary">
            Have a project in mind or just want to say hello? Fill out the
            form below.
          </p>
        </div>

        <ContactForm />
        <SocialLinks />
      </div>
    </div>
  );
}
