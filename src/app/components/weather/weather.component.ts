import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { WeatherService } from '../../services';
import { IWeather } from '../../types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  private readonly weatherService = inject(WeatherService);
  private readonly destroyRef = inject(DestroyRef);
  public weather: IWeather | undefined;

  public search(value: string): void {
    this.weatherService
      .getWeatherData(value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((weatherData: IWeather) => {
        this.weather = weatherData;
      });
  }
}
