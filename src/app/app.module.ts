import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { RecursosComponent } from "./recursos/recursos.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { NegocioComponent } from "./negocio/negocio.component";
import { ComentsComponent } from "./coments/coments.component";
import { ContatoComponent } from "./contato/contato.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    RecursosComponent,
    ServicosComponent,
    NegocioComponent,
    ComentsComponent,
    ContatoComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
