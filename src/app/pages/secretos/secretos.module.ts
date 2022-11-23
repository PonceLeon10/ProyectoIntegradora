import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecretosPageRoutingModule } from './secretos-routing.module';

import { SecretosPage } from './secretos.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecretosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [SecretosPage]
})
export class SecretosPageModule {}
