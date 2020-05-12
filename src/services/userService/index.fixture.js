import usersResponse from '../../fixtures/getUsersResponse.json'
class UserService {

  getUserAPI() {
    return new Promise((resolve,reject) => {
      resolve(usersResponse)
    })
  }
}

export default UserService;