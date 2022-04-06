import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PopupComponent } from './component/bootstrap/popup/popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './component/ng-bootstrap/accordion/accordion.component';
import { OwlcarouselComponent } from './component/owl-carousel/owlcarousel/owlcarousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng5sliderComponent } from './component/ng5-slider/ng5slider/ng5slider.component';
import { Ng5SliderModule } from 'ng5-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './component/bootstrap/tabs/tabs.component';
import { NgHighchartComponent } from './component/ng-highchart/ng-highchart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgChartsComponent } from './component/ng-charts/ng-charts.component';
import { ScrollbarComponent } from './component/scrollbar/scrollbar.component';
// import { ChartsModule } from 'ng2-charts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TableComponent } from './component/bootstrap/table/table.component';
import { EventsComponent } from './component/angular-core/events/events.component';
import { StyleComponent } from './component/bootstrap/style/style.component';
import { DirectivesComponent } from './component/angular-core/directives/directives.component';
import { PipesComponent } from './component/angular-core/pipes/pipes.component';
import { PageLinksComponent } from './common/page-links/page-links.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { MultiplierPipe } from '../app/component/angular-core/multiplier.pipe';
import { TempConverterPipe } from './component/angular-core/temp-converter.pipe';
import { InputDecoratorComponent } from './component/angular-core/input-output-decorator/input-decorator.component';
import { ChildComponent } from './component/angular-core/input-output-decorator/child/child.component';
import { NavigationMenuComponent } from './common/navigation-menu/navigation-menu.component';
import { LifecycleHooksComponent } from './component/angular-core/lifecycle-hooks/lifecycle-hooks.component';
import { TodoListComponent } from './component/angular-core/todo-list/todo-list.component'
import { ParentComponent } from './component/angular-core/input-output-decorator/parent/parent.component';
import { ExerciseComponent } from './component/angular-core/exercise/exercise.component';
import { ExerciseChildComponent } from './component/angular-core/exercise/exercise-child/exercise-child.component';
import { HttpComponent } from './component/angular-core/http/http.component';

// Font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubjectComponent } from './component/angular-core/subject/subject.component';
import { SubjectChildComponent } from './component/angular-core/subject/subject-child/subject-child.component';



@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    AccordionComponent,
    OwlcarouselComponent,
    Ng5sliderComponent,
    TabsComponent,
    NgHighchartComponent,
    NgChartsComponent,
    ScrollbarComponent,
    TableComponent,
    EventsComponent,
    StyleComponent,
    DirectivesComponent,
    PipesComponent,
    PageLinksComponent,
    PagenotfoundComponent,
    MultiplierPipe,
    TempConverterPipe,
    InputDecoratorComponent,
    ChildComponent,
    NavigationMenuComponent,
    LifecycleHooksComponent,
    TodoListComponent,
    ParentComponent,
    ExerciseComponent,
    ExerciseChildComponent,
    HttpComponent,
    SubjectComponent,
    SubjectChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    // ChartsModule,
    NgScrollbarModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
