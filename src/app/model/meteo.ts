export class meteo {
  latitude!: number;
  longitude!: number;
  generationtime_ms!: number;
  utc_offset_seconds!: number;
  timezone!: string;
  timezone_abbreviation!: string;
  elevation!: number;
  hourly_units!: { time: string, apparent_temperature: string };
  hourly!: {apparent_temperature: Array<number>, time: Array<string>}
}
