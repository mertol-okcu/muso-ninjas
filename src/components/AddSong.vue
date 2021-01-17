<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true">Add song</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Add a new song</h4>
      <input type="text" placeholder="Song title" required v-model="title" />
      <input type="text" placeholder="Artist" required v-model="artist" />
      <div v-if="error" class="error">{{ error }}</div>
      <button v-if="!isPending">Add</button>
      <button v-else disabled>Adding...</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useDocument from "../composables/useDocument";

export default {
  props: ["playlist"],
  setup(props) {
    const title = ref("");
    const artist = ref("");
    const showForm = ref(false);
    const { updateDoc, error, isPending } = useDocument(
      "playlists",
      props.playlist.id
    );

    const handleSubmit = async () => {
      const newSong = {
        title: title.value,
        artist: artist.value,
        id: Math.floor(Math.random() * 1000000),
      };
      const res = await updateDoc({
        songs: [...props.playlist.songs, newSong],
      });
      title.value = "";
      artist.value = "";
    };

    return { title, artist, showForm, handleSubmit, error, isPending };
  },
};
</script>

<style scoped>
.add-song {
  text-align: center;
  margin-top: 40px;
}
form {
  max-width: 100%;
  text-align: left;
}
</style>