import type React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  textColor: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;

  return (
    <div
      className={`
      ${service.bgColor} ${service.textColor}
      rounded-3xl p-8 min-w-[300px] 
      shadow-lg hover:shadow-xl transition-all duration-300
      hover:scale-105 cursor-pointer relative
    `}
    >
      <div className="absolute top-8 right-8">
        <IconComponent className="w-12 h-12 opacity-90" />
      </div>

      <div className="pr-16">
        <h3 className="text-2xl font-bold mb-4 leading-tight">
          {service.title}
        </h3>

        <p className="text-sm opacity-90 leading-relaxed mb-8">
          {service.description}
        </p>
      </div>

      <div className="absolute bottom-8 left-8">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-75">
          ATOM
        </span>
      </div>
    </div>
  );
}
