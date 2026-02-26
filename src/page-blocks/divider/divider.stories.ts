import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './divider.njk';

export type DividerArgs = {
    isFullWidth?: boolean
};

const meta: Meta<DividerArgs> = {
    title: 'Page blocks/Divider',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        isFullWidth: true
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<DividerArgs>;

export const Default: Story = {};