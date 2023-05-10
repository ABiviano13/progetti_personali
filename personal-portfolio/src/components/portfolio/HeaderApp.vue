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
                <h1 class="title_nav">
                    Il mio portfolio
                </h1>

                <ul class="list_links">
                    <li class="list_item_link">
                        <a href="#">
                            Chi sono
                        </a>
                    </li>
                    <li class="list_item_link">
                        <a href="#">
                            I miei progetti
                        </a>
                    </li>
                    <li class="list_item_link">
                        <a href="#">
                            Github
                        </a>
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