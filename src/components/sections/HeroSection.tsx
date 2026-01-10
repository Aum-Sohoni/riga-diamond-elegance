import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import collectionBracelet from "@/assets/collection-bracelet.jpg";
import collectionRing from "@/assets/collection-ring.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionNecklace from "@/assets/collection-necklace.jpg";

const productImages = [
  { src: collectionBracelet, alt: "Diamond bracelets" },
  { src: collectionRing, alt: "Diamond rings" },
  { src: collectionEarrings, alt: "Diamond earrings" },
  { src: collectionNecklace, alt: "Diamond necklaces" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background pt-24 pb-16 overflow-hidden">
      {/* Large Typography */}
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[clamp(3rem,12vw,10rem)] text-foreground text-center leading-none tracking-tight mb-8"
        >
          <span className="text-muted-foreground/60">(</span>
          <span className="tracking-[0.1em]">DIAMONDS</span>
          <span className="text-muted-foreground/60">)</span>
        </motion.h1>

        {/* Product Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-8 md:-mt-16"
        >
          {productImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative aspect-square bg-secondary/30 overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 md:mt-24 max-w-xl mx-auto"
        >
          <h2 className="font-display text-2xl md:text-3xl italic text-foreground mb-4">
            Discover our latest jewelry
          </h2>
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
            creations crafted with love and attention to detail. Our features exquisite pieces adorned with sparkling diamonds, adding luxury and elegance to your ensemble.
          </p>
          <motion.a
            href="#collections"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-body text-sm tracking-wide group"
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <span>Go To Catalog</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
