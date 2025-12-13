import React from 'react'
import { pdfjs , Document, Page} from 'react-pdf';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#Components/index.js";
import {Download} from "lucide-react"




const Resume = () => {
    return (
        <>
            <div id="window-header " className="flex items-center gap-3">
                <WindowControls target="resume"/>
                <h2>Resume.pdf</h2>

                <a
                    href="files/resume.pdf"
                   download
                    className="cursor-pointer"
                   title="Download resume"
                >
                    <Download className="icon"/>
                </a>
            </div>

            <Document file="files/resume.pdf">
                <Page
                    pageNumber={1}
                    renderAnnotationLayer
                    renderTextLayer
                />
            </Document>

        </>
    )
}

const ResumeWindow= WindowWrapper(Resume, "resume");
export default ResumeWindow
