<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link to="/" active-class="acrive" class="nav-item" tag="li">
          <a class="nav-link">Все дома</a>
        </router-link>
        <router-link to="/add" active-class="acrive" class="nav-item" tag="li">
          <a class="nav-link">Добавить дом</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>