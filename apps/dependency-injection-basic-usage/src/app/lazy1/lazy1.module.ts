import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sub2Component } from './sub2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: Sub2Component }];

@NgModule({
  declarations: [Sub2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Lazy1Module {}
