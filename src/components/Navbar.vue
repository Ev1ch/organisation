<template>
    <nav class="navbar">
        <div class="container navbar__container">
            <div class="navbar__logo">
                <router-link to="/"
                    ><img
                        src="../assets/img/logo.png"
                        alt="Логотип “Молодий Народний Рух“"
                        class="navbar__image"
                /></router-link>
            </div>
            <div class="navbar__menu">
                <ul class="navbar__list">
                    <li class="navbar__item">
                        <router-link to="/" class="navbar__link">Головна</router-link>
                    </li>
                    <li class="navbar__item">
                        <router-link to="/news" class="navbar__link">Новини</router-link>
                    </li>
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

<style lang="sass" scoped>
@import '../assets/sass/components/Navbar'
</style>
