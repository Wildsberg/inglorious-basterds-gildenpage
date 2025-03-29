import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <header className="text-center py-12 bg-red-900">
        <h1 className="text-5xl font-bold">Inglorious Basterds</h1>
        <p className="mt-2 text-xl">{t('tagline')}</p>
      </header>
      <main className="p-6 max-w-3xl mx-auto">
        <p className="mb-4">{t('intro')}</p>
        <p>{t('invite')}</p>
        <div className="mt-8">
          <a
            href="https://discord.gg/dein-einladungslink"
            className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded text-white text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('joinDiscord')}
          </a>
        </div>
        <div className="mt-10">
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de')}
            className="underline text-sm text-gray-400 hover:text-white"
          >
            {t('changeLanguage')}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
