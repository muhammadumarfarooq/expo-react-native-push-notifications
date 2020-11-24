import React from 'react';
import { View, Text, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

// Show notifications in both background or foreground
Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true
        };
    }
})

const ControllingNotificationsDisplay = () => {
    const handButtonPress = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "My first local Notification",
                body: "This is the body of the first notification"
            },
            trigger: {
                seconds: 5
            }
        })
    }

    return (
        <View>
            <Text>2. Controlling Notifications Display</Text>
            <Button onPress={handButtonPress} title="Trigger Local Notifications" />
        </View>
    );
};

export default ControllingNotificationsDisplay;
