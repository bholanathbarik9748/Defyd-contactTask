import React, { FC } from "react";
import { Text, View } from "react-native";
import ContactRecord from "../../types/ContactCard";
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
      <Text style={styles.avatarText}>
        {getInitials(item.firstName + " " + item.lastName)}
      </Text>
    </View>
    <View style={styles.contactInfo}>
      <Text style={styles.name}>
        {item.firstName} {item.lastName}
      </Text>
      <View style={styles.phoneContainer}>
        <MaterialIcons
          name="phone"
          size={20}
          color="#4a90e2"
          style={styles.icon}
        />
        {item.phoneNumbers && item.phoneNumbers.length > 0 && (
          <Text style={styles.phone}>
            {item.phoneNumbers[0].countryCode +
              " " +
              item.phoneNumbers[0].number}
          </Text>
        )}
      </View>
    </View>
  </View>
);

export default ContactCard;
