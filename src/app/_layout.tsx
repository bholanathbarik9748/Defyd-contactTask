import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Contacts" }} />
      </Stack>
    </>
  );
};

export default _layout;
