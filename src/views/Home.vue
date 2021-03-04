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
