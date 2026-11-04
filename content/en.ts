import type { Dictionary } from "./tr";

export const en: Dictionary = {
  nav: {
    features: "Features",
    internship: "Internship Management",
    privacy: "Privacy",
    roadmap: "Roadmap",
    collaboration: "Collaboration",
    about: "About",
    earlyAccess: "Early Access"
  },
  hero: {
    badge: "Privacy-focused work & internship management",
    title: "From internship to career, your entire process in one place.",
    description: "Track work days, write daily logs, store documents securely, and convert your internship diary to PDF with a single tap.",
    subtitle: "Your data stays on your device. İşYolum organizes your work life, leaving you in control.",
    ctaPrimary: "Join Early Access",
    ctaSecondary: "Explore Features",
    collaborationLink: "Support & Collaboration",
    briefing: {
      kicker: "SYS_BRIEFING",
      title: "On-device architecture, word by word.",
      note: "No vanity metrics. This briefing states İşYolum’s current privacy model.",
      lead: "İşYolum keeps logs, documents, and work-day records primarily on the device.",
      continuation: "OCR and search run on-device. Encrypted backup is not available yet.",
      sourcesLabel: "local layers",
      followUpsLabel: "Follow-ups",
      copy: "Copy",
      copied: "Copied",
      retry: "Replay",
      useful: "Useful",
      notUseful: "Not useful",
      sources: [
        { name: "SQLCipher", domain: "LOCAL_DB", href: "#privacy" },
        { name: "OCR", domain: "DEVICE_ONLY", href: "#features" },
        { name: "Work Vault", domain: "APP_VAULT", href: "#privacy" }
      ],
      followUps: [
        { text: "Where is data stored?", href: "#privacy" },
        { text: "Which features are ready?", href: "#features" }
      ]
    }
  },
  problem: {
    title: "Why is managing internships and work so messy?",
    cards: [
      { title: "Scattered Work Days", description: "Work days and calendar entries are kept in different places." },
      { title: "Delayed Logs", description: "Internship logs are left to the last day and tasks are forgotten." },
      { title: "Lost Documents", description: "Important paperwork gets lost inside various applications." },
      { title: "Wrong Calculations", description: "Public holidays, leaves, and internship end dates get mixed up." },
      { title: "Time-Consuming PDFs", description: "Preparing an internship diary in the correct format takes hours." },
      { title: "Forgotten Tasks", description: "Reminders and to-dos are disconnected from the work context." }
    ],
    footer: "İşYolum unifies all these disconnected processes into a single personal workspace."
  },
  features: {
    title: "Everything Under Control",
    cards: [
      { title: "Smart Internship Tracking", description: "Set start dates and target work days. Auto-calculate end dates by excluding holidays." },
      { title: "Daily Logs & Records", description: "Keep a daily log. Instantly see 'What did you do on day 9 of your internship?'" },
      { title: "Work Vault", description: "Securely store PDFs, Words, and photos on your device, grouped by periods." },
      { title: "PDF Internship Diary", description: "Sort logs chronologically and convert them into a professional A4 diary with one tap." },
      { title: "On-Device OCR", description: "Scan text from visual documents locally. Copy text without sending data to the cloud." },
      { title: "Global Search", description: "Quickly search across logs, documents, and OCR contents with full character support." },
      { title: "Complete Today", description: "Instantly see and complete daily missing tasks with the smart checklist on the home screen." },
      { title: "Weekly Summary", description: "Analyze weekly working hours, written logs, and goals at a single glance." },
      { title: "Local Reminders", description: "Never miss important moments with on-device notifications that work even when the app is closed." },
      { title: "Biometric Lock", description: "Secure the app with Face ID or Fingerprint, keeping your private data for your eyes only." }
    ]
  },
  privacy: {
    title: "Your data stays with you.",
    description: "İşYolum is developed with a local-first architecture. Your logs, documents, and work records are primarily stored on your own device. Document OCR and search features work completely on-device.",
    items: [
      "Encrypted local database (SQLCipher)",
      "App-specific secure file storage",
      "On-device Machine Learning OCR",
      "On-device full-text search",
      "Biometric app lock",
      "User control-first design"
    ],
    note: "Note: Secure encrypted backup feature is currently under research. Local data may be deleted if the app is uninstalled."
  },
  collaboration: {
    title: "Let's grow İşYolum together.",
    description: "İşYolum is a pre-release mobile product aimed at helping students and young professionals manage their internship and work experiences more systematically. We are open to technical mentoring, testing infrastructure, security consulting, startup programs, and pilot collaborations.",
    cards: [
      "Technical Mentorship",
      "Cloud & CI/CD Credits",
      "Security Audits",
      "University Pilots",
      "Internship Program Collabs",
      "User Testing",
      "Accessibility Support",
      "Go-to-Market Support"
    ],
    ctaPrimary: "Contact for Collaboration",
    ctaSecondary: "View Project Summary"
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { q: "Is İşYolum a job search app?", a: "No. İşYolum does not offer job postings. It helps users organize their internships, work periods, logs, documents, and reminders." },
      { q: "Where is my data stored?", a: "App data is primarily stored in the app-specific storage space on the user's own phone." },
      { q: "Is an internet connection required?", a: "The core features of the app are designed to work on-device. It does not require a constant internet connection." },
      { q: "Are document texts sent to a server?", a: "No. For supported visual documents, the OCR process is performed entirely on your device." },
      { q: "What happens to my data if the app is deleted?", a: "Local data in the app's specific storage may be deleted. A secure encrypted backup system is on the roadmap." },
      { q: "What is the file upload limit?", a: "The current beta version has a 20 MB limit per file. Smart visual compression is planned for the future." },
      { q: "Can I generate a PDF internship diary?", a: "Yes. Internship logs and work records can be converted into a professional PDF diary in A4 format." },
      { q: "Which platforms will İşYolum be available on?", a: "It is being prepared for Android initially. iOS support is among the future plans." },
      { q: "Can I download the app right now?", a: "The app is in the pre-release beta and real-device testing phase. You can sign up for the early access list to follow the process." }
    ]
  },
  founder: {
    text: "İşYolum emerged from a real need born out of keeping internship logs, documents, and work day calculations in different places. My goal is to enable students and those new to the working world to manage these processes in a more organized and secure way."
  },
  form: {
    title: "Join Early Access",
    description: "Be the first to know about updates and join the closed beta tests.",
    name: "Your Name (Optional)",
    email: "Email Address",
    type: "User Type",
    types: {
      student: "Student",
      intern: "Intern",
      jobseeker: "Job Seeker",
      worker: "Worker",
      freelancer: "Freelancer",
      university: "University / Company",
      supporter: "Support Program"
    },
    message: "Your Message (Optional)",
    consent: "I agree to the processing of my data for communication purposes.",
    submit: "Submit",
    success: "Your application has been submitted.",
    submitting: "Submitting...",
    inactive: "The early access form is not active yet.",
    error: "Submission failed.",
    tryAgain: "Please try again.",
    privacyRequired: "Privacy consent is required."
  },
  footer: {
    description: "Your work life, organized and under your control.",
    rights: "All rights reserved."
  }
};
