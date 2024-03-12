import { Heading, Label, Paragraph } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';

export default function DesignDocsPage() {
  return (
    <PageView className="w-full space-y-4">
      <Heading size="xl">Design Docs</Heading>
      <Paragraph>
        These docs will guide you in all of your design implementation endevours. Our entire design system and component
        library is available here for you to reference with code snippets.
      </Paragraph>

      <Heading size={'lg'}>Terminology</Heading>
      <Paragraph>AppBar = Application control bar, usually on sticks to top of the screen on desktop.</Paragraph>
      <Paragraph>
        MenuBar = The menu bar is the bar of features/pages to navigate to, usually on the left side of the screen on
        desktop
      </Paragraph>
    </PageView>
  );
}
