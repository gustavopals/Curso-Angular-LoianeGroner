import { ControleTarefasComponent } from './controle-tarefas/controle-tarefas.component';
import { HoraAtividadeComponent } from './controle-atividades/hora-atividade/hora-atividade.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { CursoRotasDetalheComponent } from './curso-rotas/curso-rotas-detalhe/curso-rotas-detalhe.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { VendasComponent } from './vendas/vendas.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CalculaCustoViagemComponent } from './calcula-custo-viagem/calcula-custo-viagem.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarrosComponent } from './carros/carros.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoRotasComponent } from './curso-rotas/curso-rotas.component';
import { AppComponent } from './app.component';


const routes: Routes = [ //faz as rotas
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
    { path: 'data-binding', component: DataBindingComponent, canActivate: [AuthGuard] },
    { path: 'calcula-custo-viagem', component: CalculaCustoViagemComponent, canActivate: [AuthGuard] },
    { path: 'cadastro-clientes', component: CadastroClientesComponent, canActivate: [AuthGuard] },
    { path: 'carros', component: CarrosComponent, canActivate: [AuthGuard] },
    { path: 'cadastro-produto', component: CadastroProdutoComponent, canActivate: [AuthGuard] },
    { path: 'vendas', component: VendasComponent, canActivate: [AuthGuard] },
    { path: 'exemplos-pipes', component: ExemplosPipesComponent, canActivate: [AuthGuard] },
    { path: 'curso-rotas', component: CursoRotasComponent, canActivate: [AuthGuard] },
    { path: 'curso-rota/:id', component: CursoRotasDetalheComponent, canActivate: [AuthGuard] },
    { path: 'curso-rota', component: CursoRotasDetalheComponent, canActivate: [AuthGuard] },
    { path: 'hora-atividade', component: HoraAtividadeComponent },
    { path: 'controle-tarefas', component: ControleTarefasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },

]
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes) //importa o caminho
    ],
    exports: [
        RouterModule //exporta a pagina solicitada
    ]
})
export class AppRoutingModule { }
