<template>
  <div class="home">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="documents">
      <ListView :playlists="documents" />
    </div>
  </div>
</template>

<script>
import ListView from "../components/ListView";
import getCollection from "@/composables/getCollection";

export default {
  components: { ListView },
  setup() {
    const { documents, error } = getCollection("playlists");

    return { documents, error };
  },
};
</script>
