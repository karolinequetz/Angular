import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from '../shared/pages/dashboard/dashboard.component';
import { LeadsComponent } from '../shared/pages/leads/leads.component';

@NgModule({
  declarations: [DashboardComponent, LeadsComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
