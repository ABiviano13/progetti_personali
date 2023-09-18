<script>
import LayoutDefault from '../layouts/LayoutDefault.vue'

export default {
    name: 'HomeApp',
    components: {
        LayoutDefault
    },
    data() {
        return {
            
        }
    }
}

</script>

<template>

    <LayoutDefault>

        <div class="container">

            <p class="presentation">
                <h3>
                    Benvenuto nel mio Portfolio!
                </h3>
                Mi presento, sono Anita e ho una forte passione per il mondo tech.
                Sono una Junior Full stack Web Developer. 
                l'obiettivo di questo sito personale è una vetrina, in continuo aggiornamento, di tutti i progetti che creo e le relative tecnologie.
            </p>

            <router-link :to="{ name: 'tecnologies' }">
                <button>
                    Tecnologie
                </button>
            </router-link>
            
        </div>

    </LayoutDefault>

</template>

<style lang="scss" scoped>
@use '../scss/partials/variables.scss' as *;

.container{

    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    button{
        color: rgb(226, 220, 220);
        background-color: rgb(116, 169, 163);
        border: 1px solid rgb(226, 220, 220);
        border-radius: 10px;
        padding: 7px 5px;
        
    }

}

</style>