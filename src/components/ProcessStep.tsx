import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessStep = ({ step, icon: Icon, title, description }: ProcessStepProps) => {
  return (
    <div className="text-center group">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
          {step}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;