<template>
    <div>
        <div class="row">
            <div class="col">
                <h3 class="text-center mb-3">ฟอร์มเบิกอะไหล่</h3>
                <div class="mb-3">
                    <label for="">เลือกอะไหล่</label>
                    <v-select :options="items" placeholder="กรุณาเลือกอะไหล่" label="product_name" v-model="selectdProduct"
                        @change="selectProduct"></v-select>

                </div>

                <div v-if="form">
                    <div class="border-primary border mb-3"></div>
                    <h4>รายละเอียดอะไหล่</h4>
                    <div class="d-flex justify-content-center">
                        <img class="rounded" width="250" height="250"
                            :src="form.product_img ? form.product_img : '/images.png'" alt="">
                    </div>
                    <form @submit.prevent="withdrawProduct">
                        <div class="row">

                            <div class="mb-3 col-lg-4">
                                <label for="category-name" class="col-form-label">ประเภท:</label>
                                <input disabled required v-model="form.product_category" type="text" class="form-control"
                                    id="category-name">
                            </div>
                            <div class="mb-3 col-lg-4">
                                <label for="" class="col-form-label">ยี่ห้อ:</label>
                                <input disabled required v-model="form.product_brand" type="text" class="form-control"
                                    id="">
                            </div>
                            <div class="mb-3 col-lg-4">
                                <label for="" class="col-form-label">ผู้จำหน่าย:</label>
                                <input disabled required v-model="form.product_seller" type="text" class="form-control"
                                    id="">
                            </div>

                            <div class="mb-3 col-lg-12">
                                <label for="" class="col-form-label">ชื่อสินค้า:</label>
                                <input disabled required v-model="form.product_name" type="text" class="form-control" id="">
                            </div>
                            <div class="mb-3 col-lg-4">
                                <label for="" class="col-form-label">รหัสสินค้า:</label>
                                <input disabled required v-model="form.product_code" type="text" class="form-control" id="">
                            </div>
                            <div class="mb-3 col-lg-4">
                                <label for="" class="col-form-label">ราคาขาย:</label>
                                <input disabled required v-model="form.product_price" type="text" class="form-control"
                                    id="">
                            </div>
                            <div class="mb-3 col-lg-4">
                                <label for="" class="col-form-label">คงเหลือ:</label>
                                <input disabled required v-model="form.product_quantity" type="text" class="form-control"
                                    id="">
                            </div>
                            <div class="mb-3 col-lg-12">
                                <label for="" class="col-form-label">จำนวนเบิกสินค้า:</label>
                                <!-- :max="form.product_quantity" -->
                                <input required v-model="form.withdraw_count" min="1" type="number" class="form-control"
                                    id="">
                            </div>
                            <div class="col-12">
                                <button class="btn btn-success w-100" type="submit" :disabled="loading">เบิกอะไหล่<span
                                        v-if="loading">...</span></button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { db } from "../firebase";
import { onMounted, ref, computed, watch } from "vue";
import { addDoc, collection, doc, getDocs, query, updateDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

const storage = getStorage();
const selectdProduct = ref(null)
const loading = ref(false)
const form = ref(null)
const items = ref([])
const myDate = new Date();
const thaiOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
const formattedDateThai = myDate.toLocaleDateString('th-TH', thaiOptions);


const getProducts = async () => {
    const productsCollection = collection(db, 'products');
    const unsubscribe = onSnapshot(productsCollection, (querySnapshot) => {
        items.value = [];
        querySnapshot.forEach(async (doc) => {
            try {
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

                items.value.push(data);
            } catch (error) {
                console.error('Error fetching image URL:', error);
            }
        });
    });

    return unsubscribe;
};

watch(selectdProduct, (newVal) => {
    if (newVal === null) {
        form.value = null
    } else {
        form.value = {
            ...selectdProduct.value,
            withdraw_count: 1
        }
    }
});

const selectProduct = () => {
    console.log('test');
    form.value = {
        ...selectdProduct.value,
        withdraw_count: 1
    }
}

const withdrawProduct = async () => {
    loading.value = true
    if (form.value.withdraw_count > form.value.product_quantity) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "สินค้าคงหลือไม่เพียงพอ",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        form.value.withdraw_count > form.value.product_quantity
        updateProduct(form.value)
        await addReports()
        Swal.fire({
            position: "center",
            icon: "success",
            title: "เบิกอะไล่สำเร็จ",
            showConfirmButton: false,
            timer: 1500
        });
        form.value = null
        selectdProduct.value = null
    }
    loading.value = false

}

const addReports = async () => {
    try {
        const result_stock = form.value.product_quantity - form.value.withdraw_count
        const colRef = collection(db, 'reports')
        const options = { month: 'long', timeZone: 'Asia/Bangkok' };
        const thaiMonth = new Date().toLocaleDateString('TH', options);
        const dataObj = {
            product_name: form.value.product_name,
            product_code: form.value.product_code,
            product_brand: form.value.product_brand,
            product_category: form.value.product_category,
            product_seller: form.value.product_seller,
            quantity: form.value.withdraw_count,
            stock: result_stock,
            type_stock: 1,
            date: formattedDateThai,
            day: new Date().getDate(),
            month: thaiMonth,
            year: new Date().getFullYear() + 543
        };
        const docRef = await addDoc(colRef, dataObj);
        form.value = {
            id: null,
            product_name: '',
            product_code: '',
            product_brand: '',
            product_category: '',
            product_price: '',
            product_cost: '',
            product_quantity: '',
            product_seller: ''
        };


    } catch (error) {
        console.error('Error updating product:', error);
    }
}

const updateProduct = async (form) => {
    try {
        const productRef = doc(collection(db, 'products'), form.id);
        const result_count = form.product_quantity - form.withdraw_count
        await updateDoc(productRef, {
            product_quantity: result_count
        });
        form.value = {
            id: null,
            product_name: '',
            product_code: '',
            product_brand: '',
            product_category: '',
            product_price: '',
            product_cost: '',
            product_quantity: '',
            product_seller: ''
        };
        $('#exampleModal').modal('hide')


    } catch (error) {
        console.error('Error updating product:', error);
    }
};

onMounted(() => {
    getProducts()
})
</script>

<style lang="scss" scoped></style>