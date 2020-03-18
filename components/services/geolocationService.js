class GeolocationService {
  API_URL = 'https://nominatim.openstreetmap.org/';
  format = 'jsonv2';
  zoom = 18;

  constructor(config) {}

  async fetchInfo(location) {
    const { latitude, longitude } = location;
    const { API_URL, format, zoom } = this;

    const url = `${API_URL}reverse?format=${format}&lat=${latitude}&lon=${longitude}&zoom=${zoom}&addressdetails=1`;

    const rawResponse = await fetch(url);
    return await rawResponse.json();
  }
}

export default new GeolocationService();
