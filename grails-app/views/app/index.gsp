<!DOCTYPE html>
<html lang="en">
<head>
    <base href="/app">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Grails 3 Angular 2 Demo</title>
    <asset:stylesheet src="application.css"/>
    <asset:javascript src="application.js"/>
    <asset:script type="text/javascript">
    var baseUrl = "${baseUrl}";

    var map = {
        'rxjs': '/assets/rxjs',
        '@angular': '/assets/@angular'
    };

    var packages = {
        'rxjs': { defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
    ];

    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages,
        bundles: {
            "${request.contextPath}/assets/bundle.js": ['main']
        }
    }

    System.config(config);

    System.import('main').catch(function(err){ console.error(err); });
    </asset:script>
    <asset:deferredScripts/>
</head>
<body>
    <ng2starter>
        <p>Loading...</p>
    </ng2starter>
</body>
</html>
