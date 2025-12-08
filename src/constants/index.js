// Application constants

// Screenshots array - must not be empty
export const SCREENSHOTS = Object.freeze([
  "./screen1.jpg",
  "./screen2.jpg",
  "./screen3.jpg"
]);

// Validate screenshots array
if (SCREENSHOTS.length === 0) {
  console.warn('SCREENSHOTS array is empty');
}

export const SOCIAL_LINKS = Object.freeze({
  telegram: "https://t.me/rust_forge",
  youtube: "https://youtube.com/@rust_forge"
});

export const DOWNLOAD_LINK = "https://github.com/elev1e1nSure/Rust-Forge/releases/download/v1.0.0/Rust.Forge.zip";

export const FAQ_DATA = Object.freeze([
  {
    question: "Безопасно ли использовать Rust Forge?",
    answer: "Да, программа не работает в фоне, не читает и не изменяет память игры никак не провоцируя EAC."
  },
  {
    question: "Останется ли утилита бесплатной?",
    answer: "Да. Rust Forge всегда был и останется бесплатным навсегда."
  },
  {
    question: "Зачем нужна программа?",
    answer: "Программа нужна для удобной настройки игры, биндов и графики, удобным переключением между разными конфигурациями и оптимизации игры."
  },
  {
    question: "Программа — не вирус?",
    answer: "Нет. Программа не является вредоносным ПО, антивирусы могут ругатся на неё из за отсутствия подписи."
  }
]);

export const FEATURES_DATA = Object.freeze([
  {
    title: "Удобная система конфигов",
    description: "Возможность создавать и редактировать конфиги, менять их тип — настройки игры, настройки управления или все сразу"
  },
  {
    title: "Автоматический бэкап",
    description: "Автоматический бэкап перед первым запуском и быстрый возврат исходных настроек."
  },
  {
    title: "Редактор биндов",
    description: "Редактор биндов (в разработке) с поддержкой составных действий и пресетов."
  },
  {
    title: "Настройка графики",
    description: "Система настройки графики (в разработке) и пресетов для оптимальной производительности игры."
  }
]);

export const ABOUT_BADGES = Object.freeze([
  "Бесплатно",
  "Удобно",
  "Безопасно"
]);

export const SCROLL_REVEAL_OPTIONS = Object.freeze({
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
});

export const CAROUSEL_TRANSITION_DURATION = 350; // ms
export const FAQ_CLOSE_DELAY = 200; // ms
export const RESIZE_DEBOUNCE_DELAY = 150; // ms

