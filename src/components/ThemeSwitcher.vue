<script setup lang="ts">
import { useResumeTheme } from "~/composables/theme";

const { theme, themeOptions, setTheme } = useResumeTheme();
</script>

<template>
  <div class="theme-switcher">
    <p class="theme-switcher-label">主题配色</p>
    <div class="theme-switcher-options">
      <button
        v-for="item in themeOptions"
        :key="item.id"
        class="theme-option"
        :class="{ active: theme === item.id }"
        type="button"
        :title="item.label"
        @click="setTheme(item.id)"
      >
        <span class="theme-swatch" :style="{ background: item.swatch }" />
        <span class="theme-name">{{ item.label }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.theme-switcher {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--resume-border);
  text-align: left;
}

.theme-switcher-label {
  margin: 0 0 0.65rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--resume-text-muted);
}

.theme-switcher-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
}

.theme-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.55rem;
  border: 1px solid var(--resume-border);
  border-radius: 10px;
  background: var(--resume-surface);
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-option:hover {
  border-color: var(--resume-border-strong);
  transform: translateY(-1px);
}

.theme-option.active {
  border-color: var(--resume-primary-light);
  background: var(--resume-tint-soft);
  box-shadow: inset 0 0 0 1px var(--resume-primary-light);
}

.theme-swatch {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px var(--resume-border);
  flex-shrink: 0;
}

.theme-name {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--resume-text);
}
</style>
