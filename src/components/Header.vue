<template>
  <nav class="navbar has-shadow is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
          <img src="" alt="Logo">
        </a>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/">
            Inicio
          </router-link>
          <a class="navbar-item">
            Administración
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Configuración
            </a>

            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/rubros">
                Rubros
              </router-link>
              <router-link class="navbar-item" to="/articulos">
                Articulos
              </router-link>
            </div>
          </div>

          <span class="navbar-item">
            <a class="button is-white is-outlined is-small" href="https://github.com/dansup/bulma-templates/blob/master/templates/hero.html">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>View Source</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>
