import { Column } from '@/ui/layout/flex';
import { Heading, Label, Paragraph } from '@/ui/components/typography';

export default function Typography() {
  return (
    <Column>
      <Column gap={4} className="mt-8">
        <Heading size={'xl'}>Typography</Heading>
        <Heading size={'lg'} variant={'secondary'}>
          Text reference material
        </Heading>
      </Column>

      <Column gap={4} className="mt-8">
        <Heading size={'xl'}>Heading/Large (h1)</Heading>
        <Heading size={'xl'} variant={'secondary'}>
          Heading/XLarge (h1 secondary)
        </Heading>
        <Heading size={'lg'}>Heading/Medium (h2)</Heading>
        <Heading size={'lg'} variant={'secondary'}>
          Heading/Large (h2 secondary)
        </Heading>
        <Heading size={'md'}>Heading/Small (h3)</Heading>
        <Heading size={'md'} variant={'secondary'}>
          Heading/Medium (h3 secondary)
        </Heading>
        <Heading size={'sm'}>Heading/XSmall (h4)</Heading>
        <Heading size={'sm'} variant={'secondary'}>
          Heading/Small (h4 secondary)
        </Heading>
        <Heading size={'xs'}>Heading/XSmall (h5 primary)</Heading>
      </Column>

      <Column gap={4} className="mt-8">
        <Label size={'lg'}>Label/Large</Label>
        <Label size={'lg'} variant={'secondary'}>
          Label/Large
        </Label>
        <Label size={'md'}>Label/Medium</Label>
        <Label size={'md'} variant={'secondary'}>
          Label/Medium
        </Label>
        <Label size={'sm'}>Label/Small</Label>
        <Label size={'sm'} variant={'secondary'}>
          Label/Small
        </Label>
      </Column>

      <Column gap={4} className="mt-8">
        <Paragraph size={'lg'}>Paragraph/Large</Paragraph>
        <Paragraph size={'lg'} variant={'secondary'}>
          Paragraph/Large
        </Paragraph>
        <Paragraph size={'md'}>Paragraph/Medium</Paragraph>
        <Paragraph size={'md'} variant={'secondary'}>
          Paragraph/Medium
        </Paragraph>
        <Paragraph size={'sm'}>Paragraph/Small</Paragraph>
        <Paragraph size={'sm'} variant={'secondary'}>
          Paragraph/Small
        </Paragraph>
      </Column>
    </Column>
  );
}
