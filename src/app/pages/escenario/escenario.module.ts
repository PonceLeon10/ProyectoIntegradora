import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscenarioPageRoutingModule } from './escenario-routing.module';

import { EscenarioPage } from './escenario.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscenarioPageRoutingModule,
    ComponentesModule
  ],
  declarations: [EscenarioPage]
})
export class EscenarioPageModule {}
