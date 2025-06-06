import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { HeaderComponent } from './Pages/Components/header/header.component';
import { HeroComponent } from './Pages/Components/hero/hero.component';
import { ServicioswComponent } from './Pages/Components/serviciosw/serviciosw.component';
import { PortafolioComponent } from './Pages/Components/portafolio/portafolio.component';
import { ProcesoComponent } from './Pages/Components/proceso/proceso.component';
import { BlogComponent } from './Pages/Components/blog/blog.component';
import { FAQComponent } from './Pages/Components/faq/faq.component';
import { ContactoComponent } from './Pages/Components/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Pages/Components/footer/footer.component';
import { BwhatsapComponent } from './shared/bwhatsap/bwhatsap.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    HeroComponent,
    ServicioswComponent,
    PortafolioComponent,
    ProcesoComponent,
    BlogComponent,
    FAQComponent,
    ContactoComponent,
    FooterComponent,
    BwhatsapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
