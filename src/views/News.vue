<template>
    <Navbar />

    <header class="header">
        <h1 class="header__title">{{ $route.meta.title }}</h1>
    </header>

    <section class="section">
        <div class="container">
            <NewsNavbar />
            <div class="news">
                <router-view></router-view>
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import NewsNavbar from '@/components/news/NewsNavbar.vue';

export default {
    components: {
        Navbar,
        Footer,
        NewsNavbar,
    },
};
</script>

<style lang="sass" scoped>
@import '../assets/sass/views/News'
</style>
