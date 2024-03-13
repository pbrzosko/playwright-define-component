import {test, expect} from "@playwright/experimental-ct-vue";
import TestComponent from "../src/TestComponent.vue";

test.describe("Vue components testing", () => {
  test("Should mount imported component", async ({mount}) => {
    const component = await mount(TestComponent);
    await expect(component.getByRole('button')).toHaveText("10");
  });
})