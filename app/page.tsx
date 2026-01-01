import { fetchNews } from "@/lib/fetchNews";

export const revalidate = 300; // refresh every 5 minutes

export default async function HomePage() {
  const news = await fetchNews();

  return (
    <main style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>Truth</h1>
      <p>Verified Indian News</p>

      {news.map((item, index) => (
        <article key={index} style={{ marginBottom: "20px" }}>
          <h2>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h2>
          <p>
            {item.source} · {new Date(item.date).toDateString()}
          </p>
        </article>
      ))}
    </main>
  );
}
