import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Feather";

import Login from "./src/screens/login";

import Main from "./src/screens/main";
import News from "./src/screens/news";
import Videos from "./src/screens/videos";
import Config from "./src/screens/config";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Main}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const MainNavigation = createAppContainer(
  createBottomTabNavigator({
    main: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: "home",
        tabBarIcon: ({ tintColor }) => {
          <Icon name="home" color={{ tintColor }} size="24" />;
        },
      },
    },
    videos: {
      screen: Videos,
      navigationOptions: {
        tabBarLabel: "video",
      },
    },
    news: {
      screen: News,
      navigationOptions: {
        tabBarLabel: "news",
      },
    },
    configurations: {
      screen: Config,
      navigationOptions: {
        tabBarLabel: "user",
      },
    },
  })
);

export default MainNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
