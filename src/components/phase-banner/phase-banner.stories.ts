import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './phase-banner.njk';

export type PhaseBannerArgs = {
    tagText: string
};

const meta: Meta<PhaseBannerArgs> = {
    title: 'Components/Phase banner',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        tagText: 'Beta'
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<PhaseBannerArgs>;

export const Default: Story = {};
