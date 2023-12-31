import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  constructor(private weatherServices: WeatherService) {};

  cityName: string = "Bucuresti";
  weatherData?: WeatherData;

  ngOnInit(): void {
	this.getWeatherData(this.cityName);
  }

  onSubmit() {
	this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string) {
	this.weatherServices.getWeatherData(cityName)
	.subscribe({
		next: (response) => {
			this.weatherData = response;
			this.cityName = "";
			console.log(response)
		}
	});
  }
}
