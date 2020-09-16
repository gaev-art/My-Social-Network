import {instance} from './instance';


export const friendsApi = {
    getFriends() {
        return instance.get(`users?friend=${true}`
        )
            .then(response => response.data)
    },
}