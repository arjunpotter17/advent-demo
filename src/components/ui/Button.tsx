import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'white';
  onClick?: () => void;
}

const Button = ({ children, href, className = '', variant = 'primary', onClick }: ButtonProps) => {
  const baseStyles = "inline-block px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-sky-500 text-sky-500 dark:border-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/10",
    white: "bg-white text-sky-600 hover:bg-sky-50"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button; 