import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolasComponent } from './componentes/escolas/escolas.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
{path: 'login', component: LoginComponent },
{ path: 'sobre', component: SobreComponent,  canActivate: [AuthGuard] },
{path: 'menu', component: MenuComponent,  canActivate: [AuthGuard]},
{path: 'escola', component: EscolasComponent,  canActivate: [AuthGuard]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
