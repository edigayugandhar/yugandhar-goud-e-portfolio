import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form?.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form?.querySelector('#lastName')?.value?.trim() || ''
    const email = form?.querySelector('#email')?.value?.trim() || ''
    const message = form?.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      )
      setStatus('success')
      form?.reset()
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      const sendFn = emailjs.sendForm || emailjs.default?.sendForm
      await sendFn(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      form?.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Giant Contact Parallax Word */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-0 w-full pointer-events-none z-0"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap pl-4"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground Red Card */}
      <div
        data-aos="fade-up"
        className="relative z-10 w-full md:w-[85%] lg:w-[75%] ml-auto bg-[#ff2a2a] p-8 md:p-16 text-white rounded-tl-3xl md:rounded-tl-[3rem] shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/90">
            Reach Me
          </span>
          <a
            href={socialLinks.instagram || `mailto:${personalInfo.emails.primary}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#ff2a2a] text-xs md:text-sm font-semibold transition-all duration-300 backdrop-blur-sm shadow-sm"
          >
            <span>DM on Instagram</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          {/* Two Columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Underline-only inputs */}
            <div className="flex flex-col gap-8">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Textarea */}
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Your Message *"
                className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors resize-none min-h-[120px]"
              />
            </div>
          </div>

          {/* Bottom Area */}
          <div className="flex flex-col gap-8 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="permission"
                name="permission"
                required
                defaultChecked
                className="mt-1 h-4 w-4 rounded border-white/40 bg-transparent text-[#ff2a2a] focus:ring-white accent-white cursor-pointer"
              />
              <label
                htmlFor="permission"
                className="text-xs sm:text-sm text-white/90 cursor-pointer select-none leading-relaxed"
              >
                I agree that my submitted information will be used to respond to my inquiry.
              </label>
            </div>

            {/* Note & Urgent Mailto Link & Submit Button */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm text-white/80">
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                <p className="text-xs sm:text-sm text-white/95">
                  Need an urgent response?{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="underline font-semibold text-white hover:text-black transition-colors"
                  >
                    Email me directly at {personalInfo.emails.primary}
                  </a>
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 ${
                    status === 'sending'
                      ? 'bg-white/20 border-2 border-white/40 text-white/70 cursor-not-allowed'
                      : status === 'success'
                      ? 'bg-emerald-600 border-2 border-emerald-400 text-white shadow-lg'
                      : status === 'error'
                      ? 'bg-red-950 border-2 border-red-700 text-red-200'
                      : 'group border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#ff2a2a] shadow-md'
                  }`}
                >
                  {status === 'sending' && (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  )}
                  {status === 'success' && <span>Sent Successfully ✓</span>}
                  {status === 'error' && <span>Failed — Try Again</span>}
                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
