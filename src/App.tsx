import { Routes, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <span className="text-xl font-bold text-gray-900 tracking-tight">BusinessFlow</span>
      </div>
      <a 
        href="https://chrome.google.com/webstore" 
        className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm"
      >
        Get the Extension
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="py-20 px-6 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
        Capture QA Evidence <br className="hidden md:block" /> Without the Hassle
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance">
        BusinessFlow automatically records your clicks, takes screenshots, and generates professional PDF & Excel test reports—all running securely on your local machine.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="https://chrome.google.com/webstore" 
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-lg flex items-center gap-2"
        >
          <span>Add to Chrome</span>
          <span className="bg-blue-500 text-xs px-2 py-1 rounded-md">It's Free</span>
        </a>
      </div>
      <div className="mt-16 bg-gray-100 rounded-2xl border border-gray-200 h-64 md:h-96 w-full flex items-center justify-center shadow-inner overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-200 opacity-50"></div>
        <p className="text-gray-400 font-medium z-10">[ Dashboard Screenshot Placeholder ]</p>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      title: 'Automated Screenshots',
      desc: 'Never manually snip a screen again. We capture the exact state of the DOM instantly on every click.',
      icon: '📸'
    },
    {
      title: '100% Local Privacy',
      desc: 'No data leaves your browser until you choose to export it. Perfect for enterprise compliance.',
      icon: '🔒'
    },
    {
      title: 'One-Click Exports',
      desc: 'Instantly generate polished PDF, Word, and Excel documents ready to hand to stakeholders.',
      icon: '⚡'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Modern QA Teams</h2>
          <p className="text-gray-600">Everything you need to prove your tests passed, automatically.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-white text-center border-t border-gray-100">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <span className="font-bold text-gray-900">BusinessFlow</span>
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} BusinessFlow. All rights reserved.</p>
    </footer>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

function BillingSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm max-w-md w-full text-center border border-gray-100">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Payment Successful</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">Your subscription is now active! You can safely close this tab and return to the BusinessFlow extension to enjoy your Pro features.</p>
        <button onClick={() => window.close()} className="bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-6 py-2.5 rounded-lg font-medium transition-colors w-full">
          Close Tab
        </button>
      </div>
    </div>
  )
}

function BillingCancel() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm max-w-md w-full text-center border border-gray-100">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Checkout Canceled</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">Your checkout was canceled. No charges were made to your account.</p>
        <button onClick={() => window.close()} className="bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-6 py-2.5 rounded-lg font-medium transition-colors w-full">
          Close Tab
        </button>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/billing/success" element={<BillingSuccess />} />
      <Route path="/billing/cancel" element={<BillingCancel />} />
    </Routes>
  )
}
