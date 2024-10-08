<template>
    <div class="product-table">
      <h2>Manager Product</h2>
      <input 
        type="text" 
        placeholder="Search by name..." 
        v-model="searchQuery" 
      />
      <button class="add-button" @click="showForm">Add New Product</button>
      
      <ProductForm 
        v-if="isFormVisible" 
        :formType="formType" 
        :product="selectedProduct" 
        @close="hideForm" 
        @submit="handleFormSubmit" 
      />
      
      <ConfirmationModal 
        v-if="isDeleteConfirmationVisible" 
        @confirm="deleteProduct" 
        @cancel="hideDeleteConfirmation" 
      />
      
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow
            v-for="(product, index) in filteredProducts"
            :key="index"
            :product="product"
            :index="index + 1"
            @edit="editProduct(product)"
            @delete="showDeleteConfirmation(product)"
          />
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import ProductForm from './ProductForm.vue';
  import ProductRow from './ProductRow.vue';
  import ConfirmationModal from './ConfirmationModal.vue';
  
  const isFormVisible = ref(false);
  const formType = ref('Add');
  const selectedProduct = ref(null);
  const products = ref([
    { name: 'Orange', image: 'https://png.pngtree.com/thumb_back/fw800/background/20230728/pngtree-an-orange-on-a-white-background-image_10181514.jpg', price: '30000', quantity: 100 },
    { name: 'Apple', image: 'https://stockdep.net/files/images/8048665.jpg', price: '20000', quantity: 50 },
    { name: 'Banana', image: 'https://png.pngtree.com/png-vector/20240129/ourlarge/pngtree-fresh-banana-fruits-yellow-fruit-png-image_11512496.png', price: '25000', quantity: 200 },
    { name: 'Grape', image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/21/nho-xanh-co-tac-dung-gi-2-1634814274704674814457.jpg', price: '60000', quantity: 80 },
    { name: 'Watermelon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMSFVqjIVzVdpLNzN0k9UpJDW0V8BOsLUMQ&s', price: '30000', quantity: 30 },
  ]);
  const isDeleteConfirmationVisible = ref(false);
  const productToDelete = ref(null);
  const searchQuery = ref('');
  const filteredProducts = computed(() => {
    if (!searchQuery.value) return products.value;
    return products.value.filter(product => 
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  const showForm = () => {
    formType.value = 'Add';
    selectedProduct.value = null;
    isFormVisible.value = true;
  };
  const hideForm = () => {
    isFormVisible.value = false;
  };
  const showDeleteConfirmation = (product) => {
    productToDelete.value = product;
    isDeleteConfirmationVisible.value = true;
  };
  
  const hideDeleteConfirmation = () => {
    isDeleteConfirmationVisible.value = false;
    productToDelete.value = null;
  };

  const deleteProduct = () => {
    products.value = products.value.filter(p => p !== productToDelete.value);
    hideDeleteConfirmation();
  };
  
  const handleFormSubmit = (formData) => {
    if (formType.value === 'Add') {
      products.value.push(formData);
    } else {
      const index = products.value.findIndex(p => p.name === formData.name);
      if (index !== -1) {
        products.value[index] = formData;
      }
    }
    hideForm(); 
  };
  
  const editProduct = (product) => {
    formType.value = 'Edit';
    selectedProduct.value = { ...product };
    isFormVisible.value = true;
  };
  </script>
  
  <style scoped>
  .product-table {
    width: 90%;
    max-width: 1200px;
    margin: 2rem auto; 
    text-align: center;
  }
  
  h2 {
    text-align: left;
    margin-bottom: 1rem;
  }
  
  .add-button {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-bottom: 1rem;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 1rem;
    text-align: center;
  }
  
  th {
    background-color: #f8f9fa;
    color: red;
  }
  
  td img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  </style>
  