'use client';
import { DesignComponentHeader } from '../component-header';
import { Column, Row } from '@/ui/layout/flex';
import { ComponentPropsGrid } from '../component-props-grid';
import { Progress } from '@/ui/components/progress';
import { Button } from '@/ui/components/button';
import { useState } from 'react';
import PageView from '@/ui/layout/view/page-view';

export default function ProgressPage() {
  const [progress, setProgress] = useState(60);
  return (
    <PageView>
      <DesignComponentHeader
        title="Progress"
        description="The progress component is used to display the progress of a task or process. It is often used to show the user how far along they are in a process, such as uploading a file or downloading a document. The progress component is a great way to give users feedback on how long a process will take and how far along they are in that process."
      />

      <Column gap={4} className="mt-8">
        <Progress value={progress} />
        <Row gap={2}>
          <Button variant={'ghost'} onClick={() => setProgress(progress < 90 ? progress + 10 : 100)}>
            Click me to increase progress
          </Button>
          <Button variant={'ghost'} onClick={() => setProgress(progress > 10 ? progress - 10 : 0)}>
            Click me to decrease progress
          </Button>
        </Row>
        <ComponentPropsGrid
          label="Props"
          params={[
            {
              name: 'value',
              type: 'number',
              description: 'The value of progress from 0 to 100',
            },
          ]}
        />
      </Column>
    </PageView>
  );
}
