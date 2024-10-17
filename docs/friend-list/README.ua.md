**Читати іншими мовами: [Русский](./README.md), [English](./README.en.md).**

## Список друзів

---

<details>
<summary>Прев'ю компонента FriendList</summary>

![Прев'ю компонента FriendList](./preview.jpg)

</details>

---

### Опис компонента FriendList

Компонент повинен приймати один пропс `friends` - масив об'єктів друзів і
повинен створювати DOM наступної структури:

```html
<ul class="friend-list">
  <!-- Довільна кількість FriendListItem, в залежності від кількості об'єктів в масиві -->
</ul>
```

---

### Опис компонента FriendListItem

Компонент повинен приймати кілька пропсів:

- `avatar` - посилання на аватар
- `name` - ім'я друга
- `isOnline` - буль, який сигналізує про стан друга, в мережі чи ні.

Залежно від пропса `isOnline`, повинен змінюватися колір фону `span.status`. Це
можна зробити через різний CSS-клас або Styled Components.

Компонент повинен створювати DOM наступної структури:

```html
<li class="item">
  <span class="status"></span>
  <img
    class="avatar"
    src="шлях/до/файлу"
    alt="альтернативний текст зображення"
    width="48"
  />
  <p class="name"></p>
</li>
```

---

#### Приклад використання

```js
import friends from 'шлях/до/friends.json';

<FriendList friends={friends} />;
```
