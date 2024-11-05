import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="contact/AddAndEdit/index" options={{ title: "Create Contact" }} />
      </Stack>
    </>
  );
};

export default _layout;
