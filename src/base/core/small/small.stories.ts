import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './small.njk';

export type SmallArgs = {
    className: 'ds_small' | 'ds_tiny',
    tagName: 'small' | 'span'
};

const meta: Meta<SmallArgs> = {
    title: 'Base/Core/Small',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {

    },
    argTypes: {
        className: SGDSArgTypes.select({options: ['none', 'ds_small', 'ds_tiny']}),
        tagName: SGDSArgTypes.select({options: ['small', 'span']})
    }
};

export default meta;
type Story = StoryObj<SmallArgs>;

export const Default: Story = {};

export const SmallClass: Story = {
    name: 'Small CSS class',
    args: {
        className: 'ds_small',
        tagName: 'span'
    }
};

export const TinyClass: Story = {
    name: 'Tiny CSS class',
    args: {
        className: 'ds_tiny',
        tagName: 'span'
    }
};
