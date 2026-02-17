export function ProfileSection({ paragraphs }) {
  return (
    <section className="mb-6 print:mb-4">
      <h2 className="text-xl font-normal tracking-wide mb-3 uppercase print:text-lg print:mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Profil
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          className={`text-sm leading-relaxed print:text-xs ${index > 0 ? 'mt-3 print:mt-2' : ''}`} 
          style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}
