import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VsmBottomDrawerComponent } from '@vessel-ship-management/core';

import { MapControllerService } from './map-controller.service';
import { VesselRouteListComponent } from './ui/vessel-route-list/vessel-route-list.component';
import { VesselRouteSpeedChartComponent } from './ui/vessel-route-speed-chart/vessel-route-speed-chart.component';
import { VesselsRouteMapComponent } from './ui/vessels-route-map/vessels-route-map.component';

//UI COMPONENTS
@Component({
  selector: 'vsm-vessel-ship-management-map',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    VsmBottomDrawerComponent,
    VesselsRouteMapComponent,
    VesselRouteSpeedChartComponent,
    MatToolbarModule,
    MatIconModule,
    VesselRouteListComponent,
  ],
  providers: [
    MapControllerService,
    {
      provide: 'VsmListManagement',
      useExisting: MapControllerService,
    },
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  @ViewChild('bottomDrawer') bottomDrawer: VsmBottomDrawerComponent | undefined;

  onItemClicked(): void {
    if (this.bottomDrawer?.drawerState === 'closed') {
      this.bottomDrawer?.toggleDrawer();
    }
  }
}
