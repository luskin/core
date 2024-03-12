'use client';
import { Column, Row } from '@/ui/layout/flex';
import { Button, XButton } from '@/ui/components/button';
import React from 'react';
import { DesignComponentHeader } from '../component-header';
import { Tooltip } from '@/ui/components/tooltip';
import { ComponentPropsGrid } from '../component-props-grid';
import { Heading, Label } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';

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
    <PageView>
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
                  <React.Fragment key={variant + size}>
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
                    <React.Fragment key={variant + size}>
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
          label="Button Props"
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
        <DesignComponentHeader
          title="XButton"
          description={
            'XButton is a button with an X icon. It is used to close a modal or dismiss a notification. It is a convenience component that wraps the Button component.'
          }
        />
        <XButton />
        <ComponentPropsGrid
          label="XButton Props (extends Button Props)"
          params={[
            {
              name: 'align',
              type: ['string'],
              optional: true,
              description:
                'The alignment of the XButton in a 32x32 button. Defaults to center if not provided. Options are top-left, top-right, bottom-left, bottom-right.',
            },
          ]}
        />
      </Column>
    </PageView>
  );
}
