import type { Meta, StoryObj } from '@storybook/html';

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
        background: {
            options: ['none', 'colour', 'secondary', 'tertiary'],
            control: { type: 'select' },
            type: 'string'
        },
        hasButton: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        image: {
            options: ['none', 'normal', 'square', 'svg'],
            control: { type: 'select' },
            type: 'string'
        },
        isFullWidth: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isTopAlign: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        isWideText: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        }
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
