import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer className="p-4 bg-slate-950 border-t border-slate-800 md:px-6 md:py-8 text-slate-400">
            <div className="container mx-auto">
                <div>
                    <a href="#top" className="flex justify-center items-center mt-2">
                        <KeyboardDoubleArrowUpIcon className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" />
                    </a>
                    <p className="text-xs tracking-[0.25em] uppercase flex justify-center items-center m-4 text-slate-500">
                        BACK TO TOP
                    </p>
                </div>
                <div className='flex justify-center items-center '>
                    <div className="flex space-x-4 flex-col items-center mb-4 mr-3">
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="text-slate-400 hover:text-slate-100 transition-colors" />
                        </a>
                    </div>
                    <div className="flex space-x-4 flex-col items-center mb-4 mr-3">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="text-slate-400 hover:text-slate-100 transition-colors" />
                        </a>
                    </div>
                    <div className="flex space-x-4 flex-col items-center mb-4 mr-3">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="text-slate-400 hover:text-slate-100 transition-colors" />
                        </a>
                    </div>
                    <div className="flex space-x-4 flex-col items-center mb-4 mr-3">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="text-slate-400 hover:text-slate-100 transition-colors" />
                        </a>
                    </div>
                </div>


                <div className="flex flex-col items-center">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} Sujit — All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}