**Читати іншими мовами: [Русский](./README.md), [English](./README.en.md).**

## Секція статистики

---

<details>
<summary>Прев'ю компонента Statistics</summary>

![Прев'ю компонента Statistics](./preview.jpg)

</details>

---

### Опис компонента

Компонент повинен приймати два пропси `title` і `stats`, в яких вказується
заголовок і об'єкт статистики.

- `title` - не обов'язковий, і якщо він не переданий, не повинна рендеритися
  розмітка заголовка `<h2>`.
- `stats` - масив об'єктів, що містять інформацію про елементи статистики. Може
  мати довільну кількість елементів.
- Колір фону елемента статистики в оформленні можна пропустити, або створити
  функцію для генерації випадкового кольору.

Компонент повинен створювати DOM елемент такої структури.

```html
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```

---

#### Приклад використання

```js
import statisticalData from '/шлях/до/statistical-data.json';

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;
```
