<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal-content">
        <h3>{{ formType === 'Add' ? 'Add New Product' : 'Edit Product' }}</h3>
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">Name</label>
            <input v-model="formData.name" id="name" type="text" required />
          </div>
          <div>
            <label for="image">Image</label>
            <input v-model="formData.image" id="image" type="text" required />
          </div>
          <div>
            <label for="price">Price</label>
            <input v-model="formData.price" id="price" type="number" required />
          </div>
          <div>
            <label for="quantity">Quantity</label>
            <input v-model="formData.quantity" id="quantity" type="number" required />
          </div>
          <div class="modal-actions">
            <button @click="hideForm" type="button">Close</button>
            <button type="submit">{{ formType === 'Add' ? 'Add' : 'Save' }}</button>
          </div>
        </form>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits, watch } from 'vue';

  
  
  const props = defineProps({
    product: Object,
    formType: String,
  });
  
  const emit = defineEmits(['close', 'submit']);
  const isVisible = ref(true);
  const formData = ref({
    name: props.product ? props.product.name : '',
    image: props.product ? props.product.image : '',
    price: props.product ? props.product.price : '',
    quantity: props.product ? props.product.quantity : ''
  });
  const errorMessage = ref('');
  
  watch(() => props.product, (newValue) => {
    if (newValue) {
      formData.value = { ...newValue };
    }
  });

  const hideForm = () => {
    isVisible.value = false;
    emit('close');
  };

  const submitForm = () => {
    errorMessage.value = '';

    if (!formData.value.name || !formData.value.image) {
      errorMessage.value = 'Name and Image are required.';
      return;
    }
  
    const existingProduct = props.products?.find(p => p.name === formData.value.name);
    if (existingProduct && existingProduct.name !== props.product?.name) {
      errorMessage.value = 'Name must be unique.';
      return;
    }
  
    if (parseInt(formData.value.price) < 10000) {
      errorMessage.value = 'Giá tiền phải trên 10,000 đ.';
      return;
    }
  
    if (formData.value.quantity < 1 || formData.value.quantity > 100) {
      errorMessage.value = 'Số lượng phải nằm giữa từ1 tới 100.';
      return;
    }
  
    emit('submit', { ...formData.value });
    hideForm();
  };
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
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  