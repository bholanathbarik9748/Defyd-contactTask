import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons"; // Feather for search, Ionicons for toggle

import useContacts from "../../hooks/useContacts";
import ContactCard from "@/src/components/ContactCard/ContactCard";
import { styles } from "./styles/styles"; // Import external styles

const HomePage = () => {
  const { contacts, fetchContacts } = useContacts();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useFocusEffect(
    useCallback(() => {
      fetchContacts();
    }, [])
  );

  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) =>
    contact._raw.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle Dark Mode
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

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
            placeholder="Search Contacts"
            placeholderTextColor={isDarkMode ? "#bbb" : "#888"}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.darkModeButton}
          onPress={toggleDarkMode}
        >
          <Ionicons
            name={isDarkMode ? "sunny-outline" : "moon-outline"}
            size={18}
            color="#fff"
          />
          {isDarkMode}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.darkModeButton}
          onPress={() => router.navigate("/contact/AddAndEdit")}
        >
          <AntDesign name="plus" size={18} color="#fff" />
          {isDarkMode}
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item._raw.id}
        renderItem={({ item }) => <ContactCard item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomePage;
