import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { styles } from "../CreateContact/styles/styles";
import { AndEditTaskType } from "./types/AndEditTaskType";
import useTasks from "@/src/hooks/useTasks";

const CreateAndEditTask = () => {
  const { mode, id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { createTask, updateTask, fetchTaskById, singleTask } = useTasks();
  const [formData, setFormData] = useState<AndEditTaskType>({
    title: "",
    dueData: "",
  });

  const SubmitHandler = async () => {
    if (!formData.title || !formData.dueData) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    const dueDateTimestamp = Date.parse(formData.dueData);

    if (isNaN(dueDateTimestamp)) {
      Alert.alert(
        "Error",
        "Please enter a valid due date in YYYY-MM-DD format."
      );
      return;
    }

    try {
      if (mode === "add") {
        await createTask(id, formData?.title, formData?.dueData);
        Alert.alert("Success", "Task created successfully!");
      } else {
        await updateTask(id, formData);
        Alert.alert("Success", "Task updated successfully!");
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    let PageTitle = "Create Task";
    if (mode !== "add") {
      fetchTaskById(id);
      PageTitle = "Edit Task";
    }

    navigation.setOptions({ title: PageTitle });
  }, [id]);

  useEffect(() => {
    setFormData({
      dueData: singleTask?._raw?.due_date,
      title: singleTask?._raw?.title,
    });
  }, [singleTask]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>
          {mode === "add" ? "Create Task" : "Update Task"}
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={formData.title}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, title: text }))
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Due Date"
            value={formData.dueData}
            keyboardType="phone-pad"
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, dueData: text }))
            }
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={SubmitHandler}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAndEditTask;
