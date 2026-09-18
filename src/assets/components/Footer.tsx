import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-[10px] font-bold text-white">
                DS
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                Dev<span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            
            <div className="mt-6 flex gap-5">
              <a
                href="#"
                className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

    
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-pink-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-pink-500"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-pink-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-pink-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-pink-500"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-pink-500"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="my-12 border-t border-slate-100" />

        
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-slate-400 transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-slate-400 transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;