export default {
  state: {
    selectedUserId: null,
    userList: [
      { userId: 123 },
      { userId: 456, userData: { age: 39, name: 'Patrick O\'Dacre' } }
    ]
  },
  getters: {
    selectedUser(state) {
      return state.userList.find(user => user.userId === state.selectedUserId);
    },
    getUser: state => userId => {
      return state.userList.find(user => user.userId === userId);
    }
  },
  mutations: {
    selectUser(state, userId) {
      state.selectedUserId = userId;
    },
  }
}
