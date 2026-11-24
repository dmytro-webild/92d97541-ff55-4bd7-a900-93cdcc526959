import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import NickhoOdometer from "@/components/kit/NickhoOdometer";
import SnellenbergWordRise from "@/components/kit/SnellenbergWordRise";
import ToastedSticker from "@/components/kit/ToastedSticker";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import MaskRevealImage from "@/components/kit/MaskRevealImage";
import { useKitMotion } from "@/components/kit/kitMotion";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Metric = { value: number | string; prefix?: string; suffix?: string; label: string; imageSrc: string; imageAlt?: string };

type MetricsStickerBandProps = {
  label?: string;
  title?: string;
  items?: Metric[];
  sticker?: string;
  plainLabels?: boolean;
  maskReveal?: boolean;
  ariaLabel?: string;
  className?: string;
};

const px = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const DEFAULT_ITEMS: Metric[] = [
  { value: "1.2k", label: "buns a week", imageSrc: px(1639557) },
  { value: 12, label: "years toasting", imageSrc: px(1813466) },
  { value: 4.9, label: "average rating", imageSrc: px(3171837) },
  { value: 30, label: "workshops a year", imageSrc: px(18999381) },
];

const MetricItem = ({ item, index, sticker, plainLabels, maskReveal }: { item: Metric; index: number; sticker?: string; plainLabels?: boolean; maskReveal?: boolean }) => {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const play = useInView(ref, { once: true, amount: 0.4 });
  const wide = index % 2 === 0;

  return (
    <li
      ref={ref}
      className={cn(
        "relative grid min-w-0 grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-end gap-4 lg:flex lg:flex-col lg:items-stretch lg:gap-[clamp(0.75rem,1.2vw,1rem)]",
        !wide && "lg:mt-[clamp(2rem,4vw,4rem)]",
      )}
    >
      {maskReveal ? (
        <MaskRevealImage
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt ?? item.label}
          strength={0.12}
          className={cn("aspect-[4/3]", wide ? "lg:aspect-[3/2]" : "lg:aspect-[4/3]")}
        />
      ) : (
        <ImageScrollParallax
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt ?? item.label}
          strength={0.12}
          className={cn("aspect-[4/3] rounded-[var(--radius-image)]", wide ? "lg:aspect-[3/2]" : "lg:aspect-[4/3]")}
        />
      )}
      {sticker && (
        <ToastedSticker text={sticker} glyph="star" delay={0.4} className="absolute right-[-0.75rem] top-[-2rem] hidden size-20 lg:block" />
      )}
      <div className="flex min-w-0 flex-col gap-2 border-t border-foreground/20 pt-[clamp(0.5rem,1vw,0.875rem)] [container-type:inline-size]">
        <NickhoOdometer
          value={item.value}
          prefix={item.prefix}
          suffix={item.suffix}
          play={play}
          duration={1.2}
          delay={0.15}
          className="text-[length:min(var(--text-display),30cqi)] leading-[1] tracking-[var(--heading-tracking)] text-foreground [font-family:var(--font-heading)]"
        />
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={play || reduce ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: kit.base, ease: kit.ease, delay: 0.35 }}
          className={cn("font-mono text-[length:var(--text-label)] tracking-[var(--label-tracking)] text-foreground/80 [overflow-wrap:anywhere]", !plainLabels && "uppercase before:content-['/']")}
        >
          {item.label}
        </motion.p>
      </div>
    </li>
  );
};

const MetricsStickerBand = ({
  label = "By the numbers",
  title = "Small corner, big appetite",
  items = DEFAULT_ITEMS,
  sticker = "made with care",
  plainLabels,
  maskReveal,
  ariaLabel,
  className,
}: MetricsStickerBandProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const single = items.length === 1;

  return (
    <section aria-label={ariaLabel ?? title ?? "Key figures"} className={cn("relative overflow-x-clip bg-background py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto w-[var(--container)]">
        {(label || title) && (
          <div className="mx-auto mb-[clamp(2rem,4vw,3.5rem)] flex max-w-[40rem] flex-col items-center gap-[clamp(0.75rem,1.4vw,1.25rem)] text-center">
            {label && (
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: kit.base, ease: kit.ease }}
                className={cn("font-mono text-[length:var(--text-label)] tracking-[var(--label-tracking)]", plainLabels ? "text-muted-foreground" : "uppercase before:content-['/']")}
              >
                {plainLabels || !label.startsWith("/") ? label : label.slice(1)}
              </motion.p>
            )}
            {title && (
              <SnellenbergWordRise
                tag="h2"
                text={title}
                className="max-w-[14em] text-balance text-[length:var(--text-h1)] leading-[var(--heading-leading)] tracking-[var(--heading-tracking)] [font-family:var(--font-heading)] [font-weight:var(--heading-weight)] [overflow-wrap:anywhere]"
              />
            )}
          </div>
        )}
        <ul
          className={cn(
            "grid grid-cols-1 gap-6 lg:items-start lg:gap-x-[clamp(1.25rem,2.5vw,2.5rem)] lg:gap-y-[clamp(2rem,3.5vw,3rem)]",
            single && "lg:mx-auto lg:max-w-[28rem]",
            items.length === 2 && "lg:grid-cols-2",
            items.length === 4 && "lg:grid-cols-2 xl:grid-cols-4",
            (items.length === 3 || items.length > 4) && "lg:grid-cols-3",
          )}
        >
          {items.map((item, index) => (
            <MetricItem key={index} item={item} index={single ? 0 : index} sticker={index === 0 ? sticker : undefined} plainLabels={plainLabels} maskReveal={maskReveal} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MetricsStickerBand;
