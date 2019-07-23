import { render, cleanup, configure, fireEvent } from "@testing-library/vue";
import VsInput from "@/components/Input.vue";
import "@testing-library/jest-dom/extend-expect";

configure({ testIdAttribute: "test-id" });
afterEach(cleanup);

const Input = {
  template: `
    <vs-input
      id="name"
      value="John"
      test-id="name-input"
      placeholder="First Name"
    >Name</vs-input>
  `,
  components: {
    VsInput
  }
};

describe("Input.vue", () => {
  it("Get by label text", () => {
    const { getByLabelText } = render(Input);
    expect(getByLabelText(/name/i)).toHaveValue("John");
  });

  it("Get by placeholder text", () => {
    const { getByPlaceholderText } = render(Input);
    expect(getByPlaceholderText(/first name/i)).toHaveAttribute("id", "name");
  });

  it("Get by test id", async () => {
    const { getByTestId, debug } = render(Input);
    await fireEvent.change(getByTestId("name-input"), {
      target: { value: "Hello!" }
    });
    expect(getByTestId("name-input")).toHaveValue("Hello!");
    // debug(getByTestId("name-input"));
    debug();
  });
});
