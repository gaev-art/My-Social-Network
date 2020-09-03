import {instance} from './instance';


export const profileApi = {
    setUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    setStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,
            {status: status})
    },
    savePhoto(file) {
        let formData = new FormData()
        formData.append('image', file)

        return instance.put(`profile/photo`,
            formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
    },
    saveProfile(profile) {
        return instance.put(`profile`,
            profile)
    },
    // setPosts() {
    //     return instance.get(`http://localhost:3004/posts`)
    // },
    // deletePost(postId) {
    //     return instance.delete(`http://localhost:3004/posts/${postId}`)
    //         .then(res => res.data)
    // },
    // sendPost(post) {
    //     return instance.post(`http://localhost:3004/posts/`, post)
    //
    // },
}