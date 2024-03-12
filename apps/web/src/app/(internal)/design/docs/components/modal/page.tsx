import { DesignComponentHeader } from '../component-header';
import { Column } from '@/ui/layout/flex';
import { ComponentPropsGrid } from '../component-props-grid';
import { Button } from '@/ui/components/button';
import { Grid } from '@/ui/layout/grid';
import { Modal } from '@/ui/components/modal';
import { Label, Paragraph } from '@/ui/components/typography';
import { notification } from '@/ui/components/notification';
import PageView from '@/ui/layout/view/page-view';

export default function ModalPage() {
  return (
    <PageView>
      <DesignComponentHeader
        title="Modal"
        description="A modal is a dialog box or popup, displayed over the current page. Modals are used to display content that requires user interaction. They are often used to prompt the user for information or to confirm an action."
      />

      <Column gap={4} className="mt-8">
        <Grid numCols={4} gap={2}>
          <Modal.Success
            title={'Successful operation'}
            trigger={<Button variant={'primary'}>Success modal</Button>}
            actionButtons={[
              {
                label: 'Refresh',
                variant: 'secondary',
              },
            ]}
          >
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> ^ this area grows vertically with content</Label>
          </Modal.Success>

          <Modal.Error
            title={'An error occurred while performing your search'}
            trigger={<Button variant={'destructive'}>Error modal</Button>}
          >
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> ^ this area grows vertically with content</Label>
          </Modal.Error>

          <Modal.Default
            title={'A default modal'}
            trigger={<Button variant={'ghost'}>Default</Button>}
            iconName="alienShip"
            iconClassName="bg-slate-12 text-slate-1"
          >
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> ^ this area grows vertically with content</Label>
          </Modal.Default>

          <Modal.Default noCloseButton={true} trigger={<Button variant={'tertiary'}>Empty modal</Button>}>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> - Content here</Label>
            <Label> ^ this area grows vertically with content</Label>
          </Modal.Default>

          <Modal.Base trigger={<Button variant={'ghost'}>Custom content modal</Button>}>
            <div className="bg-success-10 flex h-32 w-full items-center justify-center p-4">
              <Label variant={'inverted'} size={'lg'}>
                Completely custom content
              </Label>
            </div>
            <div className="bg-warning-10 h-15 w-full p-4"></div>
            <div className="bg-information-7 flex h-32 w-full items-center justify-center p-4">
              <Paragraph>Anything can be put in a base modal</Paragraph>
            </div>
          </Modal.Base>
        </Grid>

        <ComponentPropsGrid
          params={[
            {
              name: 'title',
              type: 'string',
              optional: true,
              description: 'The title of the modal',
            },
            {
              name: 'trigger',
              type: 'ReactNode',
              optional: true,
              description: 'The trigger element that opens the modal (if not using controlled mode)',
            },
            {
              name: 'open',
              type: 'boolean',
              optional: true,
              description: 'When using controlled mode, this prop is used to set the modal as open',
            },
            {
              name: 'onOpenChange',
              type: 'function',
              optional: true,
              description: 'Callback function to execute when the modals open state changes',
            },
            {
              name: 'iconName',
              type: 'string',
              optional: true,
              description: 'The name of the icon to display in the modal',
            },
            {
              name: 'iconClassName',
              type: 'string',
              optional: true,
              description: 'The class name to apply to the icon',
            },
            {
              name: 'closeButtonLabel',
              type: 'string',
              optional: true,
              description: 'The label to display on the close action button (not upper right X)',
            },
            {
              name: 'noCloseButton',
              type: 'boolean',
              optional: true,
              description: 'Whether to display the close action button (not upper right X)',
            },
            {
              name: 'noCloseXButton',
              type: 'boolean',
              optional: true,
              description: 'Whether to display the upper right X close button',
            },
            {
              name: 'onClose',
              type: 'function',
              optional: true,
              description: 'Callback function to execute when the modal is closed',
            },
            {
              name: 'disableCloseOnClickOutside',
              type: 'boolean',
              optional: true,
              description: 'Whether to disable closing the modal when clicking outside of it',
            },
            {
              name: 'closeXButtonContainerClassName',
              type: 'string',
              optional: true,
              description:
                'The class name to apply to the container of the upper right X close button. For example, if you wanted it only 8px offset from top and right you would set this to "top-2 right-2"',
            },
            {
              name: 'actionButtons',
              type: 'array',
              optional: true,
              description: 'An array of action buttons (ButtonProps) to display in the notification',
            },
          ]}
        />
      </Column>
    </PageView>
  );
}
