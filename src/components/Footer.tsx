import Button from '../shared/Button'
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

type Props = {}

const Footer = (props: Props) => {

  return (
    <footer className="bg-darkCyan-color dark:bg-gray-800 md:text-lg text-sm py-4">
      <div className="flex justify-center gap-6 mb-4">
        <Button href="https://www.linkedin.com/in/buse-nur-ayd%C4%B1n-a18967227/"><FaLinkedin /></Button>
        <Button href="https://github.com/BuseNurAydn"><FaGithub /></Button>
        <Button href="mailto:busenuraydin521@gmail.com"><SiGmail /></Button>
      </div>
      {/* Copyright Section */}
      <div className="text-center text-sm text-black-color">
        &copy; {new Date().getFullYear()} by Buse Nur Aydın.
      </div>
    </footer>
  );
};
export default Footer;
