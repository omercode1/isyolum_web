import type { Dictionary } from "./tr";

export const en: Dictionary = {
  nav: {
    features: "Features",
    internship: "Work & internship",
    privacy: "Privacy",
    roadmap: "How it works",
    collaboration: "Who it’s for",
    about: "From the founder",
    earlyAccess: "Early Access · Download APK",
    languageSwitch: "Switch language to Turkish",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  },
  hero: {
    badge: "EARLY ACCESS FOR İŞYOLUM HAS STARTED",
    title: "Keep workdays, hours, and career history in one place.",
    description: "İşYolum is now in Early Access! Download the latest Android APK directly to track workdays and hours, and organize your daily logs, applications, documents, and career memory.",
    subtitle: "İşYolum brings scattered work-life records into one personal, device-first space.",
    ctaPrimary: "Download Early Access APK",
    ctaSecondary: "See how it works",
    collaborationLink: "Testing and partnerships",
    briefing: {
      kicker: "CLEAR BY DESIGN",
      title: "Know where your data lives.",
      note: "We explain how İşYolum works, which data stays on your device, and what technical data may be sent when OCR is used.",
      lead: "Daily logs, work records, applications, and settings are kept in the encrypted database on your device.",
      continuation: "Added files stay in the app's private storage. Android OCR does not send document text; technical usage metrics may be sent to Google.",
      sourcesLabel: "sources",
      followUpsLabel: "Learn more",
      copy: "Copy text",
      copied: "Copied",
      retry: "Show again",
      useful: "Helpful",
      notUseful: "Not helpful",
      usefulSelected: "Marked as helpful",
      notUsefulSelected: "Marked as not helpful",
      feedbackThanks: "Your feedback stays on this page.",
      copyFailed: "Copy failed",
      sources: [
        { name: "On-device storage", domain: "RECORDS", href: "#privacy" },
        { name: "Document scanning", domain: "OCR", href: "#privacy" },
        { name: "İşYolum", domain: "FEATURES", href: "#features" }
      ],
      followUps: [
        { text: "How is data stored?", href: "#privacy" },
        { text: "What can the app do?", href: "#features" }
      ]
    }
  },
  problem: {
    title: "Why keep work and internship records in separate places?",
    cards: [
      { title: "Hard to estimate what remains", description: "When workday and hour targets are calculated separately, it is harder to see when a period may end." },
      { title: "Daily logs pile up", description: "Without a short note at the end of the day, details about your work can be easy to forget." },
      { title: "Applications get mixed up", description: "It is difficult to see where you applied, when you applied, and what to do next." },
      { title: "Career history is scattered", description: "Projects, new skills, achievements, and documents end up across different apps." },
      { title: "Documents are hard to find", description: "CVs, certificates, and work documents may not be easy to find when you need them." },
      { title: "The final hand-in becomes a rush", description: "Collecting daily logs at the end of a period makes an internship journal harder to prepare." }
    ],
    footer: "İşYolum brings your calendar, work time, notes, and career records into one personal workspace."
  },
  features: {
    title: "From your workday to your career history",
    cards: [
      { title: "Workday and period calendar", description: "Set up an internship or work period. Track its schedule, target workdays, and estimated end date." },
      { title: "Work hours and time remaining", description: "Record daily hours, see progress toward your total target, and check how much time remains." },
      { title: "Daily logs and weekly summary", description: "Write down what you did and review completion status and your progress for the week." },
      { title: "Career history", description: "Keep work experience, projects, tasks, skills, certificates, and achievements on a timeline." },
      { title: "Application tracking", description: "Record job and internship applications by status; track interviews and follow-up dates with reminders." },
      { title: "Document vault and PDF", description: "Organize files by work period and export internship logs as an A4 PDF journal." },
      { title: "OCR and content search", description: "Scan text from supported image documents on your device and search logs, documents, and records." },
      { title: "Local reminders", description: "Schedule on-device notifications for interviews, deadlines, and workdays." }
    ]
  },
  privacy: {
    title: "Your records stay on your device first.",
    description: "Work, internship, daily, application, project, and skill records live in a local SQLCipher-encrypted database. Added files are stored in the app's private file area and are not separately encrypted. İşYolum does not provide an account or its own cloud sync.",
    items: [
      "Local records database encrypted with SQLCipher",
      "Documents kept in the app's private file area",
      "OCR text is not sent to the developer or Google",
      "Android OCR technical metrics may go to Google",
      "Reminders are scheduled as local notifications",
      "App lock uses your device's biometric authentication"
    ],
    note: "An internet connection may be needed to download the Android OCR model the first time. When ML Kit is used, device, app, and diagnostic metrics may be sent to Google; document images and recognized text are not part of those metrics. Uninstalling the app may delete local records and files."
  },
  collaboration: {
    title: "İşYolum fits the way you work.",
    description: "Choose the user mode that matches your goals in Profile & Settings. Organize internships, job search, employment, and career projects by period.",
    cards: [
      { title: "Intern Mode", description: "Internship progress, required internship journal, daily work status, and weekly summaries." },
      { title: "Job Seeker Mode", description: "Job and internship applications, interview preparation, reminders, and CV management." },
      { title: "Employee Mode", description: "Work notes, daily tasks, work periods, and document storage in Work Vault." },
      { title: "Career Memory", description: "Collect work/internships, projects, skills, achievements, and proof along your timeline." }
    ],
    ctaPrimary: "Download Early Access APK",
    ctaSecondary: "View the app flow"
  },
  faq: {
    eyebrow: "QUICK ANSWERS",
    title: "Frequently asked questions",
    items: [
      { q: "Is İşYolum a job board or job search app?", a: "No. İşYolum does not publish vacancies or guarantee a job. It helps you organize applications, interview dates, work records, and career history." },
      { q: "Which work targets can I track?", a: "For a work period, you can set a target number of workdays and an optional total work-hour target. Track recorded days, time worked, and the remaining target. Calendar estimates reflect your chosen workdays and holiday settings." },
      { q: "What can I keep in my career history?", a: "Work experience, tasks, projects, learning records, skills, certificates, achievements, notes, and documents linked to them." },
      { q: "How does application tracking work?", a: "Add job or internship applications, update their status, and set interview or follow-up reminders. İşYolum does not submit applications for you." },
      { q: "Where are my records stored?", a: "App records are kept in the SQLCipher-encrypted database on your device. Added files are stored in the app's private area; the files themselves are not separately encrypted." },
      { q: "Does OCR send my document or text online?", a: "For supported documents, the image and recognized text are not sent to the developer or Google for OCR. Android ML Kit may send device/app details and technical metrics to Google when OCR is used. The first model download may need internet." },
      { q: "Will I keep my records if I uninstall the app?", a: "App data is stored locally and may be deleted when the app is uninstalled. İşYolum does not provide account sync or its own cloud backup." },
      { q: "Can I export an internship journal as a PDF?", a: "Yes. Export internship daily logs in chronological order as an A4 PDF journal." },
      { q: "Is there a per-file size limit?", a: "The document screen has a 20 MB limit per file. Large images can be optimized before they are saved." },
      { q: "How can I access the app?", a: "Early Access for İşYolum has officially started! You can download the latest compiled Android APK (November 16, 2026 build) directly from our website and start using it right away." }
    ]
  },
  founder: {
    text: "İşYolum is built to reduce the clutter that comes from keeping internship days, work hours, daily logs, and documents in different places. We are proud to launch Early Access for İşYolum—you can now download the app directly and keep your records clear and under your control."
  },
  form: {
    title: "EARLY ACCESS FOR İŞYOLUM HAS STARTED",
    description: "Download the latest compiled Android APK directly to your device and start using İşYolum today. You can also leave your details below for release updates and feedback.",
    name: "Your name (optional)",
    email: "Your email address",
    type: "How would you use the app?",
    selectPrompt: "Choose an option",
    types: {
      student: "Student",
      intern: "Intern",
      jobseeker: "Job seeker",
      worker: "Employee",
      freelancer: "Freelancer",
      university: "University / company",
      supporter: "Other"
    },
    message: "Anything else you would like to add? (Optional)",
    consent: "I agree to the processing of my application details for closed testing and updates.",
    privacyLink: "Read the privacy policy",
    submit: "Send request",
    success: "Your request has been sent for closed-test review.",
    submitting: "Sending...",
    inactive: "The request form is currently unavailable. Please try again later.",
    error: "Your request could not be sent.",
    tryAgain: "Please try again.",
    privacyRequired: "Privacy consent is required to continue."
  },
  footer: {
    description: "A personal space for your workdays, hours, and career records.",
    navigation: "Explore this page",
    earlyAccess: "Early Access",
    privacy: "Privacy policy",
    status: "EARLY ACCESS FOR İŞYOLUM IS LIVE · APK Available",
    rights: "All rights reserved."
  },
  policy: {
    title: "İşYolum Privacy Policy",
    lastUpdated: "Last updated: November 7, 2026",
    intro: "This policy explains how the İşYolum mobile app and the closed-test contact form on this website process personal data.",
    sections: [
      {
        title: "App records and files",
        body: "Work, internship, application, daily log, project, skill, reminder, and settings records are stored in the local database on your device. The database is encrypted with SQLCipher using a device key protected in secure storage. PDFs and other files you add are kept in the app's private file area; they are not part of the SQLCipher database and are not separately encrypted."
      },
      {
        title: "Servers, accounts, and backups",
        body: "İşYolum does not automatically send app records to a developer-operated server. The app has no user account, app-provided cloud sync, advertising, developer analytics SDK, or crash-reporting service. Android app data is excluded from Google Drive backup and automatic device-to-device transfer. iOS device backups depend on Apple's system settings."
      },
      {
        title: "Document selection, OCR, and sharing",
        body: "Documents are selected with the device's system file picker. On Android, the OCR model may be downloaded through Google Play services, so an internet connection may be needed for the first download. Google ML Kit on Android and Apple Vision on iOS process selected documents on-device. The document image and recognized text are not sent to the developer or Google for OCR. Once available, later Android scans can work offline. The app does not scan documents with a camera or request camera permission. If you choose to share a file, it is passed to the app you select in the system share sheet."
      },
      {
        title: "Android OCR technical metrics",
        body: "When Android OCR is used, Google ML Kit may send Google technical metrics such as device manufacturer/model and Android version, app package/version, available hardware accelerators, device/installation identifiers, processing time, API configuration, input/output sizes, feature/model version, event types, and error codes. Google says it uses these metrics for diagnostics and usage analytics, transmits them over HTTPS, and does not share them with third parties. The metrics do not include the document image or OCR text. İşYolum does not provide a separate deletion control for these metrics."
      },
      {
        title: "App lock and notifications",
        body: "The optional app lock uses your device's operating-system authentication screen. İşYolum does not access or store biometric images or templates. Reminders are scheduled as local notifications on your device; no push notification server is used."
      },
      {
        title: "Closed-test contact form",
        body: "If you submit the website form, the name, email address, intended use, and optional message you provide are sent to the developer's contact email account for closed testing and product updates. Form details are not transferred to the İşYolum mobile app or an app account; the website does not have a separate user account or application database. Gmail/Google email service is used for delivery. You can prevent this transfer by not submitting the form."
      },
      {
        title: "Website preferences",
        body: "The website remembers your selected language and theme in your browser's local storage. These preferences are not sent to the developer unless you submit the contact form."
      },
      {
        title: "Retention, deletion, and contact",
        body: "You can delete app records in the app; uninstalling it may also delete the local database and private file area. To request deletion of an email submitted through the form or ask a privacy question, contact contact@temurcode.com.tr. İşYolum has no separate deletion control for technical metrics sent by Google ML Kit."
      }
    ],
    contact: "For privacy questions"
  }
};
