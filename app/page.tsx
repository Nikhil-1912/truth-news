<main>
  <header className="site-header">
    <div className="site-title">Truth</div>
    <div className="site-tagline">Verified Indian News</div>
  </header>

  {/* News list goes here */}
</main>

import { fetchNews } from "@/lib/fetchNews";

export const revalidate = 300; // refresh every 5 minutes

export default async function HomePage() {
  const news = await fetchNews();

  return (
    <main style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>Truth</h1>
      <p>Verified Indian News</p>

      <section className="news-grid">
  {news.map((item, index) => (
    <article className="news-card" key={index}>
      <img
        className="news-image"
        src="/news-placeholder.jpg"
        alt="News"
      />

      <div className="news-content">
        <h2 className="news-title">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </h2>

        <div className="news-meta">
          {item.source} ·{" "}
          {new Date(item.date).toDateString()}
        </div>
      </div>
    </article>
  ))}
</section>

      
    </main>
  );
}
