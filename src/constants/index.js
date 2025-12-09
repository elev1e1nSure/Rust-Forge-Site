// Application constants

// Screenshots array - must not be empty
export const SCREENSHOTS = Object.freeze([
  "./screen1.png",
  "./screen2.png",
  "./screen3.png",
  "./screen4.png",
  "./screen5.png"
]);

// Validate screenshots array
if (SCREENSHOTS.length === 0) {
  console.warn('SCREENSHOTS array is empty');
}

export const SOCIAL_LINKS = Object.freeze({
  telegram: "https://t.me/rust_forge",
  youtube: "https://youtube.com/@rust_forge",
  github: "https://github.com/elev1e1nSure/Rust-Forge-Download"
});

export const DOWNLOAD_LINK = "https://github.com/elev1e1nSure/Rust-Forge-Download/releases/download/v0.5.0/Rust.Forge.zip";

export const FAQ_DATA = Object.freeze([
  {
    question: "Безопасно ли использовать Rust Forge?",
    answer: "Да, программа не работает в фоне, не читает и не изменяет память игры, никак не провоцируя EAC или другие античиты."
  },
  {
    question: "Останется ли утилита бесплатной?",
    answer: 'Да. Rust Forge всегда был и останется бесплатным навсегда, но вы всегда можете поддержать разработчика на <a href="https://boosty.to/elev1e1n/donate" target="_blank" rel="noopener noreferrer">Boosty</a>.'
  },
  {
    question: "Зачем нужна программа?",
    answer: "Программа нужна для удобной настройки игры, биндов и графики, удобным переключением между разными конфигурациями и оптимизации игры."
  },
  {
    question: "А это не вирус?",
    answer: "Нет. Программа не является вредоносным ПО, но некоторые антивирусы могут ругатся на неё из за отсутствия подписи."
  }
]);

export const FEATURES_DATA = Object.freeze([
  {
    title: "Система конфигов",
    description: "Создавайте собственные конфигурации, удобно переключайтесь между ними и делитесь с друзьями. "
  },
  {
    title: "Автоматический бэкап",
    description: "При первом запуске программа создаст исходную точку-бэкап ваших настроек, чтобы вы могли вернуться к ним в любой момент, если что то пойдёт не так."
  },
  {
    title: "Редактор биндов",
    description: "Удобный редактор биндов позволяет вам создавать сложные составные бинды и клавишосочетания, используя наш удобный словарь команд. Так же вы можете использовать готовые пресеты полезных биндов и делиться ими с друзьями. (В разработке)"
  },
  {
    title: "Настройка графики",
    description: "Переключайтесь между готовыми пресетами и легко создавайте свои, удобно отрегулируйте настройки разных параметров графики, заранее протестированных нами и делитесь с друзьями. (В разработке)"
  },
  {
    title: "Безопасность",
    description: "Программа является полностью безопасной в отношении любых античитов (в том числе EAC) потому что не работает в фоне и не взаимодействует с памятью игры или её процессом."
  },
  {
    title: "Удобство",
    description: "Программа имеет удобный и интуитивно понятный интерфейс для всех, легко настраивается."
  }
]);

export const ABOUT_BADGES = Object.freeze([
  "Бесплатно",
  "Удобно",
  "Безопасно",
  "ну ваще класс"
]);

export const SCROLL_REVEAL_OPTIONS = Object.freeze({
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
});

export const CAROUSEL_TRANSITION_DURATION = 350; // ms
export const FAQ_CLOSE_DELAY = 200; // ms
export const RESIZE_DEBOUNCE_DELAY = 150; // ms

