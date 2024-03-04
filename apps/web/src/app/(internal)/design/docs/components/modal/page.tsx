import { DesignComponentHeader } from '../component-header';
import { Column } from '@/ui/layout/flex';
import { ComponentPropsGrid } from '../component-props-grid';
import { Button } from '@/ui/components/button';
import { Grid } from '@/ui/layout/grid';
import { Modal, ModalTrigger } from '@/ui/components/modal';
import { Label } from '@/ui/components/typography';

export default function ModalPage() {
  return (
    <>
      <DesignComponentHeader
        title="Modal"
        description="A modal is a dialog box or popup, displayed over the current page. Modals are used to display content that requires user interaction. They are often used to prompt the user for information or to confirm an action."
      />

      <Column gap={4} className="mt-8">
        <Grid numCols={2} gap={2}>
          <Modal
            title={'Default title'}
            iconName="exclamationPoint"
            iconClassName="bg-error-10 text-white"
            trigger={<Button variant={'primary'}>Default</Button>}
          >
            <Label>Content here</Label>
          </Modal>

          <Modal trigger={<Button variant={'secondary'}>Custom modal</Button>}>
            <Label>Content here</Label>
          </Modal>
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
