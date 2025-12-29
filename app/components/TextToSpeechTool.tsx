'use client';
import { useState, useEffect } from 'react';

export default function TextToSpeechTool() {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, [selectedVoice]);

  const speak = () => {
    if (!text) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = pitch;
    
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <section className="glass-panel p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>Browser based
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Text to Speech</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">Convert text to natural-sounding speech. Choose from multiple voices, adjust speed and pitch—all in your browser.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Enter text to convert</label>
              <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type or paste your text here..." className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 min-h-[200px]"/>
            </div>
            <div className="flex gap-2">
              <button onClick={speak} disabled={!text || speaking} className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-3 font-semibold uppercase tracking-wide text-white transition hover:opacity-90 disabled:opacity-50">
                {speaking ? 'Speaking...' : 'Speak'}
              </button>
              {speaking && (
                <button onClick={stop} className="rounded-full border border-white/15 px-6 py-3 font-semibold uppercase tracking-wide text-white transition hover:border-red-400/70 hover:bg-red-400/10">
                  Stop
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Voice</label>
              <select value={selectedVoice} onChange={(e) => setSelectedVoice(e.target.value)} className="w-full rounded-lg border border-white/10 bg-slate-900/40 px-4 py-2 text-white">
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name}>{voice.name} ({voice.lang})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>Speed</span>
                <span className="text-cyan-400">{rate.toFixed(1)}x</span>
              </label>
              <input type="range" min="0.5" max="2" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full"/>
            </div>
            <div>
              <label className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>Pitch</span>
                <span className="text-cyan-400">{pitch.toFixed(1)}</span>
              </label>
              <input type="range" min="0.5" max="2" step="0.1" value={pitch} onChange={(e) => setPitch(Number(e.target.value))} className="w-full"/>
            </div>
            <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-xs text-slate-400">
              <strong className="text-slate-300">Privacy first:</strong> Speech synthesis happens in your browser using built-in voices. No data is sent to any server.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
