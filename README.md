## Энциклопедия кино - Интерактивный справочник по миру кинематографа

![react version](https://img.shields.io/badge/react-18.3.1-blue)
![react-dom version](https://img.shields.io/badge/react--dom-18.3.1-blue)
![react-router-dom version](https://img.shields.io/badge/react--router--dom-7.1.3-blue)
![sass version](https://img.shields.io/badge/sass-1.83.4-blue)

![eslint version](https://img.shields.io/badge/eslint-8.56.0-brightgreen)
![prettier version](https://img.shields.io/badge/prettier-3.4.2-brightgreen)
![vite version](https://img.shields.io/badge/vite-6.0.5-brightgreen)

## Использованные технологии и инструменты

### 1. [TypeScript](https://www.typescriptlang.org/)
### 2. [React](https://react.dev/)
### 3. [React Router](https://reactrouter.com/en/main)
### 4. [SCSS](https://sass-lang.com/)
### 5. [ESLint](https://eslint.org/)
### 6. [Prettier](https://prettier.io/)
### 7. [Vite](https://vite.dev/)

## Что реализовано в приложении

1. Получение данных с помощью [The Cat API](https://thecatapi.com/)

2. Страница `"Все котики"` (URL: `/cats`):

- Страница "Все котики" открывается по умолчанию
- Страница содержит список карточек с котиками, получаемых с помощью [The Cat API](https://thecatapi.com/)
- У карточки есть возможность добавить в "любимые" и убрать из "любимых"
- Возможна подгрузка новых карточек с помощью кнопки "Загрузить ещё котиков"

3. Страница `"Любимые котики"` (URL: `/favorites`):

- Содержит карточки с котиками, отмеченные как "любимые"
- У карточки есть возможность убрать из "любимых", в таком случае карточка пропадает со страницы
- Возможна подгрузка новых карточек с помощью кнопки "Загрузить ещё котиков" (если "любимых" котиков больше, чем загружается на одну страницу)

4. Информация об избранных котиках сохраняется в localStorage и не пропадает при закрытии вкладки

5. Реализована адаптивная вёрстка вплоть до экранов мобильных устройств шириной в 320 пикселей

6. Для удобства проверки работы `.env` (где размещён ключ к API) временно убран из `.gitignore`

## Как посмотреть на работу приложения

1. Сайт развёрнут на gh-pages и доступен по адресу

```
http://dumbus.github.io/cats-pinterest
```

2. Развернуть приложение локально (см. далее)

## Как развернуть приложение локально

1. Скопировать репозиторий:

```
git clone https://github.com/dumbus/cats-pinterest.git
```

2. Поменять текущую папку:

```
cd cats-pinterest
```

3. Установить зависимости:

```
npm install
```

4. Запустить приложение:

```
npm run start
```

5. Открыть приложение в браузере:

```
http://localhost:{port}
```

> По умолчанию port = 5173 (используется [Vite](https://vite.dev/))
