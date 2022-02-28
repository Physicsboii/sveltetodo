<script>
  import Profile from "./components/Profile.svelte";
  import Todos from "./components/Todos.svelte";
  import { auth, GoogleProvider } from "./config/firebase";
  import { authState } from "rxfire/auth";
  import { signInWithPopup } from "firebase/auth";
  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));
  const login = () => {
    signInWithPopup(auth, GoogleProvider);
  };
</script>

<main class="App">
  <div class="proc">
    {#if user}
      <Profile {...user} />
      <button class="btnlog" on:click={() => auth.signOut()}>Logout</button>
      <hr />
      {:else}
      <button class="btnlog" on:click={login}> Sign in with Google </button>
      {/if}
  </div>
  <h1 class="head">TODO APP</h1>

  {#if user}
  <Todos uid={user.uid} />
  {/if}
  
</main>

<style>
  @import "base.css";
</style>
