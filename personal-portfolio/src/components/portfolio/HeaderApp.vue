<script>

export default {
    data() {
        return {
            
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
                    <li class="list_item_link">

                        <router-link :to="{ name: 'home' }">
                            Home
                        </router-link>
                        
                    </li>
                    <li class="list_item_link">
                        <router-link :to="{ name: 'who_i_am' }">
                            Chi sono
                        </router-link>
                    </li>
                    <li class="list_item_link">
                        <router-link :to="{ name: 'projects' }">
                            I miei progetti
                        </router-link>
                    </li>
                    <li class="list_item_link">
                        <router-link :to="{ name: 'contacts' }">
                            Contacts
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