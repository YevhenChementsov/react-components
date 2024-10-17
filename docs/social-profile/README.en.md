**Read in other languages: [Russian](./README.md),
[Ukrainian](./README.ua.md).**

## Social network profile

---

<details>
<summary>Profile component preview</summary>

![Profile component preview](./preview.png)

</details>

---

### Component description

The component must accept multiple props with user information:

- `name` - user name
- `tag` - social network tag without `@`
- `location` - city and country
- `avatar` - url to image
- `stats` - object with information about the activity

The component must create a DOM element of the following structure.

```html
<div class="profile">
  <div class="description">
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="User avatar"
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

#### Example

```js
import user from 'path/to/user.json;

<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```
