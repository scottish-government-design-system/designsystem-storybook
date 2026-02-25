import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './warning-text.njk';

export type WarningTextArgs = {
    content: string
};

const meta: Meta<WarningTextArgs> = {
    title: 'Components/Warning text',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: 'Call 999 if you or someone else is in immediate danger, or if the crime is in progress.'
    }
};

export default meta;
type Story = StoryObj<WarningTextArgs>;

export const Default: Story = {};
