// Translation system for the Todo App
const translations = {
  en: {
    // Main UI elements
    title: "My Tasks",
    taskInputPlaceholder: "Enter a task",
    addButton: "Add",
    completedTasks: "Completed Tasks",
    
    // Buttons and actions
    doneButton: "✔",
    deleteButton: "❌",
    
    // Language switcher
    languageLabel: "Language:",
    english: "English",
    arabic: "العربية"
  },
  
  ar: {
    // Main UI elements
    title: "مهامي",
    taskInputPlaceholder: "أدخل مهمة",
    addButton: "إضافة",
    completedTasks: "المهام المكتملة",
    
    // Buttons and actions
    doneButton: "✔",
    deleteButton: "❌",
    
    // Language switcher
    languageLabel: "اللغة:",
    english: "الإنجليزية",
    arabic: "العربية"
  }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'en';

// Translation function
function t(key) {
  return translations[currentLanguage][key] || key;
}

// Function to update all translatable elements
function updateTranslations() {
  // Update elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (element.tagName === 'INPUT' && element.type === 'text') {
      element.placeholder = t(key);
    } else {
      element.textContent = t(key);
    }
  });
  
  // Update document title
  document.title = t('title');
  
  // Update HTML lang attribute and direction
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  
  // Update body class for styling
  document.body.className = currentLanguage === 'ar' ? 'rtl' : 'ltr';
}

// Function to refresh dynamic task buttons
function refreshTaskButtons() {
  // Update done buttons
  document.querySelectorAll('.done-btn').forEach(btn => {
    btn.textContent = t('doneButton');
  });
  
  // Update delete buttons  
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.textContent = t('deleteButton');
  });
}

// Function to switch language
function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateTranslations();
  refreshTaskButtons();
  
  // Update language selector
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.value = lang;
  }
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateTranslations();
  
  // Set the correct language selector value
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }
});