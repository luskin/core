'use client';
import { Column } from '@/ui/layout/flex';
import { DesignComponentHeader } from '../component-header';
import { ComponentPropsGrid } from '../component-props-grid';
import { useState } from 'react';
import { Slider } from '@/ui/components/slider';
import { Label } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';

export default function Page() {
  const [singleSliderValue, setSingleSliderValue] = useState<Array<number>>([50]);
  const [doubleSliderValue, setDoubleSliderValue] = useState<Array<number>>([25, 75]);
  const [tripleSliderValue, setTripleValueSlider] = useState<Array<number>>([25, 50, 75]);
  return (
    <PageView>
      <DesignComponentHeader
        title="Slider"
        description={
          'Select a single value from a range of values. Sliders are ideal for adjusting settings such as volume, brightness, or applying image filters.'
        }
      />
      <Column gap={4} className={'mt-4'}>
        <Label className="mb-2 mt-2">The current value of the single slider is: {singleSliderValue[0]}</Label>
        <Slider min={0} max={100} step={1} value={singleSliderValue} onValueChange={setSingleSliderValue} />
        <Label className="mb-2 mt-2">
          The current value of the double slider is: {doubleSliderValue[0]} - {doubleSliderValue[1]}
        </Label>
        <Slider min={0} max={100} step={1} thumbs={2} value={doubleSliderValue} onValueChange={setDoubleSliderValue} />
        <Label className="mb-2 mt-2">
          The current value of the triple slider is: {tripleSliderValue[0]} - {tripleSliderValue[1]} -{' '}
          {tripleSliderValue[2]}
        </Label>
        <Slider
          min={0}
          max={100}
          step={1}
          thumbs={3}
          value={tripleSliderValue}
          onValueChange={setTripleValueSlider}
          minStepsBetweenThumbs={1}
          canOverlapThumbs={false}
        />
        <ComponentPropsGrid
          params={[
            {
              name: 'value',
              type: ['string'],
              optional: true,
              description: 'The current selected value of the tab.',
            },
            {
              name: 'onValueChange',
              type: 'function',
              optional: true,
              description: 'Callback to the new value of the tab.',
            },
          ]}
          noClassName
        />
      </Column>
    </PageView>
  );
}
