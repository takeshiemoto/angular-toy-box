import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionalExampleComponent } from './optional-example.component';

const routes: Routes = [
  {
    path: '',
    component: OptionalExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionalSandboxRoutingModule {}
