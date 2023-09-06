import type { Meta, StoryObj } from "@storybook/vue3";

import TextInput from "../components/TextInput.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Example/Search",
  component: TextInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  //   argTypes: {
  //     size: { control: 'select', options: ['small', 'medium', 'large'] },
  //     backgroundColor: { control: 'color' },
  //     onClick: { action: 'clicked' },
  //   },
  //   args: { primary: false }, // default value
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => ({ components: { TextInput }, template: `<TextInput />` }),
};
