import { Heading, Paragraph } from '@/ui/components/typography';
import TestComponent from './tester';
import { getSession } from '@/lib/auth/auth.session';

export default async function QuotePage() {
  const session = await getSession();
  return (
    <main>
      <Heading size="xl">Hello, {session ? session.displayName : 'unauthed user'}</Heading>
      <TestComponent />
      <Paragraph size={'lg'} variant={'secondary'} className="mt-4">
        Compare rates from top carriers all in one place
      </Paragraph>
      <Heading size="xl" className="mt-4">
        XLarge Heading
      </Heading>
      <Heading size="lg" className="mt-4">
        $45.00 total
      </Heading>
      <Heading size="md" className="mt-4">
        Medium Heading
      </Heading>
      <Heading size="sm" className="mt-4">
        Small Heading
      </Heading>
      <Heading size="xs" className="mt-4">
        XSmall Heading
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
      <Heading size="xl" className="mt-4">
        More page content...
      </Heading>
    </main>
  );
}
