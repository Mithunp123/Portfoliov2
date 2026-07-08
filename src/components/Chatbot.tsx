import React, { useState, useRef, useEffect } from 'react';
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '../firebase/config';

const SYSTEM_PROMPT = `You are a helpful portfolio assistant for Mithun P. Keep your answers concise, friendly, and under 3 sentences. 
Mithun is a Software Engineer specializing in AI, Data Science, and Full Stack Engineering. 
His key projects include Time2Order (Food Tech), TrueSight AI (Forensics), and AutoRevives (E-Commerce). 
His skills include React, Node.js, Python, Flask, SQL, and PyTorch. 
If someone asks how to contact him, tell them to use the Let's Work Together section or his LinkedIn.`;

async function fetchGeminiResponse(userMessage: string): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return "Error: Gemini API key is missing. Please check your .env file.";
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT + "\\n\\nUser query: " + userMessage }] }
        ]
      })
    });

    const data = await response.json();
    if (data.candidates && data.candidates.length > 0) {
      return data.candidates[0].content.parts[0].text.trim();
    }
    return "Mithun is an AI & Full Stack Engineer. I'm having a little trouble connecting to my brain right now, but you can reach him directly through the 'Let's Work Together' section below!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mithun is an AI & Full Stack Engineer. I'm experiencing high traffic, but you can reach him directly through the 'Let's Work Together' section below!";
  }
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi! Ask me about Mithun\'s projects, skills, or experience.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const replyText = await fetchGeminiResponse(text);
    const botMsg: Message = { sender: 'bot', text: replyText };
    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);

    // Log the interaction to Firebase
    try {
      const logsRef = ref(database, 'chat_logs');
      push(logsRef, {
        userQuery: text,
        botReply: replyText,
        timestamp: serverTimestamp()
      });
    } catch (err) {
      console.error("Failed to log chat:", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button 
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 group"
          aria-label="Open Chatbot"
        >
          <span className="material-symbols-outlined text-[28px] group-hover:text-[#3b82f6] transition-colors">auto_awesome</span>
          {/* Unread indicator */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[var(--bg-elevated)]"></span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[340px] sm:w-[380px] h-[540px] max-h-[85vh] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl flex flex-col z-[9999] overflow-hidden transform origin-bottom-right transition-all duration-300">
      {/* Clean Header */}
      <div className="px-5 py-4 flex justify-between items-center shrink-0 border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px] text-[#3b82f6]">auto_awesome</span>
          </div>
          <div>
            <h3 className="font-semibold text-[15px] text-[var(--text-primary)] leading-tight">AI Assistant</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span className="text-[11px] font-medium text-[var(--text-muted)]">Online</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--bg-elevated)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-[var(--bg-primary)] scrollbar-hide">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_0.2s_ease-out]`}>
            {msg.sender === 'bot' && (
              <div className="w-7 h-7 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center mr-2 mt-auto shrink-0">
                <span className="material-symbols-outlined text-[14px] text-[#3b82f6]">auto_awesome</span>
              </div>
            )}
            <div 
              className={`max-w-[80%] px-4 py-2.5 text-[14px] leading-relaxed shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-[#3b82f6] text-white rounded-[1.25rem] rounded-br-sm' 
                  : 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-[1.25rem] rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start items-end animate-[fadeIn_0.2s_ease-out]">
            <div className="w-7 h-7 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] flex items-center justify-center mr-2 shrink-0">
              <span className="material-symbols-outlined text-[14px] text-[#3b82f6]">auto_awesome</span>
            </div>
            <div className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] px-4 py-3 rounded-[1.25rem] rounded-bl-sm flex gap-1.5 items-center h-[42px] shadow-sm">
              <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-[bounce_1s_infinite]"></span>
              <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-[bounce_1s_infinite_0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-[var(--text-muted)] rounded-full animate-[bounce_1s_infinite_0.4s]"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-4 py-3 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] overflow-x-auto whitespace-nowrap shrink-0 scrollbar-hide">
        <div className="flex gap-2">
          {['Projects', 'Skills', 'Experience', 'Contact'].map((qr) => (
            <button
              key={qr}
              onClick={() => handleSend(qr)}
              className="text-[12px] font-medium px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[#3b82f6] hover:border-[#3b82f6] hover:bg-blue-50/5 dark:hover:bg-blue-500/10 transition-colors shrink-0"
            >
              {qr}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 bg-[var(--bg-secondary)] flex gap-2 shrink-0 border-t border-[var(--border-subtle)]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 w-full h-11 bg-[var(--bg-input)] border border-[var(--border-subtle)] rounded-full px-5 text-[14px] focus:outline-none focus:border-[#3b82f6] text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors"
        />
        <button 
          type="submit"
          disabled={!input.trim()}
          className="w-11 h-11 rounded-full bg-[#3b82f6] text-white flex items-center justify-center disabled:opacity-50 disabled:bg-[var(--bg-elevated)] disabled:text-[var(--text-muted)] transition-colors shrink-0"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
