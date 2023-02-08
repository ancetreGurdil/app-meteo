export default {
  test(): void {
    return navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError)
  },

  onSuccess(ret: any): number {
    return ret.coords.latitude;
  },

  onError(): string {
    return 'error';
  }
}
