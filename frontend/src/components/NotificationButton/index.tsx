import React from 'react'
import ImageNotificator from '../../assets/img/notification-icon.svg';
import './styles.css'

function NotificationButton() {
    return (
        <>
            <div className="dsmeta-red-btn">
                <img src={ImageNotificator} alt="Notificator" />
            </div>
        </>
    )
}

export default NotificationButton