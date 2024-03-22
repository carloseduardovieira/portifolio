import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VesselRoute } from '../models/vessel-route.model';

@Injectable({
  providedIn: 'root',
})
export class VesselsService {
  constructor(private http: HttpClient) {}

  getVesselRouteList(): Observable<VesselRoute[]> {
    return this.http.get<VesselRoute[]>('assets/mock/vessel.json');
  }
}
