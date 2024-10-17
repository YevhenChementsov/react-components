**Read in other languages: [Russian](./README.md),
[Ukrainian](./README.ua.md).**

## List of friends

---

<details>
<summary>FriendList component preview</summary>

![FriendList component preview](./preview.jpg)

</details>

---

### FriendList component description

The component must accept one prop `friends` - an array of friend objects and
must create a DOM of the following structure:

```html
<ul class="friend-list">
  <!-- Arbitrary number of FriendListItem, depending on the number of objects in the array -->
</ul>
```

---

### FriendListItem component description

The component must accept more than one prop:

- `avatar` - link to the avatar
- `name` - friend's name
- `isOnline` - bull, signaling friend status, online or offline.

Depending on the missing `isOnline`, the background color `span.status` should
change. This can be done through a different CSS class or Styled Components.

The component must create a DOM of the following structure:

```html
<li class="item">
  <span class="status"></span>
  <img
    class="avatar"
    src="path/to/file"
    alt="alternative text for the image"
    width="48"
  />
  <p class="name"></p>
</li>
```

---

#### Example

```js
import friends from 'path/to/friends.json';

<FriendList friends={friends} />,
```
