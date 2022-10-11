import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import {CidadeEstadoComponent} from "./shared/components/cidade-estado/cidade-estado.component";
import {ClientesComponent} from "./pages/clientes/clientes.component";
import {ProdutosComponent} from "./pages/produtos/produtos.component";
import {NotasComponent} from "./pages/notas/notas.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cidade-estado',
    component: CidadeEstadoComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'notas',
    component: NotasComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ]
})
export class AppRoutingModule { }
