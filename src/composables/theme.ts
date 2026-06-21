import { ref, watch } from "vue";

export type ThemeId = "ocean" | "amber" | "sage" | "indigo";

export interface ThemeOption {
  id: ThemeId;
  label: string;
  swatch: string;
}

export const themeOptions: ThemeOption[] = [
  { id: "ocean", label: "深海青", swatch: "#0891b2" },
  { id: "amber", label: "琥珀金", swatch: "#d97706" },
  { id: "sage", label: "鼠尾草", swatch: "#059669" },
  { id: "indigo", label: "靛蓝", swatch: "#3b82f6" },
];

const STORAGE_KEY = "resume-theme";

function getInitialTheme(): ThemeId {
  const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
  if (saved && themeOptions.some((item) => item.id === saved)) {
    return saved;
  }
  return "ocean";
}

export function initResumeTheme() {
  document.documentElement.setAttribute("data-theme", getInitialTheme());
}

const theme = ref<ThemeId>(getInitialTheme());

watch(
  theme,
  (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    document.documentElement.setAttribute("data-theme", value);
  },
  { immediate: true },
);

export function useResumeTheme() {
  const setTheme = (id: ThemeId) => {
    theme.value = id;
  };

  return {
    theme,
    themeOptions,
    setTheme,
  };
}
