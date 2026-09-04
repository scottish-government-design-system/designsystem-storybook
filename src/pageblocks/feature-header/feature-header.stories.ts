import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

import type { FeatureHeaderArgs } from '../../components/feature-header/feature-header.stories';

// @ts-expect-error no type defs
import ComponentTemplate from './feature-header.njk';

export type FeatureHeaderBlockArgs = Omit<FeatureHeaderArgs, 'background'> & {
    background?: '' | 'secondary' | 'tertiary' | 'theme' | 'theme-reversed'
    hasNoImagePadding?: boolean
    isImageCover?: boolean
    hasImageMobileAlignment?: 'left' | 'right' | 'middle' | 'hidden'
};

const meta: Meta<FeatureHeaderBlockArgs> = {
    title: 'Page blocks/Feature header',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        altText: "Alt text",
        content: "<p><a href=\"#\">The patterns</a> included here have been developed for use by government, public sector and third sector non-commercial organisations in Scotland.</p>",
        heading: "Digital standards heading",
        image: 'svg',
        hasImageMobileAlignment: 'left'
    },
    argTypes: {
        background: SGDSArgTypes.expandedBackgroundColour(),
        hasButton: SGDSArgTypes.boolean(),
        hasNoImagePadding: SGDSArgTypes.boolean(),
        isImageCover: SGDSArgTypes.boolean(),
        hasImageMobileAlignment: SGDSArgTypes.select({
            options: ['left', 'right', 'middle', 'hidden']
        }),
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
type Story = StoryObj<FeatureHeaderBlockArgs>;

export const Default: Story = {};