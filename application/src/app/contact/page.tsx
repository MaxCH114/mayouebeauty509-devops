import ContactForm from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "MayoueBeauty509 is your destination for beauty, style, and carefully selected products. Shop with confidence and discover products chosen for you.",
};

const ContactPage = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Contact MayoueBeauty509</h1>
        <p className="mt-2 text-muted-foreground">
          We would love to hear from you. Get in touch with the MayoueBeauty509
          team using the information below or the contact form.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="left w-full md:w-2/5">
          <h2 className="text-2xl font-semibold">MayoueBeauty509</h2>

          <div className="mt-6">
            <h4 className="font-semibold mb-1">Location</h4>
            <p className="text-sm text-muted-foreground">Sarasota, USA</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-1">Phone</h4>
            <p className="text-sm text-muted-foreground">
              +1 941 822 4462
            </p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-1">Email Address</h4>
            <p className="text-sm text-muted-foreground">
              mayouechamblain@gmail.com
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Follow</h3>

            <div className="flex flex-wrap gap-3 items-center mt-4">
              <Button
                variant="outline"
                className="rounded-full h-10 w-10 hover:bg-primary hover:text-white p-0"
                asChild
              >
                <a
                  href="https://github.com/MaxCH114"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MayoueBeauty509 GitHub"
                >
                  <FaGithub />
                </a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full h-10 w-10 hover:bg-primary hover:text-white p-0"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/paulmchamblain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Paul Chamblain LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full h-10 w-10 hover:bg-primary hover:text-white p-0"
                asChild
              >
                <a
                  href="https://twitter.com/pmc_509"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MayoueBeauty509 Twitter"
                >
                  <FaTwitter />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="right w-full md:w-3/5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
