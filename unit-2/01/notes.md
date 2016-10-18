#New Structures

###Starting Structure System
```
app
├── css
├── index.html
└── js
    ├── app.js
    ├── controllers.js
    ├── directives.js
    ├── filters.js
    └── services.js
```

- in app.js (server-side) we will declare the app dependencies
`var app = angular.module("whateverYourModuleNameIs", []);`

###controller.js
###directive.js
- These contain all controllers and custom directives
- This helps keep things more organized and grouped by functionality
- _see above depiction of organization_

###http-server
- Zero-configuration command-line http server
- Production usage
