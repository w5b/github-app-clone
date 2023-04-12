import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Home from "./screens/Home";
import Notifications from "./screens/Notifications";
import Explore from "./screens/Explore";
import Profile from "./screens/Profile";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerTransparent: true,
          headerTitle: "",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;
            if (routeName === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === "Notifications") {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (routeName === "Explore") {
              iconName = "telescope";
            } else if (routeName === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return iconName !== "telescope" ? (
              <Ionicons name={iconName} size={size} color={color}></Ionicons>
            ) : (
              <Octicons name="telescope" size={size} color={color} />
            );
          },
          activeTintColor: "#007bff",
          inactiveTintColor: "#8e8e8e",
          tabBarStyle: {
            height: "10%",
            backgroundColor: "rgba(44,44,47,255)",
            borderTopWidth: 0,
            borderTopColor: "#8e8e8e",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 1.5,
            elevation: 2,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: -4,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
