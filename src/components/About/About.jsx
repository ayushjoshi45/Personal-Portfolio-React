/**
 * About Component - Modern Redesign
 */

import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const interests = [
    { icon: '🏏', label: 'Cricket', color: 'from-green-500 to-emerald-500' },
    { icon: '💻', label: 'Coding', color: 'from-blue-500 to-cyan-500' },
    { icon: '📚', label: 'Learning', color: 'from-purple-500 to-pink-500' },
    { icon: '🚀', label: 'Innovation', color: 'from-orange-500 to-red-500' },
  ];

  const highlights = [
    {
      title: 'Job Portal',
      description: 'Platform connecting job seekers and recruiters with smooth authentication',
      icon: '💼',
    },
    {
      title: 'Rental Marketplace',
      description: 'Interactive property listing and browsing platform',
      icon: '🏠',
    },
    {
      title: 'MoviesFlick',
      description: 'Movie discovery platform powered by TMDB API',
      icon: '🎬',
    },
    {
      title: 'Bubble Hit Game',
      description: 'JavaScript-based interactive scoring game',
      icon: '🎮',
    },
  ];

  return (
    <div className="w-full mx-auto py-20">
      {/* Section Header */}
      <div className="flex flex-col mb-16 gap-4 animate-fade-in-up">
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-500 rounded"></div>
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Know Me</span>
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-purple-500 rounded"></div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
          About <span className="gradient-text">Me</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Story & Values */}
        <div className="space-y-6 animate-fade-in-up">
          {/* Tabs */}
          <div className="flex gap-4 p-2 bg-[#1a1a1a] rounded-2xl border border-gray-800">
            <button
              onClick={() => setActiveTab('story')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'story'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              My Story
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'values'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Values
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 min-h-[300px]">
            {activeTab === 'story' ? (
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-xl font-semibold text-white mb-4">
                  👋 Hi, I'm Ayush Joshi
                </p>
                <p>
                  A passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> from the beautiful hills of{' '}
                  <span className="text-purple-400 font-semibold">Pithoragarh, Uttarakhand</span>. My journey in web development is driven by curiosity and the desire to create meaningful digital experiences.
                </p>
                <p>
                  I specialize in building <span className="text-purple-400 font-semibold">dynamic and user-friendly applications</span> with a strong focus on the <span className="text-purple-400 font-semibold">MERN Stack</span> and modern web technologies.
                </p>
                <p>
                  When I'm not coding, you'll find me playing <span className="text-purple-400 font-semibold">cricket 🏏</span> or exploring the latest trends in technology. I believe in continuous learning and constantly pushing boundaries.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Quality First</h3>
                    <p className="text-gray-400">I prioritize writing clean, maintainable code that stands the test of time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Collaboration</h3>
                    <p className="text-gray-400">I thrive in team environments and value open communication.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    💡
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Innovation</h3>
                    <p className="text-gray-400">I constantly explore new technologies and creative solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    🌱
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Growth Mindset</h3>
                    <p className="text-gray-400">Every challenge is an opportunity to learn and improve.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interests */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Interests & Hobbies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="group p-4 bg-[#0d0d0d] rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {interest.icon}
                  </div>
                  <p className="text-white font-semibold">{interest.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Highlights */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              Project Highlights
            </h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-5 bg-[#0d0d0d] rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl text-purple-500/10 font-serif leading-none">”</div>
            <div className="relative">
              <p className="text-white text-xl font-medium italic mb-4 leading-relaxed">
                "I enjoy learning, experimenting, and constantly pushing myself to build better projects."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <div>
                  <p className="text-white font-semibold">Ayush Joshi</p>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-6 border border-purple-500/30 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">🎯</div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">Dedication</div>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-6 border border-blue-500/30 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">🚀</div>
              <div className="text-2xl font-bold text-white mb-1">Always</div>
              <div className="text-gray-400 text-sm">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
