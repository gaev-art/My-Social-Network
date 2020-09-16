import {instance} from './instance';


export const dialogsApi = {
    getDialogs() {
        return instance.get(`dialogs`)
            .then(res => res.data)
    },
    getMessages(userId) {
        return instance.get(`dialogs/${userId}/messages`)
            .then(res => res.data.items)
    },
    startDialogs(userId) {
        return instance.put(`dialogs/${userId}`)
            .then(res => res.data)
    },
    sendMessage(userId, body) {
        return instance.post(`dialogs/${userId}/messages`, {body})
            .then(res => res.data)
    },
    getNewMessages() {
        return instance.get(`dialogs/messages/new/count`)
            .then(res => res.data)
    },
    deleteMessage(messageId) {
        return instance.delete(`dialogs/messages/${messageId}`)
            .then(res => res.data)
    },
}