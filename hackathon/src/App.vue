<template>
  <div>

    <router-view></router-view>


    <nav class="navbar">
      <router-link to="/admin" class="navbar-item" active-class="active">Dashboard</router-link>
      <router-link to="/admin/manager-category" class="navbar-item" active-class="active">Manager Category</router-link>
      <router-link to="/admin/manager-product" class="navbar-item" active-class="active">Manager Product</router-link>
    </nav>


    <ProductTable />
    <Menu />
  </div>
</template>

<script setup>
import ProductTable from './components/ProductTable.vue';
import Menu from './components/Menu.vue';
</script>

<style scoped>

.navbar {
  background-color: black;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
}

.navbar-item {
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
}

.navbar-item:hover {
  background-color: #555;
}

.active {
  background-color: #4c4c4c;
}

.product-table {
  width: 90%;
  margin: 2rem auto;
  text-align: center;
}
</style>
