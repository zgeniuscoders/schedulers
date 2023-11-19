<template>
   <default-layout>
      <section class="grid lg:grid-cols-4 gap-4">
         <!-- task  -->
         <article class="shadow p-4 rounded">
            <h3 class="text-2xl font-medium mb-2">Taches</h3>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-red-600 rounded-full"></span>
               <span>Manquer 4</span>
            </p>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-blue-600 rounded-full"></span>
               <span>Complet 4</span>
            </p>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-gray-600 rounded-full"></span>
               <span>En attente 4</span>
            </p>
         </article>

         <!-- events -->
         <article class="shadow p-4 rounded">
            <h3 class="text-2xl font-medium mb-2">Evenement</h3>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-red-600 rounded-full"></span>
               <span>Manquer 4</span>
            </p>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-blue-600 rounded-full"></span>
               <span>Complet 4</span>
            </p>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-gray-600 rounded-full"></span>
               <span>En attente 4</span>
            </p>
         </article>

         <!-- employee -->
         <article class="shadow p-4 rounded">
            <h3 class="text-2xl font-medium mb-2">Emplois</h3>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-red-600 rounded-full"></span>
               <span>Manquer 4</span>
            </p>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-blue-600 rounded-full"></span>
               <span>Complet 4</span>
            </p>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-gray-600 rounded-full"></span>
               <span>En attente 4</span>
            </p>
         </article>

         <!-- employee -->
         <article class="shadow p-4 rounded">
            <h3 class="text-2xl font-medium mb-2">Emplois</h3>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-red-600 rounded-full"></span>
               <span>Manquer 4</span>
            </p>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-blue-600 rounded-full"></span>
               <span>Complet 4</span>
            </p>
            <p class="flex items-center gap-4">
               <span class="h-3 w-3 block bg-gray-600 rounded-full"></span>
               <span>En attente 4</span>
            </p>
         </article>
      </section>

      <section class="mt-4 grid lg:grid-cols-2 gap-4 ">
         <article class="shadow rounded">
            <h3 class="p-4 border-b">Apercu des projets</h3>
            <div class="grid grid-cols-3 p-4">
               <p class="flex flex-col justify-center items-center">
                  <span class="font-bold text-xl text-sky-600">9</span>
                  <span>en cours</span>
               </p>
               <p class="flex flex-col justify-center items-center">
                  <span class="font-bold text-xl text-green-500">9</span>
                  <span>terminee</span>
               </p>
               <p class="flex flex-col justify-center items-center">
                  <span class="font-bold text-xl text-yellow-500">9</span>
                  <span>en attente</span>
               </p>
            </div>
            <div class="w-full m-4 border border-blue-500 p-2 rounded-full">
               <div class="bg-gradient-to-r from-sky-600 to-cyan-400 w-20 h-4 rounded-l-full"></div>
            </div>
         </article>
      </section>

      <section class="mt-4 h-full">
         <h3 class="font-bold text-2xl">Evenements</h3>
         <div class="grid lg:grid-cols-3 gap-4 mt-4">

            <article class="group overflow-hidden relative shadow-lg rounded-md h-80" v-for="i in 6" :key="i">
               <a href="#" class="absolute z-10 top-0 bottom-0 left-0 right-0"></a>
               <img class="block group-hover:opacity-40 transition-opacity duration-700 h-full" src="/1.jpg" />
               <div
                  class="absolute bg-black flex items-center group-hover:-top-0 group-hover:opacity-100 duration-700 top-full right-0 w-full opacity-0 h-1/2 transition-all">
                  <div class=""
                     style="background-image: url(&quot;https://cdn.cloudflare.steamstatic.com/steam/apps/230410/ss_2d79448091149a8cc790b62e7422615a011d015a.600x338.jpg?t=1637183731&quot;);">
                     <video class="w-full" autoplay loop="" preload="none" muted="muted">
                        <source
                           src="https://cdn.cloudflare.steamstatic.com/steam/apps/256860783/microtrailer.webm?t=1637095595?v=3"
                           type="video/webm">
                     </video>
                  </div>
               </div>
               <div class="absolute  bg-gradient-to-br duration-700 from-sky-600 to-cyan-400 text-white block left-0 right-0 top-full text-base h-1/2 w-full opacity-50 
          transition-all group-hover:top-1/2 group-hover:opacity-100">
                  <div class="py-4 text-xs px-7">
                     <h3 class="text-xl font-bold">La technologies d'aujourdhuit</h3>
                     <p class="my-2">technologies</p>
                     <p class="overflow-hidden overflow-ellipsis relative z-20">Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. At facere veritatis, adipisci et in ipsam?</p>
                  </div>
                  <div class="absolute left-0  pl-7 pt-1">
                     <button type="button"
                        class="px-4 text-base block text-white rounded-sm border-2 border-opacity-20 bg-gradient-to-b duration-700 from-dark to-dark-secondary">
                        participer
                     </button>
                  </div>
               </div>
            </article>

         </div>
      </section>
   </default-layout>
</template>
<script setup>
import defaultLayout from "../layouts/defaultLayout.vue"
</script>