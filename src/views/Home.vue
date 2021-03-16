<template>
    <Navbar />

    <header class="header">
        <Slider :slides="slides" />
    </header>

    <section class="section">
        <div class="container">
            <div class="section__header"><h2 class="section__title">Наша діяльність</h2></div>
            <div class="activity">
                <div class="activity__logo">
                    <img src="../assets/img/home/activity.jpg" alt="" class="activity__image" />
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
                <NewsPost
                    v-for="(newspost, i) in news"
                    :key="i"
                    :title="newspost.title"
                    :text="newspost.text"
                    :link="newspost.link"
                    :image="newspost.image"
                />
            </div>
            <div class="news__button">
                <a class="news__link" href="">Більше подій</a>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section__header"><h2 class="section__title">Наші заходи</h2></div>
        <div class="events">
            <Event
                v-for="(event, i) in events"
                :key="i"
                :title="event.title"
                :text="event.text"
                :link="event.link"
                :image="event.image"
            />
        </div>
    </section>

    <section class="section">
        <div class="section__header"><h2 class="section__title">Долучайтесь до нас</h2></div>
        <div class="join">
            <div class="container">
                <div class="join__header">
                    <span class="join__title">Заповніть заявку</span>
                    <p class="join__description">
                        Щоб долучитись до нашої організації, заповніть наступні поля
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
                    <div class="join__button">
                        <a href="" class="join__link">Надіслати</a>
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
import NewsPost from '@/components/home/NewsPost.vue';
import Event from '@/components/home/Event.vue';
import Slider from '@/components/home/Slider.vue';

export default {
    components: {
        Navbar,
        Footer,
        NewsPost,
        Event,
        Slider,
    },
    data: () => ({
        news: [
            {
                title: 'Нація',
                text:
                    'До Української Нації належить кожна людина, що відчуває в собі культурний, духовний, історичний зв’язок з Україною, минулими, сьогоднішніми і прийдешніми поколіннями українців. Нація ґрунтується на єдності мети і мрії, на бажанні спільно будувати свою долю. ',
                link: '',
                image: 'news/news_1.jpg',
            },
            {
                title: '',
                text: '',
                link: '',
                image: 'news/news_2.jpg',
            },
            {
                title: '',
                text: '',
                link: '',
                image: 'news/news_3.jpg',
            },
            {
                title: '',
                text: '',
                link: '',
                image: 'news/news_4.jpg',
            },
        ],
        events: [
            {
                title: 'Табори',
                text:
                    "- Всеукраїнський табір «Говерляна» імені В'ячеслава Чорновола - це традиційне молодорухівське таборування біля підніжжя гори Говерла, на яке щорічно збираються молоді українці із більшості областей України.",
                image: 'events/event_1.jpg',
            },
            {
                title: 'Фестивалі',
                text: '',
                image: 'events/event_2.jpg',
            },
            {
                title: 'Громадські зібрання',
                text: '',
                image: 'events/event_3.jpg',
            },
        ],
        slides: [
            {
                title:
                    '«Ти вирішив, що так, а не інакше потрібно діяти. Віриш у свою дорогу?  Іди і не звертай!..» <p class="vueperslide__subtitle">В.Чорновіл</p>',
                image: require('@/assets/img/events/event_1.jpg'), // eslint-disable-line global-require
                content:
                    '<div class="header__button"><a href="#" class="header__link">Долучитися</a></div>',
            },
            {
                title:
                    '«Ти вирішив, що так, а не інакше потрібно діяти. Віриш у свою дорогу?  Іди і не звертай!..» <p class="vueperslide__subtitle">В.Чорновіл</p>',
                image: require('@/assets/img/events/event_1.jpg'), // eslint-disable-line global-require
                content:
                    '<div class="header__button"><a href="#" class="header__link">Долучитися</a></div>',
            },
        ],
    }),
};
</script>

<style lang="sass" scoped>
@import '../assets/sass/views/Home'
</style>
