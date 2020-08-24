import {instance} from './instance';


export const usersApi = {
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