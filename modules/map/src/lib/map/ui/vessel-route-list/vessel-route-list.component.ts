import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { VesselRoute } from '../../models/vessel-route.model';
import { MsToDurationPipe, VsmListComponent } from '@cvieira/core';
import { MatIconModule } from '@angular/material/icon';
import { MapControllerService } from '../../map-controller.service';

@Component({
  selector: 'vsm-vessel-route-list',
  templateUrl: './vessel-route-list.component.html',
  styleUrls: ['./vessel-route-list.component.scss'],
  standalone: true,
  imports: [VsmListComponent, MsToDurationPipe, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VesselRouteListComponent {
  @Output() itemClicked: EventEmitter<void> = new EventEmitter();

  constructor(private mapCtrl: MapControllerService) {}

  hasRouteSelection(route: VesselRoute) {
    this.mapCtrl.mapRouteChanged(route);
    this.itemClicked.next();
  }
}
