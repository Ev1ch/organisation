<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__logo">
                <img
                    src="https://via.placeholder.com/50/"
                    alt="Логотип “Молодий Народний Рух“"
                    class="footer__image"
                />
            </div>
            <div class="footer-navbar">
                <ul class="footer-navbar__list">
                    <li class="footer-navbar__item">
                        <a href="" class="footer-navbar__link">Новини</a>
                    </li>
                    <li class="footer-navbar__item">
                        <a href="" class="footer-navbar__link">Про нас</a>
                    </li>
                    <li class="footer-navbar__item">
                        <a href="" class="footer-navbar__link">Осередки</a>
                    </li>
                    <li class="footer-navbar__item">
                        <a href="" class="footer-navbar__link">Галерея</a>
                    </li>
                    <li class="footer-navbar__item">
                        <a href="" class="footer-navbar__link">Контакти</a>
                    </li>
                </ul>
            </div>
            <div class="footer-contacts">
                <ul class="footer-contacts__list">
                    <li class="footer-contacts__item">
                        <i class="far fa-envelope footer-contacts__icon"></i>
                        <a class="footer-contacts__link">mnr.sekretariat@gmail.com</a>
                    </li>
                    <li class="footer-contacts__item">
                        <i class="fas fa-location-arrow footer-contacts__icon"></i>
                        <p class="footer-contacts__description">
                            Адреса: Україна, м. Київ, Київ, вулиця Гончара, будинок 33, 01001
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import '@/assets/sass/main.sass'

.footer
    padding: 42px 0 32px 0
    background: #000

    &__container
        justify-content: space-between
        align-items: center
        display: flex

.footer-navbar

    &__list
        padding: 0
        margin: 0
        list-style: none

    &__link
        color: #fff
        text-transform: uppercase
        font-weigth: 700
        font-family: 'Inter', sans-serif
        font-size: 20px
        text-decoration: none

    &__item
        margin-bottom: 12px

        &:last-of-type
            margin-bottom: 0

.footer-contacts

    &__item
        margin-bottom: 36px

    &__list
        padding: 0
        margin: 0

    &__description, &__link
        vertical-align: middle
        display: inline-block
        margin: 0
        font-weigth: 700
        font-family: 'Inter', sans-serif
        font-size: 20px
        line-height: 1.5
        color: #fff

    &__link
        text-decoration: none

    &__icon
        vertical-align: middle
        font-size: 30px
        margin-right: 24px
        display: inline-block
        color: #fff
</style>
