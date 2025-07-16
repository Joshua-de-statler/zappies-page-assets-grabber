import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('audit-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-foreground font-heading">
              Zappies AI
            </span>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToForm}
            variant="cta"
            className="hidden sm:flex"
          >
            🎥 Get Free Audit
          </Button>

          {/* Mobile CTA */}
          <Button
            onClick={scrollToForm}
            variant="cta"
            size="sm"
            className="sm:hidden"
          >
            🎥 Free Audit
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;