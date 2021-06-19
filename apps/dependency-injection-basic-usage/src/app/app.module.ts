import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { SampleComponent } from './sample.component';
import { SubComponent } from './sub.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazy1/lazy1.module').then((m) => m.Lazy1Module),
  },
];

@NgModule({
  declarations: [AppComponent, SampleComponent, SubComponent],
  imports: [
    BrowserModule,
    FeatureModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
