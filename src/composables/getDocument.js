import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getDocument = (collection, id) => {
  const document = ref(null);
  const error = ref(null);

  let documentRef = projectFirestore.collection(collection).doc(id);

  const unsub = documentRef.onSnapshot(
    (doc) => {
      //console.log("snapshot document");
      if (doc.data() && doc.data().createdAt) {
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = "That document does not exist";
      }
    },
    (err) => {
      //console.log(err.message);
      document.value = null;
      error.value = "could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    // unsub when watcher is stopped (component unmounted)
    onInvalidate(() => unsub());
  });

  return { document, error };
};

export default getDocument;
