<template>
    <NewsPost
        v-for="(newspost, i) in news"
        :key="i"
        :title="newspost.title"
        :subtitle="newspost.subtitle"
        :text="newspost.text"
        :link="newspost.link"
        :image="newspost.image"
        :views="newspost.views"
    />
</template>

<script>
import NewsPost from './NewsPost.vue';

export default {
    data() {
        return {
            news: [
                {
                    title: 'Нація',
                    subtitle: 'Нація',
                    text:
                        'До Української Нації належить кожна людина, що відчуває в собі культурний, духовний, історичний зв’язок з Україною, минулими, сьогоднішніми і прийдешніми поколіннями українців. Нація ґрунтується на єдності мети і мрії, на бажанні спільно будувати свою долю. ',
                    link: '/',
                    image: 'news/news_1.jpg',
                    views: 327,
                },
                {
                    title: '',
                    subtitle: '',
                    text: '',
                    link: '/',
                    image: 'news/news_2.jpg',
                    views: 909,
                },
                {
                    title: '',
                    subtitle: '',
                    text: '',
                    link: '/',
                    image: 'news/news_3.jpg',
                    views: 6797,
                },
                {
                    title: '',
                    subtitle: '',
                    text: '',
                    link: '/',
                    image: 'news/news_4.jpg',
                    views: 677,
                },
            ],
        };
    },
    components: {
        NewsPost,
    },
};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/components/news/Events'
</style>
