import ServiceTiles from "@/components/ServiceTiles";
import type { Lang } from "@/lib/content";

export default function PortfolioIndex({ params }: { params: { lang: Lang } }) {
  const lang = params.lang === "en" ? "en" : "ru";

  return (
    <main>
      <section className="section">
        <div className="sectionHead">
          <h1 className="h1">{lang === "ru" ? "Портфолио" : "Portfolio"}</h1>
          <p className="lead">
            {lang === "ru"
              ? "Выберите услугу — откроется галерея с примерами работ."
              : "Choose a service to open its gallery."}
          </p>
        </div>

        <ServiceTiles lang={lang} />
      </section>
    </main>
  );
}
