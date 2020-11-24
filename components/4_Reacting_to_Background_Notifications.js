import React, { useEffect } from 'react';
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

const ReactingToBackgroundNotifications = () => {

    useEffect(() => {
        const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
            (notifications) => {
                console.log("Background Notification Clicked", notifications);
            }
        );
        const foregroundSubscription = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log(notification);
            }
        );

        return () => {
            backgroundSubscription.remove();
            foregroundSubscription.remove();
        }
    }, []);


    const handButtonPress = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "My first local Notification",
                body: "This is the body of the first notification",
                // data included in the notifications
                data: { mySpecialData: 'Some text' },
            },
            trigger: {
                seconds: 5
            }
        })
    }

    return (
        <View>
            <Text>4. Reacting to Background Notifications</Text>
            <Button onPress={handButtonPress} title="Trigger Local Notifications" />
        </View>
    );
};

export default ReactingToBackgroundNotifications;
