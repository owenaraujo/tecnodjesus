<template>
    <div class="">
          <nav id="" style="z-index: 120;" class="w-full z-40  top-0 py-1  fixed bg-gradient-to-r from-purple-400 via-green-600 to-blue-400 ">

        <div class=" w-full text-white container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">


            <label for="menu-toggle" class="cursor-pointer md:hidden block">
                <svg class="fill-current " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul class="md:flex  justify-between text-base  pt-4 md:pt-0">
                        <li  style="display: none;"><a class="inline-block no-underline hover:text-gray-700  py-2 px-4" href="/">tienda</a></li>
                    </ul>
                </nav>
            </div>

            <div class="items-left order-1 md:order-2 text-white">
                <a class=" md:-ml-40 flex items-center tracking-wide no-underline hover:no-underline font-bold  text-xl " href="#">
                    <svg class="fill-current  mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                    </svg>
                    Tecno D`jesus
                </a>
            </div>

            <div class="order-2 md:order-3 flex items-center" id="nav-content">

                <a class="hidden inline-block no-underline hover:text-black" href="#">
                    <svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <circle fill="none" cx="12" cy="7" r="3" />
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                </a>
                <a :href="ruta.url" class="inline-block no-underline hover:text-gray-700" >
{{ruta.nombre}}                    
                </a>

                
            </div>
        </div>
    </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';


let ruta = ref("ruta")
</script>