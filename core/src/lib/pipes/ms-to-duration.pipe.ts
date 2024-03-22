import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToDuration',
  standalone: true,
})
export class MsToDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value) || value < 0) {
      return 'Invalid duration';
    }

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerHour = 60 * 60 * 1000;
    const millisecondsPerMinute = 60 * 1000;

    const days = Math.floor(value / millisecondsPerDay);
    const hours = Math.floor(
      (value % millisecondsPerDay) / millisecondsPerHour
    );
    const minutes = Math.floor(
      (value % millisecondsPerHour) / millisecondsPerMinute
    );

    let durationString = '';

    if (days > 0) {
      durationString += `${days}d `;
    }

    if (hours > 0) {
      durationString += `${hours}h `;
    }

    if (minutes > 0) {
      durationString += `${minutes}min`;
    }

    return durationString.trim();
  }
}
