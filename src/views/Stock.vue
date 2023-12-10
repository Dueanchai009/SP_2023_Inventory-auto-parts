<template>
    <div>

        <div class="d-block d-lg-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
                <span class="me-2">ค้นหา: </span>
                <input class="form-control" type="text" v-model="searchValue" placeholder="ระบุชื่อสินค้า">
                <button @click="onExport" class="btn btn-outline-success ms-2 btn-sm">Export</button>
                <button @click="exportToPdf" class="btn btn-outline-info ms-2 btn-sm">Pdf</button>
                <button @click="printPdf" class="btn btn-outline-secondary ms-2 btn-sm">Print</button>
                <br>
            </div>
            <div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@fat">เพิ่มสินค้า</button>
            </div>
        </div>
        <!-- {{ items }} -->


        <!-- {{ items }} -->
        <Loader v-if="loading" />
        <div class="table-responsiv">
            <EasyDataTable :headers="headers" :items="items" :search-field="searchField" :search-value="searchValue">
                <template #item-manager="item">
                    <div class="btn-group">
                        <button class="btn btn-warning" @click="editProduct(item.id)">
                            <i class='bx bx-edit-alt'></i>
                        </button>
                        <button class="btn btn-danger" @click="deleteProduct(item.id)">
                            <i class='bx bx-trash'></i>
                        </button>
                    </div>
                </template>


                <template #item-product_img="item">
                    <img width="54" height="54" :src="item.product_img ? item.product_img : '/images.png'" alt="">
                </template>
                <template #item-status="item">
                    <span :class="`
                        ${checkClass(item.product_quantity)} p-2 border-0`" style="font-size:12px;">
                        <span v-if="item.product_quantity <= 5 && item.product_quantity > 1">ใกล้หมด</span>
                        <span v-else-if="item.product_quantity > 5">ปกติ</span>
                        <span v-else>หมด</span>
                    </span>

                </template>
                <template #empty-message>
                    <span>ไม่มีอะไหล่สินค้าในระบบ</span>
                </template>
            </EasyDataTable>
        </div>

        <div ref="exampleModal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">สินค้า</h1>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="submitHandler">
                            <div class="row">
                                <div class="mb-3 col-lg-4">
                                    <label for="category-name" class="col-form-label">ประเภท:</label>
                                    <input required v-model="form.product_category" type="text" class="form-control"
                                        id="category-name">
                                </div>
                                <div class="mb-3 col-lg-4">
                                    <label for="" class="col-form-label">ยี่ห้อ:</label>
                                    <input required v-model="form.product_brand" type="text" class="form-control" id="">
                                </div>
                                <div class="mb-3 col-lg-4">
                                    <label for="" class="col-form-label">ผู้จำหน่าย:</label>
                                    <input required v-model="form.product_seller" type="text" class="form-control" id="">
                                </div>
                                <div class="mb-3 col-lg-6">
                                    <label for="" class="col-form-label">รหัสสินค้า:</label>
                                    <input required v-model="form.product_code" type="text" class="form-control" id="">
                                </div>
                                <div class="mb-3 col-lg-6">
                                    <label for="" class="col-form-label">ชื่อสินค้า:</label>
                                    <input required v-model="form.product_name" type="text" class="form-control" id="">
                                </div>
                                <div class="mb-3 col-lg-4">
                                    <label for="" class="col-form-label">ราคาทุน:</label>
                                    <input required v-model="form.product_cost" type="number" class="form-control" id="">
                                </div>
                                <div class="mb-3 col-lg-4">
                                    <label for="" class="col-form-label">ราคาขาย:</label>
                                    <input required v-model="form.product_price" type="number" class="form-control" id="">
                                </div>
                                <div class="mb-3 col-lg-4">
                                    <label for="" class="col-form-label">จำนวน:</label>
                                    <input required v-model="form.product_quantity" type="number" class="form-control"
                                        id="">
                                </div>
                                <div class="mb-3 col-lg-12">
                                    <label for="" class="col-form-label">รุปภาพ (ไม่บังคับ):</label>
                                    <input type="file" @change="handleFileChange" class="form-control">
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-success w-100" type="submit" :disabled="loading">บันทึก</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">ปิด</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>

import { db } from "../firebase";
import { onMounted, ref, computed } from "vue";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, updateDoc, getDoc, onSnapshot, deleteDoc, query, orderBy } from "firebase/firestore";
import Loader from "@/components/Loader.vue";
import * as XLSX from "xlsx"
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const storage = getStorage();
const myDate = new Date();
const thaiOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
const formattedDateThai = myDate.toLocaleDateString('th-TH', thaiOptions);

const searchField = ref("product_name");
const searchValue = ref("");
const loading = ref(false)
const form = ref({
    product_name: '',
    product_code: '',
    product_brand: '',
    product_category: '',
    product_price: '',
    product_cost: '',
    product_quantity: '',
    product_seller: '',
    product_img: ""
})
const headers = ref([
    { text: "ภาพ", value: "product_img" },
    { text: "รหัส", value: "product_code" },
    { text: "ยี่ห้อ", value: "product_brand" },
    { text: "สินค้า", value: "product_name" },
    { text: "ประเภท", value: "product_category" },
    { text: "สถานะ", value: "status" },
    { text: "จำนวน", value: "product_quantity" },
    { text: "ผู้จำหน่าย", value: "product_seller" },
    { text: "จัดการ", value: "manager" },
]);
const items = ref([])
const editMode = ref(false)
const isUpload = ref(false)

const checkClass = (quantity) => {
    let result
    if (quantity <= 5 && quantity > 0) {
        result = 'badge text-bg-warning text-white'
    } else if (quantity > 6) {
        result = 'badge text-bg-success'
    } else {
        result = 'badge text-bg-danger'
    }
    return result
}

const onExport = () => {
    const dataWS = XLSX.utils.json_to_sheet(items.value.map(item => ({
        "รหัสสินค้า": item.product_code,
        "สินค้า": item.product_name,
        "ประเภท": item.product_category,
        "ยี่ห้อ": item.product_brand,
        "จำนวน": item.product_quantity,
        "ผู้จำหน่าย": item.product_seller,
    })));

    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, dataWS)
    XLSX.writeFile(wb, 'ข้อมูลอะไหล่รถยนต์.xlsx')
}
// Create a printable representation of the data
const printPdf = () => {
    const printableContent = items.value.map(item => `
  <tr>
    <td>${item.product_code}</td>
    <td>${item.product_name}</td>
    <td>${item.product_category}</td>
    <td>${item.product_brand}</td>
    <td>${item.product_quantity}</td>
    <td>${item.product_seller}</td>
  </tr>`);

    // Create a new window with the printable content in a table
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(` 
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
    </style>
    <table>
      <thead>
        <tr>
            <th>รหัสสินค้า</th>
            <th>สินค้า</th>
            <th>ประเภท</th>
            <th>ยี่ห้อ</th>
            <th>จำนวน</th>
            <th>ผู้จำหน่าย</th>
        </tr>
      </thead>
      <tbody>
        ${printableContent.join('')}
      </tbody>
    </table>
  `);
    printWindow.document.close();

    // Trigger the print dialog
    printWindow.print();
}

const exportToPdf = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Assuming items.value is an array of objects
    const jsonData = items.value.map(item => ({
        "code": item.product_code,
        "name": item.product_name,
        "category": item.product_category,
        "brand": item.product_brand,
        "quantity": item.product_quantity,
        "seller": item.product_seller,
    }))

    // Check if there is data to export
    if (jsonData.length === 0) {
        openPopup('ไม่มีอะไล่รถยนต์', 'error')
        return;
    }

    // Define the columns for the table using the first object in the array
    const columns = Object.keys(jsonData[0]);

    // Extract the data for the table
    const data = jsonData.map((row) => columns.map((column) => row[column]));

    // Add a table to the PDF
    pdf.autoTable({
        head: [columns],
        body: data,
    });

    // Save or open the PDF
    pdf.save('ข้อมูลอะไหล่รถยนต์.pdf');
}

const handleFileChange = async (e) => {
    isUpload.value = true
    form.value.product_img = e.target.files[0];
};

const createProduct = async () => {



    try {
        editMode.value = false
        const colRef = collection(db, 'products')
        var dataObj = {
            ...form.value
        };

        if (isUpload.value) {
            var dataObj = {
                ...form.value,
                product_img: form.value.product_img.name
            };
            const storageRefUp = storageRef(storage, 'files/' + form.value.product_img.name);
            const snapshot = await uploadBytes(storageRefUp, form.value.product_img);
            console.log("File uploaded successfully:", snapshot);
        }
        const docRef = await addDoc(colRef, dataObj);

        await addReports()
        closeModal()
        openPopup('สร้างสินค้าสำเร็จ')

    } catch (error) {
        console.error("Error uploading file:", error);
    }

}

const editProduct = async (product_id) => {
    try {
        if (product_id === null) {
            console.error('Invalid product_id: null');
            return;
        }
        editMode.value = true
        const productRef = doc(collection(db, 'products'), product_id);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
            console.log(productSnapshot.id);
            form.value = {
                ...productSnapshot.data(),
                id: product_id,
            };
            $('#exampleModal').modal('show');
        } else {
            console.error(`Product with ID ${product_id} does not exist.`);
        }
    } catch (error) {
        console.error('Error fetching/updating product:', error);
    }
};

const updateProduct = async () => {
    try {
        $('#exampleModal').modal('hide')
        const productRef = doc(collection(db, 'products'), form.value.id);

        var dataObj = { ...form.value };

        if (isUpload.value) {
            var dataObj = {
                ...form.value,
                product_img: form.value.product_img.name
            };
        }

        await updateDoc(productRef, dataObj);
        if (form.value.product_img && form.value.product_img !== null) {
            try {
                const storageRefUp = storageRef(storage, 'files/' + form.value.product_img.name);
                const snapshot = await uploadBytes(storageRefUp, form.value.product_img);
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }

        closeModal()
        openPopup('อัพเดตสินค้าสำเร็จ')
    } catch (error) {
        console.error('Error updating product:', error);
    }
};

const getProducts = async () => {
    const productsCollection = query(collection(db, 'products'), orderBy('product_code', 'desc'));
    const unsubscribe = onSnapshot(productsCollection, (querySnapshot) => {
        items.value = [];
        querySnapshot.forEach(async (doc) => {
            try {
                loading.value = true
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
                loading.value = false
            } catch (error) {
                console.error('Error fetching image URL:', error);
                loading.value = false
            }
        });
    });

    return unsubscribe;
};


const deleteProduct = (productId) => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "ต้องการลบอะไหล่สินค้า?",
        text: "เมื่อลบแล้วจะไม่สามารถนำกลับมาได้!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "ตกลง",
        cancelButtonText: "ยกเลิก",
        reverseButtons: true
    }).then((result) => {
        try {
            if (result.isConfirmed) {
                const productRef = doc(collection(db, 'products'), productId);
                deleteDoc(productRef);
                items.value = items.value.filter(item => item.id !== productId);
                swalWithBootstrapButtons.fire({
                    title: "ลบอะไหล่สำเร็จ!",
                    text: "",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "ยกเลิกรายการ",
                    text: "",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    });


};

const closeModal = () => {
    editMode.value = false
    isUpload.value = false
    form.value = {
        id: null,
        product_name: '',
        product_code: '',
        product_brand: '',
        product_category: '',
        product_price: '',
        product_cost: '',
        product_quantity: '',
        product_seller: '',
        product_img: ''
    };
    $('#exampleModal').modal('hide')
}

const addReports = async () => {
    try {
        const colRef = collection(db, 'reports')
        const options = { month: 'long', timeZone: 'Asia/Bangkok' };
        const thaiMonth = new Date().toLocaleDateString('TH', options);
        const dataObj = {
            product_name: form.value.product_name,
            product_code: form.value.product_code,
            product_brand: form.value.product_brand,
            product_category: form.value.product_category,
            product_seller: form.value.product_seller,
            quantity: form.value.product_quantity,
            stock: form.value.product_quantity,
            type_stock: 0,
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
            product_seller: '',
            product_img: ''
        };


    } catch (error) {
        console.error('Error updating product:', error);
    }
}

onMounted(async () => {
    loading.value = true
    getProducts()
    loading.value = false

})

const openPopup = (title, icon = 'success') => {
    Swal.fire({
        position: "center",
        icon,
        title,
        showConfirmButton: false,
        timer: 1500
    });
}

const submitHandler = computed(() => (editMode.value ? updateProduct : createProduct));


</script>