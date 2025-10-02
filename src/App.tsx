import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ClientStories from './components/ClientStories';
import About from './components/About';
import TechStack from './components/TechStack';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import LeadDashboard from './components/LeadDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [currentView, setCurrentView] = useState('website');

  if (currentView === 'dashboard') {
    return (
      <ThemeProvider>
        <LeadDashboard onBack={() => setCurrentView('website')} />
      </ThemeProvider>
    );
  }

  if (currentView === 'privacy') {
    return (
      <ThemeProvider>
        <PrivacyPolicy onBack={() => setCurrentView('website')} />
      </ThemeProvider>
    );
  }

  if (currentView === 'terms') {
    return (
      <ThemeProvider>
        <TermsOfService onBack={() => setCurrentView('website')} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header onDashboard={() => setCurrentView('dashboard')} />
        <Hero />
        <Services />
        <Portfolio />
        {/* <ClientStories /> */}
        <About />
        <TechStack />
        <AIChat />
        <Footer 
          onPrivacyClick={() => setCurrentView('privacy')}
          onTermsClick={() => setCurrentView('terms')}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;