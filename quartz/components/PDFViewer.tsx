import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PDFViewer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div className={classNames(displayClass, "pdf-viewer")}>
      <style>{`
        .pdf-embed {
          width: 100%;
          height: 600px;
          border: 1px solid var(--lightgray);
          border-radius: 8px;
          background: var(--light);
          margin: 1rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .pdf-embed iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .pdf-fallback {
          padding: 2rem;
          text-align: center;
          background: var(--light);
          border: 1px solid var(--lightgray);
          border-radius: 8px;
          margin: 1rem 0;
        }
        
        .pdf-fallback a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
          padding: 0.5rem 1rem;
          background: var(--tertiary);
          border-radius: 4px;
          display: inline-block;
          margin-top: 1rem;
          transition: all 0.2s ease;
        }
        
        .pdf-fallback a:hover {
          background: var(--secondary);
          color: var(--light);
        }
        
        @media (max-width: 768px) {
          .pdf-embed {
            height: 400px;
          }
        }
      `}</style>
    </div>
  )
}

PDFViewer.css = `
.pdf-viewer {
  /* Additional global styles can go here */
}
`

export default (() => PDFViewer) satisfies QuartzComponentConstructor
