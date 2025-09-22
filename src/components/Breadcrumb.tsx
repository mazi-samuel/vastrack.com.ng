import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <div className={`mb-4 md:mb-6 ${className}`}>
      <nav className="text-xs sm:text-sm text-hero-foreground/70">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.href && !item.isActive ? (
              <Link 
                to={item.href} 
                className="hover:text-hero-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={item.isActive ? "text-primary" : "text-hero-foreground/70"}>
                {item.label}
              </span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;