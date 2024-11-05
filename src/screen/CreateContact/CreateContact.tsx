import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles/styles";
import { contactTypes } from "./types/CreateContact";
import { useRouter } from "expo-router";
import useContacts from "@/src/hooks/useContacts";

const CreateContact = () => {
  const { createContact } = useContacts();
  const route = useRouter();
  const [formData, setFormData] = useState<contactTypes>({
    name: "",
    phone: "",
  });

  const handleSubmit = async () => {
    if (formData.name && formData.phone) {
      try {
        await createContact(formData?.name, formData?.phone);
        Alert.alert("Success", "Contact created successfully!");
        route.back();
      } catch (error) {
        Alert.alert("Something went wrong. Please try again later.");
      }
    } else {
      Alert.alert("Please fill in all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerText}>Create Contact</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, name: text }))
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={formData.phone}
            keyboardType="phone-pad"
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, phone: text }))
            }
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateContact;
