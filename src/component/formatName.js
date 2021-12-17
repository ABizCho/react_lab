const user = {
    firstName : 'CHO',
    lastName : 'seongwoo'
}
export const formatName = (() => user.firstName + ' ' + user.lastName)() ;