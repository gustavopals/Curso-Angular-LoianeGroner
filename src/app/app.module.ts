import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { AppRoutingModule } from './app-routing.module';
import { ExemloNgContentComponent } from './exemlo-ng-content/exemlo-ng-content.component';
import { CalculaCustoViagemComponent } from './calcula-custo-viagem/calcula-custo-viagem.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrosComponent } from './carros/carros.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { VendasComponent } from './vendas/vendas.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursoRotasComponent } from './curso-rotas/curso-rotas.component';
import { CursoRotasDetalheComponent } from './curso-rotas/curso-rotas-detalhe/curso-rotas-detalhe.component';
import { CursosRotasService } from './curso-rotas/cursos-rotas.service';
import { HoraAtividadeComponent } from './controle-atividades/hora-atividade/hora-atividade.component';
import { HoraAtividadeViewComponent } from './controle-atividades/hora-atividade-view/hora-atividade-view.component';
import { ControleTarefasComponent } from './controle-tarefas/controle-tarefas.component';
import { ExemploFormReativoComponent } from './exemplo-form-reativo/exemplo-form-reativo.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';




@NgModule({
    declarations: [
        AppComponent,
        DataBindingComponent,
        InputPropertyComponent,
        OutputPropertyComponent,
        CicloComponent,
        ExemloNgContentComponent,
        CalculaCustoViagemComponent,
        CadastroClientesComponent,
        CarrosComponent,
        CadastroProdutoComponent,
        VendasComponent,
        CursosComponent,
        ExemplosPipesComponent,
        HomeComponent,
        LoginComponent,
        CursoRotasComponent,
        CursoRotasDetalheComponent,
        HoraAtividadeComponent,
        HoraAtividadeViewComponent,
        ControleTarefasComponent,
        ExemploFormReativoComponent,




    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule, //roteamento
        HttpClientModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        MatButtonModule,
        MatSliderModule,
        BrowserAnimationsModule


    ],
    providers: [CursosService,
        CursosRotasService,
        AuthService,
        AuthGuard],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
