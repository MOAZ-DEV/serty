<template>
    <div class="flex flex-row h-screen w-screen overflow-hidden box-content bg-black text-white">
        <div class="flex justify-center flex-col items-center h-full w-full md:w-1/2">
            <nav class="w-full p-6 md:p-9 text-slate-100">
                <span class="logo text-md font-semibold">ezSera</span>
            </nav>
            <div class="h-full w-full max-w-sm flex flex-col items-start justify-center gap-6 px-4 md:px-9 py-9">
                <h3 class="text-4xl text-zinc-100 font-extrabold">Restore Your Accouunt</h3>
                <form v-on:submit="(evt) => submithndler(evt)" class="flex flex-col gap-3.5 w-full">
                    <div class="flex flex-col gap-2 w-full">
                        <span class="text-xs font-semibold opacity-25">User Email</span>
                        <input v-model="email" class="text-sm w-full bg-transparent border border-zinc-700 rounded p-3"
                            type="email" placeholder="user@example.com" name="" id="">
                        <a class="ml-auto text-xs font-semibold text-indigo-700" href="login">Remembered?</a>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <input class="text-sm bg-indigo-800 rounded p-3 cursor-pointer max-w" type="submit"
                            value="Register">

                        <span class="flex flex-wrap gap-1 text-xs font-semibold text-zinc-700">
                            <p class="text-zinc-800">You don't have an account?</p>
                            <a class="text-indigo-700" href="register">Register</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
        <div
            class="hidden md:flex flex-col items-start justify-end gap-2.5 p-9 h-full w-1/2 box-border bg-zinc-950 rounded">
            <h1 class="text-4xl font-semibold text-zinc-300">
                Minimal, Easy, Powerful Portfolio Builder and Business Tool.</h1>
            <p class="text-xs font-semibold text-zinc-700">
                Powerful app where you can share your works <br>through portfolio
                template or api.</p>
        </div>
    </div>
</template>
<script>
import axios, { Axios } from 'axios';

export default {
    data() {
    },
    methods: {
        async submithndler(evt) {
            evt.preventDefault();

            try {
                await this.$axios.post('/api/register', {
                    email: this.email,
                    password: this.password
                })
               // const data = await res.json();
               // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>