import React from 'react';
import { View, Text, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

const SendLocalNotifications = () => {
    const handButtonPress = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "My first local Notification",
                body: "This is the body of the first notification"
            },
            trigger: {
                seconds: 10
            }
        })
    }

    return (
        <View>
            <Text>1. Sending Local Notifications</Text>
            <Button onPress={handButtonPress} title="Trigger Local Notifications" />
        </View>
    );
};

export default SendLocalNotifications;
