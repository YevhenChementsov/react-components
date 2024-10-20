**Читати іншими мовами: [Русский](./README.md), [English](./README.en.md).**

## Профіль соціальної мережі

---

<details>
<summary>Прев'ю компонента Profile</summary>

![Прев'ю компонента FriendList](./preview.png)

</details>

---

### Опис компонента

Компонент повинен приймати кілька пропсів з інформацією про користувача:

- `name` — ім'я користувача
- `tag` — тег в соціальній мережі без `@`
- `location` — місто і країна
- `avatar` — url на зображення
- `stats` — об'єкт з інформацією про активність

Компонент повинен створювати DOM елемент такої структури.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
      alt="user avatar"
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

#### Приклад використання

```js
import user from 'шлях/до/user.json;

<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```
