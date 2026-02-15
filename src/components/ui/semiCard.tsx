import type React from "react"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  description,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-gray-50
        rounded-2xl
        p-6
        shadow-[0_4px_12px_rgba(0,0,0,0.06)]
        max-w-xs
        ${className}
      `}
    >
      <Icon className="w-6 h-6 text-amber-500 mb-4" />

      <p className="text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
