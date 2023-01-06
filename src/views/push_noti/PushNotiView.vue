<template>
  <form @submit.prevent="submitPushNoti" class="form-push-noti">
    <label>TItle</label>
    <input type="text" v-model="formPush.title" />
    <label>Content</label>
    <textarea type="text" :rows="5" v-model="formPush.content"></textarea>
    <button>Push</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const formPush = reactive({
  title: "OneSignal WEB PUSH",
  content: "Welcome to the clan..!!",
});

const submitPushNoti = () => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: "Basic MTljNmQ4ODktNTYzZi00ZWM0LTk4MjMtOWU0MmNjZDI4ZGE5",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      app_id: "9c57d7ba-84db-4a43-8994-99329bed784d",
      include_player_ids: ["88f95a88-58c9-412a-baf4-5037226ef2f0"], // push for a user by id
      // included_segments: ["Subscribed Users"], // push all
      included_segments: ["include_player_ids"],  // push for a user by id
      "isAnyWeb": true,
      contents: {
        en: formPush.content,
      },
      name: formPush.title,
    }),
  };

  fetch("https://onesignal.com/api/v1/notifications", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
</script>

<style scoped>
.form-push-noti {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>
