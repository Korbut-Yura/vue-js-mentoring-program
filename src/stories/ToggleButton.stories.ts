import type { Meta, StoryObj } from "@storybook/vue3";

import ToggleButton from "../components/ToggleButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Example/ToggleButton",
  component: ToggleButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { ToggleButton },
    setup() {
      return { args };
    },
    template: `<ToggleButton  v-bind="args" />`,
  }),
  args: {
    initialIndex: 0,
    label: "sort by",
    buttons: ["Title", "Gengre"],
  },
};
