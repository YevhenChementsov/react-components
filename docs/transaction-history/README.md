**Читать на других языках: [Українська](./README.ua.md),
[English](./README.en.md).**

## История транзакций

---

<details>
<summary>Превью компонента TransactionHistory</summary>

![Превью компонента TransactionHistory](./preview.jpg)

</details>

---

### Описание компонента

Необходимо создать компонент `<TransactionHistory>` принимающий один пропс
`items` - массив объектов транзакций из `transactions.json`. Каждый объект
описывает одну транзакцию со следующими свойствами:

- `id` — уникальный идентификатор транзакции
- `type` — тип транзакции
- `amount` - сумма транзакции
- `currency` - тип валюты

Компонент создает разметку таблицы. Каждая транзакция это строка таблицы. В
примере приведена разметка двух транзакций.

```html
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

---

#### Пример использования

```js
import transactions from 'путь/к/transactions.json';

<TransactionHistory items={transactions} />;
```
