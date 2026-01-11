import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      labelKey: "visitUs",
      value: "Elizabetes iela 22, Riga LV-1050",
      detailKey: "artNouveauDistrict",
    },
    {
      icon: Phone,
      labelKey: "callUs",
      value: "+371 2XXX XXXX",
      detail: "Mon-Sat, 10:00 - 19:00",
    },
    {
      icon: Mail,
      labelKey: "emailUs",
      value: "info@suratdiamondlatvia.com",
      detailKey: "responseTime",
    },
    {
      icon: Clock,
      labelKey: "openingHours",
      value: "Mon-Sat: 10:00 - 19:00",
      detailKey: "privateViewings",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
              {t("beginYourJourney")}
            </h2>
            <p className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
              {t("contactDescription")}
            </p>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                    {t("firstName")}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground font-body transition-colors duration-300"
                    placeholder="Anna"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                    {t("lastName")}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground font-body transition-colors duration-300"
                    placeholder="Liepiņa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  {t("email")}
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground font-body transition-colors duration-300"
                  placeholder="anna@example.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  {t("interest")}
                </label>
                <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground font-body transition-colors duration-300 cursor-pointer">
                  <option value="" className="bg-card">{t("selectInterest")}</option>
                  <option value="engagement" className="bg-card">{t("engagementRings")}</option>
                  <option value="bespoke" className="bg-card">{t("bespokeJewelry")}</option>
                  <option value="collection" className="bg-card">{t("collectionPieces")}</option>
                  <option value="consultation" className="bg-card">{t("privateConsultation")}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  {t("message")}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 sm:py-3 text-sm sm:text-base text-foreground font-body transition-colors duration-300 resize-none"
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              <Button variant="luxury" size="xl" className="w-full sm:w-auto text-sm sm:text-base">
                {t("sendInquiry")}
              </Button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500"
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground font-body mb-1">
                    {t(item.labelKey)}
                  </p>
                  <p className="text-foreground font-body text-sm sm:text-base lg:text-lg">
                    {item.value}
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm font-body">
                    {item.detailKey ? t(item.detailKey) : item.detail}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-6 sm:pt-8 border-t border-border">
              <p className="text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground font-body mb-3 sm:mb-4">
                {t("followJourney")}
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="p-2 sm:p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 sm:p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
