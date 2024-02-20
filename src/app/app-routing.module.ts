import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';

const routes: Routes = [
  {path:"home", component:HomeComponent, pathMatch:'full'},
  {path:"categories", component:CategoriesComponent, pathMatch:'full'},
  {path:"brands", component:BrandsComponent, pathMatch:'full'},
  {path:"register", component:RegisterComponent, pathMatch:'full'},
  {path:"order", component:OrderComponent, pathMatch:'full'},
  {path:"login", component:LoginComponent, pathMatch:'full'},
  {path:"details/:id", component:DetailsComponent},
  {path:"list/brand/:id_marca", component:ListComponent, pathMatch:'full'},
  {path:"list/category/:id_categoria", component:ListComponent, pathMatch:'full'},
  {path:"pruebas", component:PruebasComponent, pathMatch:'full'},
  {path:"history", component:OrderHistoryComponent, pathMatch:"full"},
  {path:"", redirectTo:"home", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
