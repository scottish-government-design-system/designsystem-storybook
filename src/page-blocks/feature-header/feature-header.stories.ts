import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './feature-header.njk';

export type FeatureHeaderArgs = {
    altText?: string
    background?: 'none' | 'colour' | 'secondary' | 'tertiary' | 'theme'
    content: string
    hasButton?: boolean
    hasCoverImage?: boolean
    hasVideo?: boolean
    heading: string
    image?: 'none' | 'normal' | 'square' | 'svg' | 'small'
    imageHideOnMobile?: boolean
    imageAlignOnMobile?: 'left' | 'middle' | 'right'
    isFullWidth?: boolean
    isTopAlign?: boolean
    isWideText?: boolean
};

const meta: Meta<FeatureHeaderArgs> = {
    title: 'Page blocks/Feature header',
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
            options: ['none', 'colour', 'secondary', 'tertiary', 'theme']
        }),
        hasButton: SGDSArgTypes.boolean(),
        hasCoverImage: SGDSArgTypes.boolean(),
        hasVideo: SGDSArgTypes.boolean({
            if: { arg: 'imageHideOnMobile', truthy: false }
        }),
        image: SGDSArgTypes.select({
            options: ['none', 'normal', 'square', 'svg', 'small']
        }),
        imageHideOnMobile: SGDSArgTypes.boolean({
            if: { arg: 'hasVideo', truthy: false }
        }), 
        imageAlignOnMobile: SGDSArgTypes.select({
            options: ['left', 'middle', 'right']
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

export const Video: Story = {
    name: 'Video overlay',
    args: {
        hasVideo: true,
        image: 'normal'
    }
};