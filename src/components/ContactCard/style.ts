import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4a90e2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 3,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    marginRight: 6,
  },
  phone: {
    fontSize: 16,
    color: "#4a90e2",
    fontWeight: "500",
  },
});
