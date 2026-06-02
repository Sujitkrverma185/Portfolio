import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="p-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-colors duration-300 md:px-6 md:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <a href="#top" className="flex flex-col items-center group cursor-pointer" aria-label="Back to top">
            <KeyboardDoubleArrowUpIcon className="text-slate-400 group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-400 transition-all group-hover:-translate-y-1 duration-300" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase mt-2 text-slate-400 dark:text-slate-500 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
              BACK TO TOP
            </span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 mt-8 mb-6">
          <a
            href="https://github.com/sujitkrverma185"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sujit-kumar-verma-91787032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors"
            title="Facebook"
          >
            <FacebookIcon />
          </a>
        </div>

        <div className="flex flex-col items-center border-t border-slate-100 dark:border-slate-900 pt-6">
          <p className="text-[0.7rem] md:text-xs text-slate-400 dark:text-slate-500 tracking-wider">
            &copy; {new Date().getFullYear()} Sujit — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}