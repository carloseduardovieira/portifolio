import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { environment } from '@cvieira/core';
import * as mapboxgl from 'mapbox-gl';
import { Subscription } from 'rxjs';

import { VesselObservation } from '../../enums/vessel-observation.enum';
import { MapControllerService } from '../../map-controller.service';
import { VesselRoute } from '../../models/vessel-route.model';

@Component({
  selector: 'vsm-vessels-route-map',
  template: `
    <div class="map-container">
      <div id="map" class="map-container__mapbox"></div>
    </div>
  `,
  styles: [
    `
      .map-container {
        height: 100%;
        width: 100%;
        overflow: hidden;

        &__mapbox {
          height: inherit;
          width: inherit;
        }
      }
    `,
  ],
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VesselsRouteMapComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  private map: mapboxgl.Map | undefined;
  private style = 'mapbox://styles/mapbox/streets-v11';
  private lat = -0.3063185;
  private lng = 9.1887756;
  private subscriptions = new Subscription();
  private maxLowSpeed = 1;

  constructor(private mapCtrl: MapControllerService) {}

  ngOnInit(): void {
    this.watchVesselRouteSelectionChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit(): void {
    // this.map = new mapboxgl.Map({
    //   accessToken: environment.mboxKey,
    //   container: 'map',
    //   style: this.style,
    //   zoom: 1,
    //   center: [this.lng, this.lat],
    // });
  }

  private watchVesselRouteSelectionChanges(): void {
    this.subscriptions.add(
      this.mapCtrl.currentMapRoute$?.subscribe({
        next: (vesselRoute: VesselRoute | undefined) =>
          vesselRoute && this.drawRoute(vesselRoute),
      })
    );
  }

  private drawRoute(vesselRoute: VesselRoute): void {
    if (!this.map) {
      return;
    }

    const coordinates: [number, number][] = vesselRoute.points.map((point) => [
      point[VesselObservation.LATITUDE],
      point[VesselObservation.LONGITUDE],
    ]);

    this.createConnectionLineLayer(coordinates);
    this.createMapDataSource(vesselRoute.points);
    this.flyToInitialVesselPosition(coordinates);
  }

  private flyToInitialVesselPosition(positions: [number, number][]): void {
    if (!this.map) {
      return;
    }

    const bounds = new mapboxgl.LngLatBounds();
    positions.forEach((coord) => {
      bounds.extend(coord);
    });

    this.map.fitBounds(bounds, { padding: 50 });
  }

  private createMapDataSource(coordinates: VesselObservation[][]): void {
    if (!this.map) {
      return;
    }

    const subCoordinates = this.createSubCoordinatesArray(coordinates);
    const features: GeoJSON.Feature<GeoJSON.Geometry>[] = [];

    subCoordinates.forEach((coordinates: VesselObservation[][]) => {
      features.push({
        type: 'Feature',
        properties: {
          color:
            coordinates[0][VesselObservation.SPEED] > this.maxLowSpeed
              ? '#508D69'
              : '#FA7070',
        },
        geometry: {
          type: 'LineString',
          coordinates: coordinates,
        },
      });
    });

    this.createMapLayer('lines', features);
  }

  private createConnectionLineLayer(coordinates: VesselObservation[][]): void {
    if (!this.map) {
      return;
    }

    const features: GeoJSON.Feature<GeoJSON.Geometry>[] = [
      {
        type: 'Feature',
        properties: {
          color: '#FA7070',
        },
        geometry: {
          type: 'LineString',
          coordinates: coordinates,
        },
      },
    ];

    this.createMapLayer('connectionLine', features);
  }

  private createMapLayer(
    layerId: string,
    features: GeoJSON.Feature<GeoJSON.Geometry>[]
  ): void {
    if (!this.map) {
      return;
    }

    if (!this.map.getLayer(layerId)) {
      this.map.addLayer({
        id: layerId,
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features,
          },
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': ['get', 'color'],
          'line-width': 8,
        },
      });
    } else {
      (this.map.getSource(layerId) as mapboxgl.GeoJSONSource).setData({
        type: 'FeatureCollection',
        features,
      });
    }
  }

  /**
   * This method ensures that a new sub coordinate array is started if the
   * current subarray contains elements with speed values on opposite sides of this.maxLowSpeed
   * @param coordinates: VesselObservation[][]
   * @returns VesselObservation[][][]
   */
  createSubCoordinatesArray(
    coordinates: VesselObservation[][]
  ): VesselObservation[][][] {
    const subCoordinates: VesselObservation[][][] = [];
    let currentSubCoordinate: VesselObservation[][] = [];

    const pushSubCoordinate = () => {
      subCoordinates.push(currentSubCoordinate);
      currentSubCoordinate = [];
    };

    for (const item of coordinates) {
      const speed = item[VesselObservation.SPEED];

      if (speed <= this.maxLowSpeed) {
        if (
          currentSubCoordinate.length > 0 &&
          currentSubCoordinate[0][VesselObservation.SPEED] > this.maxLowSpeed
        ) {
          pushSubCoordinate();
        }
      } else if (speed > this.maxLowSpeed) {
        if (
          currentSubCoordinate.length > 0 &&
          currentSubCoordinate[0][VesselObservation.SPEED] <= this.maxLowSpeed
        ) {
          pushSubCoordinate();
        }
      }

      currentSubCoordinate.push(item);
    }

    if (currentSubCoordinate.length > 0) {
      pushSubCoordinate();
    }

    return subCoordinates;
  }
}
