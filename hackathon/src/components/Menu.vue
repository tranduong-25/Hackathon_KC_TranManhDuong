<template>
    <nav class="menu">
      <router-link
        to="/admin"
        class="menu-item"
        :class="{ active: isActive('/admin') }"
      >
        Dashboard
      </router-link>
      <router-link
        to="/admin/manager-product"
        class="menu-item"
        :class="{ active: isActive('/admin/manager-product') }"
      >
        Manager Product
      </router-link>
      <router-link
        to="/admin/manager-category"
        class="menu-item"
        :class="{ active: isActive('/admin/manager-category') }"
      >
        Manager Category
      </router-link>
    </nav>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  

  const route = useRoute();
  

  const isActive = (path) => route.path === path;
  </script>
  
  <style scoped>
  .menu {
    display: flex;
    background-color: #333;
    padding: 10px;
  }
  
  .menu-item {
    color: white;
    padding: 10px;
    text-decoration: none;
    font-weight: bold;
  }
  
  .menu-item.active {
    background-color: #555;
    border-bottom: 2px solid white;
  }
  
  .menu-item:hover {
    background-color: #444;
  }
  </style>
  