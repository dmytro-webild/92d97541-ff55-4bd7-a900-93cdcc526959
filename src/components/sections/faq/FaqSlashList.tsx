import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import SnellenbergWordRise from "@/components/kit/SnellenbergWordRise";
import ToastedSticker from "@/components/kit/ToastedSticker";
import { useKitMotion } from "@/components/kit/kitMotion";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Faq = { title: string; description: string };

type FaqSlashListProps = {
  label?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  sticker?: string;
  items?: Faq[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: Faq[] = [
  { title: "Do you take reservations?", description: "We hold tables for groups of six or more. Smaller groups walk in, the wait is rarely long." },
  { title: "Is brunch served all day?", description: "Yes. Pancakes, eggs and toast run from open to close, burgers join from 11." },
  { title: "Do you have vegan options?", description: "Every section of the menu has one, including a plant patty on a toasted vegan bun." },
  { title: "How do workshops work?", description: "Book a seat online, show up hungry, and leave with recipes and a full belly." },
];

const FaqSlashList = ({
  label = "/Good to know",
  title = "Questions we hear at the counter",
  description = "Still curious? Ask us anything at the counter or drop us a line.",
  imageSrc = "https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=800",
  imageAlt = "",
  sticker = "ask away",
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: FaqSlashListProps) => {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const kit = useKitMotion();

  return (
    <section aria-label={ariaLabel ?? title ?? "Frequently asked questions"} className={cn("relative bg-background py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto grid w-[var(--container)] gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start">
        <div className="flex flex-col items-start gap-[clamp(0.75rem,1.4vw,1.25rem)] lg:sticky lg:top-[clamp(5rem,12svh,8rem)]">
          {label && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: kit.base, ease: kit.ease }}
              className="font-mono text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-foreground"
            >
              {label}
            </motion.p>
          )}
          {title && (
            <SnellenbergWordRise
              tag="h2"
              text={title}
              className="max-w-[14em] text-balance text-[length:var(--text-h1)] leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] text-foreground [font-family:var(--font-heading)] [font-weight:var(--heading-weight)]"
            />
          )}
          {description && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: kit.base, ease: kit.ease, delay: 0.1 }}
              className="max-w-[28em] text-[length:var(--text-body)] leading-[1.5] text-muted-foreground"
            >
              {description}
            </motion.p>
          )}
          {imageSrc && (
            <div className="relative mt-[clamp(1rem,2.4vw,2rem)] w-[min(calc(100%-2.5rem),17rem)]">
              <ImageScrollParallax imageSrc={imageSrc} imageAlt={imageAlt} strength={0.2} className="aspect-square rounded-[var(--radius-image)]" />
              {sticker && <ToastedSticker text={sticker} glyph="smile" delay={0.2} className="absolute -right-10 top-6 size-20 lg:-right-12 lg:size-24" />}
            </div>
          )}
        </div>
        <ul className="border-b border-border">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <motion.li
                key={index}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: kit.base, ease: kit.ease, delay: Math.min(index, 6) * 0.06 }}
                className="border-t border-border"
              >
                <h3 className="text-[length:var(--text-h3)] leading-[1.2] tracking-[var(--heading-tracking)] text-foreground [font-family:var(--font-heading)] [font-weight:var(--heading-weight)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="group flex w-full cursor-pointer items-start justify-between gap-[clamp(1rem,3vw,2rem)] py-[clamp(1.25rem,2vw,1.75rem)] text-left [overflow-wrap:anywhere]"
                >
                  {item.title}
                  <motion.div
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={reduce ? { duration: 0 } : { duration: kit.fast, ease: kit.ease }}
                    className={cn("relative mt-[0.1em] grid size-9 shrink-0 place-items-center rounded-full border transition-colors duration-[var(--dur-fast)]", isOpen ? "border-foreground bg-foreground text-background" : "border-border text-foreground group-hover:border-foreground")}
                  >
                    <div className="absolute h-px w-3.5 bg-current" />
                    <div className="absolute h-3.5 w-px bg-current" />
                  </motion.div>
                </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: kit.fast * 1.4, ease: kit.ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[36em] pb-[clamp(1.25rem,2vw,1.75rem)] pr-[clamp(1rem,6vw,3.5rem)] text-[length:var(--text-body)] leading-[1.6] text-muted-foreground">{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FaqSlashList;
