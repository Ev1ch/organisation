<template>
    <div class="event">
        <img src="http://via.placeholder.com/500x300/" alt="" class="event__image" />
        <div class="event__overlay">
            <div class="event__content">
                <div class="event__description">
                    <p class="event__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora
                        quisquam commodi et, voluptatem magnam sequi reiciendis error.
                    </p>
                </div>
            </div>
        </div>
        <span class="event__title">Name</span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import '../assets/sass/main.sass'

.event
    transition: .3s
    position: relative
    flex-basis: 33.34%
    height: 300px

    &:hover
        flex-basis: 50%;

        .event__title
            z-index: 0
            opacity: 0

        .event__description
            transition-delay: .3s
            opacity: 1

        .event__overlay
            z-index: 1

        .event__content

                &::before
                    opacity: 1
                    width: 100%
                    height: 100%
                    left: 0
                    top: 0

    &__image
        object-fit: cover
        width: 100%
        height: 100%
        display: block

    &__overlay
        z-index: 0
        transition: .3s
        padding: 20px
        background: rgba(0, 0, 0, .1)
        position: absolute
        top: 0
        left: 0
        bottom: 0
        right: 0

    &__content
        z-index: 0
        position: relative
        display: flex;
        text-align: center;
        height: 100%

        &::before
            transition: .3s
            position: absolute
            content: ''
            display: block
            opacity: 0
            width: 80%
            left: 10%
            height: 80%
            top: 10%
            border: 1px solid #c4c4c4

    &__description
        opacity: 0
        padding: 22px
        text-align: center
        margin: auto

    &__text
        margin: 0
        font-family: 'Ubuntu', sans-serif
        font-size: 22px
        color: #fff
        line-height: 1.5;

    &__title
        line-height: 1.5
        z-index: 1
        transition: .3s
        font-family: Ubuntu;
        text-decoration: none
        color: #fff
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%)
        text-transform: uppercase
        font-size: 22px;
        font-weight: 400;
</style>
