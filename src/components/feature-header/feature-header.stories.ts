import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './feature-header.njk';

export type FeatureHeaderArgs = {
    altText?: string
    background?: 'none' | 'colour' | 'secondary' | 'tertiary'
    content: string
    hasAspectBox?: boolean
    hasBreadcrumbs?: boolean
    hasButton?: boolean
    hasMetadata?: boolean
    hasNoImagePadding?: boolean
    heading: string
    image?: 'none' | 'normal' | 'square' | 'svg'
    isFullWidth?: boolean
    isImageCover?: boolean
    isTopAlign?: boolean
    isWideText?: boolean
    isVideo?: boolean
    ratio?: string
};

const meta: Meta<FeatureHeaderArgs> = {
    title: 'Components/Feature header',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        altText: "Alt text",
        content: "<p><a href=\"#\">The patterns</a> included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland.</p>",
        heading: "Digital standards heading",
        image: 'svg',
        isVideo: false
    },
    argTypes: {
        background: SGDSArgTypes.select({
            options: ['none', 'colour', 'secondary', 'tertiary']
        }),
        hasAspectBox: SGDSArgTypes.boolean(),
        hasBreadcrumbs: SGDSArgTypes.boolean(),
        hasButton: SGDSArgTypes.boolean(),
        hasMetadata: SGDSArgTypes.boolean(),
        hasNoImagePadding: SGDSArgTypes.boolean({
            description: '`hasNoImagePadding` attribute, removes the vertical padding around the image if the feature header is set to full width',
            if: { arg: 'isFullWidth', truthy: true }
        }),
        image: SGDSArgTypes.select({
            options: ['none', 'normal', 'square', 'svg']
        }),
        isFullWidth: SGDSArgTypes.boolean(),
        isImageCover: SGDSArgTypes.boolean(),
        isTopAlign: SGDSArgTypes.boolean(),
        isWideText: SGDSArgTypes.boolean(),
        isVideo: SGDSArgTypes.hidden(),
        ratio: {
            ...SGDSArgTypes.select({
                default: '16:9',
                options: ['16:9', '1:1', '4:3', '21:9']
            }),
            if: { arg: 'hasAspectBox', truthy: true }
        }
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

export const hasBreadcrumbs: Story = {
    name: 'Has breadcrumbs',
    args: {
        background: 'tertiary',
        hasBreadcrumbs: true
    }
};

export const KitchenSink: Story = {
    name: 'Kitchen sink',
    args: {
        background: 'colour',
        hasButton: true,
        hasBreadcrumbs: true,
        hasMetadata: true,
        isFullWidth: true,
        isTopAlign: true,
        isWideText: true,
        image: 'square'
    }
};
