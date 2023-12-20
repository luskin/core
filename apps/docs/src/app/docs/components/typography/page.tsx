import { Typography } from "@repo/ui"
import { Size } from "@repo/ui"

export default function Page() {
  // Define sample text for demonstration
  const sampleSizes: Array<Size> = [
    "xlarge",
    "large",
    "base",
    "small",
    "xsmall",
  ]
  const sampleText = "The quick brown fox jumps over the lazy dog"

  return (
    <div className="space-y-10 p-8">
      <section className="space-y-4">
        <Typography.Heading size="xlarge">
          Typography Showcase
        </Typography.Heading>

        {/* Heading Section */}
        <div>
          <Typography.Heading size="large">Headings</Typography.Heading>
          {sampleSizes.map((size) => (
            <div key={`heading-${size}`} className="mb-2">
              <Typography.Heading size={size}>
                {`${size}: ${sampleText}`}
              </Typography.Heading>
            </div>
          ))}
        </div>

        {/* Label Section */}
        <div>
          <Typography.Heading size="large">Labels</Typography.Heading>
          {sampleSizes.map((size) => (
            <div key={`label-${size}`} className="mb-2">
              <Typography.Label size={size}>
                {`${size}: ${sampleText}`}
              </Typography.Label>
            </div>
          ))}
        </div>

        {/* Paragraph Section */}
        <div>
          <Typography.Heading size="large">Paragraphs</Typography.Heading>
          {sampleSizes.map((size) => (
            <div key={`paragraph-${size}`} className="mb-2">
              <Typography.Paragraph size={size}>
                {`${size}: ${sampleText}`}
              </Typography.Paragraph>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
