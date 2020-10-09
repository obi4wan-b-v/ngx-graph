import { NgModule } from '@angular/core';
import { GraphComponent } from './graph.component';
import { MouseWheelDirective } from './mouse-wheel.directive';
import { LayoutService } from './layouts/layout.service';
export { GraphComponent };

@NgModule({
  declarations: [GraphComponent, MouseWheelDirective],
  exports: [GraphComponent, MouseWheelDirective],
  providers: [LayoutService]
})
export class GraphModule {}
