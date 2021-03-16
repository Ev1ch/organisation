<template>
    <nav class="news-navbar">
        <ul class="news-navbar__list">
            <li class="news-navbar__item news-navbar__item--active">
                <router-link to="" class="news-navbar__link">події</router-link>
            </li>
            <li class="news-navbar__item">
                <router-link to="" class="news-navbar__link">збори</router-link>
            </li>
            <li class="news-navbar__item">
                <router-link to="" class="news-navbar__link">табір</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/components/news/NewsNavbar'
</style>
