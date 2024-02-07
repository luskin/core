# Creating Icons

We use SVGs as React Components in order to properly style and manipulate our svgs. In order to create a new svg, follow these steps:

1. Copy the SVG from Figma (or other source)
2. Go to https://www.svgviewer.dev/ to convert to a React component
3. Create the react component SVG in the file `svgs/you-name.svg`
4. Update the component props types to: `props: SVGProps<SVGSVGElement>`
5. Make sure that if the SVG is meant to have it's color set that you set all fill's to `currentColor`
6. Export your new componentized svg in `svgs/index.ts`
