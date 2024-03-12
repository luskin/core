import { Separator } from '@/ui/components/separator';
import { Heading, Label, Paragraph } from '@/ui/components/typography';
import { Column } from '@/ui/layout/flex';
import { Grid } from '@/ui/layout/grid';
import { arrayUtils, stringUtils } from '@shared/utils';
import React, { PropsWithChildren } from 'react';

type ParamType = 'string' | 'boolean' | 'number' | 'object' | 'array' | 'function' | 'ReactNode';

interface ComponentPropsGridProps {
  label?: string;
  params: Array<{
    name: string;
    type: ParamType | Array<ParamType>;
    optional?: boolean;
    description: string | React.ReactNode;
  }>;
  noClassName?: boolean;
}

export function ComponentPropsGrid(props: ComponentPropsGridProps) {
  return (
    <Column className={'mt-4 w-full'} gap={4}>
      <Separator />
      <Heading size={'md'} className="mt-4">
        {props.label || 'Params'}
      </Heading>
      <Grid numCols={3} className={'border-slate-5 divide-slate-5 mt-2 w-full divide-x divide-y border-b border-r'}>
        <Label className="border-slate-5 border-l border-t p-2">parameter</Label>
        <Label className="p-2">type</Label>
        <Label className="p-2">description</Label>
        {props.params.map((property) => (
          <React.Fragment key={property.name}>
            <code className="p-2 text-xs">{property.name}</code>

            <code className="p-2 text-xs">
              {arrayUtils
                .ensure(property.type)
                .map((type) => (property.optional ? `${type}?` : type))
                .join(' | ')}
            </code>

            {stringUtils.isString(property.description) ? (
              <Paragraph className="p-2" size={'md'}>
                {property.description}
              </Paragraph>
            ) : (
              <div className="p-2">{property.description}</div>
            )}
          </React.Fragment>
        ))}
        {!props.noClassName && (
          <>
            <code className="p-2 text-xs">{'className'}</code>

            <code className="p-2 text-xs">string?</code>

            <Paragraph className="p-2" size="md">
              Additional styling
            </Paragraph>
          </>
        )}
      </Grid>
    </Column>
  );
}
