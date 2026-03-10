import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './card.njk';

export type CardArgs = {
    content?: string
    hasMetadata?: boolean
    hasSmallImage?: boolean
    heading: string
    headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    href: string
    image: string
    isGrey?: boolean
    tagName?: 'div' | 'li'
};

const meta: Meta<CardArgs> = {
    title: 'Components/Card',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: "Access to and protection of the countryside and managing wildlife on your land",
        heading: "Environment and countryside",
        href: '#foo'
    },
    argTypes: {
        headingLevel: SGDSArgTypes.headingLevel({options: ['h2','h3','h4','h5','h6']}),
        hasMetadata: SGDSArgTypes.boolean(),
        hasSmallImage: SGDSArgTypes.boolean(),
        image: {
            control: { type: 'select' },
            options: ['none', 'highland-cow', 'thistles'],
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        isGrey: SGDSArgTypes.boolean(),
        tagName: {
            control: { type: 'select' },
            options: ['div', 'li'],
            description: 'HTML tag to use for the component wrapper'
        }
    }
};

export default meta;
type Story = StoryObj<CardArgs>;

export const Default: Story = {};

export const ImageCard: Story = {
    name: 'Image card',
    args: {
        image: 'thistles',
    }
};

export const SmallImageCard: Story = {
    name: 'Small image card',
    args: {
        image: 'thistles',
        hasSmallImage: true
    }
};

export const MetadataCard: Story = {
    name: 'Card with metadata',
    args: {
        hasMetadata: true
    }
};

export const GreyCard: Story = {
    name: 'Grey card',
    args: {
        isGrey: true
    }
};
