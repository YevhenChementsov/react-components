**Читать на других языках: [Українська](./README.ua.md),
[English](./README.en.md).**

## Профиль социальной сети

---

<details>
<summary>Превью компонента Profile</summary>

![Превью компонента Profile](./preview.png)

</details>

---

### Описание компонента

Компонент должен принимать несколько пропсов с информацией о пользователе:

- `name` — имя пользователя
- `tag` — тег в социальной сети без `@`
- `location` — город и страна
- `avatar` — url на изображение
- `stats` — объект с информацией об активности

Компонент должен создавать DOM элемент следующей структуры.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

---

#### Пример использования

```js
import user from 'путь/к/user.json;

<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```
