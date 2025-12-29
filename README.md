# Text to Speech

A browser-based tool that converts text to natural-sounding speech. Built with Next.js and uses the Web Speech API.

🔗 **Live Demo:** [Text to Speech](https://toolsvana.com/tool/text-to-speech)

## What it does

This tool reads text aloud using your browser's built-in speech synthesis. Choose from multiple voices, adjust speed and pitch, and listen to any text.

## Key features

- Multiple voice options
- Adjustable speech rate (0.5x - 2x)
- Adjustable pitch
- Works offline
- No data sent to servers
- Supports multiple languages

## How to use

1. Type or paste text
2. Select voice and adjust settings
3. Click "Speak" to hear the text
4. Click "Stop" to interrupt

## Technical details

Built with Next.js 16, TypeScript, and Tailwind CSS. Uses Web Speech API (SpeechSynthesis) for text-to-speech conversion. Available voices depend on your operating system.

## Running locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

Output directory: `out`
