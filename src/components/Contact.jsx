import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo, emailjsConfig } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please complete all required fields.' })
      return
    }

    setStatus({ state: 'sending', message: 'Sending your message...' })

    // If EmailJS credentials are placeholder defaults, gracefully simulate reception
    if (emailjsConfig.serviceId === 'YOUR_EMAILJS_SERVICE_ID') {
      setTimeout(() => {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully (demo mode).'
        })
        setFormData({ name: '', email: '', message: '' })
      }, 700)
      return
    }

    // Send with configured EmailJS service
    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formData,
        emailjsConfig.publicKey
      )
      .then(() => {
        setStatus({ state: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus({
          state: 'error',
          message: 'Unable to send message right now. Please email directly.'
        })
      })
  }

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] text-white border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff2a2a]">
            Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Have an open role, project inquiry, or just want to discuss software engineering? Let&apos;s connect!
          </p>
        </div>

        {/* Contact Form Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-black/80 rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff2a2a] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff2a2a] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff2a2a] transition-colors resize-none"
              />
            </div>

            {/* Status Feedback */}
            {status.message && (
              <div
                className={`p-3 rounded-lg text-sm font-medium ${
                  status.state === 'success'
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800'
                    : status.state === 'error'
                    ? 'bg-red-950/60 text-[#ff2a2a] border border-red-900'
                    : 'bg-neutral-900 text-neutral-300'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === 'sending'}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ff2a2a] text-white font-semibold hover:bg-[#e02424] transition-colors disabled:opacity-50"
            >
              {status.state === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Details Quick Strip */}
          <div className="mt-8 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
            <div>
              Email:{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="text-white hover:text-[#ff2a2a] transition-colors underline"
              >
                {personalInfo.emails.primary}
              </a>
            </div>
            <div>Phone: {personalInfo.phone}</div>
            <div>{personalInfo.location}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
