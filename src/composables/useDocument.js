import { ref } from "vue";
import { projectFirestore, projectStorage } from "../firebase/config";

const useDocument = (collection, id) => {
  const error = ref(null);
  const isPending = ref(false);

  let docRef = projectFirestore.collection(collection).doc(id);

  const deleteDoc = async () => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await docRef.delete();
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "Could not delete";
      isPending.value = false;
    }
  };

  return { deleteDoc, error, isPending };
};

export default useDocument;
