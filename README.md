# Інтеграція кнопки «Сервіс УТОГ»

Цей репозиторій містить інструкцію з інтеграції кнопки ***Сервіс УТОГ***, яка забезпечує доступність сайту через підключення послуги перекладу жестовою мовою від УТОГ.


  <img src="http://utog.org/assets/uploads/images/inbox/subtn.png" alt="Кнопки Сервіс УТОГ" width="200">

## Приклад

<img src="screen-button-service-utog.png" alt="Сервіс УТОГ" width="300" style="vertical-align: middle;"> <img src="screen-button-service-utog-open.png" alt="Кнопки Сервіс УТОГ" width="300" style="vertical-align: middle;">


## Як підключити

Щоб підключити кнопку «Сервіс УТОГ» до свого сайту, достатньо вставити наступний рядок перед закриваючим тегом `</body>` у вашому HTML-документі:

```html
<script src="https://utog.org/assets/uploads/files/js/serviceutog.js" async defer></script>
```

> **Важливо:** жодних додаткових налаштувань не потрібно. Скрипт автоматично завантажує та відображає кнопку на вашій сторінці.

## Приклад

```html
<!DOCTYPE html>
<html lang="uk" style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: sans-serif;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Інтеграція кнопки «Сервіс УТОГ»</title>
</head>
<body style="margin: 0; padding: 0;">
    <header style="background-color: #1e40af; text-align: center;">
        <img src="https://utog.org/assets/tpl/qd/images/logo.svg" alt="Logo UTOG"
            style="height: 80px; margin: 12px auto;">
    </header>
  <!-- Контент сторінки -->

  <!-- Підключення кнопки Сервіс УТОГ -->
    <script src="https://utog.org/assets/uploads/files/js/serviceutog.js" async defer></script>
</body>
</html>
```

## Підтримка

З усіх питань звертайтесь до служби підтримки УТОГ.

03150, м. Київ, вул. Велика Васильківська, 74 <br>
Прийом у ЦП УТОГ: проводиться щоденно, крім святкових та <br>
вихідних днів, пн-чт з 8:00 до 17:00, у пт з 8:00 до 15:45 <br>
Телефон: +38 063 101 97 09 (telegram, viber, whatsApp) <br>
Ел. пошта: cputog@ukr.net
