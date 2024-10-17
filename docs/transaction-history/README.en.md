**Read in other languages: [Russian](./README.md),
[Ukrainian](./README.ua.md).**

## Transaction History

---

<details>
<summary>TransactionHistory component preview</summary>

![TransactionHistory component preview](./preview.jpg)

</details>

---

### Component description

You need to create a component `<TransactionHistory>` that accepts one prop
`items` - an array of transaction objects from `transactions.json`. Each object
describes one transaction with the following properties:

- `id` - unique identifier of the transaction
- `type` - type of transaction
- `amount` - transaction amount
- `currency` - type of currency

The component creates table markup. Each transaction is a table row. In the
example shown markup of two transactions.

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

#### Example

```js
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```
