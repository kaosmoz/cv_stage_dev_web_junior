import { Download } from 'lucide-react';

export function DownloadButton({ onDownload }) {
  const handleDownload = async () => {
    try {
      await onDownload();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed top-6 left-6 px-4 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity print:hidden z-10 flex items-center gap-2"
      aria-label="Download as PDF"
    >
      <Download className="w-5 h-5" />
      <span className="font-normal" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        Télécharger PDF
      </span>
    </button>
  );
}
