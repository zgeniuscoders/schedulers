<template>
    <formBoxComponent>
        <template v-slot:form>
            <form>
                <p class="mb-4">Please login to your account</p>
                <!--Username input-->
                <input-component id="email" type="email" label="Addresse email" placeholder="email" />

                <!--Password input-->
                <input-component id="password" type="password" label="Mot de passe" placeholder="passsword" />


                <!--Submit button-->
                <div class="mb-12 pb-1 pt-1 text-center">
                    <button
                        class="from-sky-600 to-cyan-400 bg-gradient-to-r mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button">
                        Se connecter
                    </button>

                    <!--Forgot password link-->
                    <a href="#!">Mot de passe oublier?</a>
                </div>

                <!--Register button-->
                <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <router-link :to="{ name: 'register' }"
                        class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init data-te-ripple-color="light">
                        inscription
                    </router-link>
                </div>
            </form>
        </template>
        <template v-slot:right>
            <description-component>

                <h4 class="mb-6 text-xl font-semibold">
                    We are more than just a company
                </h4>
                <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            </description-component>
        </template>
    </formBoxComponent>
</template>
<script setup>

import inputComponent from "./components/inputComponent.vue"
import descriptionComponent from "./components/descriptionComponent.vue"
import formBoxComponent from "./components/formBoxComponent.vue"

</script>