import React, { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { AntDesign, Ionicons } from "@expo/vector-icons";

interface TaskCardProps {
  title: string;
  dueDate: number;
  onEdit: () => void;
  onDelete: () => void;
}

// Helper function to generate initials
const getInitials = (title: string) => {
  return title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const TaskCard: FC<TaskCardProps> = ({ title, dueDate, onEdit, onDelete }) => (
  <View style={styles.card}>
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{getInitials(title)}</Text>
    </View>
    <View style={styles.taskInfo}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dueDateContainer}>
        <Ionicons
          name="calendar-outline"
          size={20}
          color="#4a90e2"
          style={styles.icon}
        />
        <Text style={styles.dueDate}>Due: {dueDate}</Text>
      </View>
    </View>
    <View style={styles.actionIcons}>
      <TouchableOpacity onPress={onEdit} style={styles.actionIcon}>
        <Ionicons name="pencil" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.actionIcon}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  </View>
);

export default TaskCard;
