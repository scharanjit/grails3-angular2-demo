export const htmlTemplate = `

<!-- Begin page content -->
<div class="container">
  <div class="page-header">
    <h1>Products</h1>
  </div>
  <p class="lead">{{ data }}</p>
</div>

  <div class="btn">
    <button (click)="getProductList()">Click me!</button>
    {{ message }}
  </div>

`;
