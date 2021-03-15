<template>
    <div class="news-post">
        <img :src="require(`../../assets/img/${image}`)" alt="" class="news-post__image" />
        <div class="news-post__header">
            <span class="news-post__title">{{ title }}</span>
        </div>
        <div class="news-post__overlay">
            <div class="news-post__content">
                <div class="news-post__description">
                    <span class="news-post__subtitle">{{ subtitle }}</span>
                    <p class="news-post__text">
                        {{ text }}
                    </p>
                    <div class="news-post__button">
                        <router-link :to="link" class="news-post__link">Детальніше</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        text: String,
        link: String,
        image: String,
    },
};
</script>

<style lang="sass">
@import '../../assets/sass/components/news/NewsPost'
</style>
