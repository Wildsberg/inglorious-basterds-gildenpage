import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import backgroundImage from './assets/mockup.jpg'

function App() {
  const { t, i18n } = useTranslation()
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(() => console.error("Fehler beim Laden der News."))
  }, [])

  return (
    <div className="bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Inglorious Basterds</div>
          <div className="space-x-6 text-sm md:text-base">
            <a href="#home" className="hover:text-red-400">Home</a>
            <a href="#news" className="hover:text-red-400">News</a>
            <a href="https://discord.gg/vhbFQEEDgQ" target="_blank" className="hover:text-red-400">Discord</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-contain bg-no-repeat bg-top text-center min-h-[60vh] md:min-h-[75vh] flex items-center justify-center px-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-black/70 p-6 md:p-12 rounded max-w-3xl mx-auto mt-40">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Inglorious Basterds</h1>
          
        </div>
      </section>

      {/* Intro + Discord + News Grid */}
      <section className="py-20 bg-black/90">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Willkommen!</h2>
            <p className="text-lg mb-6">{t('intro')}</p>
            <a
              href="https://discord.gg/vhbFQEEDgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 hover:bg-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition"
            >
              {t('joinDiscord')}
            </a>
          </div>

          {/* News Section */}
          <div id="news">
            <h2 className="text-3xl font-bold mb-6">PoE2 News</h2>
            <div className="grid gap-6">
              {news.length === 0 && (
                <p className="text-gray-400">News werden geladen…</p>
              )}
              {news.map((item, index) => (
                <div key={index} className="border border-gray-700 rounded p-4 hover:bg-gray-800 transition">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{new Date(item.pubDate).toLocaleDateString()}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-center text-sm text-gray-500 py-6">
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de')}
          className="underline hover:text-white mb-2 block"
        >
          {t('changeLanguage')}
        </button>
        <p>Fanprojekt zu Path of Exile 2 – Inhalte © Grinding Gear Games</p>
      </footer>
    </div>
  )
}

export default App
