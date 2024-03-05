<template>
    <form>
        <section class="flex md:flex-row flex-col justify-between gap-x-16 gap-y-3 md:px-11 w-full">
            <div>
                <p class="text-white font-semibold min-w-56">Personal Info</p>
                <p class="text-sm text-zinc-500 font-medium min-w-56">Basic information about you.</p>
            </div>
            <div class="flex flex-col w-full">
                <label class="text-sm text-zinc-500 font-medium min-w-56">Full Name</label>
                <input class="bg-transparent border border-zinc-600 rounded-xl py-2 px-2 outline-none" placeholder="Enter your full name" type="text">
            </div>
        </section>
    </form>

</template>
<script>
export default {
    data() {

    }, mounted() {

    }, methods: {

    }
}
</script>