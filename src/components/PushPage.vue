<template>
  <div class="push-content">
    <form @submit.prevent class="form-search">
      <div class="input-title">
        <label>Title: </label>
        <input type="text" v-model="formSearch.title" placeholder="Title" />
      </div>

      <div class="dropdown-type">
        <label>Announcement Type: </label>
        <select v-model="formSearch.announceType">
          <option v-for="announceType in announceTypes" :value="announceType">
            {{ announceType }}
          </option>
        </select>
      </div>

      <div class="btn-search-n-register">
        <button class="btn-search" type="submit" @click="btnSearch">
          Search
        </button>
        <button class="btn-register" @click="btnRegister">Register</button>
      </div>
    </form>

    <div class="result-list">
      <table style="width: 100%">
        <tr>
          <th>
            <input v-if="dataHeader.length !== 0" type="checkbox" v-model="isAllSelected" @click="selectAll" />
          </th>
          <th v-for="header in dataHeader">{{ header }}</th>
        </tr>
        <tr v-for="announce in announceData">
          <td>
            <input
              type="checkbox"
              v-model="announceId"
              @click="select"
              :value="announce.id"
            />
          </td>
          <td>
            <RouterLink :to="{ name: 'details', params: { id: announce.id } }">
              {{ announce.id }}
            </RouterLink>
          </td>
          <td>
            <RouterLink :to="{ name: 'details', params: { id: announce.id } }">
              {{ announce.title }}
            </RouterLink>
          </td>
          <td>
            <RouterLink :to="{ name: 'details', params: { id: announce.id } }">
              {{ announce.announce }}
            </RouterLink>
          </td>
        </tr>
      </table>
      <span>Selected Ids: {{ announceId }}</span>
    </div>
    <div class="bottom-btn">
      <button class="btn-delete">Delete</button>
      <button class="btn-edit">Edit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { announceTypes } from "../../data/announce-type";
import { usePushStore } from "@/stores/storeState";
import { storeToRefs } from "pinia";


let isAllSelected = false;
let announceId = ref<number[]>([]);

const formSearch = reactive({
  title: "",
  announceType: "",
});

const btnSearch = async () => {
  await pushStore.searchData(formSearch);
};

const pushStore = usePushStore();

const { announceData } = storeToRefs(pushStore);

let dataHeader = reactive<string[]>([]);

const getHeader = () => {
  for (let i = 0; i < announceData.value.length; i++) {
    for (let key in announceData.value[i]) {
      if (dataHeader.indexOf(key) === -1) {
        dataHeader.push(key);
      }
    }
  }
};

const selectAll = () => {
  announceId.value = [];
  isAllSelected = !isAllSelected;
  console.log(isAllSelected);

  if (isAllSelected) {
    announceData.value.forEach((e) => announceId.value.push(e.id));
  }
};

const select = () => {
  console.log(isAllSelected);
  isAllSelected = false;
};

const btnRegister = () => {

};

pushStore.fetchAnnounceType().then(() => {
  getHeader();
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  color: blue;
}

table,
th,
td {
  border: solid 1px #000;
  border-collapse: collapse;
  padding: 2px 3px;
  text-align: center;
}
th {
  font-weight: bold;
}
.push-content {
  width: 100%;
  margin: auto;
}
.footer {
  position: fixed;
  bottom: 0;
}
.form-search {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
.input-title label {
  margin-right: 15px;
}
select {
  font-size: 0.9rem;
  padding: 2px 5px;
  width: 200px;
}
.btn-search-n-register {
  width: auto;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
.btn-search {
  margin-right: 20px;
}
.result-list {
  margin: 0 20px;
}

.bottom-btn {
  margin: 20px;
}
.btn-delete {
  margin-right: 20px;
}
</style>
