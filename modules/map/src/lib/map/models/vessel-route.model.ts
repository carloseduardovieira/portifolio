import { VesselObservation } from '../enums/vessel-observation.enum';

export interface VesselRoute {
  route_id: string;
  from_port: string;
  to_port: string;
  leg_duration: number;
  points: VesselObservation[][];
}
