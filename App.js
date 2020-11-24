import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SendLocalNotifications from './components/1_Sending_Local_Notifications';
import ControllingNotificationsDisplay from './components/2_Controlling_How_Notifications_are_displayed';
import ReactingToForegroundNotifications from './components/3_Reacting_to_Foreground_Notifications';
import ReactingToBackgroundNotifications from './components/4_Reacting_to_Background_Notifications';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SendLocalNotifications /> */}
      {/* <ControllingNotificationsDisplay /> */}
      {/* <ReactingToForegroundNotifications /> */}
      <ReactingToBackgroundNotifications />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
