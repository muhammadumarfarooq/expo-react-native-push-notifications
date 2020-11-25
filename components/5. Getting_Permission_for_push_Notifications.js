import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Permissions from 'expo-permissions';
// This is required for the IOS
const GettingPermissionForNotifications = () => {
    useEffect(() => {
        Permissions.getAsync(Permissions.NOTIFICATIONS)
            .then(status => {
                if (status !== "granted") {
                    return Permissions.askAsync(Permissions.NOTIFICATIONS);
                }
            }).then(status => {
                if (status !== "granted") {
                    return;
                }
            })
        //exlint-disable-next-line
    }, []);
    return (
        <View>

        </View>
    );
}

export default GettingPermissionForNotifications;