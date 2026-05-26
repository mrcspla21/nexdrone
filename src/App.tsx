import React, { useState } from 'react';
import Report from './components/Report';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';

export default function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingJpeg, setIsGeneratingJpeg] = useState(false);

  const handleDownloadPDF = async () => {
    const reportWrapper = document.getElementById('report-wrapper');
    if (!reportWrapper) return;
    
    setIsGenerating(true);
    
    const originalScrollY = window.scrollY;
    
    // reset scroll to top to fix html2canvas clipping
    window.scrollTo(0, 0);
    
    reportWrapper.style.gap = '0px';
    document.body.classList.add('pdf-generating');

    // Wait for DOM to paint layout changes (especially web fonts and styles)
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      const pages = Array.from(document.querySelectorAll('.page-wrapper')) as HTMLElement[];
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        
        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: true,
          logging: false,
          scrollY: -window.scrollY,
          width: 794,
          height: 1123,
        });
        
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      }
      
      pdf.save('Diagnostico_Marca_Leydux.pdf');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Ocorreu um erro ao gerar o arquivo automaticamente. Para contornar, clique em "Abrir em nova guia" (ícone ↗) no canto superior direito e use a opção de impressão do navegador.');
    } finally {
      reportWrapper.style.gap = '2rem';
      document.body.classList.remove('pdf-generating');
      window.scrollTo(0, originalScrollY);
      setIsGenerating(false);
    }
  };

  const handleDownloadJPEG = async () => {
    const reportWrapper = document.getElementById('report-wrapper');
    if (!reportWrapper) return;
    
    setIsGeneratingJpeg(true);
    
    const originalScrollY = window.scrollY;
    
    // reset scroll to top to fix html2canvas clipping
    window.scrollTo(0, 0);
    
    reportWrapper.style.gap = '0px';
    document.body.classList.add('pdf-generating');

    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      const pages = Array.from(document.querySelectorAll('.page-wrapper')) as HTMLElement[];
      const zip = new JSZip();
      
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        
        const canvas = await html2canvas(page, {
          scale: 2,
          useCORS: true,
          logging: false,
          scrollY: -window.scrollY,
          width: 794,
          height: 1123,
        });
        
        const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
        // Sometimes the dataUrl is empty or malformed if the canvas is blank
        if (!dataUrl || dataUrl.length < 20 || dataUrl === 'data:,') {
             console.error('Canvas returned empty base64 string for page ' + i);
        }

        const data = dataUrl.split(',')[1];
        zip.file(`pagina_${i + 1}.jpg`, data, { base64: true });
      }
      
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'Diagnostico_Marca_Leydux_Paginas.zip');
    } catch (error) {
      console.error('Erro ao gerar JPEGs:', error);
      alert('Ocorreu um erro ao gerar as imagens.');
    } finally {
      reportWrapper.style.gap = '2rem';
      document.body.classList.remove('pdf-generating');
      window.scrollTo(0, originalScrollY);
      setIsGeneratingJpeg(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-200">
      
      {/* Top Toolbar - Hidden when printing */}
      <div className="no-print sticky top-0 z-50 w-full bg-[#0f1115] shadow-md border-b border-[rgba(255,255,255,0.1)] px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="https://leydux.com.br/wp-content/uploads/2026/05/leydux.png" 
            alt="Leydux" 
            className="h-6 object-contain opacity-90"
          />
          <h1 className="text-[rgba(255,255,255,0.9)] font-semibold text-sm border-l border-[rgba(255,255,255,0.2)] pl-3 uppercase tracking-wider">
            Gerador de Relatório
          </h1>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={handleDownloadJPEG}
            disabled={isGenerating || isGeneratingJpeg}
            className="bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-50 px-5 py-2.5 rounded-md text-sm font-bold transition-colors shadow-sm flex items-center space-x-2"
          >
            {isGeneratingJpeg ? (
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            )}
            <span>{isGeneratingJpeg ? 'Gerando ZIP...' : 'Baixar JPEGs'}</span>
          </button>
          
          <button 
            onClick={handleDownloadPDF}
            disabled={isGenerating || isGeneratingJpeg}
            className="bg-[#C5A059] hover:bg-[#E8C377] text-slate-900 disabled:opacity-50 px-5 py-2.5 rounded-md text-sm font-bold transition-colors shadow-sm flex items-center space-x-2"
          >
            {isGenerating ? (
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            )}
            <span>{isGenerating ? 'Gerando PDF...' : 'Baixar PDF'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main id="main-content" className="py-12 print:py-0 px-4 print:px-0 flex justify-center">
        <div id="report-container" className="w-full max-w-[794px]">
          <Report />
        </div>
      </main>

    </div>
  );
}
