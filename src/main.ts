import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { APP_ROUTES_PROVIDER } from "./app/app.routes";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTES_PROVIDER]);
