import { useTranslation } from 'react-i18next'
import backgroundImage from './assets/mockup.jpg'
import { useEffect, useState } from 'react'

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
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black/70 min-h-screen flex flex-col justify-center items-center text-center px-4 pb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Inglorious Basterds</h1>
        <p className="max-w-2xl text-xl md:text-2xl mb-6">{t('intro')}</p>
        <a
          href="https://discord.gg/vhbFQEEDgQ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-700 hover:bg-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition"
        >
          {t('joinDiscord')}
        </a>
        <button
          onClick={() => i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de')}
          className="mt-8 text-sm underline hover:text-gray-300"
        >
          {t('changeLanguage')}
        </button>
      </div>

      <div className="bg-black/90 px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">PoE2 News</h2>
        <div className="max-w-4xl mx-auto grid gap-6">
          {news.length === 0 && (
            <p className="text-center text-gray-400">News werden geladen…</p>
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
  )
}

export default App
