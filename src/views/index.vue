

<template>
    <div>
        <Nav></Nav>
      
      <div
        id="progress"
        class="h-1 bg-white shadow"
        style="
          background: linear-gradient(
            to right,
            #4dc0b5 var(--scroll),
            transparent 0
          );
        "
      ></div>
  
      <div class="bg-white font-sans leading-normal tracking-normal">
        <!-- <style>
          --image--
            > <div
            class="container relative w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
            style=""
            > </div
            > <style
            > .carousel-open:checked
            + .carousel-item {
            position: static;
            opacity: 100;
          }
          .carousel-item {
            -webkit-transition: opacity 0.6s ease-out;
            transition: opacity 0.6s ease-out;
          }
          #carousel-1:checked ~ .control-1,
          #carousel-2:checked ~ .control-2,
          #carousel-3:checked ~ .control-3 {
            display: block;
          }
          .carousel-indicators {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: 2%;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 10;
          }
          #carousel-1:checked
            ~ .control-1
            ~ .carousel-indicators
            li:nth-child(1)
            .carousel-bullet,
          #carousel-2:checked
            ~ .control-2
            ~ .carousel-indicators
            li:nth-child(2)
            .carousel-bullet,
          #carousel-3:checked
            ~ .control-3
            ~ .carousel-indicators
            li:nth-child(3)
            .carousel-bullet {
            color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
          }
        </style> -->
        <!-- carusel -->
        <div
          class="carousel relative container mx-auto mt-16"
          style="max-width: 1600px"
        >
          <div class="carousel-inner relative overflow-hidden w-full">
            <!--Slide 1-->
            <input
              class="carousel-open"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              hidden=""
              checked="checked"
            />
            <div class="carousel-item absolute opacity-0" style="height: 50vh">
              <div
                class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style="background-image: url('/static/reballing.jpg')"
              >
                <div class="container mx-auto"></div>
              </div>
            </div>
            <label
              for="carousel-3"
              class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
              >‹</label
            >
            <label
              for="carousel-2"
              class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
              >›</label
            >
  
            <!--Slide 2-->
            <input
              class="carousel-open"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden=""
            />
            <div
              class="carousel-item absolute opacity-0 bg-cover bg-right"
              style="height: 50vh"
            >
              <div
                class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style="background-image: url('/static/iphone.jpg')"
              >
                <div class="container mx-auto"></div>
              </div>
            </div>
            <!-- controles carrusel  -->
  
            <label
              for="carousel-1"
              class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
              >‹</label
            >
            <label
              for="carousel-3"
              class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
              >›</label
            >
            <!-- controles carrusel  -->
  
            <!--Slide 3-->
            <input
              class="carousel-open"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden=""
            />
            <div class="carousel-item absolute opacity-0" style="height: 50vh">
              <div
                class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
                style="background-image: url('/static/soldadura.jpg')"
              >
                <div class="container mx-auto"></div>
              </div>
            </div>
            <!-- controles carrusel  -->
            <label
              for="carousel-2"
              class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
              >‹</label
            >
            <label
              for="carousel-1"
              class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
              >›</label
            >
            <!-- controles carrusel  -->
  
            <!-- indicadores carrusel  -->
            <ol class="carousel-indicators">
              <li class="inline-block mr-3">
                <label
                  for="carousel-1"
                  class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                  >•</label
                >
              </li>
              <li class="inline-block mr-3">
                <label
                  for="carousel-2"
                  class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                  >•</label
                >
              </li>
              <li class="inline-block mr-3">
                <label
                  for="carousel-3"
                  class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                  >•</label
                >
              </li>
            </ol>
            <!-- indicadores carrusel  -->
          </div>
        </div>
  
        <!--Container-->
        <div class="publicidad"></div>
        <div
          class="container absolute z-40 md:max-w-3xl xl:max-w-5xl sm:max-w-lg mx-auto -mt-32"
          style="left: 0; right: 0"
        >
          <div class="mx-0 sm:mx-6">
            <div
              class="bg-gray-50 p-8 text-xl md:text-2xl text-gray-800 leading-normal shadow-md m-5"
            >
              <!--Post Content-->
              <div class="" id="app">
                <div class="container w-full max-w-6xl p-1 mx-auto">
                  <div class="flex flex-wrap -mx-2">
                    <div
                      v-for="item in content"
                      :key="item.unsplash"
                      class="w-full md:w-1/2 xl:w-1/3 px-2 pb-2"
                    >
                      <div
                        class="bg-white rounded shadow-md hover:shadow-lg relative smooth"
                      >
                        <span class="no-underline hover:no-underline"></span>
   <img
                            :src="item.unsplash"
                            class="h-48 w-full rounded-t shadow"
                          />
                        <template>
                         
                        </template>
  
                        <div class="p-6 h-auto">
                          <p class="text-gray-600 text-xs md:text-sm">
                            {{ item.category }}
                          </p>
                          <div class="font-bold text-xl text-gray-900">
                            {{ item.title }}
                          </div>
                          <p class="text-gray-800 font-serif text-base mb-5">
                            {{ item.article }}
                          </p>
                        </div>
                        <div
                          class="flex items-center justify-between inset-x-0 bottom-0 p-6"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!--Lead Para-->
            </div>
          </div>
  
          <footer
            class="container mx-auto bg-white bottom-0"
            style="left: 0; right: 0; z-index: 120"
          >
            <h5 class="text-center">comunicate con nosotros</h5>
            <div class="container flex px-3 py-2">
              <div class="w-full mx-auto justify-center flex flex-wrap">
                <a @click="toWs">
                  <img class="p-5" src="/static/ws.png" alt="" />
                </a>
                <a @click="toIg">
                  <img src="/static/ig.png" class="p-5" alt="" />
                </a>
                <a @click="toFb">
                  <img src="/static/fb.png" class="p-5" alt="" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </template>
<script setup>
import Nav from "../components/Nav.vue"

function toWs() {
  let url = `https://api.whatsapp.com/send?phone=573505456465`;
      window.open(url, "_blank");
}
function toIg() {
  let url = `https://www.instagram.com/tecno_djesus/`;
      window.open(url, "_blank");
}
function toFb() {
  let url = `https://www.facebook.com/TecnodjesusReparaciones`;
      window.open(url, "_blank");
}
let content= [
        {
          unsplash: "/static/cambioV.jpg",
          category: "pantallas y visores",
          title: "Cambio de Visores",
          article: "",
          min: 2.2,
        },
        {
          unsplash: "/static/cambioP.jpg",
          category: "pantallas y visores",
          title: "cambio de pantallas",
          article: "",
          min: 4.42,
        },
        {
          unsplash: "/static/mtoM.jpg",
          category: "hardware",
          title: "mantenimiento a equipos mojados",
          article: "",
          min: 4.42,
        },

        {
          unsplash: "/static/cbp.jpg",
          category: "hardware",
          title: "cambio de pin de carga",
          article: "",
          min: 4.34,
        },
      ]
</script>


<style>
.publicidad {
  position: absolute;
  border-radius: 10px;
  right: 0;
  left: 0;
  width: 12.9rem;
  height: 5rem;
}
.work-sans {
  font-family: "Work Sans", sans-serif;
}

#menu-toggle:checked + #menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>