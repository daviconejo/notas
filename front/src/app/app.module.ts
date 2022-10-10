import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { CidadeEstadoComponent } from './shared/components/cidade-estado/cidade-estado.component';
import {
    DxBoxModule,
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    DxListModule,
    DxSelectBoxModule, DxTextBoxModule,
    DxTreeListModule
} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { NotasComponent } from './pages/notas/notas.component';
import { PrimeiroNivelDataPipe } from './shared/pipes/primeiro-nivel-data.pipe';
import {DxoGridModule} from "devextreme-angular/ui/nested";
import { DetailGridComponent } from './shared/components/detail-grid/detail-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadeEstadoComponent,
    ClientesComponent,
    ProdutosComponent,
    NotasComponent,
    PrimeiroNivelDataPipe,
    DetailGridComponent
  ],
    imports: [
        BrowserModule,
        SideNavOuterToolbarModule,
        SideNavInnerToolbarModule,
        SingleCardModule,
        FooterModule,
        ResetPasswordFormModule,
        CreateAccountFormModule,
        ChangePasswordFormModule,
        LoginFormModule,
        UnauthenticatedContentModule,
        AppRoutingModule,
        HttpClientModule,
        DxSelectBoxModule,
        DxDataGridModule,
        DxTreeListModule,
        DxListModule,
        DxButtonModule,
        DxoGridModule,
        DxFormModule,
        DxTextBoxModule,
        DxBoxModule
    ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
