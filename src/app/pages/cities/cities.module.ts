import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { CityFormComponent } from './city-form/city-form.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { CitiesRoutingModule } from './citites-routing.module';

@NgModule({
  declarations: [ViewComponent, CityFormComponent, FilterPipe],
  imports: [SharedModule, CommonModule, CitiesRoutingModule],
  exports: [ViewComponent],
})
export class CitiesModule {}
