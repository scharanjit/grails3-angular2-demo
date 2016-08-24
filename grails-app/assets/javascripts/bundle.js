var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app.html", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_1("htmlTemplate", htmlTemplate = "\n\n<!-- Fixed navbar -->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a [routerLink]=\"['/home']\" class=\"navbar-brand\">Grails 3 Angular 2 Demo</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n            <a [routerLink]=\"['/home']\">Home</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['/about']\">About</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['/products']\">Products</a>\n        </li>\n        <li>\n             <a [routerLink]=\"['/contact']\">Contact</a>\n        </li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <p class=\"text-muted\">Grails 3 Angular 2 Demo</p>\n  </div>\n</footer>\n\n");
        }
    }
});
System.register("home/home.html", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_2("htmlTemplate", htmlTemplate = "\n<div class=\"home\">\n<!-- Begin page content -->\n<div class=\"container\">\n  <div class=\"page-header\">\n    <h1>Home</h1>\n  </div>\n  <p class=\"lead\">Home content...</p>\n</div>\n</div>\n");
        }
    }
});
System.register("home/home.component", ['@angular/core', "home/home.html"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_1, home_html_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_html_1_1) {
                home_html_1 = home_html_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: home_html_1.htmlTemplate
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_3("HomeComponent", HomeComponent);
        }
    }
});
System.register("home/index", ["home/home.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_4(exports);
    }
    return {
        setters:[
            function (home_component_1_1) {
                exportStar_1(home_component_1_1);
            }],
        execute: function() {
        }
    }
});
System.register("products/products.html", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_5("htmlTemplate", htmlTemplate = "\n<div class=\"product\">\n<!-- Begin page content -->\n<div class=\"container\">\n  <div class=\"page-header\">\n    <h1>Products</h1>\n  </div>\n\n</div>\n\n  <div class=\"btn\">\n    <button (click)=\"getProductList()\">Click me!</button>\n    {{message}}\n    <p class=\"lead\">{{ data }}</p>\n  </div>\n</div>\n");
        }
    }
});
System.register("products/products.component", ['@angular/core', '@angular/http', "products/products.html"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_2, http_1, products_html_1;
    var ProductsComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (products_html_1_1) {
                products_html_1 = products_html_1_1;
            }],
        execute: function() {
            ProductsComponent = (function () {
                function ProductsComponent(http) {
                    this.http = http;
                    this.baseUrl = baseUrl;
                }
                ProductsComponent.prototype.getProductList = function () {
                    this.message = "Here are the products";
                    this.getData();
                };
                ProductsComponent.prototype.getData = function () {
                    var _this = this;
                    this.http.get(this.baseUrl + '/data/products')
                        .subscribe(function (res) {
                        _this.data = res.json()['data'];
                    });
                };
                ProductsComponent = __decorate([
                    core_2.Component({
                        selector: 'products',
                        template: products_html_1.htmlTemplate,
                        host: { 'class': 'ng-animate productContainer' }
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductsComponent);
                return ProductsComponent;
            }());
            exports_6("ProductsComponent", ProductsComponent);
        }
    }
});
System.register("products/index", ["products/products.component"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function exportStar_2(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_7(exports);
    }
    return {
        setters:[
            function (products_component_1_1) {
                exportStar_2(products_component_1_1);
            }],
        execute: function() {
        }
    }
});
System.register("about/about.html", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_8("htmlTemplate", htmlTemplate = "\n<div class=\"about\">\n<!-- Begin page content -->\n<div class=\"container\">\n  <div class=\"page-header\">\n    <h1>About</h1>\n  </div>\n  <p class=\"lead\">{{ data }}</p>\n</div>\n</div>\n");
        }
    }
});
System.register("about/about.component", ['@angular/core', '@angular/http', "about/about.html"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_3, http_2, about_html_1;
    var AboutComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (about_html_1_1) {
                about_html_1 = about_html_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent(http) {
                    this.http = http;
                    this.baseUrl = baseUrl;
                    this.getData();
                }
                AboutComponent.prototype.getData = function () {
                    var _this = this;
                    this.http.get(this.baseUrl + '/data/about')
                        .subscribe(function (res) {
                        _this.data = res.json()['data'];
                    });
                };
                AboutComponent = __decorate([
                    core_3.Component({
                        selector: 'about',
                        template: about_html_1.htmlTemplate
                    }), 
                    __metadata('design:paramtypes', [http_2.Http])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_9("AboutComponent", AboutComponent);
        }
    }
});
System.register("about/index", ["about/about.component"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    function exportStar_3(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_10(exports);
    }
    return {
        setters:[
            function (about_component_1_1) {
                exportStar_3(about_component_1_1);
            }],
        execute: function() {
        }
    }
});
System.register("contact/contact.html", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var htmlTemplate;
    return {
        setters:[],
        execute: function() {
            exports_11("htmlTemplate", htmlTemplate = "\n<div class=\"contact\">\n<!-- Begin page content -->\n<div class=\"container\">\n  <div class=\"page-header\">\n    <h1>Contact</h1>\n  </div>\n  <p class=\"lead\">{{ data }}</p>\n</div>\n</div>\n");
        }
    }
});
System.register("contact/contact.component", ['@angular/core', '@angular/http', "contact/contact.html"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_4, http_3, contact_html_1;
    var ContactComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (contact_html_1_1) {
                contact_html_1 = contact_html_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(http) {
                    this.http = http;
                    this.baseUrl = baseUrl;
                    this.getData();
                }
                ContactComponent.prototype.getData = function () {
                    var _this = this;
                    this.http.get(this.baseUrl + '/data/contact')
                        .subscribe(function (res) {
                        _this.data = res.json()['data'];
                    });
                };
                ContactComponent = __decorate([
                    core_4.Component({
                        selector: 'contact',
                        template: contact_html_1.htmlTemplate
                    }), 
                    __metadata('design:paramtypes', [http_3.Http])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_12("ContactComponent", ContactComponent);
        }
    }
});
System.register("contact/index", ["contact/contact.component"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    function exportStar_4(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_13(exports);
    }
    return {
        setters:[
            function (contact_component_1_1) {
                exportStar_4(contact_component_1_1);
            }],
        execute: function() {
        }
    }
});
System.register("app.component", ['@angular/core', '@angular/router', "app.html", "home/index", "products/index", "about/index", "contact/index"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_5, router_1, app_html_1, home_1, products_1, about_1, contact_1;
    var AppComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_html_1_1) {
                app_html_1 = app_html_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (products_1_1) {
                products_1 = products_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_5.Component({
                        selector: 'ng2starter',
                        template: app_html_1.htmlTemplate,
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.Routes([
                        { path: '/home', component: home_1.HomeComponent },
                        { path: '/products', component: products_1.ProductsComponent },
                        { path: '/about', component: about_1.AboutComponent },
                        { path: '/contact', component: contact_1.ContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_14("AppComponent", AppComponent);
        }
    }
});
System.register("main", ['@angular/platform-browser-dynamic', '@angular/router', '@angular/http', "app.component"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var platform_browser_dynamic_1, router_2, http_4, app_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (http_4_1) {
                http_4 = http_4_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_2.ROUTER_PROVIDERS, http_4.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=bundle.js.map