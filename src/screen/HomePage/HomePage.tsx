import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const HomePage = () => {
  const router = useRouter();

  return (
    <View>
      <Button
        title="Go to Details... again"
        onPress={() => router.push("/contact/AddAndEdit")}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
