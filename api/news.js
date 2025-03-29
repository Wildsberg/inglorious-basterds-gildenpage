import Parser from 'rss-parser'

const parser = new Parser()
const RSS_URL = 'https://www.pathofexile.com/news/rss'

export default async function handler(req, res) {
  try {
    const feed = await parser.parseURL(RSS_URL)
    const items = feed.items.slice(0, 3).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate
    }))
    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ error: 'RSS Feed konnte nicht geladen werden' })
  }
}
