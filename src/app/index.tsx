import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import HomePage from "../screen/HomePage/HomePage";
import store from "../store/store";

const index = () => {
  return (
      <HomePage />
  );
};

export default index;

const styles = StyleSheet.create({});
