import { QuartzTransformerPlugin } from "../types"
import { Root, Element, Text } from "hast"
import { visit } from "unist-util-visit"

export interface Options {
  enablePDFEmbeds: boolean
}

const defaultOptions: Options = {
  enablePDFEmbeds: true,
}

export const PDFEmbed: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  
  return {
    name: "PDFEmbed",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root, _file) => {
            if (!opts.enablePDFEmbeds) return

            visit(tree, "element", (node: Element) => {
              // Transform img tags pointing to PDF files
              if (
                node.tagName === "img" &&
                node.properties &&
                typeof node.properties.src === "string" &&
                node.properties.src.endsWith(".pdf")
              ) {
                const pdfUrl = node.properties.src
                const altText = node.properties.alt || "PDF Document"

                // Create PDF embed container
                const pdfContainer: Element = {
                  type: "element",
                  tagName: "div",
                  properties: { className: ["pdf-embed"] },
                  children: [
                    {
                      type: "element",
                      tagName: "iframe",
                      properties: {
                        src: `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`,
                        title: altText,
                        type: "application/pdf",
                      },
                      children: [],
                    },
                    {
                      type: "element",
                      tagName: "div",
                      properties: { className: ["pdf-fallback"] },
                      children: [
                        {
                          type: "element",
                          tagName: "p",
                          properties: {},
                          children: [
                            {
                              type: "text",
                              value: "Your browser doesn't support embedded PDFs.",
                            } as Text,
                          ],
                        },
                        {
                          type: "element",
                          tagName: "a",
                          properties: {
                            href: pdfUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          children: [
                            {
                              type: "text",
                              value: `📄 Open ${altText}`,
                            } as Text,
                          ],
                        },
                      ],
                    },
                  ],
                }

                // Replace the img tag with the PDF container
                Object.assign(node, pdfContainer)
              }
            })
          }
        },
      ]
    },
  }
}
