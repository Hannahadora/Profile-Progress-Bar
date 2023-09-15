<template>
  <div>
    <p style="font-size: 30px; font-weight: 600">User Profile Details</p>
    <br />
    <form action="">
      <div>
        <label for="name">Name</label><br />
        <input class="user-input" type="text" v-model="userDetails.name" />
      </div>
      <br />
      <div>
        <label for="age">Age</label><br />
        <input class="user-input" type="text" v-model="userDetails.age" />
      </div>
      <br />
      <div>
        <label for="school">School</label><br />
        <input class="user-input" type="text" v-model="userDetails.school" />
      </div>
      <br />
      <div>
        <label for="degree">Degree</label><br />
        <input class="user-input" type="text" v-model="userDetails.degree" />
      </div>
      <br />

      <button class="save-button" @click="saveDetail">Save</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";

const store = useStore()

const userDetails = ref(store.getters.getUserProfile);

const saveDetail = (e) => {
  e.preventDefault()

  store.dispatch('updateProfile', userDetails.value)
};
</script>

<style scoped>
.user-input {
  width: 100%;
  padding: 8px 16px;
}

.save-button {
  background: green;
  padding: 10px 30px;
  color: #fff;
}
</style>
