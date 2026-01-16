import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './accordion.njk';

export type AccordionArgs = {
    items: object[]
    closeText: string
    isOpenAll: boolean
    isSmall: boolean
    openText: string
};

// todo: extract to somewhere reuseable
declare global {
    interface Window { DS: any }
};

const meta: Meta<AccordionArgs> = {
    title: 'Components/Accordion',
    // tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        isOpenAll: true,
        items: [
            {
                heading: 'Healthcare for veterans',
                content: `<p>Veterans are entitled to the same healthcare as any citizen. And there are <a href="#">health care options and support</a> available specifically for veterans.  </p>
            <p>If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need. </p>`
            },
            {
                heading: 'Employability for veterans',
                content: `<p>If you're looking for a job, there are several organisations that can help you <a href="#">find a job or develop new skills</a>.</p>`
            },
            {
                heading: 'Housing for veterans',
                content: `<p>If you need <a href="#">help finding a place to live</a> there\'s support specifically for veterans.</p>`
            }
        ]
    },

    play: () => {
        window.DS.initAll();
    }
};

export default meta;
type Story = StoryObj<AccordionArgs>;

export const Default: Story = {
    parameters: {
        docs: {
            story: { autoplay: true },
        }
    }
};

export const WithoutOpenAll: Story = {
    name: 'Without \'open all\'',
    args: {
        isOpenAll: false
    }
};

export const Small: Story = {
    args: {
        isSmall: true
    }
};

export const CustomOpenCloseText: Story = {
    name: 'Custom open/close text',
    args: {
        openText: 'Ouvrir',
        closeText: 'Fermer',
    }
};
