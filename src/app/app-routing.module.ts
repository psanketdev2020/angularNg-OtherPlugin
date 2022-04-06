import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLinksComponent } from './common/page-links/page-links.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { InputDecoratorComponent } from './component/angular-core/input-output-decorator/input-decorator.component';
import { DirectivesComponent } from './component/angular-core/directives/directives.component';
import { EventsComponent } from './component/angular-core/events/events.component';
import { PipesComponent } from './component/angular-core/pipes/pipes.component';
import { PopupComponent } from './component/bootstrap/popup/popup.component';
import { StyleComponent } from './component/bootstrap/style/style.component';
import { TableComponent } from './component/bootstrap/table/table.component';
import { TabsComponent } from './component/bootstrap/tabs/tabs.component';
import { AccordionComponent } from './component/ng-bootstrap/accordion/accordion.component';
import { NgChartsComponent } from './component/ng-charts/ng-charts.component';
import { NgHighchartComponent } from './component/ng-highchart/ng-highchart.component';
import { Ng5sliderComponent } from './component/ng5-slider/ng5slider/ng5slider.component';
import { OwlcarouselComponent } from './component/owl-carousel/owlcarousel/owlcarousel.component';
import { ScrollbarComponent } from './component/scrollbar/scrollbar.component';
import { LifecycleHooksComponent } from './component/angular-core/lifecycle-hooks/lifecycle-hooks.component';
import { TodoListComponent } from './component/angular-core/todo-list/todo-list.component';
import { ExerciseComponent } from './component/angular-core/exercise/exercise.component';
import { HttpComponent } from './component/angular-core/http/http.component';
import { SubjectComponent } from './component/angular-core/subject/subject.component';

const routes: Routes = [
  { path: 'index', component: PageLinksComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'modal', component: PopupComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'owlcarousel', component: OwlcarouselComponent },
  { path: 'ng5slider', component: Ng5sliderComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'highchart', component: NgHighchartComponent },
  { path: 'charts', component: NgChartsComponent },
  { path: 'scrollbar', component: ScrollbarComponent },
  { path: 'table', component: TableComponent },
  { path: 'events', component: EventsComponent },
  { path: 'style', component: StyleComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'input-output-decorator', component: InputDecoratorComponent },
  { path: 'life-cycle-hooks', component: LifecycleHooksComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'uxtrendz-exercise', component: ExerciseComponent },
  { path: 'http', component: HttpComponent },
  { path: 'subject', component: SubjectComponent },
  { path: '**', component: PagenotfoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
