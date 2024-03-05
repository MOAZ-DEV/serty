<template>
    <header>
        <title>Sirti | Log In</title>
    </header>
    <div class="flex flex-row h-screen w-screen overflow-hidden box-content bg-black text-white">
        <div class="flex justify-center flex-col items-center h-full w-full md:w-1/2 transition-[height]">
            <span v-if="this.resErr !== ''" style="position: absolute;top: 25px;"
                class="bg-red-600 px-2 py-1 rounded text-sm font-semibold text-zinc-300">
                {{ this.resErr }}
            </span>
            <div class="h-full w-full max-w-sm flex flex-col items-start justify-center gap-6 px-4 md:px-9 py-9">
                <div class="flex flex-col items-center gap-2 w-full py-2">
                    <img class="w-40" src="/Sirti.svg" alt="Sirti" srcset="">
                </div>
                <form v-on:submit="(evt) => submithndler(evt)" class="flex flex-col items-center gap-2.5 w-full">
                    <div class="flex flex-col gap-1 w-full">
                        <span class="text-xs font-semibold opacity-25">Username Or Email</span>
                        <input v-model="username" required minlength="4"
                            class="touch-none text-sm w-full bg-transparent border border-zinc-700 rounded-xl px-4 py-5"
                            type="text" placeholder="Username" name="Username Or Email" id="">
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <span class="text-xs font-semibold opacity-25">User Password</span>
                        <input v-model="password" required minlength="8"
                            class="touch-none text-sm w-full bg-transparent border border-zinc-700 rounded-xl px-4 py-5"
                            type="password" placeholder="Password" name="password" id="">
                    </div>
                    <div class="flex flex-col items-end gap-2 w-full">
                        <span class="text-xs font-semibold underline opacity-25 hover:opacity-100 cursor-pointer">
                            Forgot Password?
                        </span>

                        <button
                            class="ease-out flex flex-row items-center justify-center text-sm bg-white text-black font-semibold rounded-xl p-5 cursor-pointer w-full hover:opacity-75 transition-opacity"
                            type="submit">
                            <p :class="this.loading ? 'w-0 overflow-hidden' : null">LogIn</p>
                            <div v-if="this.loading" role="status">
                                <svg aria-hidden="true"
                                    class="w-4 h-4 text-gray-200 animate-spin duration-600 dark:text-gray-200 fill-black"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </button>
                        <span v-if="this.err !== ''"
                            class="bg-red-600 px-2 py-1 rounded text-sm font-semibold text-zinc-300">
                            {{ this.err }}
                        </span>
                    </div>
                    <span class="flex flex-wrap gap-1 text-sm font-semibold text-zinc-300">
                        <p class="">You don't have an account?</p>
                        <a class="underline" href="register">Register.</a>
                    </span>
                </form>
            </div>
        </div>
        <div class="hidden md:flex flex-col items-start justify-end gap-2.5 p-4 h-full w-1/2 box-border">
            <span
                class="md:flex flex-col items-start justify-end gap-4 border-zinc-700 border rounded-xl p-9 h-full w-full">
                <h1 class="text-4xl font-semibold text-zinc-300">
                    Minimal, Easy, Powerful Portfolio Builder and Business Tool.</h1>
                <p class="text-xs font-semibold text-zinc-700">
                    Powerful app where you can share your works <br>through portfolio
                    template or api.</p>
            </span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'universal-cookie';

export default {
    data() {
        return {
            username: "",
            password: "",

            loading: false,
            err: '',
            resErr: ''
        }
    },
    async mounted() {
        const
            cookie = new Cookies(),
            uid = await cookie.get('uid');
        console.log(uid);
    },
    methods: {
        async submithndler(evt) {
            evt.preventDefault();
            try {
                this.loading = true;
                await axios.post('/api/login', {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    this.loading = false;
                    console.log(res.data);
                    res.data.err ? this.err = res.data.err : this.err = '';
                    res.data.redirect ? window.location.href = res.data.redirect : null;
                })
            } catch (error) {
                this.loading = false;
                this.resErr = 'Network Error!'
                setTimeout(() => {
                    this.resErr = '';
                }, 4500);
                console.dir('Error: ' + error);
            }
        }
    },
}
</script>
