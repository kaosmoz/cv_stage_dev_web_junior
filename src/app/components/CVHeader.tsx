export function CVHeader({ name, title }) {
  return (
    <header className="border-b-2 border-current pb-6 mb-6 print:pb-4 print:mb-4">
      <h1 className="text-4xl font-normal tracking-wide mb-2 print:text-3xl" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        {name}
      </h1>
      <p className="text-base font-normal print:text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        {title}
      </p>
    </header>
  );
}
