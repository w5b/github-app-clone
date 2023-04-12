import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
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
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: 100,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              marginHorizontal: 10,
            }}
          >
            <Text style={styles.header}>Home</Text>
          </View>

          <View style={styles.item_container}>
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
          <View style={styles.item_container}>
            <View style={styles.favorites_wrapper}>
              <Text style={styles.header_medium}>Favorites</Text>
            </View>
          </View>
          <View style={styles.item_container}>
            <View style={styles.shortcuts_wrapper}>
              <Text style={styles.header_medium}>Shortcuts</Text>
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
    padding: 0,
    margin: 0,
  },

  item_container: {
    marginHorizontal: 10,
    marginBottom: 20,
    height: 360,
  },

  work_wrapper: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  favorites_wrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  shortcuts_wrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    justifyContent: "space-between",
  },

  header_medium: {
    fontWeight: "bold",
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
});
