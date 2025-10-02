import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mail, Phone } from 'lucide-react';
import { askAI } from '../services/aiService';
import { sendContactEmail, ContactFormData } from '../services/emailService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Kabeer's AI assistant. Ask me anything about his experience, projects, or skills!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const { answer, canAnswer } = await askAI(input, chatHistory);

      console.log('AI Response:', { answer, canAnswer }); // Debug log

      const assistantMessage: Message = {
        role: 'assistant',
        content: answer,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

      if (!canAnswer) {
        console.log('Showing contact form because canAnswer is false');
        setTimeout(() => {
          setShowContactForm(true);
        }, 1000);
      }
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm having trouble right now. Please use the contact form below to reach Kabeer directly.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setShowContactForm(true);
    }

    setIsLoading(false);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendContactEmail(contactForm as ContactFormData);
    
    if (success) {
      alert('Message sent! Kabeer will get back to you within 24 hours.');
      setContactForm({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        description: ''
      });
      setShowContactForm(false);
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  const suggestedQuestions = [
    "What projects has Kabeer worked on?",
    "What technologies does Kabeer know?",
    "Tell me about Kabeer's experience",
    "What services does Kabeer offer?"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ask Me Anything
          </h2>
          <p className="text-xl text-blue-100">
            Chat with my AI assistant to learn about my experience and projects
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="h-96 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.role === 'user' ? 'bg-purple-600' : 'bg-blue-600'}`}>
                    {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-purple-600' : 'bg-blue-600/80'}`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-blue-600">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-lg bg-blue-600/80">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Kabeer's experience, projects, or skills..."
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-lg transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="mt-4">
              <p className="text-sm text-blue-100 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact Form */}
        {showContactForm && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Let's Connect Directly</h3>
              <p className="text-blue-100">For detailed discussions about your project</p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.fullName}
                  onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                  required
                  className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                  className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <textarea
                placeholder="Tell me about your project..."
                value={contactForm.description}
                onChange={(e) => setContactForm({...contactForm, description: e.target.value})}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-blue-100 text-sm mb-2">Or reach out directly:</p>
              <div className="flex justify-center space-x-6">
                <a href="mailto:meetkabeershah@gmail.com" className="flex items-center space-x-2 text-blue-200 hover:text-white">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
                <a href="tel:+919773207706" className="flex items-center space-x-2 text-blue-200 hover:text-white">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}