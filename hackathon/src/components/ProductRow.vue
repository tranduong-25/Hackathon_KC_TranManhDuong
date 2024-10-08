<template>
    <tr>
      <td>{{ index }}</td>
      <td><img :src="product.image" alt="Product Image" class="product-image" /></td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }} đ</td>
      <td>{{ product.quantity }}</td>
      <td>
        <button class="edit-button" @click="$emit('edit', product)">Edit</button>
        <button class="delete-button" @click="$emit('delete', product)">Delete</button>
      </td>
    </tr>
    
  </template>
  
  <script setup>
  const props = defineProps({
    product: Object,
    index: Number
  });
  </script>
  
  <style scoped>
  .product-image {
    width: 60px;  
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .edit-button {
    background-color: #ff9800;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  
  .delete-button {
    background-color: #f44336;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .edit-button:hover,
  .delete-button:hover {
    opacity: 0.8;
  }
  </style>
  