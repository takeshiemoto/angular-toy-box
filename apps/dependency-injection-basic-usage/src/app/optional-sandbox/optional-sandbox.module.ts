import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionalSandboxRoutingModule } from './optional-sandbox-routing.module';
import { OptionalExampleComponent } from './optional-example.component';

@NgModule({
  declarations: [OptionalExampleComponent],
  imports: [CommonModule, OptionalSandboxRoutingModule],
})
export class OptionalSandboxModule {}
