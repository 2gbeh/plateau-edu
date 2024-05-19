export default class FetchHelper {
  static headers = () => ({
    headers: {
      "Content-Type": "application/json",
    },
  });

  static async index(path: string) {
    let raw = await fetch(path, {
      ...this.headers,
      method: "GET",
    });
    return await raw.json();
  }

  static async store(path: string, payload: unknown) {
    let raw = await fetch(path, {
      ...this.headers,
      method: "POST",
      body: JSON.stringify(payload),
    });
    return await raw.json();
  }

  static async destroy(path: string, id: unknown) {
    let raw = await fetch(`${path}/${id}`, {
      ...this.headers,
      method: "DELETE",
    });
    return await raw.json();
  }
}
