import Parameter from "./Parameter";

export default {
  title: "Props/Parameter",
  component: Parameter,
  argTypes: {
    primary: { control: 'boolean' },
    label: { control: 'text' },
  },
  parameters: {
    tags: ["autodocs"],
  }
};

export const Primary = (args: { primary: boolean; label: string }) => ({
  components: { Parameter }, // Import your component if not already imported
  setup() {
    return {
      args,
    };
  },
  template: `<Parameter :primary="args.primary" :label="args.label" />`, // Use backticks for multi-line template
});

Primary.args = {
  primary: true,
  label: 'Parameter',
};
