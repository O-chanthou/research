export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const state = {
  USERS: [],
  isLoading: false
};

const actions = {
  async fetchUsers({ commit }: any) {
    state.isLoading = true
    await fetch("http://localhost:1002/users")
      .then((response) => {
        if (!response.ok) {
          const error = response.statusText;
          return Promise.reject(error);
        }
        return response.json();
      })
      .then((data: User[]) => {
        commit("SET_USERS", data);
      })
      .catch((error) => {
        console.log(error);
        state.isLoading = false
      });
  },

  addUser({ commit }: any, data: User) {
    const id = Math.floor(Math.random() * 1000)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id, firstName: data.firstName, lastName: data.lastName })
      };

      fetch('http://localhost:1002/users', requestOptions)
        .then(async response => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          commit("ADD_USER", data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
  },

  async updateUser({commit}:any, data: User) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        firstName: data.firstName, 
        lastName: data.lastName 
       })
    };

    await fetch(`http://localhost:1002/users/${data.id}`, requestOptions);
    
  },

  async removeUse({ commit }: any, key: number) {
    await fetch(`http://localhost:1002/users/${key}`, { method: 'DELETE' });
  }

};

const mutations = {
  SET_USERS(state: any, data: User) {
    state.USERS = data;
    state.isLoading = false
  },

  ADD_USER(state: any, data: User) {
    state.USERS.push(data);
  },
};

const getters = {
  getUsers(state: any) {
    return state.USERS;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
