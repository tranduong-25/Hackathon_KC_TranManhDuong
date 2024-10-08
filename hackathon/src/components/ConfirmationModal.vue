<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <h1>Xác nhận</h1>
        <h3>Bạn có chắc chắn muốn xóa sản phẩm này?</h3>
        <div class="modal-actions">
          <button @click="cancel">Cancel</button>
          <button @click="confirm">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['confirm', 'cancel']);
  

  const confirm = () => emit('confirm');
  const cancel = () => emit('cancel');
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
  }
  
  .modal-actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  </style>
  