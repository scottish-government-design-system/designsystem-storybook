import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './feature-header.njk';

export type FeatureHeaderArgs = {
    altText?: string
    background?: 'none' | 'colour' | 'secondary' | 'tertiary'
    content: string
    hasButton?: boolean
    heading: string
    image?: 'none' | 'normal' | 'square' | 'svg'
    isFullWidth?: boolean
    isTopAlign?: boolean
    isWideText?: boolean
};

const meta: Meta<FeatureHeaderArgs> = {
    title: 'Components/Feature header',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        altText: "Alt text",
        content: "<p><a href=\"#\">The patterns</a> included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland.</p>",
        heading: "Digital standards heading",
        image: 'svg'
    },
    argTypes: {
        background: SGDSArgTypes.select({
            options: ['none', 'colour', 'secondary', 'tertiary']
        }),
        hasButton: SGDSArgTypes.boolean(),
        image: SGDSArgTypes.select({
            options: ['none', 'normal', 'square', 'svg']
        }),
        isFullWidth: SGDSArgTypes.boolean(),
        isTopAlign: SGDSArgTypes.boolean(),
        isWideText: SGDSArgTypes.boolean()
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<FeatureHeaderArgs>;

export const Default: Story = {};

export const NoImage: Story = {
    name: 'No image',
    args: {
        image: 'none'
    }
};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        background: 'tertiary',
        hasButton: true,
        isFullWidth: true,
        isTopAlign: true,
        isWideText: true,
        image: 'square'
    }
};
