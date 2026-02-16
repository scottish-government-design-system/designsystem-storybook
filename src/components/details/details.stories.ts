import type { Meta, StoryObj } from '@storybook/html';
import SGDSArgTypes from '../../../.storybook/sgdsArgTypes';

// @ts-expect-error no type defs
import ComponentTemplate from './details.njk';

export type DetailsArgs = {
    content: string
    hasFormContent?: boolean
    summary: string
};

const meta: Meta<DetailsArgs> = {
    title: 'Components/Details',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        content: ` <p>Contact the design system team if you cannot sign in.</p>
        <p>Email <a href="mailto:designsystem@gov.scot" data-navigation="details-link" data-section="I cannot sign in">designsystem@gov.scot</a>.</p>
        <p>Or phone 0000 123 4567<br>
        Monday to Friday, 9am to 5pm</p>`,
        summary: 'I cannot sign in'
    },
    argTypes: {
        hasFormContent: SGDSArgTypes.boolean()
    },
    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<DetailsArgs>;

export const Default: Story = {};

export const WithFormContent: Story = {
    name: 'With form content',
    args: {
        hasFormContent: true,
        summary: 'Some form elements'
    }
};
