'use client';
import { DesignComponentHeader } from '../component-header';
import { Column } from '@/ui/layout/flex';
import { ComponentPropsGrid } from '../component-props-grid';
import { Label, Paragraph } from '@/ui/components/typography';
import { Button } from '@/ui/components/button';
import { notification } from '@/ui/components/notification';
import { Grid } from '@/ui/layout/grid';
import { NotificationSuccess } from '@/ui/components/notification/notification.success';
import { NotificationError } from '@/ui/components/notification/notification.error';

export default function NotificationPage() {
  return (
    <>
      <DesignComponentHeader
        title="Notification"
        description="A notification is a non-modal, unobtrusive window element used to display brief, auto-expiring windows of information to a user. Notifications are generally used to display notifications, alerts, or messages. They are often used to display notifications of new messages, updates, or other events."
      />

      <Column gap={4} className="mt-8">
        <Paragraph>
          Note: Many notifications may be presented at once and can stack. Press the "Show notification" buttons several
          times then hover your mouse over the stack of notifications
        </Paragraph>
        <Grid numCols={2} gap={2}>
          <Button
            variant={'primary'}
            onClick={() =>
              notification.success({
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
              notification.error({
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
          Notifications
        </Label>
        <div className="w-[465px]">
          <NotificationSuccess
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
          <NotificationSuccess
            title="No description"
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
          <NotificationError
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

        <div className="w-[465px]">
          <NotificationError
            description="This is a longer error message that spans multiple lines. The notification will grow to accommodate the content. This is a longer error message that spans multiple lines. The notification will grow to accommodate the content."
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
              description: 'The title to display in the notification',
            },
            {
              name: 'description',
              type: 'object',
              optional: true,
              description: 'The description to display in the notification',
            },
            {
              name: 'actionButtons',
              type: 'array',
              optional: true,
              description: 'An array of action buttons (ButtonProps) to display in the notification',
            },
            {
              name: 'duration',
              type: 'array',
              optional: true,
              description: 'How long to display the notification in milliseconds',
            },
          ]}
        />
      </Column>
    </>
  );
}
