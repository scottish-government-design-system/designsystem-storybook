import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './aspect-box.njk';

type ComponentArgs = {
    altText?: string
    presentation?: boolean
    ratio?: string
};

const meta: Meta<ComponentArgs> = {
    title: 'Components/Aspect box',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        altText: 'Thistle flowers in a field'
    }
};

export default meta;
type Story = StoryObj<ComponentArgs>;

export const Default: Story = {
};
export const Square: Story = {
    args: {
        ratio: 'ds_aspect-box--square'
    }
};
export const FourToThree: Story = {
    args: {
        ratio: 'ds_aspect-box--43'
    }
};
export const TwentyOneToNine: Story = {
    args: {
        ratio: 'ds_aspect-box--219'
    }
};
export const Presentation: Story = {
    args: {
        presentation: true,
        altText: ''
    }
};
