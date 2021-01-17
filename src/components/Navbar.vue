<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="Ninja Logo" />
      <h1>
        <router-link :to="{ name: 'Home' }">Muso Ninjas</router-link>
      </h1>
      <div class="links">
        <a v-if="user" @click="handleClick" class="btn">Log out</a>
        <router-link v-if="user" class="btn" :to="{ name: 'CreatePlaylist' }"
          >Create playlist</router-link
        >
        <router-link v-if="!user" class="btn" :to="{ name: 'Signup' }"
          >Sign up</router-link
        >
        <router-link v-if="!user" class="btn" :to="{ name: 'Login' }"
          >Log in</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";

export default {
  setup() {
    const { logout } = useLogout();

    const router = useRouter();

    const handleClick = async () => {
      await logout();
      console.log("user logged out");
      router.push({ name: "Login" });
    };

    const { user } = getUser();

    return { handleClick, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
  box-shadow: 0px 0px 4px rgba(50, 50, 50, 0.1);
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
</style>