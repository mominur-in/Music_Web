import React, { useState } from 'react';
import './App.css';

const App = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-wrapper">
      {/* Background elements */}
      <div className="bg-glow"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="noise"></div>

      <div className="card-wrapper">
        {/* Brand Section */}
        <div className="brand">
          <div className="logo-ring">KC</div>
          <h1>EAT TOKEN</h1>
          <div className="brand-sub">Secure · Smart · Seamless</div>
          <div className="divider-line"></div>
        </div>

        {/* Status Pill */}
        <div className="status-pill">
          <span className="status-dot"></span>
          Encrypted connection
        </div>

        {/* Login Card */}
        <div className="login-card">
          <div className="shield-icon">⚡</div>
          <h2>Unlock with ease</h2>
          <p className="sub">Select your preferred method</p>

          <div className="btn-group">
            {/* Google Button */}
            <button 
              className="login-btn google" 
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=8&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">G</div>
              <div className="login-text">
                <strong>Continue with Google</strong>
                <span>one‑tap secure sign‑in</span>
              </div>
              <div className="arrow-icon">›</div>
            </button>

            {/* Facebook Button */}
            <button 
              className="login-btn facebook" 
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=3&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">f</div>
              <div className="login-text">
                <strong>Continue with Facebook</strong>
                <span>fast & trusted</span>
              </div>
              <div className="arrow-icon">›</div>
            </button>

            {/* Apple Button */}
            <button 
              className="login-btn apple" 
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=10&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">●</div>
              <div className="login-text">
                <strong>Continue with Apple</strong>
                <span>privacy first</span>
              </div>
              <div className="arrow-icon">›</div>
            </button>

            {/* X Button */}
            <button 
              className="login-btn x" 
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=11&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">𝕏</div>
              <div className="login-text">
                <strong>Continue with X</strong>
                <span>connect instantly</span>
              </div>
              <div className="arrow-icon">›</div>
            </button>

            {/* VK Button */}
            <button 
              className="login-btn vk" 
              onClick={() => openLink('https://auth.garena.com/universal/oauth?platform=5&response_type=code&locale=en-SG&client_id=100067&redirect_uri=https://api.ff.garena.co.id/auth/auth/callback_n?site=https://api-discountstore.kiosgamer.gameid.garena.co.id/oauth/callback_redirect/')}
            >
              <div className="provider-icon">VK</div>
              <div className="login-text">
                <strong>Continue with VK</strong>
                <span>secure & familiar</span>
              </div>
              <div className="arrow-icon">›</div>
            </button>
          </div>

          <div className="security-note">
            <div className="note-icon">i</div>
            <div>Authentication is handled by the provider. We never store your password or private data.</div>
          </div>
        </div>

        {/* Social Bar */}
        <div className="social-bar">
          <div className="yt-badge"></div>
          <div className="social-info">
            <strong>Eat Token Capture?</strong>
            <span>Subscribe for updates &amp; behind‑the‑scenes</span>
          </div>
          <div className="social-links">
            <a 
              className="social-link" 
              href="https://www.youtube.com/@momintip" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              YouTube →
            </a>
            <a 
              className="social-link" 
              href="https://instagram.com/devhubx_org" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram →
            </a>
            <a 
              className="social-link" 
              href="https://t.me/MominTips" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Telegram →
            </a>
          </div>
        </div>

        <footer>
          © 2026 Eat Token
        </footer>
      </div>
    </div>
  );
};

export default App;