**Read in other languages: [Russian](README.md), [Ukrainian](README.ua.md), [English](README.en.md).**

# List of friends

We need to create a component `<FriendList>` with which we could display information about a user's friends. The friends information is stored in [friends.json](../../src/components/data/friends.json) file.

![FriendList component preview](./preview.jpg)

## FriendList component description

The component must accept one prop `friends` - an array of friend objects.

The component must create a DOM of the following structure.

```html
<ul class="friend-list">
  <!-- Arbitrary number of FriendListItem, depending on the number of objects in the array -->
</ul>
```

The component must accept more than one prop:

- `avatar` - link to the avatar
- `name` - friend's name
- `isOnline` - bull signaling friend status, online or offline.

Depending on the missing `isOnline`, the background colour `span.status` should change. This can be done through a different CSS class or Styled Components.

The component must create a DOM of the following structure.

```html
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="" width="48" />
  <p class="name"></p>
</li>
```

## Example

```js
import friends from 'path/to/friends.json';

<FriendList friends={friends} />,
```
