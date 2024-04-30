import { Injectable } from '@angular/core';
import { VsmListManagement } from '@cvieira/core';
import { VesselRoute } from './models/vessel-route.model';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { VesselsService } from './data-access/vessels.service';
import { VesselObservation } from './enums/vessel-observation.enum';

@Injectable()
export class MapControllerService implements VsmListManagement<VesselRoute> {
  private _currentMapRoute$ = new BehaviorSubject<VesselRoute | undefined>(
    undefined
  );

  constructor(private vesselsService: VesselsService) {}

  get currentMapRoute$(): Observable<VesselRoute | undefined> {
    return this._currentMapRoute$.asObservable();
  }

  mapRouteChanged(selectedRoute: VesselRoute): void {
    if (selectedRoute?.route_id !== this._currentMapRoute$.value?.route_id) {
      selectedRoute.points = this.sortObservationPoints(selectedRoute.points);
      this._currentMapRoute$.next(selectedRoute);
    }
  }

  getListItems(): Observable<VesselRoute[]> {
    return this.vesselsService.getVesselRouteList();
  }

  searchInItemList(query: string): Observable<VesselRoute[]> {
    return this.vesselsService.getVesselRouteList().pipe(
      map((routeList: VesselRoute[]) => {
        return routeList.filter(
          (route) =>
            route.from_port.toLowerCase().includes(query) ||
            route.to_port.toLocaleLowerCase().includes(query)
        );
      })
    );
  }

  private sortObservationPoints(
    points: VesselObservation[][]
  ): VesselObservation[][] {
    return points.sort(
      (a, b) => a[VesselObservation.TIMESTAMP] - b[VesselObservation.TIMESTAMP]
    );
  }
}
