import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './header.njk';

export type HeaderBlockArgs = {
    background?: string
    removeBottomPadding?: boolean
    title: string
    position?: 'left' | 'center' | 'right'
    headingLevel?: 'h2' | 'h3'
};

const meta: Meta<HeaderBlockArgs> = {
    title: 'Page blocks/Header',
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        removeBottomPadding: false,
        title: 'Default Header'
    },
    argTypes: {
        background: SGDSArgTypes.backgroundColour(),
        removeBottomPadding: SGDSArgTypes.boolean(),
        position: SGDSArgTypes.select({
            options: ['left', 'center', 'right']
        }),
        headingLevel: SGDSArgTypes.headingLevel({options: ['h2','h3']})
    },
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<HeaderBlockArgs>;

export const Default: Story = {};
