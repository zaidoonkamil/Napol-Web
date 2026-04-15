import Image from "next/image";

function StoreBadge({ href, label, icon, tone = "default" }) {
  if (!href) {
    return null;
  }

  const badgeClassName = [
    "store-badge",
    tone === "apple" ? "store-badge-apple" : "",
    tone === "google" ? "store-badge-google" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={badgeClassName}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <span className="store-badge-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="store-badge-text">{label}</span>
    </a>
  );
}

export default function PortfolioGrid({ items = [], emptyTitle, emptyText }) {
  if (!items.length) {
    return (
      <div className="empty-state">
        <span className="eyebrow">معرض الأعمال</span>
        <h3>{emptyTitle || "لم تتم إضافة أعمال بعد"}</h3>
        <p>
          {emptyText ||
            "أضف أول مشروع يدوياً من ملف البيانات حتى يظهر هنا ضمن الموقع."}
        </p>
      </div>
    );
  }

  return (
    <div className="portfolio-grid">
      {items.map((item) => (
        <article className="project-card" key={item.id}>
          <div className="project-media">
            <Image
              src={item.image_url}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="project-copy">
            <div className="project-meta">
              <span>{item.project_type}</span>
              <span>{item.delivery_mode}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.short_description}</p>

            <div className="tag-row">
              {item.tech_stack
                ?.split(",")
                .map((tag) => tag.trim())
                .filter(Boolean)
                .map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
            </div>

            <div className="store-links">
              {item.project_url ? (
                <a
                  className="inline-link project-link"
                  href={item.project_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  زيارة المشروع
                </a>
              ) : null}

              <StoreBadge
                href={item.app_store_url}
                label="App Store"
                tone="apple"
                icon={
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      d="M15.36 12.45c.02 2.02 1.77 2.69 1.79 2.7-.01.05-.28.96-.92 1.91-.55.82-1.13 1.63-2.03 1.65-.88.02-1.17-.52-2.18-.52-1.02 0-1.34.5-2.16.54-.86.03-1.52-.87-2.08-1.69-1.15-1.67-2.03-4.72-.85-6.79.58-1.03 1.63-1.68 2.76-1.7.86-.02 1.68.58 2.18.58.5 0 1.45-.72 2.44-.62.41.02 1.58.17 2.32 1.27-.06.03-1.38.81-1.37 2.67Zm-1.99-5.69c.46-.56.78-1.33.69-2.1-.67.03-1.49.44-1.97 1-.43.5-.81 1.28-.71 2.03.75.06 1.52-.38 1.99-.93Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />

              <StoreBadge
                href={item.google_play_url}
                label="Google Play"
                tone="google"
                icon={
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      d="M3.6 2.86 13.73 13 3.63 23.1c-.4-.2-.63-.57-.63-1.11V3.98c0-.53.21-.91.6-1.12Z"
                      fill="currentColor"
                      opacity=".85"
                    />
                    <path
                      d="M16.88 16.14 6.24 22.3 14.56 14l2.32 2.14Z"
                      fill="currentColor"
                      opacity=".7"
                    />
                    <path
                      d="M16.93 7.81 14.56 10 6.2 1.69l10.73 6.12Z"
                      fill="currentColor"
                    />
                    <path
                      d="m21 11.98-4.07 2.35L14.1 11.7l2.83-2.62L21 11.41c.67.39.67 1.18 0 1.57Z"
                      fill="currentColor"
                      opacity=".9"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
