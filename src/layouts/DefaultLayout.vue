<template>
    <div>
        <div class="wrapper" style="background-color: #6dd1ff;">
            <!-- -->
            <nav id="sidebar" :class="{ 'active': sidebar }" style="background-color: #6dd1ff;">
                <div class="sidebar-header" style="background-color: #6dd1ff;">
                    <h1>Inventory Auto Part</h1>
                </div>
                <ul class="list-unstyled components" style="background-color:#6dd1ff;">
                    <!-- <p>Dummy Heading</p> -->
                    <li v-for="(menu, index) in menus" :key="index">
                        <router-link :to="{ name: menu.link }">
                            <i class="me-2" :class="menu.icon"></i>
                            <span class="ms-1">{{ menu.text }}</span>
                        </router-link>
                    </li>

                    <li class="bg #29b6f6">
                        <a href="#" @click="handleSignOut">
                            <i class='bx bx-log-in me-2'></i>
                            <span class="ms-1">ออกจากระบบ</span>
                        </a>
                    </li>
                </ul>

            </nav>

            <div id="content" style="background-color:#abe5ff;">
                <nav class="navbar navbar-expand px-3 border-bottom shadow-sm mb-4 bg-white">
                    <button type="button" id="sidebarCollapse" class="btn" @click="toggleeSidebar">
                        <i style="font-size:20px;" :class="`${!sidebar ? 'bx bx-align-left' : 'bx bx-x'}`"></i>
                    </button>

                    <div class="navbar-collapse navbar">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown" @click="handleSignOut">
                                <i class=' text-danger logout' style="font-size:25px;"></i>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <a href="#" data-bs-toggle="modal" data-bs-target="#RemoveAccount" class="btn btn-success">
                            {{ email
                            }}</a>
                    </div>
                </nav>

                <div class="position-relative">
                    <div class="row">
                        <div class="col-12">
                            <div class="card shadow-sm border-0 p-4">
                                <router-view class="router-view" v-slot="{ Component }">
                                    <Transition name="page-slide" mode="out-in">
                                        <component :is="Component" />
                                    </Transition>
                                </router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Modal -->
            <div class="modal fade" id="RemoveAccount" tabindex="-1" aria-labelledby="RemoveAccountLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="RemoveAccountLabel">ข้อมูลส่วนตัว</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <span>อีเมล: {{ email }}</span>
                                </div>
                                <div class="mb-3">
                                    <button type="button" @click="removeAccount"
                                        class="btn btn-danger w-100">ลบบัญชี</button>


                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a href="#" @click="linkTo" class="btn btn-primary" data-bs-dismiss="modal">แก้ไขข้อมูล</a>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import { deleteUser, EmailAuthProvider, getAuth, reauthenticateWithCredential, signOut } from 'firebase/auth';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { db } from '../firebase';
import router from '../router';
const sidebar = ref(false)

const toggleeSidebar = () => {
    sidebar.value = !sidebar.value
}

const linkTo = () => {
    router.push({ name: 'Employee' })
}

const email = ref('')
const uid = ref('')
onMounted(async () => {
    email.value = JSON.parse(localStorage.getItem('user')).email

    uid.value = JSON.parse(localStorage.getItem('user')).uid
})


const removeAccount = async () => {
    $('#RemoveAccount').modal('hide')
    const userRef =  doc(collection(db, 'users'), uid.value);
    localStorage.removeItem('user')

    await deleteDoc(userRef);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "ลบบัญชีสำเร็จ",
        showConfirmButton: false,
        timer: 1500
    });
    router.push('/login');
}

const menus = ref([
    {
        text: "ข้อมูลอะไหล่รถยนต์",
        link: "Stock",
        icon: "bx bx-spreadsheet"
    }, {
        text: "เบิกอะไหล่รถยนต์",
        link: "Order",
        icon: "bx bx-store-alt"
    }, {
        text: "ข้อมูลพนักงาน",
        link: "Employee",
        icon: "bx bxs-user-account"
    }, {
        text: "แจ้งปัญหาการใช้งาน",
        link: "Problem",
        icon: "bx bx-comment-error"
    }, {
        text: "สรุปรายงาน",
        link: "Report",
        icon: "bx bxs-report"
    },

])



const handleSignOut = () => {
    localStorage.removeItem('user')
    router.push('/login')
}





</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";


.page-slide-enter-active,
.page-slide-leave-active {
    transition: 400ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
    opacity: 0;
    transform: translateY(60px);
}

li {
    cursor: pointer;
}

.logout {
    cursor: pointer;
    transition: all .3s ease;

}

.wrapper {
    font-family: 'Poppins', sans-serif;
    background: #eff0f5;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

/* .navbar-header {
        padding: 15px 10px;
        background: #fff;
        border: none;
        border-radius: 0;
        margin-bottom: 40px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    } */

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/* ---------------------------------------------------
        SIDEBAR STYLE
    ----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #111c43;
    color: #fff;
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #111c43;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

#sidebar ul li a:hover {
    color: #111c43;
    background: #fff;
}

#sidebar ul .router-link-exact-active,
a[aria-expanded="true"] {
    color: #fff;
    background: #47748b;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #47748b;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #111c43;
}

a.article,
a.article:hover {
    background: rgb(172, 54, 14) !important;
    color: #fff !important;
}

/* ---------------------------------------------------
        CONTENT STYLE
    ----------------------------------------------------- */

#content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
}

/* ---------------------------------------------------
        MEDIAQUERIES
    ----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }

    #sidebar.active {
        margin-left: 0;
    }

    #sidebarCollapse span {
        display: none;
    }
}

.avatar {
    height: 40px;
    width: 40px;
}

.navbar-expand .navbar-nav {
    margin-left: auto;
}

.avatar {
    height: 40px;
    width: 40px;
}

.navbar-expand .navbar-nav {
    margin-left: auto;
}

a {
    text-decoration: none;
    color: white;
}
</style>