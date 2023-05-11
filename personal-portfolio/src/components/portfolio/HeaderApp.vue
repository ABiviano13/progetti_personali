<script>

export default {
    data() {
        return {
            routes_links : [
                {
                    link: 'Home',
                    name_route: 'home'
                },
                {
                    link: 'Chi sono',
                    name_route: 'who_i_am'
                },
                {
                    link: 'I miei progetti',
                    name_route: 'projects'
                },
                {
                    link: 'Contatti',
                    name_route: 'contacts'
                }
                
            ]
            
        }
    }
}

</script>

<template>

    <header class="main-header">

        <div class="container">
            <div class="navbar">
                <router-link :to="{ name: 'home' }">

                    <h1 class="title_nav">
                        Il mio portfolio
                    </h1>

                </router-link>

                <ul class="list_links">

                    <li class="list_item_link" v-for="link in routes_links">

                        <router-link :to="{ name: link.name_route }">
                            {{link.link}}
                        </router-link>
                        
                    </li>
                    
                </ul>
            </div>
        </div>

    </header>

</template>

<style lang="scss" scoped>

.main-header{
    border-bottom: 1px solid;
    color: rgb(77, 144, 188);;
    .navbar{
        display: flex;
        justify-content: space-around;
        align-items: center;

        .list_links{
            display: flex;
            gap: 10px;
        }
    }
}
</style>