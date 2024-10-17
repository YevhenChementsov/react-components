**Читать на других языках: [Українська](./README.ua.md),
[English](./README.en.md).**

## Список друзей

---

<details>
<summary>Превью компонента FriendList</summary>

![Превью компонента FriendList](./preview.jpg)

</details>

---

### Описание компонента FriendList

Компонент должен принимать один пропс `friends` - массив объектов друзей и
должен создавать DOM следующей структуры:

```html
<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->
</ul>
```

---

### Описание компонента FriendListItem

Компонент должен принимать несколько пропсов:

- `avatar` - ссылка на аватар
- `name` - имя друга
- `isOnline` - буль, сигнализирующий о состоянии друга, в сети или нет.

В зависимости от пропса `isOnline`, должен меняться цвет фона `span.status`. Это
можно сделать через разный CSS-класс или Styled Components.

Компонент должен создавать DOM следующей структуры:

```html
<li class="item">
  <span class="status"></span>
  <img
    class="avatar"
    src="путь/к/файлу"
    alt="альтернативный текст изображения"
    width="48"
  />
  <p class="name"></p>
</li>
```

---

#### Пример использования

```js
import friends from 'путь/к/friends.json';

<FriendList friends={friends} />;
```
