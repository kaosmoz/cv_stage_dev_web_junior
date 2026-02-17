export function InterestsSection({ interests }) {
  return (
    <section className="mb-6 print:mb-4">
      <h2 className="text-xl font-normal tracking-wide mb-3 uppercase print:text-lg print:mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Centres d'Intérêt
      </h2>
      <div className="space-y-2 print:space-y-1">
        {interests.map((interest, index) => (
          <div key={index}>
            <h3 className="font-normal text-sm print:text-xs" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {interest.category}:
            </h3>
            <p className="text-sm print:text-xs" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {interest.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
