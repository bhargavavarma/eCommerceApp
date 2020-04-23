import UserService from '../services/userService/index.api'
import TodoService from '../services/todoService/index.api'
import CounterStore from './CounterStore'
import UserStore from './UsersStore/index'
import TodoStores from './TodoStore/indexAPI'
const counterStore = new CounterStore()
const userService = new UserService()
const todoService = new TodoService()
const userStore = new UserStore(userService)
const todoStores  = new TodoStores(todoService)
export default {
  counterStore,
  userStore,
  todoStores
}
