**Read in other languages: [Russian](README.md), [Ukrainian](README.ua.md), [English](README.en.md).**

# Statistics section

Create a component `<Statistics>` to display statistics on the transmitted propams. For example, uploads to the cloud by file type, visits to a web page users in different countries, financial spending, etc.. The data for the statistics resides file [statistical-data.json](../../src/components/data/statistical-data.json).

![Statistics component preview](./preview.jpg)

## Component description

The component must accept two missing `title` and `stats`, which specify header and statistics object.

- The `title` is optional, and if it is not passed, no markup should be rendered header `<h2>`.
- `stats` - an array of objects containing information about the statistical element. Can have any number of elements.
- The background colour of the statistical element in the design can be skipped, or create a function to generate a random colour.

The component must create DOM element of the following structure.

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

## Example

```js
import statisticalData from '/path/to/statistical-data.json';

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;
```
