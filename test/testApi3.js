//https://qiita.com/tatsuya-miyamoto/items/f99eb069f65b30f2f816#%E5%9F%BA%E6%9C%AC%E7%B3%BB-1
import { testApiHandler } from "next-test-api-route-handler";
import handler from "../pages/api/testApi1";

describe("next-test-api-route-handler test", () => {
  test("API ROUTEのテスト GET", async () => {
    expect.hasAssertions();
    await testApiHandler({
      requestPatcher: (req) => (req.url = "/api/testApi1?val1=2&val2=3"),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: "GET",
        });
        expect(await res.json()).toStrictEqual({ result: 5 });
      },
    });
  });
  test("API ROUTEのテスト POST", async () => {
    expect.hasAssertions();
    await testApiHandler({
      requestPatcher: (req) => (req.url = "/api/testApi1?val1=2&val2=3"),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ val1: 2, val2: 3 }),
        });
        expect(await res.json()).toStrictEqual({ result: 5 });
      },
    });
  });
});
