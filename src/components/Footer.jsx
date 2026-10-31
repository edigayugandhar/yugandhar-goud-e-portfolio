import { academy, personalInfo, navLinks, socialLinks, footerContent } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a]" />
            <span className="font-bold text-lg">{personalInfo.brandName}</span>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#ff2a2a] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-sm text-neutral-400">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Taglines Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-4 text-xs text-neutral-400 border-b border-neutral-900/60">
          {footerContent.taglines.map((tagline, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span>{tagline}</span>
              {idx < footerContent.taglines.length - 1 && (
                <span className="text-neutral-700">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Bottom Bar & Mandatory TAP Academy Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-neutral-500">
          <div>{footerContent.copyright}</div>

          {/* TAP Academy Visible Credit */}
          <div className="flex items-center gap-2">
            <span>Trained at</span>
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-300 hover:text-[#ff2a2a] transition-colors underline decoration-neutral-700 underline-offset-4 hover:decoration-[#ff2a2a]"
            >
              {academy.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
