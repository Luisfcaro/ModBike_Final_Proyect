import React from "react";
import { useNotifications } from "../../../hooks/useNotifications";
import NotificationListCard from "../../../components/client/notifications/NotificationListCard";

const NotificationsListClient = () => {

    const { notifications, useReadNotification } = useNotifications();

    return (
        // <div className="row ">
        //     {notifications.map((notification) => (
        //         <NotificationListCard key={notification.id} notification={notification}  read_notification={(id) => useReadNotification(id)}/>
        //     ))
        //     }
        // </div>

        <section class="py-24">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="font-manrope font-bold text-4xl text-white mb-8  text-center">Notificaciones</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {notifications.map((notification) => (
                        <NotificationListCard key={notification.id} notification={notification} read_notification={(id) => useReadNotification(id)} />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default NotificationsListClient;