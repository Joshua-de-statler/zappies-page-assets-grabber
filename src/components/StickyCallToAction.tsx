import { useState, useEffect, ReactNode } from "react";

interface StickyCallToActionProps {
  children: ReactNode;
}

const StickyCallToAction = ({ children }: StickyCallToActionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
      {children}
    </div>
  );
};

export default StickyCallToAction;