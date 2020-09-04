export const required = value => {
    if (value) return undefined
    return 'Filed is required'

}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > 30) return `Max length is ${maxLength} symbols`
    return undefined

}

export const validate = values => {
    const errors = {}
    const requiredFields = [
        'login',
        'password',
        'rememberMe',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.login &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)
    ) {
        errors.login = 'Invalid email address'
    }
    return errors
}