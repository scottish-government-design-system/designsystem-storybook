import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './abbr.njk';

export type AbbrArgs = {
    hasTitleAttribute?: boolean
};

const meta: Meta<AbbrArgs> = {
    title: 'Base/Core/Abbr',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasTitleAttribute: true
    },
    argTypes: {

    }
};

export default meta;
type Story = StoryObj<AbbrArgs>;

export const Default: Story = {};
