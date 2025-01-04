

type Props = {
  children: React.ReactNode;
  href?: string; 
  onClick?: () => void;
  className?: string; 

};
const CvButton = ({ children, href, onClick, className = '' }: Props) => {
    const baseClasses ='text-white rounded bg-teal-600 px-6 py-2 md:text-xl text-sm mr-2 mt-4 cursor-pointer transistion duration-500 ease-in-out hover:bg-teal-700 hover:text-white bg-transparent hover:border-shadow-2xl transition-transform transform hover:scale-110 hover:-translate-y-1 ';
  
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
  
  export default CvButton;
  