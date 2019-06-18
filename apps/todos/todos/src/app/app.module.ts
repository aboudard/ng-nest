import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './store/entity-metadata';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { CounterComponent } from './comp/counter/counter.component';
import { TodosComponent } from './comp/todos/todos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UtilsService } from './services/utils.service';

// font awesome icons
UtilsService.initFaIcons();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CounterComponent,
    TodosComponent
  ],
  imports: [
    FontAwesomeModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
