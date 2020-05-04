import AuthStore from './AuthStore'
import AuthAPI from '../../services/AuthService/AuthAPI'

const authAPI = new AuthAPI()
const authStore = new AuthStore(authAPI)
export default authStore