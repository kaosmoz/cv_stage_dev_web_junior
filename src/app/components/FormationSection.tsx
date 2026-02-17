export function FormationSection({ formations }) {
  return (
    <section className="mb-6 print:mb-4">
      <h2 className="text-xl font-normal tracking-wide mb-3 uppercase print:text-lg print:mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Formation
      </h2>
      
      {formations.map((formation, index) => (
        <div key={index} className="mb-4 print:mb-3">
          <div className="flex justify-between mb-1 print:mb-0.5">
            <h3 className="font-normal print:text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {formation.title} - {formation.institution}
            </h3>
            <span className="text-sm print:text-xs" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {formation.period}
            </span>
          </div>
          <p className="text-sm mb-1 print:text-xs print:mb-0.5" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            {formation.location}
          </p>
          <ul className="list-disc ml-5 text-sm space-y-1 print:text-xs print:space-y-0.5">
            {formation.details.map((detail, detailIndex) => (
              <li key={detailIndex} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
