# angular2-demos

install ng2-bootstrap and bootstrap

`npm install ng2-bootstrap bootstrap --save`

open src/app/app.module.ts and add
```
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
...
imports: [AlertModule.forRoot(), ... ],
... 
})
```

open angular-cli.json and insert a new entry into the styles array
```
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```