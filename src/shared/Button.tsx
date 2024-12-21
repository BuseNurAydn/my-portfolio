
import React from 'react';

type Props = {
  children: React.ReactNode;
  href?: string; 
  onClick?: () => void;
  className?: string; 
};

const Button = ({ children, href, onClick, className = '' }: Props) => {
  const baseClasses ='text-teal-600 rounded-full p-3 text-xl border border-teal-600  mr-2 mt-4 cursor-pointer transition-colors duration-200 hover:bg-cyan-900 hover:text-white hover:border-none bg-transparent hover:border-shadow-2xl transition-transform transform hover:scale-125 hover:-translate-y-1';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
