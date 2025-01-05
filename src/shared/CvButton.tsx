

type Props = {
  children: React.ReactNode;
  href?: string; 
  onClick?: () => void;
  className?: string; 

};
const CvButton = ({ children, href, onClick, className = '' }: Props) => {
    const baseClasses ='text-sky-color flex items-center gap-x-2 rounded-lg px-3 py-1 md:text-lg text-sm mr-2 mt-4 cursor-pointer border border-dashed border-sky-color transistion duration-500 ease-in-out hover:bg-darkSky-color hover:border-none hover:text-white bg-transparent hover:border-shadow-2xl';
  
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
  