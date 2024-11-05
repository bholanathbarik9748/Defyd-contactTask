import { Alert, FlatList, TextInput, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import useTasks from "../../hooks/useTasks";
import { styles } from "./styles/styles"; // Import external styles
import { AntDesign } from "@expo/vector-icons";
import TaskCard from "@/src/components/taskCard/TaskCard";
import { RootState } from "@/src/store/store";
import { useSelector } from "react-redux";

const AllTask = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { tasks, fetchTasks, deleteTask } = useTasks();
  const [searchQuery, setSearchQuery] = useState("");
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useFocusEffect(
    useCallback(() => {
      fetchTasks(id);
    }, [id])
  );

  // Filter tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task._raw.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onDeleteTask = async (taskId: string) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteTask(taskId);
              Alert.alert("Deleted", "Task has been deleted successfully.");
            } catch (error) {
              Alert.alert("Error", "Something went wrong. Please try again.");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const onEditTask = (taskId) => {
    // Navigate to edit screen with mode and task ID
    router.navigate(`Task/AddAndEdit/edit/${taskId}`);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#1c1c1c" : "#f2f2f2" },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={[
              styles.searchBar,
              {
                backgroundColor: isDarkMode ? "#444" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              },
            ]}
            placeholder="Search Tasks"
            placeholderTextColor={isDarkMode ? "#bbb" : "#888"}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.darkModeButton}
          onPress={() => router.navigate(`Task/AddAndEdit/add/${id}`)}
        >
          <AntDesign name="plus" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredTasks} // Use filtered tasks here
        keyExtractor={(item) => item._raw.id}
        renderItem={({ item }) => (
          <TaskCard
            title={item._raw.title}
            dueDate={item._raw.due_date}
            onDelete={() => onDeleteTask(item._raw.id)}
            onEdit={() => onEditTask(item._raw.id)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default AllTask;
