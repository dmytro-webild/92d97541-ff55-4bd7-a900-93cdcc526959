import HeroWordmarkWindow from "@/components/sections/hero/HeroWordmarkWindow";
import ProductBestsellerTrack from "@/components/sections/product/ProductBestsellerTrack";
import PricingWorkshopTickets from "@/components/sections/pricing/PricingWorkshopTickets";
import MetricsStickerBand from "@/components/sections/metrics/MetricsStickerBand";
import TestimonialVideoCoverflow from "@/components/sections/testimonial/TestimonialVideoCoverflow";
import FaqSlashList from "@/components/sections/faq/FaqSlashList";
import ContactReserveForm from "@/components/sections/contact/ContactReserveForm";
import LoaderPanelFlick from "@/components/loaders/LoaderPanelFlick";

export default function HomePage() {
  return (
    <>
      <LoaderPanelFlick
        images={[
          "https://img.b2bpic.net/free-photo/fish-chips_74190-3677.jpg",
          "https://img.b2bpic.net/free-photo/clay-plate-delicious-shrimps-with-sliced-lemon-onion-stone-surface_114579-57069.jpg",
          "https://img.b2bpic.net/free-photo/close-up-hand-holding-spoon-bread_23-2148847466.jpg",
          "https://img.b2bpic.net/free-photo/fried-shrimp-with-sushi-table_140725-6656.jpg",
          "https://img.b2bpic.net/free-photo/top-view-grilled-shrimp-skewers-with-carrots-tomato-herbs-sauce-stand_141793-14315.jpg"
        ]}
        label="/Frying golden seafood"
        caption="/Fresh chowder daily"
      />

      <div id="hero" data-webild-section="HeroWordmarkWindow" data-webild-section-id="HeroWordmarkWindow-1" data-section="hero" data-scene>
        <HeroWordmarkWindow
          title="Harbor Inn"
          description="Traditional seafood platters and crispy fried fish in Burlington."
          imageSrc="https://img.b2bpic.net/free-photo/fish-chips_74190-3677.jpg"
          imageAlt="plate of fish and chips"
          leftLabel="/Serving Burlington"
          rightLabel="/Scroll down"
          marquee={[
            "Fried seafood platters",
            "Clam chowder daily",
            "Family dining"
          ]}
          introDelay={3}
          handoff
        />
      </div>

      <div id="product" data-webild-section="ProductBestsellerTrack" data-webild-section-id="ProductBestsellerTrack-1" data-section="product" data-scene>
        <ProductBestsellerTrack
          label="/Our Bestsellers"
          title="Traditional seafood favorites from $10 to $20"
          items={[
            {
              name: "Golden Fried Cod",
              price: "$15",
              imageSrc: "https://img.b2bpic.net/free-photo/salmon-meat-fillet-steak_1203-9033.jpg",
              imageAlt: "Salmon meat fillet steak"
            },
            {
              name: "Clam Chowder",
              price: "$12",
              imageSrc: "https://img.b2bpic.net/free-photo/mushroom-soup-with-green-vegetables_1150-18501.jpg",
              imageAlt: "Mushroom soup with green vegetables"
            },
            {
              name: "Fried Shrimp",
              price: "$18",
              imageSrc: "https://img.b2bpic.net/free-photo/herb-fried-chicken-white-plate-wooden-floor_1150-22396.jpg",
              imageAlt: "Herb fried chicken on a white plate on a wooden floor."
            },
            {
              name: "Grilled Shrimp",
              price: "$16",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-grilled-shrimp-skewers-with-carrots-tomato-herbs-sauce-stand_141793-14315.jpg",
              imageAlt: "grilled shrimp on skewers"
            },
            {
              name: "Fish Basket",
              price: "$14",
              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-cajun-basket-with-sauce-chips_181624-45934.jpg",
              imageAlt: "Closeup shot of a Cajun basket with sauce and chips"
            },
            {
              name: "Garlic Shrimp",
              price: "$17",
              imageSrc: "https://img.b2bpic.net/free-photo/shrimp-sauteed-garlic-soy-caramel_2829-19597.jpg",
              imageAlt: "shrimp sauteed in garlic"
            },
            {
              name: "Seafood Platter",
              price: "$20",
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-delicious-seafood-composition_23-2148926787.jpg",
              imageAlt: "composition of fresh seafood"
            }
          ]}
          button={{
            text: "Visit Harbor Inn",
            href: "#contact-reserve-form"
          }}
        />
      </div>

      <div id="pricing-workshop-tickets" data-webild-section="PricingWorkshopTickets" data-webild-section-id="PricingWorkshopTickets-1" data-section="pricing-workshop-tickets">
        <PricingWorkshopTickets
          label="Family Combos"
          title="Seafood Platter Specials"
          description="Generous traditional seafood meals served fresh with classic Southern sides for family dining in Burlington."
          featuredTag="Best Value"
          items={[
            {
              label: "Lunch Special",
              name: "Fried Fish Basket",
              price: "$12",
              period: "per person",
              features: [
                "Golden crispy flounder fillets",
                "Choice of hushpuppies or fries",
                "Fresh homemade coleslaw"
              ],
              cta: {
                text: "View Details",
                href: "#contact-reserve-form"
              }
            },
            {
              label: "House Favorite",
              name: "Captain's Seafood Feast",
              price: "$20",
              period: "per person",
              features: [
                "Jumbo fried shrimp and catfish",
                "Signature clam chowder cup",
                "Double portion of hushpuppies"
              ],
              cta: {
                text: "Visit Us Today",
                href: "#contact-reserve-form"
              },
              featured: true
            },
            {
              label: "Soup Combo",
              name: "Coastal Chowder Meal",
              price: "$14",
              period: "per person",
              features: [
                "Bowl of signature clam chowder",
                "Fresh garden side salad",
                "Warm buttered roll"
              ],
              cta: {
                text: "View Details",
                href: "#contact-reserve-form"
              }
            }
          ]}
        />
      </div>

      <div id="metrics-sticker-band" data-webild-section="MetricsStickerBand" data-webild-section-id="MetricsStickerBand-1" data-section="metrics-sticker-band">
        <MetricsStickerBand
          label="Community trust"
          title="Burlington's Favorite Seafood"
          sticker="made with care"
          plainLabels={false}
          maskReveal
          ariaLabel="Harbor Inn guest statistics and ratings"
          items={[
            {
              value: 4.5,
              suffix: " / 5",
              label: "diner rating average",
              imageSrc: "https://img.b2bpic.net/free-photo/middle-age-friends-having-fun-food-festival_23-2149490830.jpg",
              imageAlt: "Middle age friends having fun at food festival"
            },
            {
              value: "3,701",
              suffix: "+",
              label: "verified local reviews",
              imageSrc: "https://img.b2bpic.net/free-photo/flexitarian-diet-food-composition_23-2148955500.jpg",
              imageAlt: "Flexitarian diet food composition"
            },
            {
              value: 10,
              prefix: "$",
              suffix: " - $20",
              label: "affordable price range",
              imageSrc: "https://img.b2bpic.net/free-photo/woman-eats-fried-shrimps-with-sauce_141793-612.jpg",
              imageAlt: "Woman eats fried shrimps with sauce"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialVideoCoverflow" data-webild-section-id="TestimonialVideoCoverflow-1" data-section="testimonial">
        <TestimonialVideoCoverflow
          label="Guest Reviews"
          title="What families say about dining with us"
          items={[
            {
              name: "Callum Barnes",
              caption: "Burlington resident",
              quote: "The fried flounder platter and clam chowder are consistently fresh. Best family seafood spot in town.",
              imageSrc: "https://img.b2bpic.net/free-photo/young-handsome-man-white-shirt-open-having-breakfast-cafe-with-vegetarian-burger-drinking-coffee-lifestyle-tropical-island-life-bali_1321-3941.jpg"
            },
            {
              name: "Leah Hughes",
              caption: "Regular guest",
              quote: "Generous portions and crispy fried shrimp every time we visit. Our kids love eating dinner here on weekends.",
              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-eating-salad-cafe_1303-25277.jpg"
            },
            {
              name: "Daniel Kelly",
              caption: "Visitor",
              quote: "Stopped by on S Church St after hearing great things. The clam chowder was rich, hot, and packed with flavor.",
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-man-restaurant_23-2148395381.jpg"
            },
            {
              name: "Molly Sullivan",
              caption: "Burlington resident",
              quote: "We have been coming for years. The crispy fish baskets and friendly service keep our whole family coming back.",
              imageSrc: "https://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006716.jpg"
            },
            {
              name: "Kevin Price",
              caption: "Local diner",
              quote: "Great seafood value for $10 to $20 per person. Fast service, welcoming atmosphere, and piping hot hushpuppies.",
              imageSrc: "https://img.b2bpic.net/free-photo/smiley-friends-restaurant-together_23-2148395393.jpg"
            }
          ]}
        />
      </div>

      <div id="faq-slash-list" data-webild-section="FaqSlashList" data-webild-section-id="FaqSlashList-1" data-section="faq-slash-list">
        <FaqSlashList
          label="Good to know"
          title="Before you visit"
          description="Everything you need to know about dining in, ordering takeout, and visiting our Burlington location."
          sticker="fresh daily"
          items={[
            {
              title: "What are your operating hours?",
              description: "We open daily at 11 AM for lunch and dinner at 2408 S Church St in Burlington."
            },
            {
              title: "Do you offer takeout services?",
              description: "Yes, our full menu of fried seafood and chowder is available for takeout pickup."
            },
            {
              title: "Do you offer food delivery?",
              description: "We do not offer direct delivery. We focus entirely on providing great dine-in and takeout service."
            },
            {
              title: "What is the typical price per person?",
              description: "Most meals run between $10 and $20 per guest, offering generous family-friendly portions."
            }
          ]}
        />
      </div>

      <div id="contact-reserve-form" data-webild-section="ContactReserveForm" data-webild-section-id="ContactReserveForm-1" data-section="contact-reserve-form">
        <ContactReserveForm
          label="Visit Us"
          title="Reserve your table"
          description="Request a table for family dining or call (336) 228-1995 for orders and questions."
          submitText="Request table"
          successText="Thank you, we will confirm your table shortly."
          details={[
            "2408 S Church St, Burlington, NC 27215",
            "Open daily from 11 AM"
          ]}
          imageAlt="Family dining together at a restaurant table"
          stickerText="family dining"
          labels={{
            name: "Name",
            email: "Email",
            date: "Date",
            guests: "Guests",
            note: "Note"
          }}
        />
      </div>
    </>
  );
}
