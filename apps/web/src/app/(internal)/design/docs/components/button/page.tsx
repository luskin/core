'use client';
import { Column, Row } from '@/ui/layout/flex';
import { Button } from '@/ui/components/button';
import React from 'react';
import { DesignComponentHeader } from '../component-header';
import { Tooltip } from '@/ui/components/tooltip';
import { ComponentPropsGrid } from '../component-props-grid';
import { Heading } from '@/ui/components/typography';

const sizes: Array<'xs' | 'sm' | 'md' | 'lg'> = ['lg', 'md', 'sm', 'xs'];
const variants: Array<'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive'> = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'destructive',
];

function sizeToName(size: 'xs' | 'sm' | 'md' | 'lg') {
  switch (size) {
    case 'lg':
      return 'Large';
    case 'md':
      return 'Medium';
    case 'sm':
      return 'Small';
    case 'xs':
      return 'XSmall';
  }
}

export default function Page() {
  return (
    <>
      <DesignComponentHeader
        title="Button"
        description={
          'Buttons are used to perform an action or navigate to a new location. They are typically placed throughout your UI, in places like: dialogs, forms, cards, and toolbars.'
        }
      />
      <Column gap={4} className={'mt-4'}>
        <Row gap={4} className={'mt-4'}>
          {sizes.map((size) => {
            return (
              <Column gap={4} key={size}>
                {variants.map((variant) => (
                  <React.Fragment key={'variant'}>
                    <Tooltip
                      content={
                        <Column>
                          <code>variant: '{variant}'</code>
                          <code>size: '{size}'</code>
                        </Column>
                      }
                    >
                      <Button variant={variant} size={size} className="mt-2 first:mt-0">
                        {sizeToName(size)}
                      </Button>
                    </Tooltip>
                    <Button variant={variant} size={size} className="mt-2" disabled>
                      {sizeToName(size)}
                    </Button>
                  </React.Fragment>
                ))}
              </Column>
            );
          })}
          {sizes
            .filter((size) => size !== 'xs')
            .map((size) => {
              return (
                <Column gap={4} key={size}>
                  {variants.map((variant) => (
                    <React.Fragment key={'variant'}>
                      <Tooltip
                        content={
                          <Column>
                            <code>variant: '{variant}'</code>
                            <code>size: '{size}'</code>
                            <code>icon: 'plus'</code>
                          </Column>
                        }
                      >
                        <Button size={size} variant={variant} icon="plus" className="mt-2 first:mt-0" />
                      </Tooltip>
                      <Button size={size} variant={variant} icon="plus" className="mt-2" disabled />
                    </React.Fragment>
                  ))}
                </Column>
              );
            })}
        </Row>
        <ComponentPropsGrid
          params={[
            {
              name: 'size',
              type: ['string'],
              optional: true,
              description: 'The size of the button',
            },
            {
              name: 'icon',
              type: ['string'],
              optional: true,
              description: 'The icon name to display in the button',
            },
            {
              name: 'disabled',
              type: ['boolean'],
              optional: true,
              description: 'Establishes the button as disabled',
            },
            {
              name: 'onClick',
              type: ['function'],
              optional: true,
              description: 'Callback when the button is clicked',
            },
            {
              name: 'variant',
              type: 'string',
              optional: true,
              description: 'The style variant of the button.',
            },
          ]}
        />
      </Column>
    </>
  );
}
