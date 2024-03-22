import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DateUtils } from '@vessel-ship-management/core';
import { Chart, ScriptableLineSegmentContext } from 'chart.js/auto';
import { map, Subscription } from 'rxjs';

import { VesselObservation } from '../../enums/vessel-observation.enum';
import { MapControllerService } from '../../map-controller.service';
import { VesselRoute } from '../../models/vessel-route.model';

interface ChartData {
  chartLabels: string[];
  chartData: number[];
}

@Component({
  selector: 'vsm-vessel-route-speed-chart',
  template: `
    <div class="chart-canvas-container">
      <div [style.width.px]="chartDataCount * 20" class="chart-canvas-block">
        <canvas id="speedChart" height="300" width="0"></canvas>
      </div>
    </div>
  `,
  styles: [
    `
      .chart-canvas-container {
        height: 90%;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-color: #238ccb #eeeeee;
      }

      .chart-canvas-block {
        height: 100%;
        position: relative;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VesselRouteSpeedChartComponent implements OnInit, OnDestroy {
  chart!: Chart;
  chartDataCount = 0;

  private subscriptions = new Subscription();
  private maxLowSpeed = 1;

  constructor(
    private cd: ChangeDetectorRef,
    private mapCtrl: MapControllerService
  ) {}

  ngOnInit() {
    this.watchVesselRouteChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private createChart(data: ChartData): void {
    const chartLabels = data.chartLabels;
    const chartDatasetsData = data.chartData;

    const changeColorAccordingToSpeed = (
      ctx: ScriptableLineSegmentContext,
      value: string
    ) => {
      return ctx.p1.parsed.y < this.maxLowSpeed ? value : '#508D69';
    };

    if (!this.chart) {
      this.chart = new Chart('speedChart', {
        type: 'line',
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: 'Speed Changes Over Time (Knots)',
              data: chartDatasetsData,
              borderColor: '#508D69',
              backgroundColor: '#508D69',
              segment: {
                borderColor: (context) => {
                  return changeColorAccordingToSpeed(context, '#FA7070');
                },
                backgroundColor: (context) => {
                  return changeColorAccordingToSpeed(context, '#FA7070');
                },
              },
              fill: true,
              pointRadius: 0,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              align: 'start',
            },
          },
        },
      });
      return;
    }

    this.chart.data.labels = chartLabels;
    this.chart.data.datasets[0].data = chartDatasetsData;
    this.chart.update();
  }

  private watchVesselRouteChanges(): void {
    this.subscriptions.add(
      this.mapCtrl.currentMapRoute$
        ?.pipe(
          map((vesselRoute: VesselRoute | undefined) => {
            if (vesselRoute) {
              const chartData = this.initChartData(vesselRoute);
              this.chartDataCount = chartData.chartData.length;
              this.cd.markForCheck();
              return chartData;
            }

            return undefined;
          })
        )
        .subscribe({
          next: (chartData: ChartData | undefined) =>
            chartData && this.createChart(chartData),
        })
    );
  }

  private initChartData(vesselRoute: VesselRoute): ChartData {
    const chartData: ChartData = {
      chartLabels: [],
      chartData: [],
    };

    vesselRoute.points.forEach((point: number[]) => {
      const speed = point[VesselObservation.SPEED];
      if (
        speed &&
        speed !== chartData.chartData[chartData.chartData.length - 1]
      ) {
        chartData.chartLabels.push(
          DateUtils.epochToDate(point[VesselObservation.TIMESTAMP])
        );
        chartData.chartData.push(speed);
      }
    });

    return chartData;
  }
}
