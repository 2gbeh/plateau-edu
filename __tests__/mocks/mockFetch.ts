

export function mockFetch(data?: unknown) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      success: true,
      data: {},
    }),
  );
}