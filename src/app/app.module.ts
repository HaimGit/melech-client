import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderToolbarModule } from './modules/header-toolbar/header-toolbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HeaderToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
