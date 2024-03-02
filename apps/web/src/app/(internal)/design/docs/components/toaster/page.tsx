'use client';
import { DesignComponentHeader } from '../component-header';
import { Column } from '@/ui/layout/flex';
import { ComponentPropsGrid } from '../component-props-grid';
import { Label, Paragraph } from '@/ui/components/typography';
import { Button } from '@/ui/components/button';
import { toast } from '@/ui/components/toaster';
import { Grid } from '@/ui/layout/grid';
import { ToastBase } from '@/ui/components/toaster/toast.base';
import { ToastSuccess } from '@/ui/components/toaster/toast.success';
import { ToastError } from '@/ui/components/toaster/toast.error';

export default function ToasterPage() {
  return (
    <>
      <DesignComponentHeader
        title="Toast (Notification)"
        description="A toast is a non-modal, unobtrusive window element used to display brief, auto-expiring windows of information to a user. Toasts are generally used to display notifications, alerts, or messages. They are often used to display notifications of new messages, updates, or other events."
      />

      <Column gap={4} className="mt-8">
        <Paragraph>
          Note: Many toasts may be presented at once and can stack. Press the "Show toast" buttons several times then
          hover your mouse over the stack of notifications
        </Paragraph>
        <Label>Default toast</Label>
        <Grid numCols={2}>
          <Button variant={'ghost'} onClick={() => toast('Default toast message')}>
            Default
          </Button>

          <Button variant={'ghost'} onClick={() => toast.success('Success toast message')}>
            Success
          </Button>
        </Grid>

        <ToastSuccess
          description="This is a success message"
          title="Success"
          actionButtons={[
            {
              variant: 'secondary',
              label: 'Action',
              onClick: () => console.log('Action clicked'),
            },
          ]}
        />

        <ToastError
          description="This is an error message"
          title="Error"
          actionButtons={[
            {
              variant: 'secondary',
              label: 'Action',
              onClick: () => console.log('Action clicked'),
            },
          ]}
        />

        <ComponentPropsGrid
          params={[
            {
              name: 'param0',
              type: ['string', 'ReactNode'],
              description: 'The message to display in the toast, can be a string or a React component',
            },
            {
              name: 'param1',
              type: 'object',
              optional: true,
              description: 'Options to customize the toast, see details above',
            },
          ]}
        />
      </Column>
    </>
  );
}
