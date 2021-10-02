import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleProductosPageModule } from './productos/detalle-productos/detalle-productos.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'productos',
    children: [
      {
        path:"",
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: ":ProdId",
        loadChildren: () => import('./productos/detalle-productos/detalle-productos.module').then( m=> DetalleProductosPageModule) 
      }
    ]
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./productos/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
