'use client';
import { DesignComponentHeader } from '../component-header';
import { Column } from '@/ui/layout/flex';
import { ComponentPropsGrid } from '../component-props-grid';
import { Label, Paragraph } from '@/ui/components/typography';
import { Button } from '@/ui/components/button';
import { toast } from '@/ui/components/toaster';
import { Grid } from '@/ui/layout/grid';
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
        <Grid numCols={2} gap={2}>
          <Button
            variant={'primary'}
            onClick={() =>
              toast.success({
                title: 'Success',
                description: 'This is a success message',
                actionButtons: [
                  {
                    variant: 'secondary',
                    label: 'Action',
                    onClick: () => console.log('Action clicked'),
                  },
                ],
              })
            }
          >
            Success
          </Button>

          <Button
            variant={'destructive'}
            onClick={() =>
              toast.error({
                title: 'Error',
                description: 'This is an error message',
                actionButtons: [
                  {
                    variant: 'secondary',
                    label: 'Action',
                    onClick: () => console.log('Action clicked'),
                  },
                ],
              })
            }
          >
            Error
          </Button>
        </Grid>

        <Label size={'lg'} className="mt-4">
          Toasts
        </Label>
        <div className="w-[465px]">
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
        </div>

        <div className="w-[465px]">
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
        </div>

        <ComponentPropsGrid
          params={[
            {
              name: 'title',
              type: ['string'],
              description: 'The title to display in the toast',
            },
            {
              name: 'description',
              type: 'object',
              optional: true,
              description: 'The description to display in the toast',
            },
            {
              name: 'actionButtons',
              type: 'array',
              optional: true,
              description: 'An array of action buttons (ButtonProps) to display in the toast',
            },
            {
              name: 'duration',
              type: 'array',
              optional: true,
              description: 'How long to display the toast in milliseconds',
            },
          ]}
        />
      </Column>
    </>
  );
}
