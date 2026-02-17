export function ContactSection({ contact }) {
  return (
    <section className="mb-6 print:mb-4">
      <h2 className="text-xl font-normal tracking-wide mb-3 uppercase print:text-lg print:mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 print:grid-cols-2 print:gap-1">
        <p style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{contact.address}</p>
        <p style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{contact.email}</p>
        <p style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{contact.phone}</p>
        {contact.github && (
          <p style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <a 
              href={contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline dark:text-white print:text-black"
            >
              {contact.github}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
