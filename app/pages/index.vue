<template>
  <div class="welcome-container">
    <header class="header">
      <h1>{{ $t("messages.welcomeBack") }}</h1>
      <div class="language-switcher">
        <button
          @click="switchLanguage('en')"
          :class="{ active: $i18n.locale === 'en' }"
        >
          English
        </button>
        <button
          @click="switchLanguage('ja')"
          :class="{ active: $i18n.locale === 'ja' }"
        >
          日本語
        </button>
      </div>
    </header>

    <main class="main-content">
      <svg-icon name="323" width="24" height="24" />

      <section class="hero-section">
        <h2>{{ $t("navigation.home") }}</h2>
        <p>{{ $t("messages.welcomeBack") }}</p>
        <div class="cta-buttons">
          <button class="primary-button">{{ $t("auth.login") }}</button>
          <button class="secondary-button">{{ $t("auth.register") }}</button>
        </div>
      </section>

      <section class="features-section">
        <svg-icon name="323" width="24" height="24" />

        <h2>{{ $t("navigation.services") }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>{{ $t("navigation.products") }}</h3>
            <p>{{ $t("messages.noData") }}</p>
          </div>
          <div class="feature-card">
            <h3>{{ $t("navigation.blog") }}</h3>
            <p>{{ $t("messages.noResults") }}</p>
          </div>
          <div class="feature-card">
            <h3>{{ $t("navigation.dashboard") }}</h3>
            <p>{{ $t("common.loading") }}</p>
          </div>
          <div class="feature-card">
            <h3>{{ $t("navigation.profile") }}</h3>
            <p>{{ $t("common.info") }}</p>
          </div>
        </div>
      </section>

      <section class="testimonials-section">
        <svg-icon name="323" width="24" height="24" />

        <h2>{{ $t("navigation.about") }}</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>{{ $t("common.success") }}</p>
              <div class="testimonial-author">
                <strong>{{ $t("auth.email") }}</strong>
                <span>{{ $t("common.info") }}</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>{{ $t("common.warning") }}</p>
              <div class="testimonial-author">
                <strong>{{ $t("auth.password") }}</strong>
                <span>{{ $t("common.info") }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pricing-section">
        <svg-icon name="323" width="24" height="24" />

        <h2>{{ $t("navigation.products") }}</h2>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3>{{ $t("auth.login") }}</h3>
            <div class="price">{{ $t("common.save") }}</div>
            <ul class="features-list">
              <li>{{ $t("common.edit") }}</li>
              <li>{{ $t("common.update") }}</li>
              <li>{{ $t("common.delete") }}</li>
            </ul>
            <button class="pricing-button">{{ $t("common.submit") }}</button>
          </div>
          <div class="pricing-card featured">
            <h3>{{ $t("auth.register") }}</h3>
            <div class="price">{{ $t("common.cancel") }}</div>
            <ul class="features-list">
              <li>{{ $t("common.search") }}</li>
              <li>{{ $t("common.filter") }}</li>
              <li>{{ $t("common.sort") }}</li>
            </ul>
            <button class="pricing-button">{{ $t("common.submit") }}</button>
          </div>
          <div class="pricing-card">
            <h3>{{ $t("auth.forgotPassword") }}</h3>
            <div class="price">{{ $t("common.save") }}</div>
            <ul class="features-list">
              <li>{{ $t("common.edit") }}</li>
              <li>{{ $t("common.update") }}</li>
              <li>{{ $t("common.delete") }}</li>
            </ul>
            <button class="pricing-button">{{ $t("common.submit") }}</button>
          </div>
        </div>
      </section>

      <section class="contact-section">
        <svg-icon name="323" width="24" height="24" />

        <h2>{{ $t("navigation.contact") }}</h2>
        <div class="contact-container">
          <form class="contact-form">
            <div class="form-group">
              <label>{{ $t("auth.email") }}</label>
              <input type="text" :placeholder="$t('validation.email')" />
            </div>
            <div class="form-group">
              <label>{{ $t("auth.password") }}</label>
              <input type="email" :placeholder="$t('validation.required')" />
            </div>
            <div class="form-group">
              <label>{{ $t("auth.confirmPassword") }}</label>
              <textarea
                :placeholder="$t('validation.passwordMatch')"
              ></textarea>
            </div>
            <button type="submit" class="submit-button">
              {{ $t("common.submit") }}
            </button>
          </form>
        </div>
      </section>

      <section class="icons-showcase">
        <h2>Available Icons</h2>
        <div class="icons-grid">
          <div v-for="icon in icons" :key="icon" class="icon-item">
            <svg-icon :name="icon.replace('.svg', '')" width="32" height="32" />
            <span class="icon-name">{{ icon.replace('.svg', '') }}</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const switchLanguage = (lang) => {
  locale.value = lang;
};

// List of all SVG icons
const icons = [
  'whatsapp-outline-black',
  'withdraw',
  'workspacePremium',
  'tick-blue',
  'tick-circle-green',
  'tick-disabled',
  'tick',
  'ticket',
  'toolkit',
  'trash-bin-black',
  'trash-bin',
  'two-way-dir',
  'us',
  'visa',
  'wallet',
  'warning-black',
  'warning-yellow',
  'warning',
  'water',
  'sort-and-filter',
  'sort-icon',
  'star',
  'success',
  'support-call-red',
  'support-call',
  'support',
  'switch',
  'telegram',
  'terms',
  'thumb-down',
  'thumb-up',
  'refresh-blue',
  'refund',
  'refundable-red',
  'refundable',
  'reload-btn',
  'restaurant',
  'scan',
  'search-edit-dark',
  'search-red',
  'search',
  'selected',
  'setting',
  'share',
  'shoppingCart',
  'sim-card',
  'plane-arrival',
  'plane-fly-thick',
  'plane-fly',
  'plane',
  'plus-red',
  'plus',
  'plus_white',
  'policy',
  'pool',
  'profile',
  'recent',
  'red-close',
  'red-infant',
  'red-person',
  'new-seat',
  'night',
  'no-passengers',
  'offline-payment',
  'one-way-dir',
  'online-payment',
  'passengers',
  'people',
  'person',
  'phone',
  'pillar',
  'plane-arrival-thick',
  'iqd',
  'lang',
  'left-arrow',
  'location',
  'map-outline',
  'map',
  'mdi-airplane-off',
  'meal',
  'minus',
  'mobile',
  'more-options',
  'morning',
  'network-disrupted',
  'network-restored',
  'green-infant',
  'green-person',
  'history',
  'hotel',
  'hourglass-black',
  'ic_outline-gpp-bad',
  'ic_outline-leaderboard',
  'infant',
  'info',
  'instagram'
];
</script>

<style scoped>
.welcome-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.language-switcher {
  display: flex;
  gap: 1rem;
}

.language-switcher button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-switcher button.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.primary-button,
.secondary-button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-button {
  background: #007bff;
  color: white;
  border: none;
}

.secondary-button {
  background: transparent;
  border: 1px solid #007bff;
  color: #007bff;
}

.features-section {
  margin-top: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.testimonials-section {
  margin-top: 6rem;
  text-align: center;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.testimonial-card {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.testimonial-author {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pricing-section {
  margin-top: 6rem;
  text-align: center;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.pricing-card {
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.pricing-card.featured {
  border: 2px solid #007bff;
  transform: scale(1.05);
}

.price {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.features-list li {
  margin: 0.5rem 0;
}

.pricing-button {
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-section {
  margin-top: 6rem;
  text-align: center;
}

.contact-container {
  max-width: 600px;
  margin: 2rem auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: #0056b3;
}

.icons-showcase {
  margin-top: 4rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.icon-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-name {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  word-break: break-word;
}
</style>
