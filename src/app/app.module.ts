import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrderComponent } from './pages/order/order.component';
import { LoginComponent } from './pages/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ContadorBotonesComponent } from './components/contador-botones/contador-botones.component';
import { ProductsOfferListComponent } from './components/products-offer-list/products-offer-list.component';
import { ProductMinatureComponent } from './components/product-minature/product-minature.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { PriceFormatPipe } from './pipes/price-format.pipe';
import { ListComponent } from './pages/list/list.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { DateFormatPipe } from './pipes/date-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    BrandsComponent,
    RegisterComponent,
    OrderComponent,
    LoginComponent,
    SliderComponent,
    PruebasComponent,
    ContadorComponent,
    ContadorBotonesComponent,
    ProductsOfferListComponent,
    ProductMinatureComponent,
    CartComponent,
    DetailsComponent,
    PriceFormatPipe,
    ListComponent,
    OrderHistoryComponent,
    DateFormatPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
