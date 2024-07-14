jest.unstable_mockModule("node:fs/promises", async () => ({
  readFile: jest.fn(),
}));

const { readName } = await import("./utils");
const { readFile } = await import("node:fs/promises");

describe("index", () => {
  test("read name", () => {
    readFile.mockResolvedValue(JSON.stringify({'name': 'mock'}));
    return expect(readName()).resolves.toBe("mock");
  });
});
