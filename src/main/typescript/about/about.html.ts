export const htmlTemplate = `

<!-- Begin page content -->
<div class="container">
  <div class="page-header">
    <h1>About</h1>
  </div>
  <p class="lead">{{ data }}</p>
</div>
  <div ng-controller='TimeCtrl'>
      <p>{{ clock  | date:'medium'}}</p>
  </div>
`;
