<template>
    <Navbar />

    <header class="header"></header>

    <section class="section">
        <div class="container">
            <div class="section__header"><h2 class="section__title">Наша діяльність</h2></div>
            <div class="activity">
                <div class="activity__logo">
                    <img src="https://via.placeholder.com/500/" alt="" class="activity__image" />
                </div>
                <div class="activity__description">
                    <p class="activity__text">
                        Місією нашої організації є «Формування молодої, національно-свідомої,
                        політичної, української еліти». Велика частка населення нашої країни вважає
                        себе українцями, але говорить про це якось тихо, невпевнено і часто
                        погоджуються з нав’язаною меншовартістю. Ставимо собі за мету пропагувати
                        відчуття гордості за свій Край, свою Мову, Історію, Культуру, Традиції,
                        Героїв. Розвивати відчуття господаря своєї землі, не тільки приватної, а й
                        усіх: рік, гір, полів, лісів, степів і так далі. Кожен має відчути:
                        «Українська Земля там – де живуть Українці!»
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section__header"><h2 class="section__title">Останні новини</h2></div>
            <div class="news">
                <NewsPost />
                <NewsPost />
                <NewsPost />
                <NewsPost />
            </div>
            <div class="news__button">
                <a class="news__link" href="">Більше подій</a>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section__header"><h2 class="section__title">Наші заходи</h2></div>
        <div class="events">
            <Event class="event--expand" />
            <Event />
            <Event class="event--expand" />
        </div>
    </section>

    <section class="section">
        <div class="section__header"><h2 class="section__title">Долучайтесь до нас</h2></div>
        <div class="join">
            <div class="container">
                <div class="join__header">
                    <span class="join__title">Заповніть заявку</span>
                    <p class="join__description">
                        ЩОБ ДОЛУЧИТИСЬ ДО НАШОЇ ОРГАНІЗАЦІЇ, ЗАПОВНІТЬ НАСТУПНІ ПОЛЯ
                    </p>
                </div>
                <div class="join-form">
                    <div class="join-form__field">
                        <span class="join-form__title">Прізвище, ім‘я, по батькові</span>
                        <input
                            type="text"
                            class="join-form__input"
                            placeholder="&#xf406;  П. І. Б"
                        />
                    </div>
                    <div class="join-form__field">
                        <span class="join-form__title">Eлектронна пошта</span>
                        <input
                            type="text"
                            class="join-form__input"
                            placeholder="&#xf0e0;  E-mail"
                        />
                    </div>
                    <div class="join-form__field">
                        <span class="join-form__title">Номер телефону</span>
                        <input
                            type="text"
                            class="join-form__input"
                            placeholder="&#xf095;  +38 (0--) -- ---"
                        />
                    </div>
                    <div class="join-form__area">
                        <div class="join__button">
                            <a href="" class="join__link">Надіслати</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section__header"><h2 class="section__title">Ми в мережах</h2></div>
            <div class="container">
                <div class="social">
                    <div class="social__widget">
                        <img src="https://via.placeholder.com/460x520/" alt="" />
                    </div>
                    <div class="social__widget">
                        <img src="https://via.placeholder.com/460x520/" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import NewsPost from '@/components/NewsPost.vue';
import Event from '@/components/Event.vue';

export default {
    components: {
        Navbar,
        Footer,
        NewsPost,
        Event,
    },
};
</script>

<style lang="sass">
@import '@/assets/sass/main.sass'

.section, .header
    margin-bottom: 76px

.section
    text-align: center

    &__title
        text-transform: uppercase
        color: #000
        font-family: Roboto
        font-size: 36px
        font-weight: 700
        margin: 0

    &__header
        position: relative
        display: inline-block
        margin: 0 auto 74px auto

        &::after
            left: 50%
            content: ''
            display: block
            width: 75%
            position: absolute
            bottom: 0
            height: 2px
            background: #050505

.activity
    display: flex

    &__description
        padding: 0 20px

    &__text
        margin: 0
        text-align: left
        font-family: 'Ubuntu', sans-serif
        font-size: 22px
        font-weight: 400
        line-height: 1.5

    &__image
        border: 1px solid #000

.news
    display: flex
    gap: 24px
    flex-wrap: wrap

    &__button
        margin-top: 60px;
        display: inline-block
        border: 1px solid #000

        @include button-animation(#000)

    &__link
        position: relative
        display: block
        z-index: 1
        text-decoration: none
        color: #000
        font-size: 28px
        font-family: 'Roboto', sans-serif
        font-weight: 700
        padding: 20px

        &:hover
            color: #fff

.events
    display: flex

.social
    display: flex
    flex-wrap: nowrap
    justify-content: space-between

.join
    padding: 100px 0
    background: #eaeaea

    &__title
        color: #2c3673;
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 700;
        text-align: center

    &-form
        margin: 48px
        gap: 24px
        align-items: flex-end
        flex-wrap: wrap
        display: flex
        justify-content: space-between

        &__field
            text-align: left
            width: 325px

        &__title
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #3e3e40;

        &__input
            box-sizing: border-box
            width: 100%
            color: #000
            padding: 16px
            border-radius: 8px
            font-family: 'Inter', sans-serif;
            font-size: 16px;
            font-weight: 600
            margin-top: 35px
            border: none
            border: 1px solid #dcdcdc

            &::placeholder
                text-transform: uppercase
                font-family: 'Font Awesome 5 Free', 'Inter'
                color: #3e3e40

    &__description
        margin: 12px 0 0 0
        text-transform: uppercase
        font-weight: 600
        font-family: 'Inter', sans-serif
        font-size: 14px
        color: #515154

    &__button
        border-radius: 8px
        width: 325px
        background: $accent

        @include button-animation(#000)

    &__link
        font-weight: 700
        color: #fff
        text-decoration: none
        font-family: 'Inter', sans-serif
        font-size: 14px
        padding: 16px
        display: block
        position: relative
        z-index: 1
</style>
