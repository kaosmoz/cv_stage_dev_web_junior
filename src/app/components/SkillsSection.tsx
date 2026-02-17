export function SkillsSection({ skills }) {
  return (
    <section className="mb-6 print:mb-4">
      <h2 className="text-xl font-normal tracking-wide mb-3 uppercase print:text-lg print:mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Compétences Techniques
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 print:grid-cols-4 print:gap-2">
        {skills.map((skill, index) => (
          <div key={index}>
            <p className="text-sm print:text-xs" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
