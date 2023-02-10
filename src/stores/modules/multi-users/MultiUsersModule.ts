export interface MultiUsers {
    id: number,
    firstName: string,
    lastName: string
}

const state = {
    multiUsers: [] as MultiUsers[]
}

const getters = {
    getMultiUsers(state: any) {
        return state
    }
}

const mutations = {
    setMultiUsers(state: any, data: MultiUsers) {
        state.multiUsers = data
    }
}

const actions = {
    async fetchMultiUsers({ commit }: any) {
        await fetch("http://localhost:1002/users")
      .then((response) => {
        if (!response.ok) {
          const error = response.statusText;
          return Promise.reject(error);
        }
        return response.json();
      })
      .then((data: MultiUsers[]) => {
        commit("setMultiUsers", data);
      })
      .catch((error) => {
        console.log(error);
      });
    },

    addMultiUsers({ commit }: any, data: MultiUsers) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: data.id, firstName: data.firstName, lastName: data.lastName })
          };
    
          fetch('http://localhost:1002/users', requestOptions)
            .then(async response => {
              const data = await response.json();
              if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
              }
            })
            .catch(error => {
              console.error('There was an error!', error);
            });
    },

    async updateMultiUsers({commit}: any, data: MultiUsers) {
        
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

    async deleteMultiUsers({commit}: any, key: number) {
        await fetch(`http://localhost:1002/users/${key}`, { method: 'DELETE' });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}