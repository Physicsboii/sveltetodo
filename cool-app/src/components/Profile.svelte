<script>
  export let displayName;
  export let photoURL;
  // export let uid;
</script>

<div class="profile">
    <img class="userphoto" src={photoURL} width="100" alt="user avatar" />

  <h3 class="username">{displayName}</h3>

  <!-- <p>Your userID is { uid }</p> -->
</div>
