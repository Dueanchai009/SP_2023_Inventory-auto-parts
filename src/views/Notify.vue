<template>
    <div>
        {{ zeroQuantityCount }}
    </div>
</template>

<script setup>
import { db } from "../firebase";
import { onMounted, ref, computed } from "vue";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, updateDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";

const storage = getStorage()
const items = ref([])
const zeroQuantityCount = ref(0)
const loading = ref(false)
const getProducts = async () => {
    const productsCollection = collection(db, 'products');
    const unsubscribe = onSnapshot(productsCollection, (querySnapshot) => {
        items.value = [];

        querySnapshot.forEach(async (doc) => {
            try {
                loading.value = true;
                const imagePath = doc.data().product_img ? `files/${doc.data().product_img}` : null;
                const url = imagePath ? await getDownloadURL(storageRef(storage, imagePath)) : null;

                const data = {
                    id: doc.id,
                    product_brand: doc.data().product_brand,
                    product_category: doc.data().product_category,
                    product_code: doc.data().product_code,
                    product_cost: doc.data().product_cost,
                    product_name: doc.data().product_name,
                    product_price: doc.data().product_price,
                    product_quantity: doc.data().product_quantity,
                    product_seller: doc.data().product_seller,
                    product_img: url,
                };


                if (data.product_quantity === 0) {
                    zeroQuantityCount.value++;
                }

                items.value.push(data);
                loading.value = false;
            } catch (error) {
                console.error('Error fetching image URL:', error);
                loading.value = false;
            }
        });

    });

    return unsubscribe;
};

onMounted(async () => {
    await getProducts()
})

</script>

<style scoped></style>