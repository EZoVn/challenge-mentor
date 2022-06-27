<template>
  <div class="card">
    <nav>
      <div class="nav">
        <ul class="nav__dropdown">
          <li>
            <img src="@/assets/images/dropdown/images/logo.svg" alt="logo snap" />
          </li>
          <li class="dropdown" @click="isOpen = !isOpen">
            Features <img v-show="isOpen == false" src="@/assets/images/dropdown/images/icon-arrow-down.svg" alt="arrow down" />
            <img v-show="isOpen == true" src="@/assets/images/dropdown/images/icon-arrow-up.svg" alt="arrow up" />
            <transition name="fade">
              <ul v-if="isOpen" class="dropdown-content">
                <li><img src="@/assets/images/dropdown/images/icon-todo.svg" alt="icon todo list" /> Todo List</li>
                <li><img src="@/assets/images/dropdown/images/icon-calendar.svg" alt="icon calendar" /> Calendar</li>
                <li><img src="@/assets/images/dropdown/images/icon-reminders.svg" alt="icon reminders" /> Reminders</li>
                <li><img src="@/assets/images/dropdown/images/icon-planning.svg" alt="icon planning" /> Planning</li>
              </ul>
            </transition>
          </li>
          <li @click="isOpen2 = !isOpen2">
            Company <img v-show="isOpen2 == false" src="@/assets/images/dropdown/images/icon-arrow-down.svg" alt="arrow down" />
            <img v-show="isOpen2 == true" src="@/assets/images/dropdown/images/icon-arrow-up.svg" alt="arrow up" />
            <transition name="fade">
              <ul v-if="isOpen2" class="dropdown-content dropdown-content--2">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </transition>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <ul class="nav__login">
          <li>Login</li>
          <li class="nav__login--register">Register</li>
        </ul>
      </div>
    </nav>
    <main class="main">
      <div class="main__text">
        <h1>
          Make <br />
          remote work
        </h1>

        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button class="main__btn">Learn more</button>
        <div class="main__img">
          <img class="main__img--client" src="@/assets/images/dropdown/images/client-databiz.svg" alt="logo client databiz" />
          <img class="main__img--client" src="@/assets/images/dropdown/images/client-audiophile.svg" alt="logo client audiophile" />
          <img class="main__img--client" src="@/assets/images/dropdown/images/client-meet.svg" alt="logo client meet" />
          <img class="main__img--client" src="@/assets/images/dropdown/images/client-maker.svg" alt="logo client maker" />
        </div>
      </div>
      <div class="main__img">
        <img class="main__img--hero" src="@/assets/images/dropdown/images/image-hero-desktop.png" alt="image hero desktop" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "DropdownNav",
  data() {
    return {
      isOpen: false,
      isOpen2: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// Font family
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap");
// Variables color
$AlmostWhite: hsl(0, 0%, 98%);
$MediumGray: hsl(0, 0%, 41%);
$AlmostBlack: hsl(0, 0%, 8%);

* {
  margin: 0;
  padding: 0;
  font-family: "Epilogue", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: $MediumGray;
}
h1 {
  color: $AlmostBlack;
  font-size: 48px;
  font-weight: 700;
}
.card {
  padding: 30px;
  background-color: $AlmostWhite;
  opacity: 0.8;
}
.nav__login {
  align-items: center;
  &--register {
    padding: 8px 20px;
    border: 2px solid $MediumGray;
    border-radius: 15px;
    &:hover {
      color: $AlmostBlack;
    }
  }
}
.dropdown-content {
  background-color: $AlmostWhite;
  z-index: 4;
  position: absolute;
  display: block;
  padding: 5px 10px;
  width: 160px;
  right: 0%;
  border-radius: 10px;
  box-shadow: 0px 0px 16px 0px $MediumGray;
  &--2 {
    left: 0%;
  }
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  & ul {
    vertical-align: middle;
  }
}
ul {
  display: flex;
  list-style-type: none;
}
li {
  cursor: pointer;
  margin: 10px;
}
.main {
  display: flex;
  padding: 50px;
  &__img--client {
    margin: 10px;
  }
  &__img--hero {
    width: 400px;
    height: 500px;
  }
  &__btn {
    cursor: pointer;
    border-radius: 15px;
    background-color: $AlmostBlack;
    color: $AlmostWhite;
    padding: 15px 25px;
    font-size: 14px;
    font-weight: 700;
    margin: 20px;
    border: 1px solid $AlmostBlack;
    &:hover {
      background-color: $AlmostWhite;
      color: black;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-40px) scaleY(.5);
}
</style>