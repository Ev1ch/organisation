<template>
    <nav class="navbar">
        <div class="container navbar__container">
            <div class="navbar__logo">
                <img
                    src="https://via.placeholder.com/50/"
                    alt="Логотип “Молодий Народний Рух“"
                    class="navbar__image"
                />
            </div>
            <div class="navbar__menu">
                <ul class="navbar__list">
                    <li class="navbar__item"><a href="" class="navbar__link">Новини</a></li>
                    <li class="navbar__item navbar__item--dropdown">
                        <a href="" class="navbar__link">Про нас</a>
                        <ul class="navbar__list--dropdown">
                            <li class="navbar__item">
                                <a href="" class="navbar__link">Партнери</a>
                            </li>
                        </ul>
                    </li>
                    <li class="navbar__item"><a href="" class="navbar__link">Осередки</a></li>
                    <li class="navbar__item"><a href="" class="navbar__link">Підтримати</a></li>
                    <li class="navbar__item"><a href="" class="navbar__link">Галерея</a></li>
                    <li class="navbar__item"><a href="" class="navbar__link">Контакти</a></li>
                </ul>
            </div>
            <div class="navbar__button">
                <a class="navbar__join" href="">
                    Долучитися
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import '@/assets/sass/main.sass'

.navbar
    background: #0f0f0f

    &__container
        justify-content: space-between
        display: flex
        align-items: center

    &__logo
        display: inline-block
        padding: 4px

    &__menu
        margin-left: auto

    &__list
        margin: 0
        align-items: center
        padding: 0
        list-style: none
        display: flex

        &--dropdown
            transition: .3s
            left: 0
            height: 0
            padding: 0
            margin: 0
            list-style-type: none
            background: #0f0f0f
            position: absolute
            top: 100%

    &__item
        padding: 13px
        position: relative
        text-align: center

        &--dropdown

            &::after
                transition: .2s
                margin-left: 8px
                content: ''
                border: solid #fff;
                border-width: 0 2px 2px 0;
                display: inline-block;
                padding: 3px;
                transform: rotate(-45deg);

            &:hover::after
                transform: rotate(45deg);

        &:hover
            .navbar__list--dropdown
                height: 100%

    &__link
        text-decoration: none
        font-family: 'Roboto', sans-serif
        font-size: 16px
        color: #fff

    &__button
        margin-left: 13px
        border: 1px solid $accent
        background: #000
        border-radius: 4px

        @include button-animation($accent)

        &:hover
            .navbar__join
                color: #000

    &__join
        display: block
        padding: 8px 14px
        position: relative
        z-index: 1
        text-decoration: none
        color: $accent
        font-weight: 700
        font-family: 'Roboto', sans-serif
        font-size: 14px
        text-transform: uppercase
</style>
