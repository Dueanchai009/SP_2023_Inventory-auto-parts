<template>
    <div>
        <Loader v-if="loading" />
        <div class="mb-3">

            <div class="row">
                <div class="col-lg-4">
                    <span class="me-2">ประเภทรายงาน: </span>
                    <select class="form-select" v-model="searchField" @change="resetFromSearch">
                        <option value="" disabled selected>เลือกประเภทดูรายงาน</option>
                        <option :value="option.type" v-for="(option, index) in optionReport" :key="index">{{ option.name }}
                        </option>
                    </select>
                </div>
                <div class="col-lg-4">
                    <span class="me-2" v-if="searchField">เลือกดู {{ searchField }}: </span>
                    <template v-if="searchField === 'day'">
                        <select class="form-select" v-model="searchValue">
                            <option value="" disabled selected>เลือกวัน</option>
                            <option :value="day" v-for="(day, index) in optionDay" :key="index">{{ day }}</option>
                        </select>
                    </template>
                    <template v-else-if="searchField === 'month'">
                        <select class="form-select" v-model="searchValue">
                            <option value="" disabled selected>เลือกเดือน</option>
                            <option :value="month" v-for="(month, index) in optionMonth" :key="index">{{ month }}
                            </option>
                        </select>
                    </template>
                    <template v-else-if="searchField === 'year'">
                        <select class="form-select" v-model="searchValue">
                            <option value="" disabled selected>เลือกปี</option>
                            <option :value="year" v-for="(year, index) in optionYear" :key="index">{{ year }}</option>
                        </select>

                    </template>
                </div>
                <div class="col-lg-1">
                    <div class="d-flex justify-content-center align-items-center " style="margin-top:28px;">
                        <button class="btn btn-warning btn-sm" v-if="searchField" @click="resetSearch">รีเซต</button>
                    </div>
                </div>
                <div class="col-lg-3">
                    <span class="me-2 d-block">ออกรายงาน: </span>
                    <div class="mt-1">
                        <button @click="onExport" class="btn btn-outline-success ms-2 btn-sm">Excel</button>
                        <button @click="exportToPdf" class="btn btn-outline-info ms-2 btn-sm">Pdf</button>
                        <button @click="printPdf" class="btn btn-outline-secondary ms-2 btn-sm">Print</button>
                    </div>
                </div>
            </div>
        </div>

        <Loader v-if="loading" />
        <div class="table-responsiv">
            <EasyDataTable :headers="filteredHeaders" :items="items" :search-field="searchField"
                :search-value="searchValue">
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
                    <img width="54" height="54"
                        :src="item.product_img ? item.product_img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMHXXw0K3RRdiCBqbF2v3k8BFKFTFE5kvlZMu8c5ho4ESCuc_SNvlvGA7PFeeeWdRmmg&usqp=CAU'"
                        alt="">
                </template>
                <template #item-type_stock="item">
                    <span :class="`${item.type_stock === 1 ? 'text-bg-success' : 'text-bg-primary'} badge p-1`"
                        style="font-size:12px;">{{ item.type_stock === 1 ? 'เบิก' : 'นำเข้า' }}</span>
                </template>
                <template #empty-message>

                    <span>ไม่พบรายการ{{ searchField }} {{ searchValue }}</span>
                </template>
            </EasyDataTable>
        </div>
    </div>
</template>
<script setup>
import { db } from "../firebase";
import { computed, onMounted, ref } from "vue";
import { collection, onSnapshot, deleteDoc, query, orderBy } from "firebase/firestore";
import Loader from "@/components/Loader.vue";
import * as XLSX from "xlsx"
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// filteredHeaders
const loading = ref(false)
const items = ref([])
const searchValue = ref('')
const searchField = ref("");
const headers = ref([
    { text: "รหัส", value: "product_code" },
    { text: "สินค้า", value: "product_name" },
    { text: "ยี่ห้อ", value: "product_brand" },
    { text: "ประเภท", value: "product_category" },
    { text: "สถานะ", value: "type_stock" },
    { text: "จำนวน", value: "quantity" },
    { text: "คงเหลือ", value: "stock" },
    { text: "วันที่", value: "date" },
    { text: "วันที่", value: "day" },
    { text: "เดือน", value: "month" },
    { text: "ปี", value: "year" },
]);


const optionReport = ref([
    {
        type: 'day',
        name: 'รายวัน',
    }, {
        type: 'month',
        name: 'รายเดือน',
    }, {
        type: 'year',
        name: 'รายปี'
    }
])
const optionDay = ref([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
])

const optionMonth = ref([
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
])

const optionYear = ref([
    2566, 2567, 2568, 2569, 2570
])

const resetSearch = () => {
    searchField.value = ''
    searchValue.value = ''
}

const resetFromSearch = () => {
    searchValue.value = ''
}

const filteredHeaders = computed(() => {
    // header.value !== 'month' &&
    return headers.value.filter((header) => header.value !== 'day' && header.value !== 'year');
});

const onExport = () => {
    const dataWS = XLSX.utils.json_to_sheet(items.value.map(item => ({
        "รหัสสินค้า": item.product_code,
        "สินค้า": item.product_name,
        "ยี่ห้อ": item.product_brand,
        "ประเภท": item.product_category,
        "สถานะ": item.type_stock === 1 ? 'เบิก' : 'นำเข้า',
        "จำนวน": item.quantity,
        "วันที่": item.date,
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
    <td>${item.product_brand}</td>
    <td>${item.product_category}</td>
    <td>${item.type_stock === 1 ? 'เบิก' : 'นำเข้า'}</td>
    <td>${item.quantity}</td>
    <td>${item.date}</td>
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
            <th>ยี่ห้อ</th>
            <th>ประเภท</th>
            <th>สถานะ</th>
            <th>จำนวน</th>
            <th>วันที่</th>
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
        "brand": item.product_brand,
        "category": item.product_category,
        "status": item.type_stock === 1 ? 'withdraw' : 'import',
        "quantity": item.quantity,
        "date": `${item.day + '/' + item.month + '/' + item.year}`,
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

const getProducts = async () => {
    const productsCollection = query(collection(db, 'reports'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(productsCollection, (querySnapshot) => {
        items.value = [];
        querySnapshot.forEach(async (doc) => {
            try {
                loading.value = true
                const data = {
                    id: doc.id,
                    desc: doc.data().desc,
                    product_brand: doc.data().product_brand,
                    product_category: doc.data().product_category,
                    product_code: doc.data().product_code,
                    product_name: doc.data().product_name,
                    quantity: doc.data().quantity,
                    stock: doc.data().stock,
                    type_stock: doc.data().type_stock,
                    date: doc.data().date,
                    day: doc.data().day,
                    year: doc.data().year,
                    month: doc.data().month,

                };
                items.value.push(data);
                loading.value = false

            } catch (error) {
                loading.value = false
                console.error('Error fetching image URL:', error);
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