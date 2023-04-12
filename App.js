import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  let works = [
    { title: "Issues", Image: "" },
    { title: "Pull Requests", Image: "" },
    { title: "Discussions", Image: "" },
    { title: "Repositories", Image: "" },
    { title: "Organizations", Image: "" },
    { title: "Starred", Image: "" },
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            height: "100%",
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <View
              style={{
                alignItems: "flex-start",
                marginBottom: 22,
                paddingRight: 0,
              }}
            >
              <Text style={[styles.header]}>Home</Text>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  marginTop: 5,
                  flexDirection: "row",
                  backgroundColor: "#202022",
                  borderRadius: 8,
                  paddingVertical: 5,
                  alignItems: "center",
                }}
              >
                <Ionicons
                  style={{ marginLeft: 10, marginRight: 2 }}
                  color="#8f8f95"
                  size={25}
                  name="search-outline"
                ></Ionicons>
                <TextInput
                  style={{
                    backgroundColor: "#202022",
                    fontSize: 17,
                    fontWeight: "400",
                    color: "white",
                    width: "82%",
                    height: "100%",
                  }}
                  placeholder="Search GitHub"
                  placeholderTextColor={"#97979e"}
                ></TextInput>
              </View>
            </View>

            <View style={[styles.work_container]}>
              <View style={styles.work_wrapper}>
                <Text style={styles.header_medium}>My Work</Text>
                <Ionicons
                  color="gray"
                  size={24}
                  name="ellipsis-horizontal"
                ></Ionicons>
              </View>
              <View
                style={{
                  backgroundColor: "#17181b",
                  borderRadius: 10,
                  alignItems: "flex-start",
                }}
              >
                {works.map((work, index) => {
                  let drawLine = true;
                  if (index === works.length - 1) drawLine = false;
                  return (
                    <View
                      key={index}
                      style={[
                        styles.item_wrapper,
                        { borderBottomWidth: drawLine ? 1 : 0 },
                      ]}
                    >
                      <Text style={styles.item}>{work.title}</Text>
                      <Ionicons
                        style={{ marginRight: 5 }}
                        color="gray"
                        size={20}
                        name="chevron-forward"
                      ></Ionicons>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={[styles.favorites_container, { paddingTop: 25 }]}>
              <View style={styles.favorites_wrapper}>
                <Text style={styles.header_medium}>Favorites</Text>
                <Ionicons
                  color="gray"
                  size={24}
                  name="ellipsis-horizontal"
                ></Ionicons>
              </View>
              <View style={[styles.area_item, { marginTop: 2 }]}>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                  <Text style={[styles.item, { marginTop: 20 }]}>
                    add favorite repositories here to have quick access at any
                    time, without having to search
                  </Text>
                  <Pressable style={styles.button}>
                    <Text style={[styles.button_text]}>Add Favorites</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={[styles.shortcuts_container]}>
              <View style={styles.shortcuts_wrapper}>
                <Text style={styles.header_medium}>Shortcuts</Text>
                <Ionicons
                  color="gray"
                  size={24}
                  name="ellipsis-horizontal"
                ></Ionicons>
              </View>
              <View style={[styles.area_item]}>
                <Text
                  style={[
                    styles.item,
                    { fontSize: 17, fontWeight: "500", margin: 10 },
                  ]}
                >
                  The things you need, one tap away
                </Text>
                <Text
                  style={[
                    styles.item,
                    { color: "#bfc1c8", fontSize: 17, margin: 5 },
                  ]}
                >
                  Fast access to your lists of Issues, Pull Requests, or
                  Discussions.
                </Text>
                <Pressable
                  style={[styles.button, { marginTop: 5, width: "90%" }]}
                >
                  <Text style={[styles.button_text]}>Get Started</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  work_container: {
    flex: 1,
    marginBottom: 20,
    height: "40%",
  },

  work_wrapper: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  favorites_container: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 60,
  },

  favorites_wrapper: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  shortcuts_container: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 60,
  },

  shortcuts_wrapper: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  item: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    margin: 15,
    textAlign: "center",
    fontWeight: "400",
  },

  item_wrapper: {
    width: "100%",
    flexGrow: 1,
    alignItems: "flex-start",
    borderBottomColor: "#252629",
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    justifyContent: "space-between",
  },

  header_medium: {
    fontWeight: "600",
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },

  header: {
    fontWeight: "bold",
    color: "white",
    fontSize: 35,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#2e2f36",
    borderRadius: 6,
    marginHorizontal: 20,
  },

  button_text: {
    color: "#4b8df7",
    fontWeight: "500",
    fontSize: 17,
    textAlign: "center",
    margin: 15,
  },

  area_item: {
    backgroundColor: "#17181b",
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
  },
});
