import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { GameComponent } from './game/game.component';
import { FinaleComponent } from './finale/finale.component';
import { AppRouterModule } from './/app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './/app-material.module';
import { GameStartComponent } from './game-start/game-start.component';
import { GameProgressComponent } from './game-progress/game-progress.component';
import { GameEndComponent } from './game-end/game-end.component';
import { GameMessageComponent } from './game-message/game-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoinComponent,
    GameComponent,
    FinaleComponent,
    GameStartComponent,
    GameProgressComponent,
    GameEndComponent,
    GameMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], [devTools.enhancer()]);
  }
}
