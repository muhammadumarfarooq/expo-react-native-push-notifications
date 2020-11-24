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

const ReactingToForegroundNotifications = () => {

    useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener(
            (notification) => {
                console.log(notification);
            }
        );

        return () => {
            subscription.remove();
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
            <Text>3. Reacting to Foreground Notifications</Text>
            <Button onPress={handButtonPress} title="Trigger Local Notifications" />
        </View>
    );
};

export default ReactingToForegroundNotifications;
