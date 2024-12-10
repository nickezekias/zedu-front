<script setup lang="ts">
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="error-code">404</div>
      <div class="message">{{ $t('features.errors.404NotFound') }}</div>
      <router-link :to="{ name: 'dashboard' }">
        <PrimeButton class="home-btn" size="large" :label="$t('labels.goHome')" />
      </router-link>
      <!-- <a href="/" class="home-btn">Go Home</a> -->
    </div>
  </div>
</template>


<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.container {
  text-align: center;
  padding: 20px;
  max-width: 600px;
}

.error-code {
  font-size: 10rem;
  font-weight: 800;
  letter-spacing: -5px;
  color: var(--p-primary-color);
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}

.message {
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 500;
  animation: fadeInUp 1.5s ease-in-out forwards;
}

.home-btn {
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;
  animation: slideIn 2s ease-in-out forwards;
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

/* Responsiveness */
@media (max-width: 768px) {
  .error-code {
    font-size: 7rem;
  }

  .message {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .home-btn {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .error-code {
    font-size: 5rem;
  }

  .message {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  .home-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>
