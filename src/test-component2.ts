import {defineComponent, h, ref} from "vue";

export const TestComponent2 = defineComponent(
() => {
  const counter = ref(1);
  return () => h("button", counter);
}
);