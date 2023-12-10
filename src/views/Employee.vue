<template>
    <div>
        <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
                <span class="me-2">ค้นหา: </span>
                <input class="form-control" type="text" v-model="searchValue">
                <button @click="onExport" class="btn btn-outline-success ms-2 btn-sm">Excel</button>
                <button @click="exportToPdf" class="btn btn-outline-info ms-2 btn-sm">Pdf</button>
                <button @click="printPdf" class="btn btn-outline-secondary ms-2 btn-sm">Print</button>
                <br>
            </div>
            <div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@fat">เพิ่มพนักงาน</button>
            </div>
        </div>
        <div class="table-responsiv">
            <EasyDataTable :headers="headers" :items="items" :search-field="searchField" :search-value="searchValue">
                <template #item-manager="item">
                    <div class="btn-group">
                        <button class="btn btn-secondary" @click="openModelPassword(item.id)">
                            <i class='bx bxs-lock-open-alt' style='color:#ffffff'></i>
                        </button>
                        <button class="btn btn-warning" @click="editUser(item.id)">
                            <i class='bx bx-edit-alt'></i>
                        </button>
                        <button class="btn btn-danger" v-if="!uid == item.id" @click="deleteAccountFunc(item.id)">
                            <i class='bx bx-trash'></i>
                        </button>
                    </div>
                </template>


            </EasyDataTable>
        </div>



        <div ref="exampleModal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">พนักงาน</h1>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="submitHandler">
                            <div class="row">
                                <div class="alert alert-danger" v-if="errorMsg">
                                    <ul>
                                        <li>{{ errorMsg }}</li>
                                    </ul>
                                </div>

                                <div class="mb-3 col-lg-6">
                                    <label for="category-name" class="col-form-label">ชื่อ:</label>
                                    <input required v-model="form.firstname" type="text" class="form-control"
                                        placeholder="โปรดระบุชื่อพนักงาน">
                                </div>
                                <div class="mb-3 col-lg-6">
                                    <label for="category-name" class="col-form-label">ชื่อสกุล:</label>
                                    <input required v-model="form.lastname" type="text" class="form-control"
                                        placeholder="โปรดระบุชื่อพนักงาน">
                                </div>
                                <div class="mb-3 col-lg-12">
                                    <label for="category-name" class="col-form-label">ชื่อพนักงาน:</label>
                                    <input required v-model="form.username" type="text" class="form-control"
                                        placeholder="โปรดระบุชื่อพนักงาน">
                                </div>
                                <div class="mb-3 col-lg-12">
                                    <label for="category-name" class="col-form-label">อีเมล:</label>
                                    <input :disabled="editMode" v-model="form.email" type="email" class="form-control"
                                        placeholder="โปรดระบุอีเมล">
                                </div>
                                <div class="mb-3 col-lg-12">
                                    <label for="category-name" class="col-form-label">รหัสผ่าน:</label>
                                    <input :disabled="editMode" required v-model="form.password" type="password"
                                        class="form-control" placeholder="โปรดระบุรหัสผ่าน">
                                </div>

                                <div class="col-12">
                                    <button class="btn btn-success w-100" type="submit">บันทึก</button>
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

        <div class="modal fade" id="exampleModalPassword" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">พนักงาน</h1>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updatePasswordWeb">
                            <div class="row">
                                <div class="alert alert-danger" v-if="errorMsg">
                                    <ul>
                                        <li>{{ errorMsg }}</li>
                                    </ul>
                                </div>

                                <div class="mb-3 col-lg-6">
                                    <label for="category-name" class="col-form-label">ชื่อ:</label>
                                    <input disabled required v-model="form.firstname" type="text" class="form-control"
                                        placeholder="โปรดระบุชื่อพนักงาน">
                                </div>
                                <div class="mb-3 col-lg-6">
                                    <label for="category-name" class="col-form-label">ชื่อสกุล:</label>
                                    <input disabled required v-model="form.lastname" type="text" class="form-control"
                                        placeholder="โปรดระบุชื่อพนักงาน">
                                </div>
                                <div class="mb-3 col-lg-12">
                                    <label for="category-name" class="col-form-label">ชื่อพนักงาน:</label>
                                    <input disabled required v-model="form.username" type="text" class="form-control"
                                        placeholder="โปรดระบุชื่อพนักงาน">
                                </div>
                                <div class="mb-3 col-lg-12">
                                    <label for="category-name" class="col-form-label">อีเมล:</label>
                                    <input disabled required v-model="form.email" type="email" class="form-control"
                                        placeholder="โปรดระบุอีเมล">
                                </div>


                                <div>
                                    <div class="mb-3 col-lg-12">
                                        <label for="category-name" class="col-form-label">รหัสผ่านใหม่:</label>
                                        <input required v-model="newPassword" type="password" class="form-control"
                                            placeholder="โปรดระบุรหัสผ่าน">
                                    </div>

                                </div>


                                <div class="col-lg-12">
                                    <button type="submit" class="btn btn-primary w-100"
                                        :disabled="loading">อัพเดตรหัสผ่าน<span v-if="loading">...</span></button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal" :disabled="loading">ปิด</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>


