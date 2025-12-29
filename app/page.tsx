import type { Metadata } from 'next';
import TextToSpeechTool from './components/TextToSpeechTool';

export const metadata: Metadata = {
  title: 'Text to Speech — Convert Text to Natural Speech',
  description: 'Convert text to speech with natural-sounding voices. Adjust speed, pitch, and choose from multiple voices—all in your browser.',
  keywords: 'text to speech, TTS, speech synthesis, read aloud, text reader',
};

const featurePillars = [
  { title: 'Multiple voices', description: 'Choose from dozens of natural-sounding voices in different languages and accents.' },
  { title: 'Customizable output', description: 'Adjust speech rate and pitch to match your preferences and use case.' },
  { title: 'Privacy-first', description: 'All speech synthesis happens in your browser. Your text never leaves your device.' },
];

const seoContent = [
  {
    title: 'Why use text to speech',
    body: [
      'Text to speech technology transforms written content into spoken audio. This accessibility feature helps people with visual impairments, reading difficulties, or learning disabilities access written information. TTS makes digital content inclusive and accessible to everyone regardless of reading ability.',
      'Multitasking becomes possible with text to speech. Listen to articles while commuting, cooking, or exercising. Convert long documents into audio for consumption during activities where reading is impractical. This flexibility maximizes productivity and information consumption.',
      'Language learning benefits from hearing proper pronunciation. Text to speech demonstrates correct pronunciation of words and sentences in foreign languages. Learners can hear native-like pronunciation without needing human tutors or audio recordings.',
      'Content creators use TTS for voiceovers and narration. YouTube videos, podcasts, and presentations benefit from professional-sounding narration. Text to speech provides consistent, clear audio without recording equipment or voice acting skills.',
      'Proofreading improves when you hear your writing. Listening to text reveals awkward phrasing, repetition, and errors that eyes miss when reading. Authors and editors use TTS to catch mistakes and improve writing quality.',
    ],
  },
  {
    title: 'Understanding speech synthesis technology',
    body: [
      'Modern text to speech uses neural networks to generate natural-sounding speech. These AI models learn from thousands of hours of human speech recordings. The result is synthetic voices that sound remarkably human with proper intonation, rhythm, and emotion.',
      'Browser-based TTS uses the Web Speech API, which provides access to device speech synthesis capabilities. Different operating systems include different voices. Windows, macOS, iOS, and Android each provide their own voice libraries with varying quality and language support.',
      'Speech rate controls how fast the voice speaks. Normal conversation occurs at about 150-160 words per minute. Slower rates (0.5-0.8x) help language learners and those processing complex information. Faster rates (1.5-2x) suit experienced listeners consuming familiar content.',
      'Pitch adjustment changes voice tone. Higher pitch creates younger, more energetic voices. Lower pitch sounds more authoritative and serious. Pitch control helps match voice characteristics to content type and audience preferences.',
      'Voice selection affects comprehension and engagement. Different voices suit different content types. Professional content benefits from clear, neutral voices. Educational content works well with warm, friendly voices. Technical content suits precise, articulate voices.',
    ],
  },
  {
    title: 'Common text to speech use cases',
    body: [
      'Accessibility applications make websites and documents available to visually impaired users. Screen readers use [Text to Speech] to convert on-screen text into audio. This technology enables blind and low-vision users to access digital content independently.',
      'E-learning platforms incorporate TTS for course narration. Educational content becomes more engaging when students can listen while following along visually. Audio reinforcement improves retention and accommodates different learning styles.',
      'Navigation systems rely on text to speech for turn-by-turn directions. GPS apps convert written directions into spoken instructions, allowing drivers to keep eyes on the road. Clear, timely audio guidance improves safety and navigation accuracy.',
      'Customer service automation uses TTS for phone systems and chatbots. Interactive voice response systems speak menu options and information to callers. This automation handles routine inquiries efficiently while maintaining natural communication.',
      'Content consumption apps convert articles, books, and documents to audio. News apps read headlines and stories aloud. E-book readers offer audio versions of written content. These features make information accessible during activities where reading is impossible.',
    ],
  },
  {
    title: 'Best practices for text to speech',
    body: [
      'Format text for optimal speech output. Remove special characters, URLs, and formatting codes that sound awkward when spoken. Break long paragraphs into shorter segments. Use punctuation to control pacing and emphasis.',
      'Choose appropriate voices for your content. Match voice gender, age, and accent to your audience and content type. Test multiple voices to find the best fit. Consider cultural context when selecting accents for international audiences.',
      'Adjust speed based on content complexity. Slow down for technical information, foreign languages, or unfamiliar concepts. Speed up for familiar content or when time is limited. Let listeners control speed for optimal comprehension.',
      'Test pronunciation of specialized terms. Technical jargon, proper names, and acronyms may not pronounce correctly. Some TTS systems allow pronunciation customization. Consider spelling out problematic words phonetically.',
      'Provide text alongside audio when possible. Visual text helps comprehension, especially for complex information. Synchronized highlighting shows which text is being spoken. This multimodal approach maximizes accessibility and understanding.',
    ],
  },
];

const faqs = [
  { question: 'Which voices are available?', answer: 'Available voices depend on your device and operating system. Most systems include multiple voices in various languages. The tool displays all voices available on your device.' },
  { question: 'Can I download the audio?', answer: 'This tool plays speech in real-time. For downloadable audio files, you would need desktop software or cloud-based TTS services that generate audio files.' },
  { question: 'Does this work offline?', answer: 'Yes. Browser-based speech synthesis works offline using voices installed on your device. No internet connection is required.' },
  { question: 'Is my text sent to a server?', answer: 'No. All speech synthesis happens locally in your browser using built-in voices. Your text never leaves your device.' },
];

export default function Home() {
  return (
    <div className="bg-grid-slate min-h-screen">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-1">
            <a className="text-2xl font-semibold tracking-tight text-white" href="/">Text to Speech</a>
            <p className="text-sm text-slate-400">Convert text to natural speech</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">Home</a>
            <a className="transition hover:text-white" href="mailto:support@lightning.studio">Support</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <TextToSpeechTool />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-semibold text-white">In-depth guide</h2>
          {seoContent.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.body.map((paragraph, idx) => {
                  const linkMatch = paragraph.match(/\[Text to Speech\]/);
                  if (linkMatch) {
                    const parts = paragraph.split('[Text to Speech]');
                    return (
                      <p key={idx} className="leading-relaxed text-slate-300">
                        {parts[0]}
                        <a href="https://toolsvana.com/tool/text-to-speech" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">Text to Speech</a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={idx} className="leading-relaxed text-slate-300">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>All processing happens locally in your browser. Powered by Lightning Studio.</p>
      </footer>
    </div>
  );
}
