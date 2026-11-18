import { useState } from 'react';
import { Github, Linkedin, Mail, SendDiagonal, MapPin } from 'iconoir-react';

type SectionProps = { isDark: boolean };

const mono = { fontFamily: "'Cascadia Mono', 'Cascadia Code', Consolas, monospace" };

const contacts = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'fthrn.s14@gmail.com',
    href: 'mailto:fthrn.s14@gmail.com',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/ReiSaputra',
    href: 'https://github.com/ReiSaputra',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'muhammad-fathurraihan-saputra',
    href: 'https://www.linkedin.com/in/muhammad-fathurraihan-saputra-9b7a04298/',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Indonesia',
    href: null,
  },
];

export default function ContactSection({ isDark }: SectionProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, message } = form;
    const mailto = `mailto:fthrn.s14@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
  }

  const inputBase = `w-full px-4 py-3 rounded-md text-sm outline-none border transition-colors duration-200`;
  const inputDark = `bg-[#0c1a0f] border-[#1e3a22] text-[#d4d4d4] placeholder-[#3a5a3a] focus:border-[#89d185]`;
  const inputLight = `bg-white border-[#c8dcc8] text-[#1e3a1e] placeholder-[#aaccaa] focus:border-[#2d6a35]`;

  const cardClass = `flex items-center gap-4 p-4 rounded-lg border transition-colors duration-200 ${
    isDark
      ? 'bg-[#0f1c10] border-[#1e3a22] hover:border-[#89d185]'
      : 'bg-white border-[#c8dcc8] hover:border-[#2d6a35]'
  }`;

  return (
    <section
      id="contact"
      className="px-6 md:px-24 py-16 min-h-[calc(100vh-57px)] flex flex-col justify-center"
      style={mono}
    >
      {/* Label */}
      <p className={`text-xs md:text-sm font-medium tracking-widest uppercase mb-3 ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
        Get in Touch
      </p>

      {/* Title */}
      <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-[#d4d4d4]' : 'text-[#1e3a1e]'}`}>
        <span className={isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}>Contact</span>
      </h1>

      {/* Divider */}
      <div className={`w-16 h-0.5 mb-8 md:mb-10 rounded-full ${isDark ? 'bg-[#d4d4d4]' : 'bg-[#2d6a35]'}`} />

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

        {/* Left — info */}
        <div className="flex flex-col gap-8">
          <p className={`text-base leading-relaxed ${isDark ? 'text-[#d4d4d4]' : 'text-[#4a6b4a]'}`}>
            Have a question, project, or want to collaborate? Feel free to reach out.
            I'm open to new opportunities and interesting discussions.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col gap-3">
            {contacts.map(({ icon, label, value, href }) => {
              const inner = (
                <>
                  <span className={isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}>{icon}</span>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-xs mb-0.5 ${isDark ? 'text-[#4a7a52]' : 'text-[#7aaa7a]'}`}>
                      {label}
                    </span>
                    <span className={`text-sm truncate ${isDark ? 'text-[#d4d4d4]' : 'text-[#1e3a1e]'}`}>
                      {value}
                    </span>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — form */}
        <div className={`rounded-lg border p-6 ${isDark ? 'bg-[#0f1c10] border-[#1e3a22]' : 'bg-white border-[#c8dcc8]'}`}>
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
              <SendDiagonal className={`w-10 h-10 ${isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}`} />
              <p className={`text-lg font-semibold ${isDark ? 'text-[#89d185]' : 'text-[#2d6a35]'}`}>
                Message sent!
              </p>
              <p className={`text-sm ${isDark ? 'text-[#6a9e72]' : 'text-[#4a6b4a]'}`}>
                Your email client will open a draft. Thanks for reaching out.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                className={`mt-2 text-xs px-4 py-2 rounded-md border transition-colors duration-200
                  ${isDark
                    ? 'border-[#1e3a22] text-[#6a9e72] hover:border-[#89d185] hover:text-[#89d185]'
                    : 'border-[#c8dcc8] text-[#4a6b4a] hover:border-[#2d6a35] hover:text-[#2d6a35]'}
                `}
              >
                Send again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className={`block text-xs mb-1.5 ${isDark ? 'text-[#6a9e72]' : 'text-[#4a6b4a]'}`}>
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name..."
                  className={`${inputBase} ${isDark ? inputDark : inputLight}`}
                />
              </div>

              <div>
                <label className={`block text-xs mb-1.5 ${isDark ? 'text-[#6a9e72]' : 'text-[#4a6b4a]'}`}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className={`${inputBase} ${isDark ? inputDark : inputLight}`}
                />
              </div>

              <div>
                <label className={`block text-xs mb-1.5 ${isDark ? 'text-[#6a9e72]' : 'text-[#4a6b4a]'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi, I'd like to..."
                  className={`${inputBase} ${isDark ? inputDark : inputLight} resize-none`}
                />
              </div>

              <button
                type="submit"
                className={`
                  flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-md text-sm font-semibold
                  transition-colors duration-200
                  ${isDark
                    ? 'bg-[#89d185] text-[#0c1a0f] hover:bg-[#d4d4d4]'
                    : 'bg-[#2d6a35] text-white hover:bg-[#1e3a1e]'}
                `}
              >
                <SendDiagonal className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
