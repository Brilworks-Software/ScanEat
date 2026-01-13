'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';

export default function PrivacyPolicyPage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    // Animate first section immediately
    if (sectionsRef.current[0]) {
      setTimeout(() => {
        sectionsRef.current[0]?.classList.add('visible');
      }, 100);
    }

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-[length:400%_400%] text-white py-12 md:py-16" style={{
        animation: 'gradient-shift 15s ease infinite'
      }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)'
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full p-3 shadow-lg mx-auto hover:scale-110 transition-transform duration-300">
              <img src="/favicon.png" alt="Scaneat Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl opacity-90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Scaneat - Food Barcode Scanner & Health Analyzer
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Last Updated */}
        <div className="text-center text-gray-600 mb-8 pb-6 border-b border-gray-200">
          <strong>Last Updated:</strong>{' '}
          <span>{new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>

        {/* Privacy Policy Sections */}
        <section 
          ref={setSectionRef(0)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            1. Introduction
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to Scaneat ("we," "our," or "us"). Scaneat is a mobile application that helps you scan food product barcodes and analyze their nutritional information and health impact. We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our mobile application. By using Scaneat, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section 
          ref={setSectionRef(1)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            2. Information We Collect
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 hover:text-indigo-600 transition-colors">
            2.1 Information You Provide
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Account Information:</strong> When you create an account, we collect your email address and authentication credentials.</li>
            <li><strong>User Preferences:</strong> Dietary restrictions, health goals, and allergen warnings that you set in the app.</li>
            <li><strong>Product Scans:</strong> Barcodes you scan and products you view are stored in your scan history.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 hover:text-indigo-600 transition-colors">
            2.2 Information Collected Automatically
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Camera Access:</strong> We access your device's camera solely for the purpose of scanning barcodes. We do not store, transmit, or share camera images or video.</li>
            <li><strong>Device Information:</strong> We may collect device type, operating system version, and app version for analytics and troubleshooting purposes.</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with the app, including features used and screens viewed, to improve our services.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 hover:text-indigo-600 transition-colors">
            2.3 Third-Party Data
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Product Information:</strong> We fetch product data from OpenFoodFacts API based on barcodes you scan. This data includes product names, ingredients, nutritional information, allergens, and additives.</li>
          </ul>
        </section>

        <section 
          ref={setSectionRef(2)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">We use the collected information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>To provide and maintain our service, including product scanning and health analysis features</li>
            <li>To personalize your experience by showing relevant health recommendations based on your preferences</li>
            <li>To maintain your scan history and favorites for your convenience</li>
            <li>To improve our app by analyzing usage patterns and identifying areas for enhancement</li>
            <li>To communicate with you about app updates, security issues, or important changes</li>
            <li>To ensure app security and prevent fraud or abuse</li>
          </ul>
        </section>

        <section 
          ref={setSectionRef(3)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            4. Data Storage and Security
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 hover:text-indigo-600 transition-colors">
            4.1 Data Storage
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your data is stored securely using Firebase, a service provided by Google. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>User account information and preferences</li>
            <li>Your scan history and favorite products</li>
            <li>Cached product information for faster access</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 hover:text-indigo-600 transition-colors">
            4.2 Security Measures
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Data encryption in transit and at rest</li>
            <li>Secure authentication through Firebase Authentication</li>
            <li>Access controls ensuring users can only access their own data</li>
            <li>Regular security audits and updates</li>
          </ul>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg my-6 hover:shadow-lg transition-shadow">
            <p className="text-gray-800">
              <strong>Important:</strong> While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to using industry-standard practices.
            </p>
          </div>
        </section>

        <section 
          ref={setSectionRef(4)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            5. Third-Party Services
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">We use the following third-party services that may collect or process your information:</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 hover:text-indigo-600 transition-colors">
            5.1 Firebase (Google)
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li><strong>Firebase Authentication:</strong> For user account management and authentication</li>
            <li><strong>Cloud Firestore:</strong> For storing user data, preferences, and scan history</li>
            <li><strong>Firebase Analytics:</strong> For understanding app usage and improving user experience</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Google's Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">https://policies.google.com/privacy</a>
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 hover:text-indigo-600 transition-colors">
            5.2 OpenFoodFacts
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We retrieve product information from the OpenFoodFacts database. This is a public database, and we do not share your personal information with OpenFoodFacts.
          </p>
          <p className="text-gray-700 mb-4">
            OpenFoodFacts Privacy Policy: <a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">https://world.openfoodfacts.org/privacy</a>
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 hover:text-indigo-600 transition-colors">
            5.3 Analytics Services
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We may use analytics services to understand how our app is used. These services collect aggregated, anonymized data and do not identify individual users.
          </p>
        </section>

        <section 
          ref={setSectionRef(5)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            6. Data Sharing and Disclosure
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Service Providers:</strong> With trusted third-party service providers (like Firebase) who assist in operating our app, subject to confidentiality agreements</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
            <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, or that of our users</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to users</li>
          </ul>
        </section>

        <section 
          ref={setSectionRef(6)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            7. Your Rights and Choices
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">You have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Access:</strong> You can access your account information and scan history through the app</li>
            <li><strong>Correction:</strong> You can update your preferences and account information at any time</li>
            <li><strong>Deletion:</strong> You can delete your account and associated data through the app settings or by contacting us</li>
            <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
            <li><strong>Opt-Out:</strong> You can opt out of analytics data collection through your device settings</li>
          </ul>
          <p className="text-gray-700 mt-4 leading-relaxed">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>
        </section>

        <section 
          ref={setSectionRef(7)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            8. Children's Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Scaneat is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>
        </section>

        <section 
          ref={setSectionRef(8)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            9. Data Retention
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Account Data:</strong> Retained until you delete your account</li>
            <li><strong>Scan History:</strong> Retained until you delete your account or individual history items</li>
            <li><strong>Product Data:</strong> Cached product information is retained for up to 7 days for performance purposes</li>
            <li><strong>Analytics Data:</strong> Aggregated analytics data may be retained for longer periods in anonymized form</li>
          </ul>
          <p className="text-gray-700 mt-4 leading-relaxed">
            When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal purposes.
          </p>
        </section>

        <section 
          ref={setSectionRef(9)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            10. International Data Transfers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using Scaneat, you consent to the transfer of your information to these countries, including the United States where Firebase services are hosted.
          </p>
        </section>

        <section 
          ref={setSectionRef(10)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            11. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of Scaneat after any changes indicates your acceptance of the updated policy.
          </p>
        </section>

        <section 
          ref={setSectionRef(11)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            12. California Privacy Rights
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>The right to know what personal information we collect, use, and disclose</li>
            <li>The right to delete your personal information</li>
            <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
            <li>The right to non-discrimination for exercising your privacy rights</li>
          </ul>
        </section>

        <section 
          ref={setSectionRef(12)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 relative pl-4 border-l-4 border-indigo-600 hover:translate-x-2 transition-transform">
            13. GDPR Rights (European Users)
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="text-gray-700 mt-4 leading-relaxed">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section 
          ref={setSectionRef(13)}
          className="mb-10 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">14. Contact Us</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@brilworks.com" className="text-indigo-600 hover:text-indigo-800 underline">
                contact@brilworks.com
              </a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>App:</strong> Scaneat by Brilworks
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Package:</strong> com.brilworks.scaneat
            </p>
            <p className="text-gray-700">
              We will respond to your inquiry within 30 days.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2024 Brilworks. All rights reserved.</p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        section.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}

