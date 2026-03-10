import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './page-metadata.njk';

export type MetadataItemArgs = {
    key: string
    value: string
}

export type PageMetadataArgs = {
    className?: string
    isInline?: boolean
    items: MetadataItemArgs[]
};

const meta: Meta<PageMetadataArgs> = {
    title: 'Components/Page metadata',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        items: [
            {
                key: 'Content type',
                value: 'Publication'
            },
            {
                key: 'Last updated',
                value: '21/04/2025'
            }
        ]
    },
    argTypes: {
        isInline: SGDSArgTypes.boolean({
            description: 'Use the inline display variant'
        })
    }
};

export default meta;
type Story = StoryObj<PageMetadataArgs>;

export const Default: Story = {};

export const Inline: Story = {
    args: {
        isInline: true
    }
};

export const WithLinks: Story = {
    name: 'With links',
    args: {
        items: [
            {
                key: 'Part of',
                value: '<a href="#foo">Equality and rights</a>, <a href="#bar">Law and order</a>'
            },
            {
                key: 'Last updated',
                value: '21/04/2025'
            }
        ]
    },
};
