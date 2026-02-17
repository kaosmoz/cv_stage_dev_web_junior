export function LanguagesSection({ languages }) {
  return (
    <section className="mb-6 print:mb-4">
      <h2 className="text-xl font-normal tracking-wide mb-3 uppercase print:text-lg print:mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Langues
      </h2>
      <ul className="list-disc ml-5 text-sm space-y-1 print:text-xs print:space-y-0.5">
        {languages.map((lang, index) => (
          <li key={index} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            {lang.language}: {lang.level}
          </li>
        ))}
      </ul>
    </section>
  );
}
