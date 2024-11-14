// components/PdfViewer.tsx
import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import Image from 'next/image';

// Manually set the worker source

interface PdfViewerProps {
    pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
    const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.37);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const renderIdRef = useRef<number>(0);

    useEffect(() => {
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
        const loadPdf = async () => {
            try {
                // const loadedPdf = await pdfjsLib.getDocument(pdfUrl).promise;
                const loadingTask = pdfjsLib.getDocument(pdfUrl);
                const loadedPdf = await loadingTask.promise;
                setPdf(loadedPdf);
            } catch (error) {
                console.error('Error loading PDF:', error);
            }
        };
        loadPdf();
    }, [pdfUrl]);

    const renderPage = async (pageNum: number) => {
        if (!pdf || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        // Generate a unique render ID for each render attempt
        const renderId = ++renderIdRef.current;
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Start rendering and track the task
        const renderTask = page.render({ canvasContext: context, viewport });

        try {
            await renderTask.promise;
        } catch (error) {
            // Only log the error if it is NOT a cancellation due to renderId mismatch
            if (renderIdRef.current === renderId) {
                console.error('Rendering error:', error);
            }
        }
    };

    // Re-render the page when `pdf`, `pageNumber`, or `scale` changes
    useEffect(() => {
        if (pdf) {
            renderPage(pageNumber);
            pdf?.numPages
        }
    }, [pdf, pageNumber, scale]);

    const handlePreviousPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () => setPageNumber((prev) => (pdf ? Math.min(prev + 1, pdf.numPages) : prev));
    const handleZoomIn = () => setScale((prev) => prev + 0.25);
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));

    return (
        <div className=' h-[100vh] bg-[#FBFAF8] flex text-[#636262 w-[50vw]'>
            <div className='h-[100vh] flex-grow w-[calc(50vw-100px)]'>                        
                <div className=' h-full flex '>
                    <div className='h-full overflow-hidden'>                        
                        <div className='w-[calc(50vw-100px)] overflow-hidden'>
                            <div className='flex flex-row-reverse items-center gap-3 h-[96px] pt-[26px] pr-4'>
                                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                                    <button onClick={handlePreviousPage} disabled={pageNumber <= 1}>Previous</button>
                                    <span style={{ margin: '0 15px' }}>Page {pageNumber} of {pdf?.numPages || '...'}</span>
                                    <button onClick={handleNextPage} disabled={pdf ? pageNumber >= pdf.numPages : true}>Next</button>
                                </div>
                                <div className='cursor-pointer w-7 h-7 rounded-md bg-[#f1ecec] hover:bg-[#d6d1d1] p-1' onClick={handleZoomOut}><Image src={'/assets/images/zoom_out.png'} alt='pan_tool' width={24} height={24} /></div>
                                <div className='cursor-pointer w-7 h-7 rounded-md bg-[#f1ecec] hover:bg-[#d6d1d1] p-1' onClick={handleZoomIn}><Image src={'/assets/images/zoom_in.png'} alt='pan_tool' width={24} height={24} /></div>
                                <div className='cursor-pointer w-7 h-7 rounded-md bg-[#f1ecec] hover:bg-[#d6d1d1] p-1'><Image src={'/assets/images/pan_tool.png'} alt='pan_tool' width={24} height={24} /></div>
                            </div>
                            <div className='w-[calc(50vw-100px)] overflow-scroll h-[calc(100vh-96px)]'>
                                <canvas ref={canvasRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[100vh] bg-[#F0EFED] w-[100px] p-[10px] pt-[20px] '>
                <div title="Add Or Remove Source" className='cursor-pointer float-right w-7 h-7 rounded-md bg-[#ccc8c8] hover:bg-[#d6d1d1] p-1'><Image src={'/assets/images/edit.png'} alt='pan_tool' width={24} height={24}/></div>
                <p className='text-center text-[15px] pt-8'>References</p>
                <div className='flex flex-col items-center gap-8 mt-[200px] gap-'>
                    <div className='cursor-pointer'>
                        <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                        <p className='text-[12px] text-[#636262]'>Doc1</p>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                        <p className='text-[12px] text-[#636262]'>Doc2</p>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                        <p className='text-[12px] text-[#636262]'>Doc3</p>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                        <p className='text-[12px] text-[#636262]'>Doc4</p>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='bg-[#D9D9D9] w-[60px] h-[60px] rounded-md'></div>
                        <p className='text-[12px] text-[#636262]'>Doc4</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;
