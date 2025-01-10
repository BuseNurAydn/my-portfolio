

type Props = {
  children: React.ReactNode;
  href?: string; 
  onClick?: () => void;
  className?: string; 

};
const CvButton = ({ children, href, onClick, className = '' }: Props) => {
    const baseClasses ='text-darkSky-color flex items-center gap-x-2 rounded-lg px-3 py-1 md:text-lg text-sm mr-2 mt-4 cursor-pointer transistion duration-700 ease-out hover:bg-sky-color border border-darkSky-color hover:border-none hover:text-white bg-transparent hover:border-shadow-2xl tracking-wide';
  
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
  