import { db } from "../firebase";
import { onMounted, ref, computed } from "vue";
import { addDoc, collection, doc, updateDoc, getDoc, onSnapshot, deleteDoc, query, getDocs, where } from "firebase/firestore";
import { auth } from "../firebase"
import * as XLSX from "xlsx"
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const searchField = ref("email");
const searchValue = ref("");
const newPassword = ref('')
const loading = ref(false)

const form = ref({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: ''
})

const headers = ref([
    { text: "#", value: "index" },
    { text: "ชื่อผู้ใช้", value: "username" },
    { text: "อีเมล", value: "email" },
    { text: "จัดการ", value: "manager" },
]);

const items = ref([])
const editMode = ref(false)
const errorMsg = ref('')
let uid = JSON.parse(localStorage.getItem("user")).uid

const onExport = () => {
    const dataWS = XLSX.utils.json_to_sheet(items.value.map(item => ({
        "ชื่อผู้ใช้งาน": item.username,
        "อีเมล": item.email,

    })));

    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, dataWS)
    XLSX.writeFile(wb, 'ข้อมูลอะไหล่รถยนต์.xlsx')
}

// Create a printable representation of the data
const printPdf = () => {
    const printableContent = items.value.map(item => `
  <tr>
    <td>${item.username}</td>
    <td>${item.email}</td>
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
            <th>ชื่อผู้ใช้</th>
            <th>อีเมล</th>
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
        "ชื่อผู้ใช้": item.username,
        "อีเมล": item.email,
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

const openModelPassword = async (user_id) => {
    editMode.value = true
    const userRef = doc(collection(db, 'users'), user_id);
    const userSnapshot = await getDoc(userRef);
    form.value = {
        id: userSnapshot.id,
        ...userSnapshot.data()
    }
    $('#exampleModalPassword').modal('show')
}

const deleteAccountFunc = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "ต้องการพนักงาน?",
        text: "เมื่อลบแล้วจะไม่สามารถนำกลับมาได้!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "ตกลง",
        cancelButtonText: "ยกเลิก",
        reverseButtons: true
    }).then(async (result) => {
        try {
            if (result.isConfirmed) {
                loading.value = true
                const userRef = doc(collection(db, 'users'), uid);
                await deleteDoc(userRef);
                swalWithBootstrapButtons.fire({
                    title: "ลบพนักงานสำเร็จ!",
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
}

const updatePasswordWeb = async () => {
    try {
        loading.value = true
        const userRef = doc(collection(db, 'users'), form.value.id);
        await updateDoc(userRef, {
            password: newPassword.value
        });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "อัพเดตรหัสผ่านสำเร็จ",
            showConfirmButton: false,
            timer: 1500
        });

        closeModal()
        loading.value = false

    } catch (error) {
        loading.value = false
        console.error('Error updating password:', error.message);
        // Handle errors or provide feedback to the user.
    }
}

const createUser = () => {
    if (form.value.password.length < 6) {
        errorMsg.value = 'กรุณากรอกรหัสผ่านให้มากกว่า 6 หลัก'
    } else {
        createUserWithEmailAndPassword(auth, form.value.email, form.value.password).then((res) => {
            const colRef = collection(db, 'users')
            const dataObj = {
                ...form.value,
                uid: res.user.uid
            }
            addDoc(colRef, dataObj);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "เพิ่มพนักงานสำเร็จ",
                showConfirmButton: false,
                timer: 1500
            });
            $('#exampleModal').modal('hide')
        }).catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/email-already-in-use":
                    errorMsg.value = "อีเมลนี้มีผู้ใช้งานแล้วในระบบ"
            }
        })
    }

}

const editUser = async (id) => {
    try {
        editMode.value = true
        const userRef = doc(collection(db, 'users'), id);
        const userSnapshot = await getDoc(userRef);
        form.value = {
            uid: userSnapshot.id,
            ...userSnapshot.data()
        }
        $('#exampleModal').modal('show')
    } catch (error) {
        console.error('Error fetching/updating product:', error);
    }
};

const updateUser = async () => {
    try {
        console.log(form.value.uid);
        const userRef = doc(collection(db, 'users'), form.value.uid);
        await updateDoc(userRef, form.value);

        console.log('User updated successfully');


        form.value = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            username: ''
        };
        Swal.fire({
            position: "center",
            icon: "success",
            title: "อัพเดตสำเร็จ",
            showConfirmButton: false,
            timer: 1500
        });
        closeModal()


    } catch (error) {
        console.error('Error updating product:', error);
    }
};

const getUsers = () => {
    const productsCollection = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(productsCollection, (querySnapshot) => {
        items.value = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());

            const data = {
                id: doc.id,
                username: doc.data().username,
                email: doc.data().email,
                password: doc.data().password,
            };

            items.value.push(data);
        });
    });


    return unsubscribe;
};

const closeModal = () => {
    editMode.value = false
    form.value = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        username: ''
    };
    $('#exampleModal').modal('hide')
    $('#exampleModalPassword').modal('hide')
}

onMounted(() => {
    getUsers()


})

const submitHandler = computed(() => (editMode.value ? updateUser : createUser));


</script>