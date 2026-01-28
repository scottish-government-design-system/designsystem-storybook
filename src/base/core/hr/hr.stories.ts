import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './hr.njk';

export type HrArgs = {
};

const meta: Meta<HrArgs> = {
    title: 'Base/Core/HR',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<HrArgs>;

export const Default: Story = {};
