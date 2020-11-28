import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Permissions from 'expo-permissions';
// This is required for the IOS
const GettingPermissionForNotifications = () => {
    useEffect(() => {
        Permissions.getAsync(Permissions.NOTIFICATIONS)
            .then(statusObj => {
                if (statusObj.status !== "granted") {
                    return Permissions.askAsync(Permissions.NOTIFICATIONS);
                }
                return statusObj;
            }).then(statusObj => {
                if (statusObj.status !== "granted") {
                    throw new Error("Permission not granted!");
                }
            })
            .then(() => {
                return Notifications.getExpoPushTokenAsync();
            })
            .then(data => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
                return null;
            })
        //exlint-disable-next-line
    }, []);
    return (
        <View>

        </View>
    );
}

export default GettingPermissionForNotifications;