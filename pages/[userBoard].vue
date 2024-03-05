<template>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,200,0,0" />
    </head>
    <main class="flex flex-col gap-4 h-dvh w-screen p-4 select-none" @click="outsideClick()">
        <nav class="flex flex-row items-center justify-between h-16 w-full px-2">
            <p class="flex flex-row items-center gap-2 text-white text-sm font-semibold">
                <img class="h-6" src="/Sirti.svg" alt="logo"> <span>|</span> Overview
            </p>
            <ul class="flex flex-row gap-1.5 items-center">
                <li class="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-zinc-900 rounded-full scale-90 transition-all">
                    <span class="material-symbols-outlined text-white text-xs">
                        notifications
                    </span>
                </li>
                <li @click="this.menuOn = !this.menuOn"
                    class="relative flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-zinc-900 rounded-full scale-90 transition-all">
                    <span class="material-symbols-outlined text-white text-xl"
                        :style="`rotate: ${this.menuOn === true ? '180' : '0'}deg;transition: rotate .5s;`">
                        {{ this.menuOn ? 'close' : 'menu' }}
                    </span>
                    <div v-if="menuOn"
                        class="absolute -bottom-2 z-50 right-0 transform translate-y-full flex flex-col rounded-xl bg-zinc-950 text-white border border-zinc-800 cursor-default">
                        <p class="flex justify-between text-sm font-semibold px-3 py-2 text-zinc-600 w-full">Menu <code
                                class="ml-auto">Ctrl + M</code></p>
                        <ul class="flex flex-col w-full bg-zinc-900 rounded-xl border-t border-zinc-800 p-1">
                            <li class="mo">Activate Portfolio</li>
                            <li class="mo">Visitor View</li>
                            <li class="mo">Export Resume</li>
                            <span class="h-0.5 w-full bg-zinc-800 m-1"></span>
                            <li class="mo">Edit Profile</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="flex flex-col gap-1">
            <div class="h-28 border border-zinc-700 rounded-xl"></div>
            <div class="bg-zinc-900 rounded-xl md:p-12 p-6">
                <userDataForm />
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    li.mo {
        @apply cursor-pointer flex items-center hover:bg-zinc-800 active:bg-zinc-950 text-xs text-white font-medium font-mono rounded-md px-2 pt-4 pb-3 w-64 opacity-45 hover:opacity-100 transition-all;
    }
}
</style>

<script>
export default {
    data() {
        return {
            menuOn: false
        }
    },
    mounted() {

    },
    methods: {
        outsideClick: () => {
            if (this.menuOn == true) { this.menuOn = false; }
        }
    }
}
/**

*/
</script>