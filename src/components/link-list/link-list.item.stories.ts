import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './link-list.item.njk';

export type LinkListItemArgs = {
    content?: string
    hasImage?: boolean
    hasMetadata?: boolean
    heading: string
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    href: string
    isWide?: boolean
    tagName?: string
};

const meta: Meta<LinkListItemArgs> = {
    title: 'Components/Link list/Item',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        heading: 'Environment and countryside',
        href: '#foo'
    },
    argTypes: {
        content: {
            type: 'string'
        },
        hasImage: SGDSArgTypes.boolean(),
        hasMetadata: SGDSArgTypes.boolean(),
        headingLevel: SGDSArgTypes.headingLevel()
    }
};

export default meta;
type Story = StoryObj<LinkListItemArgs>;

export const Default: Story = {};

export const DifferentHeadingLevel: Story = {
    name: 'Different heading level',
    args: {
        headingLevel: 'h4'
    }
};

export const WithSummary: Story = {
    name: 'With summary',
    args: {
        content: 'Access to and protection of the countryside and managing wildlife on your land'
    }
};

export const WithMetadata: Story = {
    name: 'With metadata',
    args: {
        hasMetadata: true
    }
};

export const WithImage: Story = {
    name: 'With image',
    args: {
        hasImage: true
    }
};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        content: 'Access to and protection of the countryside and managing wildlife on your land',
        hasImage: true,
        hasMetadata: true
    }
};
