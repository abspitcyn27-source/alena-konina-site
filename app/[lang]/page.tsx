import HomeHero from "@/components/HomeHero";
import ServiceTiles from "@/components/ServiceTiles";
import WorksStrip from "@/components/WorksStrip";
import HomeVideoBlock from "@/components/HomeVideoBlock";
import CTAButtons from "@/components/CTAButtons";
import { COPY, type Lang } from "@/lib/content";

export default function LangHome({ params }: { params: { lang: Lang } }) {
  const lang = params.lang === "en" ? "en" : "ru";
  const t = COPY[lang];

  return (
    <main>
      <HomeHero lang={lang} />

      <section className="section sectionTight">
        <div className="sectionHead">
          <h2 className="h1">{lang === "ru" ? "Услуги и цены" : "Services & prices"}</h2>
          <p className="lead">
            {lang === "ru"
              ? "Выберите услугу — откроется портфолио с примерами работ."
              : "Pick a service — it opens its portfolio with examples."}
          </p>
        </div>
        <ServiceTiles lang={lang} />
      </section>

      <section className="section">
        <div className="sectionHead">
          <h2 className="h1">{lang === "ru" ? "Работы" : "Works"}</h2>
          <p className="lead">
            {lang === "ru"
              ? "Небольшое превью — больше примеров в портфолио."
              : "Quick preview — more examples in Portfolio."}
          </p>
        </div>
        <WorksStrip />
        <div style={{ marginTop: 14 }}>
          <CTAButtons lang={lang} />
        </div>
      </section>

      <section className="section">
        <HomeVideoBlock lang={lang} />
      </section>

      <section className="section">
        <div className="grid">
          <div className="card" style={{ gridColumn: "span 12" }}>
            <h2 className="h1">{t.whyTitle}</h2>
            <ul className="list">
              {t.whyItems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ gridColumn: "span 12" }}>
            <h2 className="h1">{t.locationTitle}</h2>
            <p className="muted">{t.locationText}</p>
            <div style={{ marginTop: 12 }}>
              <CTAButtons lang={lang} />
            </div>
          </div>

          <div className="card" style={{ gridColumn: "span 12" }}>
            <h2 className="h1">{t.academyTitle}</h2>
            <p className="muted">{t.academyText}</p>
            <div style={{ marginTop: 12 }}>
              <CTAButtons lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
