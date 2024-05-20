import FetchHelper from "./";

export function storeMock<T>(response: T, success = true) {
  return jest.spyOn(FetchHelper, "store").mockImplementation(() => {
    return Promise.resolve({
      success,
      [success ? "data" : "message"]: response,
    });
  });
}
