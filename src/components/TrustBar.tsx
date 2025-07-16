import { Star } from "lucide-react";

const TrustBar = () => {
  const logos = [
    "Shopify", "Meta", "Zapier", "ClickFunnels", "HubSpot", "Stripe"
  ];

  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-background border-y border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-muted-foreground text-sm font-medium">
              Rated 5/5 by 1200+ growing brands
            </span>
          </div>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-left gap-12 whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 flex-shrink-0"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            98% customer retention
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;