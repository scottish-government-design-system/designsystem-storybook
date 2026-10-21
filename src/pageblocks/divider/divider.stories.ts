import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './divider.njk';

export type DividerBlockArgs = {
    fullWidth?: boolean
};

const meta: Meta<DividerBlockArgs> = {
    title: 'Page blocks/Divider',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
    },
    argTypes: {
        fullWidth: SGDSArgTypes.boolean()
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<DividerBlockArgs>;

export const Default: Story = {};
