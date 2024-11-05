import React from "react";
import { Slot, Stack } from "expo-router";
import store from "../store/store";
import { Provider } from "react-redux";

const _layout = () => {
  return (
    <>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen
            name="contact/AddAndEdit/index"
            options={{ title: "Create Contact" }}
          />
          <Stack.Screen name="Task/AllTask/[id]" options={{ title: "Tasks" }} />
        </Stack>
      </Provider>
    </>
  );
};

export default _layout;
