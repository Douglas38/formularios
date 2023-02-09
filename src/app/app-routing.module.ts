import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolasComponent } from './componentes/escolas/escolas.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
{path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
{ path: 'sobre', component: SobreComponent,  canActivate: [AuthGuard] },
{path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
