import type { Meta, StoryObj } from '@storybook/html';
import { MetadataItemArgs } from '../page-metadata/page-metadata.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './page-header.njk';

export type PageHeaderArgs = {
    hasMetadata?: boolean
    heading: string,
    label?: string
    metadataItems: MetadataItemArgs[]
    tag?: string
};

const meta: Meta<PageHeaderArgs> = {
    title: 'Components/Page header',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        heading: 'Apply for or renew a disabled parking permit',
        metadataItems: [
            {
                key: 'Published',
                value: '3 Septeber 2025'
            },
            {
                key: 'From',
                value: '<a href="#">Director-General Health and Social Care</a>'
            },
            {
                key: 'Directorate',
                value: '<a href="#">Population Health Directorate</a>'
            },
            {
                key: 'ISBN',
                value: '9781806431007'
            }
        ]
    },
    argTypes: {
        hasMetadata: {
            control: 'boolean',
            type: 'boolean'
        },
        heading: {
            description: 'Text to use for the H1 element',
            type: {
                name: 'string',
                required: true
            }
        },
        label: {
            description: 'Text to use for a label shown above the H1 element',
            type: 'string'
        },
        metadataItems: {
            table: {
                disable: true,
            }
        },
        tag: {
            type: 'string'
        },
    }
};

export default meta;
type Story = StoryObj<PageHeaderArgs>;

export const Default: Story = {};

export const WithLabel: Story = {
    name: 'With label',
    args: {
        label: 'Publication - Research and analysis'
    }
};

export const WithTag: Story = {
    name: 'With tag',
    args: {
        tag: 'Popular'
    }
};

export const WithMetadata: Story = {
    name: 'With metadata',
    args: {
        hasMetadata: true
    }
};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        hasMetadata: true,
        label: 'Publication - Research and analysis',
        tag: 'Popular'
    }
};
