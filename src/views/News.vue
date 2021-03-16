<template>
    <Navbar />

    <header class="header">
        <h1 class="header__title">Новини</h1>
    </header>

    <div class="container">
        <NewsNavbar />
    </div>

    <section class="events section">
        <div class="container">
            <div class="news">
                <NewsPost
                    v-for="(newspost, i) in news"
                    v-bind:key="i"
                    :title="newspost.title"
                    :subtitle="newspost.subtitle"
                    :text="newspost.text"
                    :link="newspost.link"
                    :image="newspost.image"
                />
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import NewsPost from '@/components/news/NewsPost.vue';
import NewsNavbar from '@/components/news/NewsNavbar.vue';

export default {
    data() {
        return {
            news: [
                {
                    title: 'Нація',
                    subtitle: 'Нація',
                    text:
                        'До Української Нації належить кожна людина, що відчуває в собі культурний, духовний, історичний зв’язок з Україною, минулими, сьогоднішніми і прийдешніми поколіннями українців. Нація ґрунтується на єдності мети і мрії, на бажанні спільно будувати свою долю. ',
                    link: '',
                    image: 'news/news_1.jpg',
                },
                {
                    title: '',
                    subtitle: '',
                    text: '',
                    link: '',
                    image: 'news/news_2.jpg',
                },
                {
                    title: '',
                    subtitle: '',
                    text: '',
                    link: '',
                    image: 'news/news_3.jpg',
                },
                {
                    title: '',
                    subtitle: '',
                    text: '',
                    link: '',
                    image: 'news/news_4.jpg',
                },
            ],
        };
    },
    components: {
        Navbar,
        Footer,
        NewsPost,
        NewsNavbar,
    },
    props: {
        title: String,
        text: String,
        link: String,
        image: String,
    },
};
</script>

<style lang="sass" scoped>
@import '../assets/sass/views/News'
</style>
