<template>
    <section class="gradient-form h-screen bg-neutral-200 dark:bg-neutral-700">
        <div class="container h-screen p-10">
            <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 ">
                <div class="w-full">
                    <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                        <div class="g-0 lg:flex lg:flex-wrap">
                            <!-- Left column container-->
                            <div class="px-4 md:px-0 lg:w-6/12">
                                <div class="md:mx-6 md:p-12">
                                    <!--Logo-->
                                    <div class="text-center mb-6">
                                        <img class="mx-auto w-48" src="/schedulers.svg" alt="logo" />
                                    </div>

                                    <slot name="form"/>
                                </div>
                            </div>

                            <!-- Right column container with background and description-->
                            <slot name="right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup></script>