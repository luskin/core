import { DesignComponentHeader } from '../component-header';
import { Column } from '@/ui/layout/flex';
import { ComponentPropsGrid } from '../component-props-grid';
import { Button } from '@/ui/components/button';
import { Grid } from '@/ui/layout/grid';
import { Modal } from '@/ui/components/modal';
import { Label } from '@/ui/components/typography';
import { notification } from '@/ui/components/notification';

export default function ModalPage() {
  return (
    <>
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
        </Grid>

        <ComponentPropsGrid
          params={[
            {
              name: 'actionButtons',
              type: 'array',
              optional: true,
              description: 'An array of action buttons (ButtonProps) to display in the notification',
            },
          ]}
        />
      </Column>
    </>
  );
}
