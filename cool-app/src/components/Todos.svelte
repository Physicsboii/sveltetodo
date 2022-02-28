<script>
  import { db, colref } from "../config/firebase";
  import { doc, setDoc, addDoc, getDocs } from "firebase/firestore";
import Todocard from "./Todocard.svelte"
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  import { Firestore, serverTimestamp, query, where } from "firebase/firestore";
  import { user } from "rxfire/auth";
  // export let uid;
  let value;
  let todos = [];
let todosi = ["sadas","sdadad","dsad"];
  export let uid;
  const q = query(colref, where("uid", "==", uid));

  async function asyncCall() {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      todos.push( doc.data());
      
    });
    
    console.log(todos);
  }

  asyncCall();

  const add = () => {
    // const {severTimestamp} = FieldValue;
    addDoc(colref, {
      uid: uid,
      name: value,
      createdAt: serverTimestamp(),
    });
    asyncCall();
    value = "";
  };
</script>

<div class="todoin">
  <input bind:value type="text" class="todoinput" />
  <button on:click={add} class="add fas fa-plus-square" />

</div>
<div  class="todocon">
    {#each todos as i}

    <h1>{i}</h1>

    {/each}
    <h1>{todos}</h1>

</div>

