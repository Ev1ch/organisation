<template>
    <div class="news-post">
        <img :src="require(`../../assets/img/${image}`)" alt="" class="news-post__image" />
        <div class="news-post__overlay">
            <div class="news-post__content">
                <div class="news-post__description">
                    <span class="news-post__title">{{ title }}</span>
                    <p class="news-post__text">
                        {{ text }}
                    </p>
                    <div class="news-post__button">
                        <a :href="link" class="news-post__link">Більше</a>
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
        text: String,
        link: String,
        image: String,
    },
};
</script>
