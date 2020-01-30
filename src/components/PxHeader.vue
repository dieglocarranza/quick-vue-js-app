<template>
  <header class="shadow w-screen">
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand>
          <router-link to="/">
            <px-icon class="mr-2" />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/axios">
               Axios API Call
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: 'PxHeader',
  components: { PxIcon }
}
</script>

<style scoped lang="scss">
$red: #ce1821;
$white: #ffffff;
$purple: #852065;
$second-purple: #68184e;
$light-red: #e91976;
$dark-grey: #262626;
$dark-blue: #030e2d;
$header-grey: #555657;

@import url(https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900);
$lato: 'Lato', sans-serif;

header {
  background: $purple;
  nav {
    &.navbar {
      .navbar-brand {
        svg {
          width: 50px;
        }
      }

      #nav-collapse {
        font-family: $lato;
      }

      ul {
        &.navbar-nav {
          li {
            a {
              color: $white;
            }
          }
        }
      }
    }
  }
}
</style>
