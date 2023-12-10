<template>
    <div class="warpper">
        <main class="form-signin">
            <div class="card shadow border-0">
                <div class="card-body">
                    <form class="m-4" @submit.prevent="login">
                        <h1 class="h3 fw-normal text-center">ระบบจัดการอะไหล่รถยนต์</h1>
                        <div class="border-primary border mb-3"></div>
                        <div class="alert alert-danger" v-if="errorMsg">
                            <span>{{ errorMsg }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="floatingInput">อีเมล</label>
                            <input required v-model="email" type="text" class="form-control" placeholder="อีเมล" />
                        </div>
                        <div class="mb-3">
                            <label for="floatingPassword">รหัสผ่าน</label>
                            <input required v-model="password" type="password" class="form-control"
                                placeholder="รหัสผ่าน" />
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit" :disabled="loading">
                            <div class="d-flex justify-content-center align-items-center">
                                <div v-if="loading" class="spinner-border text-light" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <span v-if="!loading" class="ms-2">เข้าสู่ระบบ</span>
                                <span v-else class="ms-2">เข้าสู่ระบบ...</span>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import router from "../router";
import { collection, getDocs, query, where } from "firebase/firestore";

const email = ref("");
const password = ref("");
const user = ref(null);
const loading = ref(false);
const errorMsg = ref("");

const login = async () => {
    loading.value = true
    const q = query(
        collection(db, "users"),
        where("email", "==", email.value),
        where("password", "==", password.value)
    );

    try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const userData = {
                ...querySnapshot.docs[0].data(),
                uid: querySnapshot.docs[0]?.id,
            };
            userData.isAuthentication = true;
            localStorage.setItem("user", JSON.stringify(userData));
            errorMsg.value = "";
            loading.value = false
            router.push("/stock");
        } else {
            loading.value = false
            errorMsg.value = "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
        }
    } catch (error) {
        errorMsg.value = error;
    }
};

onAuthStateChanged(auth, (currentUsaer) => {
    user.value = currentUsaer;
});
</script>

<style scoped>
.warpper {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
    height: 100vh;
}

.form-signin {
    width: 100%;
    max-width: 440px;
    padding: 15px;
    margin: auto;
}

.form {
    display: block;
    margin-top: 0em;
}
</style>
