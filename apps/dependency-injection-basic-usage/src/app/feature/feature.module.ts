import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingletonService } from './singleton.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class FeatureModule {
  constructor(@Optional() @SkipSelf() parentModule?: FeatureModule) {
    if (parentModule) {
      throw new Error(
        'FeatureModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders<FeatureModule> {
    return {
      ngModule: FeatureModule,
      providers: [SingletonService],
    };
  }
}
