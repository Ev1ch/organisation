<template>
    <div class="event">
        <img :src="require(`../../assets/img/${image}`)" alt="" class="event__image" />
        <div class="event__overlay">
            <div class="event__content">
                <div class="event__description">
                    <p class="event__text">
                        {{ text }}
                    </p>
                </div>
            </div>
        </div>
        <span class="event__title">{{ title }}</span>
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
