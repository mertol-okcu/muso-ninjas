import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null);
  const isPending = ref(false);

  const addDoc = async (doc) => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "Could not upload info";
      isPending.value = false;
    }
  };

  return { addDoc, error, isPending };
};

export default useCollection;
