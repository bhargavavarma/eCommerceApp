import AuthStore from './AuthStore'
import AuthService from '../../services/AuthService/AuthApi'

const authService = new AuthService()
const authStore = new AuthStore(authService)
export default authStore