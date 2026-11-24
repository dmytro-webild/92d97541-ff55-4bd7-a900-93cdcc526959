import { Outlet } from "react-router-dom";
import NavbarSlashLinks from "@/components/navbars/NavbarSlashLinks";
import FooterWordmarkMarquee from "@/components/sections/footer/FooterWordmarkMarquee";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="pill" data-card="default" data-pattern="stripes">
      <header data-webild-section="Header">
        <NavbarSlashLinks
          brand="Harbor Inn"
          navItems={[
            {
              name: "Menu",
              href: "#product"
            },
            {
              name: "About Us",
              href: "#hero"
            },
            {
              name: "Reviews",
              href: "#testimonial"
            },
            {
              name: "FAQ",
              href: "#faq-slash-list"
            },
            {
              name: "Contact",
              href: "#contact-reserve-form"
            }
          ]}
          primaryButton={{
            text: "Visit Us",
            href: "#contact-reserve-form"
          }}
          introDelay={3}
        />
      </header>
      <main className="flex-grow" data-button="pill" data-card="default" data-pattern="stripes">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterWordmarkMarquee
          wordmark="Harbor Inn"
          stickerText="fresh catch daily"
          newsletterTitle="Join Our Seafood Club"
          emailLabel="Email*"
          emailPlaceholder="info@harborinnburlington.com"
          submitText="Join"
          imageSrc="https://storage.googleapis.com/webild/users/user_3MYc6vZLHrdO2bfWioqVFT1Pras/uploaded-1795533020849-2embiexd.png?_wi=1"
          imageAlt="Harbor Inn Seafood Restaurant Sign"
          caption="/Harbor Inn Seafood Restaurant in Burlington"
          columns={[
            {
              title: "Address",
              items: [
                {
                  label: "2408 S Church St, Burlington, NC 27215"
                },
                {
                  label: "Get directions",
                  href: "https://maps.google.com/?q=2408+S+Church+St+Burlington+NC+27215"
                }
              ]
            },
            {
              title: "Hours",
              items: [
                {
                  label: "Opens 11 AM daily"
                },
                {
                  label: "Dine-in & Takeout"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "(336) 228-1995",
                  href: "tel:3362281995"
                },
                {
                  label: "info@harborinnburlington.com",
                  href: "mailto:info@harborinnburlington.com"
                }
              ]
            },
            {
              title: "Socials",
              items: [
                {
                  label: "Facebook",
                  href: "#"
                },
                {
                  label: "Instagram",
                  href: "#"
                },
                {
                  label: "Yelp",
                  href: "#"
                }
              ]
            },
            {
              title: "Explore",
              items: [
                {
                  label: "Seafood Menu",
                  href: "#product"
                },
                {
                  label: "Guest Ratings",
                  href: "#metrics-sticker-band"
                },
                {
                  label: "Testimonials",
                  href: "#testimonial"
                },
                {
                  label: "Location & Hours",
                  href: "#contact-reserve-form"
                }
              ]
            }
          ]}
          copyright="© 2026 Harbor Inn. All rights reserved."
          credit="Made with Webild"
          successText="You are now on our list!"
          ariaLabel="Footer"
        />
      </footer>
    </div>
  );
}
