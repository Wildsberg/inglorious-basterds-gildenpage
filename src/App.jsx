import { useTranslation } from 'react-i18next'
import backgroundImage from './assets/mockup.jpg'

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black/70 min-h-screen flex flex-col justify-center items-center text-center px-4">
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
    </div>
  )
}

export default App
