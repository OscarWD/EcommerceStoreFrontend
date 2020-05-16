import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import * as navigationComponents from './components';

//Containers
import * as navigationContainers from './containers';

//Layouts
import * as appCommonLayouts from './layouts';

//Guards
import * as navigationGuards from './guards';

//Services
import * as navigationServices from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...navigationServices.services,
    ...navigationGuards.guards
  ],
  declarations: [
    ...navigationComponents.components,
    ...navigationContainers.containers
  ],
  exports: [
    ...navigationComponents.components,
    ...navigationContainers.containers
  ]
})
export class NavigationModule { }
