import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './aspect-box.njk';

export type AspectBoxArgs = {
    altText?: string
    isPresentation?: boolean
    ratio?: string
};

const meta: Meta<AspectBoxArgs> = {
    title: 'Components/Aspect box',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        altText: 'Thistle flowers in a field'
    },
    argTypes: {
        isPresentation: SGDSArgTypes.boolean({
            description: 'Presentation images have aria-hidden'
        }),
        ratio: SGDSArgTypes.select({
            default: '16:9',
            options: ['16:9', '1:1', '4:3', '21:9']
        })

    }
};

export default meta;
type Story = StoryObj<AspectBoxArgs>;

export const Default: Story = {
};
export const Square: Story = {
    name: '1:1 ratio (square)',
    args: {
        ratio: '1:1'
    }
};
export const FourToThree: Story = {
    name: '4:3 ratio',
    args: {
        ratio: '4:3'
    }
};
export const TwentyOneToNine: Story = {
    name: '21:9 ratio',
    args: {
        ratio: '21:9'
    }
};
export const Presentation: Story = {
    args: {
        altText: '',
        isPresentation: true
    }
};
