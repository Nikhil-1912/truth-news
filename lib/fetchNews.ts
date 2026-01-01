import Parser from "rss-parser";

const parser = new Parser();

const sources = [
  {
    name: "The Hindu",
    url: "https://www.thehindu.com/news/feeder/default.rss",
  },
  {
    name: "Hindustan Times",
    url: "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",
  },
  {
    name: "Indian Express",
    url: "https://indianexpress.com/feed/",
  },
  {
    name: "Times of India",
    url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
  },
];

export async function fetchNews() {
  const allNews: any[] = [];

  for (const source of sources) {
    const feed = await parser.parseURL(source.url);

    feed.items.slice(0, 5).forEach((item) => {
      allNews.push({
        title: item.title,
        link: item.link,
        source: source.name,
        date: item.pubDate,
      });
    });
  }

  return allNews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
