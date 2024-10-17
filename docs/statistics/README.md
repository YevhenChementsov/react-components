**Читать на других языках: [Українська](./README.ua.md),
[English](./README.en.md).**

## Секция статистики

---

<details>
<summary>Превью компонента Statistics</summary>

![Превью компонента Statistics](./preview.jpg)

</details>

---

### Описание компонента

Компонент должен принимать два пропса `title` и `stats`, в которых указывается
заголовок и объект статистики.

- `title` - не обязателен, и если он не передан, не должна рендериться разметка
  заголовка `<h2>`.
- `stats` - массив объектов содержащих информацию о элементе статистики. Может
  иметь произвольное кол-во элементов.
- Цвет фона элемента статистики в оформлении можно пропустить, либо создать
  функцию для генерации случайного цвета.

Компонент должен создавать DOM элемент следующей структуры.

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

#### Пример использования

```js
import statisticalData from '/путь/к/statistical-data.json';

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;
```
