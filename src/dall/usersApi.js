import {instance} from './instance';


export const UsersApi = {
    getUsers(currentPage, pageSize, searchName) {
        return instance.get(`users?`
            + (searchName  ? `term=${searchName}&` : '')
            + (pageSize ? `count=${pageSize}&` : '')
            + (currentPage ? `page=${currentPage}` : '')
        )
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`,
            {})
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    }
}