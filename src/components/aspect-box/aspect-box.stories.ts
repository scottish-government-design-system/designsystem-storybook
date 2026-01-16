import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './aspect-box.njk';

export type AspectBoxArgs = {
    altText?: string
    presentation?: boolean
    ratio?: string
};

const meta: Meta<AspectBoxArgs> = {
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
type Story = StoryObj<AspectBoxArgs>;

export const Default: Story = {
};
export const Square: Story = {
    name: '1:1 ratio (square)',
    args: {
        ratio: 'ds_aspect-box--square'
    }
};
export const FourToThree: Story = {
    name: '4:3 ratio',
    args: {
        ratio: 'ds_aspect-box--43'
    }
};
export const TwentyOneToNine: Story = {
    name: '21:9 ratio',
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
