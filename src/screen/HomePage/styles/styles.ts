import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchBarContainer: {
    flex: 1,
    position: "relative",
  },
  searchBar: {
    height: 45,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    borderColor: "#ddd",
    borderWidth: 1,
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  darkModeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25, // Half of width/height to make it circular
    backgroundColor: "#4a90e2",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  listContainer: {
    paddingVertical: 10,
  },
});
