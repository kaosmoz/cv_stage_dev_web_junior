import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CVHeader } from './components/CVHeader';
import { ContactSection } from './components/ContactSection';
import { ProfileSection } from './components/ProfileSection';
import { FormationSection } from './components/FormationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { InterestsSection } from './components/InterestsSection';
import { DarkModeToggle } from './components/DarkModeToggle';
import { DownloadButton } from './components/DownloadButton';
import { cvData } from './data/cvData';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cvRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;

    // Temporarily disable dark mode for PDF generation
    const originalDarkMode = isDarkMode;
    if (isDarkMode) {
      setIsDarkMode(false);
      // Wait for the DOM to update
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    try {
      const element = cvRef.current;
      
      // Add a class to optimize for PDF export
      element.classList.add('pdf-export');
      
      // Wait for styles to apply
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // Generate canvas from the CV element with higher quality
      const canvas = await html2canvas(element, {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200, // Fixed width for consistent rendering
      });

      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;
      
      // Calculate dimensions
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // If content fits on one page
      if (imgHeight <= pdfHeight) {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } else {
        // Content spans multiple pages
        const imgData = canvas.toDataURL('image/png');
        let heightLeft = imgHeight;
        let position = 0;
        let page = 0;

        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Add subsequent pages
        while (heightLeft > 0) {
          position = -(pdfHeight * (page + 1));
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
          page++;
        }
      }
      
      pdf.save('CV_Maxime_Garin.pdf');

      // Remove the PDF export class
      element.classList.remove('pdf-export');

    } catch (error) {
      console.error('Error generating PDF:', error);
      // Make sure to remove the class even if there's an error
      if (cvRef.current) {
        cvRef.current.classList.remove('pdf-export');
      }
    } finally {
      // Restore original dark mode state
      if (originalDarkMode) {
        setIsDarkMode(true);
      }
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Controls */}
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
        <DownloadButton onDownload={handleDownloadPDF} />

        {/* CV Content */}
        <div className="p-8 flex justify-center">
          <div 
            ref={cvRef}
            className="max-w-4xl w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300"
          >
            <CVHeader 
              name={cvData.header.name} 
              title={cvData.header.title} 
            />

            <ContactSection contact={cvData.contact} />

            <ProfileSection paragraphs={cvData.profile} />

            <FormationSection formations={cvData.formations} />

            <ExperienceSection experiences={cvData.experiences} />

            <SkillsSection skills={cvData.skills} />

            <LanguagesSection languages={cvData.languages} />

            <InterestsSection interests={cvData.interests} />
          </div>
        </div>
      </div>
    </div>
  );
}
