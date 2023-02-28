import { API, RequestMethods } from '../../enums';

export default class EngineService {
  private static load = async (url: string): Promise<void> => {
    const response = await fetch(url, {
      method: RequestMethods.patch,
    });
    return response.json();
  };

  public static startEngine = async (id: number): Promise<void> =>
    EngineService.load(`${API.engineLink}?id=${id}&status=started`);

  public static stopEngine = async (id: number): Promise<void> =>
    EngineService.load(`${API.engineLink}?id=${id}&status=started`);

  public static drive = async (id: number): Promise<void> => {
    const response = await fetch(`${API.engineLink}?id=${id}&status=drive`, {
      method: RequestMethods.patch,
    }).catch();
    return response.status !== 200 ? { success: false } : { ...(await response.json()) };
  };
}
