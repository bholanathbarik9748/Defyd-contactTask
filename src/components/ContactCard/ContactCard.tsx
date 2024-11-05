import React, { FC } from "react";
import { Text, View } from "react-native";
import { ContactRecord } from "../../types/ContactCard";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

interface ContactCardProps {
  item: ContactRecord;
}

// Helper to generate initials
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const ContactCard: FC<ContactCardProps> = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{getInitials(item._raw.name)}</Text>
    </View>
    <View style={styles.contactInfo}>
      <Text style={styles.name}>{item._raw.name}</Text>
      <View style={styles.phoneContainer}>
        <MaterialIcons
          name="phone"
          size={20}
          color="#4a90e2"
          style={styles.icon}
        />
        <Text style={styles.phone}>{item._raw.phone}</Text>
      </View>
    </View>
  </View>
);

export default ContactCard;
