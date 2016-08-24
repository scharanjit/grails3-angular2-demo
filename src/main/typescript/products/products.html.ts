export const htmlTemplate = `
<div class="product">
<!-- Begin page content -->
<div class="container">
  <div class="page-header">
    <h1>Products</h1>
  </div>

</div>

  <div class="btn">
    <button (click)="getProductList()">Click me!</button>
    {{message}}
    <p class="lead">{{ data }}</p>
  </div>
</div>
`;
