import { 상품목록_레이아웃_로딩완료 } from "./templates/상품목록_레이아웃_로딩완료.js";
import { 상품목록_레이아웃_로딩 } from "./templates/상품목록_레이아웃_로딩.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

function main() {
  document.body.innerHTML = `
    ${상품목록_레이아웃_로딩완료}
    ${상품목록_레이아웃_로딩}
  `;
}

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
