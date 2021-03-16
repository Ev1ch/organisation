<template>
    <Vueper-slides :fixed-height="true" class="no-shadow">
        <Vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :text="slide.text"
            :image="slide.image"
        />
    </Vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';

export default {
    components: {
        VueperSlides,
        VueperSlide,
    },
    props: {
        slides: Object,
    },
};
</script>

<style lang="sass">
@import '../../assets/sass/components/home/Slider'
</style>
