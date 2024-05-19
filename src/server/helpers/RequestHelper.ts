export default class RequestHelper {

  static post = <T>(payload: T) => ({
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
