import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeMap = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container({ children, className = "", size = "xl" }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeMap[size]} ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
}

const spacingMap = {
  sm: "py-12",
  md: "py-16",
  lg: "py-24",
  xl: "py-32",
};

export function Section({ children, className = "", id, spacing = "lg" }: SectionProps) {
  return (
    <section id={id} className={`${spacingMap[spacing]} ${className}`}>
      {children}
    </section>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className = "" }: PageHeaderProps) {
  return (
    <div className={`pt-32 pb-16 ${className}`}>
      <Container>
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantMap = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-border text-text-primary hover:border-text-muted hover:bg-surface",
  ghost: "text-text-secondary hover:text-text-primary",
};

const sizeButtonMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 ${variantMap[variant]} ${sizeButtonMap[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

const badgeVariantMap = {
  default: "bg-surface-raised text-text-secondary border border-border",
  accent: "bg-accent-subtle text-accent border border-accent/20",
  muted: "bg-surface text-text-muted border border-border-subtle",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${badgeVariantMap[variant]} ${className}`}>
      {children}
    </span>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div className={`bg-surface border border-border rounded-xl ${hover ? "hover:border-text-muted transition-colors duration-200" : ""} ${className}`}>
      {children}
    </div>
  );
}

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

const headingSizeMap = {
  1: "text-4xl md:text-6xl font-bold",
  2: "text-3xl md:text-4xl font-semibold",
  3: "text-2xl md:text-3xl font-semibold",
  4: "text-xl md:text-2xl font-medium",
};

export function Heading({ children, level = 1, className = "" }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
  return (
    <Tag className={`${headingSizeMap[level]} text-text-primary leading-tight tracking-tight ${className}`}>
      {children}
    </Tag>
  );
}

interface TextProps {
  children: ReactNode;
  variant?: "body" | "secondary" | "muted" | "small";
  className?: string;
  as?: "p" | "span" | "div";
}

const textVariantMap = {
  body: "text-base text-text-primary leading-relaxed",
  secondary: "text-base text-text-secondary leading-relaxed",
  muted: "text-sm text-text-muted leading-relaxed",
  small: "text-sm text-text-secondary leading-relaxed",
};

export function Text({ children, variant = "body", className = "", as: Tag = "p" }: TextProps) {
  return (
    <Tag className={`${textVariantMap[variant]} ${className}`}>
      {children}
    </Tag>
  );
}