<template>
    <div style="     font-family: 'Proxima Nova',-apple-system,Roboto,Arial,sans-serif,sans-serif;
    table-layou" class="  bg-white  hover:shadow-lg  selected">

        <a>

            <div class=" responsive" :style="{ backgroundImage: `url(${producto.path})` }" alt="image x"></div>
            <hr>
            <div style="position: relative;    padding: 20px 10px 20px 16px;">
                <span style="font-size: 25px
                        ;" class="pt-1 text-gray-900">$ {{ producto.price }}</span>
                <p class="text-gray-600">

                </p>
                <p class=" oculto">{{ producto.title }}</p>

            </div>
        </a>
    </div>
</template>
<script>
export default {
    props: ["producto"]
}
</script>
<style>
.selected {
    height: 350px;
    width: 224px
    
}

.selected .oculto {
    display: none;
}

.selected:hover {
    height: auto;
}

.selected:hover .oculto {
    display: block;
}

.responsive {
    width: 224px;
    height: 224px;
    background-size:cover;
  background-position:center;
  background-repeat:no-repeat;	
}</style>