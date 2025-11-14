(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function e(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a});return await(await fetch(`/api/products?${s}`)).json()}async function t(e){return await(await fetch(`/api/products/${e}`)).json()}async function n(){return await(await fetch(`/api/categories`)).json()}const r=()=>`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `,i=new class{constructor(e={}){this.state=e,this.observers=new Map}getState(e){return this.state[e]}setState(e,t){this.state[e]=t,this.notify(e)}subscribe(e,t){return this.observers.has(e)||this.observers.set(e,[]),this.observers.get(e).push(t),()=>{let n=this.observers.get(e);if(n){let e=n.indexOf(t);e>-1&&n.splice(e,1)}}}notify(e){let t=this.observers.get(e);t&&t.forEach(t=>t(this.state[e]))}clearObservers(){this.observers.clear()}};var a=new class{constructor(){this.routes=[]}_handleRoute(){let e=(e=>this.routes.find(t=>{if(t.path===`*`)return!1;let n=t.path.split(`/`),r=e.split(`/`);return n.length===r.length?n.every((e,t)=>e.startsWith(`:`)?!0:e===r[t]):!1})||this.routes.find(e=>e.path===`*`))(window.location.pathname.replace(`/front_7th_chapter2-1/`,`/`));if(console.log(e),e){i.clearObservers();let t=document.getElementById(`root`);e.component(t)}}push(e){window.history.pushState({},``,`${e}`),this._handleRoute()}replace(e){window.history.replaceState({},``,`${e}`),this._handleRoute()}init(e){this.routes=[...e],this._handleRoute(),window.addEventListener(`popstate`,()=>{this._handleRoute()})}},o=(e,t=`success`)=>{if(!document.getElementById(`toast-animations`)){let e=document.createElement(`style`);e.id=`toast-animations`,e.textContent=`
      @keyframes slideDown {
        from {
          transform: translate(-50%, -100%);
          opacity: 0;
        }
        to {
          transform: translate(-50%, 0);
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          transform: translate(-50%, 0);
          opacity: 1;
        }
        to {
          transform: translate(-50%, -100%);
          opacity: 0;
        }
      }
    `,document.head.appendChild(e)}let n=document.getElementById(`toast-container`);n&&n.remove();let r=document.createElement(`div`);r.id=`toast-container`,r.className=`fixed top-4 left-1/2 transform -translate-x-1/2 z-50`,r.style.animation=`slideDown 0.3s ease-out`;let i,a;t===`success`?(i=`bg-green-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    `):t===`error`?(i=`bg-red-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    `):(i=`bg-blue-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    `),r.innerHTML=`
    <div class="flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
      <div class="${i} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
        <div class="flex-shrink-0">${a}</div>
        <p class="text-sm font-medium">${e}</p>
        <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `,document.body.appendChild(r),r.querySelector(`#toast-close-btn`).addEventListener(`click`,()=>{r.remove()}),setTimeout(()=>{r.parentElement&&(r.style.animation=`slideUp 0.3s ease-in`,setTimeout(()=>{r.remove()},300))},3e3)},s=()=>{try{let e=localStorage.getItem(`shopping_cart`);return e?JSON.parse(e):{items:[],selectedAll:!1}}catch(e){return console.error(`장바구니 데이터 로드 실패:`,e),{items:[],selectedAll:!1}}},c=e=>{try{localStorage.setItem(`shopping_cart`,JSON.stringify(e)),window.dispatchEvent(new Event(`storage`))}catch(e){console.error(`장바구니 데이터 저장 실패:`,e)}},l=()=>{let e=null,t=()=>{let{items:e}=s();return e.length===0?n():e.some(e=>e.selected)?i(e):l(e)},n=()=>`
      <div class="flex-1 flex items-center justify-center p-8">
        <div class="text-center">
          <div class="text-gray-400 mb-4">
            <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
          <p class="text-gray-600">원하는 상품을 담아보세요!</p>
        </div>
      </div>
    `,r=e=>{let{id:t,title:n,image:r,price:i,quantity:a,selected:o}=e,s=i*a;return`
      <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${t}">
        <!-- 선택 체크박스 -->
        <label class="flex items-center mr-3">
          <input
            type="checkbox"
            ${o?`checked`:``}
            class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded
            focus:ring-blue-500"
            data-product-id="${t}"
          />
        </label>
        <!-- 상품 이미지 -->
        <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <img
            src="${r}"
            alt="${n}"
            class="w-full h-full object-cover cursor-pointer cart-item-image"
            data-product-id="${t}"
          />
        </div>
        <!-- 상품 정보 -->
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${t}">
            ${n}
          </h4>
          <p class="text-sm text-gray-600 mt-1">${Number(i).toLocaleString()}원</p>
          <!-- 수량 조절 -->
          <div class="flex items-center mt-2">
            <button
              class="quantity-decrease-btn w-7 h-7 flex items-center justify-center
             border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
              data-product-id="${t}"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input
              type="number"
              value="${a}"
              min="1"
              class="quantity-input w-12 h-7 text-center text-sm border-t border-b
            border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              disabled
              data-product-id="${t}"
            />
            <button
              class="quantity-increase-btn w-7 h-7 flex items-center justify-center
             border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
              data-product-id="${t}"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- 가격 및 삭제 -->
        <div class="text-right ml-3">
          <p class="text-sm font-medium text-gray-900">${s.toLocaleString()}원</p>
          <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${t}">
            삭제
          </button>
        </div>
      </div>
    `},i=e=>{let t=e.filter(e=>e.selected),n=t.length,i=t.reduce((e,t)=>e+t.price*t.quantity,0),a=e.reduce((e,t)=>e+t.price*t.quantity,0);return`
      <!-- 전체 선택 섹션 -->
      <div class="p-4 border-b border-gray-200 bg-gray-50">
        <label class="flex items-center text-sm text-gray-700">
          <input
            type="checkbox"
            id="cart-modal-select-all-checkbox"
            ${e.length===n?`checked`:``}
            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
          />
          전체선택 (${e.length}개)
        </label>
      </div>
      <!-- 아이템 목록 -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-4 space-y-4">${e.map(e=>r(e)).join(``)}</div>
      </div>
      <!-- 하단 액션 -->
      <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <!-- 선택된 아이템 정보 -->
        <div class="flex justify-between items-center mb-3 text-sm">
          <span class="text-gray-600">선택한 상품 (${n}개)</span>
          <span class="font-medium">${i.toLocaleString()}원</span>
        </div>
        <!-- 총 금액 -->
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-bold text-gray-900">총 금액</span>
          <span class="text-xl font-bold text-blue-600">${a.toLocaleString()}원</span>
        </div>
        <!-- 액션 버튼들 -->
        <div class="space-y-2">
          <button
            id="cart-modal-remove-selected-btn"
            class="w-full bg-red-600 text-white py-2 px-4 rounded-md
                   hover:bg-red-700 transition-colors text-sm"
          >
            선택한 상품 삭제 (${n}개)
          </button>
          <div class="flex gap-2">
            <button
              id="cart-modal-clear-cart-btn"
              class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md
                   hover:bg-gray-700 transition-colors text-sm"
            >
              전체 비우기
            </button>
            <button
              id="cart-modal-checkout-btn"
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md
                   hover:bg-blue-700 transition-colors text-sm"
            >
              구매하기
            </button>
          </div>
        </div>
      </div>
    `},l=e=>{let t=e.reduce((e,t)=>e+t.price*t.quantity,0);return`
      <!-- 전체 선택 섹션 -->
      <div class="p-4 border-b border-gray-200 bg-gray-50">
        <label class="flex items-center text-sm text-gray-700">
          <input
            type="checkbox"
            id="cart-modal-select-all-checkbox"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
          />
          전체선택 (${e.length}개)
        </label>
      </div>
      <!-- 아이템 목록 -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-4 space-y-4">${e.map(e=>r(e)).join(``)}</div>
      </div>
      <!-- 하단 액션 -->
      <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <!-- 총 금액 -->
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-bold text-gray-900">총 금액</span>
          <span class="text-xl font-bold text-blue-600">${t.toLocaleString()}원</span>
        </div>
        <!-- 액션 버튼들 -->
        <div class="space-y-2">
          <div class="flex gap-2">
            <button
              id="cart-modal-clear-cart-btn"
              class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md
                       hover:bg-gray-700 transition-colors text-sm"
            >
              전체 비우기
            </button>
            <button
              id="cart-modal-checkout-btn"
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md
                       hover:bg-blue-700 transition-colors text-sm"
            >
              구매하기
            </button>
          </div>
        </div>
      </div>
    `},u=()=>{if(!e)return;let n=e.querySelector(`.cart-modal-content`);n&&(n.innerHTML=t(),d())},d=()=>{if(!e)return;e.querySelectorAll(`.cart-item-checkbox`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.productId,n=s(),r=n.items.find(e=>e.id===t);r&&(r.selected=e.target.checked,c(n),u())})});let t=e.querySelector(`#cart-modal-select-all-checkbox`);t&&t.addEventListener(`change`,e=>{let t=s();t.items.forEach(t=>{t.selected=e.target.checked}),t.selectedAll=e.target.checked,c(t),u()}),e.querySelectorAll(`.quantity-increase-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId,n=s(),r=n.items.find(e=>e.id===t);r&&(r.quantity+=1,c(n),u())})}),e.querySelectorAll(`.quantity-decrease-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId,n=s(),r=n.items.find(e=>e.id===t);r&&r.quantity>1&&(--r.quantity,c(n),u())})}),e.querySelectorAll(`.cart-item-remove-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId,n=s();n.items=n.items.filter(e=>e.id!==t),c(n),o(`상품이 삭제되었습니다.`,`success`),u()})});let n=e.querySelector(`#cart-modal-remove-selected-btn`);n&&n.addEventListener(`click`,()=>{let e=s();if(e.items.filter(e=>e.selected).length===0){o(`선택한 상품이 없습니다.`,`error`);return}e.items=e.items.filter(e=>!e.selected),c(e),o(`선택한 상품이 삭제되었습니다.`,`success`),u()});let r=e.querySelector(`#cart-modal-clear-cart-btn`);r&&r.addEventListener(`click`,()=>{if(s().items.length===0){o(`장바구니가 이미 비어있습니다.`,`error`);return}c({items:[],selectedAll:!1}),o(`장바구니가 비워졌습니다.`,`success`),u()});let i=e.querySelector(`#cart-modal-checkout-btn`);i&&i.addEventListener(`click`,()=>{o(`구매 기능은 추후 구현 예정입니다.`,`info`)});let l=e.querySelectorAll(`.cart-item-image`),d=e.querySelectorAll(`.cart-item-title`);[...l,...d].forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId;m(),a.push(`/front_7th_chapter2-1/product/${t}`)})})},f=e=>{e.key===`Escape`&&m()},p=()=>{let n=document.getElementById(`cart-modal-overlay`);n&&n.remove(),e=document.createElement(`div`),e.className=`fixed inset-0 z-50 overflow-y-auto cart-modal`;let r=s().items.length;e.innerHTML=`
      <!-- 배경 오버레이 -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4 cart-modal-wrapper">
        <div
          class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden cart-modal-content-wrapper"
        >
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              장바구니
              ${r>0?`<span class="text-sm font-normal text-gray-600 ml-1">(${r})</span>`:``}
            </h2>
            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)] cart-modal-content">${t()}</div>
        </div>
      </div>
    `,document.querySelector(`#root`).appendChild(e);let i=e.querySelector(`#cart-modal-close-btn`);i&&i.addEventListener(`click`,m);let a=e.querySelector(`.cart-modal-overlay`),o=e.querySelector(`.cart-modal-wrapper`);a&&a.addEventListener(`click`,m),o&&o.addEventListener(`click`,e=>{e.target===o&&m()}),document.addEventListener(`keydown`,f),d(),document.body.style.overflow=`hidden`},m=()=>{e&&(e.remove(),e=null,document.body.style.overflow=``,document.removeEventListener(`keydown`,f))};return{open:p,close:m}},u=null,d=()=>{try{let e=localStorage.getItem(`shopping_cart`);return e?JSON.parse(e).items.length:0}catch(e){return console.error(`장바구니 데이터 로드 실패:`,e),0}},f=()=>{let e=document.getElementById(`cart-count-badge`);if(e){let t=d();t>0?(e.textContent=t,e.style.display=`flex`):e.style.display=`none`}};const p=()=>{let e=d(),t=window.location.pathname.includes(`/product/`),n=()=>`
        <h1 class="text-xl font-bold text-gray-900">
          <a href="/" data-link="">쇼핑몰</a>
        </h1>
      `,r=()=>`
        <div class="flex items-center space-x-3">
          <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
        </div>
      `;return window.__cartEventListenerAdded||(window.addEventListener(`storage`,f),window.__cartEventListenerAdded=!0),u||=l(),setTimeout(()=>{let e=document.getElementById(`cart-icon-btn`);e&&!e.__cartClickListenerAdded&&(e.addEventListener(`click`,()=>{u.open()}),e.__cartClickListenerAdded=!0)},0),`
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            ${t?r():n()}
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                  ></path>
                </svg>
                <span
                  id="cart-count-badge"
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  style="display: ${e>0?`flex`:`none`}"
                  >${e}</span
                >
              </button>
            </div>
          </div>
        </div>
      </header>
    `};var m=(e,t=`success`)=>{if(!document.getElementById(`toast-animations`)){let e=document.createElement(`style`);e.id=`toast-animations`,e.textContent=`
      @keyframes slideDown {
        from {
          transform: translate(-50%, -100%);
          opacity: 0;
        }
        to {
          transform: translate(-50%, 0);
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          transform: translate(-50%, 0);
          opacity: 1;
        }
        to {
          transform: translate(-50%, -100%);
          opacity: 0;
        }
      }
    `,document.head.appendChild(e)}let n=document.getElementById(`toast-container`);n&&n.remove();let r=document.createElement(`div`);r.id=`toast-container`,r.className=`fixed top-4 left-1/2 transform -translate-x-1/2 z-50`,r.style.animation=`slideDown 0.3s ease-out`;let i,a;t===`success`?(i=`bg-green-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    `):t===`error`?(i=`bg-red-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    `):(i=`bg-blue-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    `),r.innerHTML=`
    <div class="flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
      <div class="${i} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
        <div class="flex-shrink-0">${a}</div>
        <p class="text-sm font-medium">${e}</p>
        <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `,document.body.appendChild(r),r.querySelector(`#toast-close-btn`).addEventListener(`click`,()=>{r.remove()}),setTimeout(()=>{r.parentElement&&(r.style.animation=`slideUp 0.3s ease-in`,setTimeout(()=>{r.remove()},300))},3e3)},h=n=>{let o=window.location.pathname.split(`/`).at(-1),s=()=>{i.subscribe(`isProductDetailLoading`,l),i.setState(`isProductDetailLoading`,!0),i.subscribe(`productData`,l),i.setState(`productData`,null),i.subscribe(`relatedProducts`,l),i.setState(`relatedProducts`,[])},c=()=>{let e=i.getState(`isProductDetailLoading`),t=i.getState(`productData`),a=i.getState(`relatedProducts`);n.innerHTML=`
      <div class="min-h-screen bg-gray-50">
        ${p({title:`상품 상세`})}
        <main class="max-w-md mx-auto px-4 py-4">
          ${e?g():`
                <!-- 브레드크럼 -->
                <nav class="mb-4">
                  <div class="flex items-center space-x-2 text-sm text-gray-600">
                    <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <button
                      class="breadcrumb-link hover:text-blue-600 transition-colors"
                      data-category1="${t?.category1}"
                    >
                      ${t?.category1}
                    </button>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <button
                      class="breadcrumb-link hover:text-blue-600 transition-colors"
                      data-category1="${t?.category1}"
                      data-category2="${t?.category2}"
                    >
                      ${t?.category2}
                    </button>
                  </div>
                </nav>
                <!-- 상품 상세 정보 -->
                <div class="bg-white rounded-lg shadow-sm mb-6">
                  <!-- 상품 이미지 -->
                  <div class="p-4">
                    <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src=${t?.image}
                        alt=${t?.title}
                        class="w-full h-full object-cover product-detail-image"
                      />
                    </div>
                    <!-- 상품 정보 -->
                    <div>
                      <p class="text-sm text-gray-600 mb-1">${t?.brand}</p>
                      <h1 class="text-xl font-bold text-gray-900 mb-3">${t?.title}</h1>
                      <!-- 평점 및 리뷰 -->
                      <div class="flex items-center mb-3">
                        <div class="flex items-center">
                          ${Array.from({length:t?.rating||5}).map(()=>`
                                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  ></path>
                                </svg>
                              `).join(``)}
                          ${Array.from({length:5-(t?.rating||0)}).map(()=>`
                                <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                  ></path>
                                </svg>
                              `).join(``)}
                        </div>
                        <span class="ml-2 text-sm text-gray-600"
                          >${Number(t?.rating||5).toFixed(1)} (${t?.reviewCount}개 리뷰)</span
                        >
                      </div>
                      <!-- 가격 -->
                      <div class="mb-4">
                        <span class="text-2xl font-bold text-blue-600">${Number(t?.lprice).toLocaleString()}원</span>
                      </div>
                      <!-- 재고 -->
                      <div class="text-sm text-gray-600 mb-4">재고 ${Number(t?.stock).toLocaleString()}개</div>
                      <!-- 설명 -->
                      <div class="text-sm text-gray-700 leading-relaxed mb-6">${t?.description}</div>
                    </div>
                  </div>
                  <!-- 수량 선택 및 액션 -->
                  <div class="border-t border-gray-200 p-4">
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-sm font-medium text-gray-900">수량</span>
                      <div class="flex items-center">
                        <button
                          id="quantity-decrease"
                          class="w-8 h-8 flex items-center justify-center border border-gray-300 
           rounded-l-md bg-gray-50 hover:bg-gray-100"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                          </svg>
                        </button>
                        <input
                          type="number"
                          id="quantity-input"
                          value="1"
                          min="1"
                          max="107"
                          class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                          id="quantity-increase"
                          class="w-8 h-8 flex items-center justify-center border border-gray-300 
           rounded-r-md bg-gray-50 hover:bg-gray-100"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <!-- 액션 버튼 -->
                    <button
                      id="add-to-cart-btn"
                      data-product-id="85067212996"
                      class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
         hover:bg-blue-700 transition-colors font-medium"
                    >
                      장바구니 담기
                    </button>
                  </div>
                </div>
                <!-- 상품 목록으로 이동 -->
                <div class="mb-6">
                  <button
                    class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
    hover:bg-gray-200 transition-colors go-to-product-list"
                  >
                    상품 목록으로 돌아가기
                  </button>
                </div>
                <!-- 관련 상품 -->
                <div class="bg-white rounded-lg shadow-sm">
                  <div class="p-4 border-b border-gray-200">
                    <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
                    <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
                  </div>
                  <div class="p-4">
                    <div class="grid grid-cols-2 gap-3 responsive-grid">
                      ${a?.map(e=>`
                            <div
                              class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer"
                              data-product-id="${e.productId}"
                            >
                              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                                <img
                                  src="${e.image}"
                                  alt="${e.title}"
                                  class="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                              <p class="text-sm font-bold text-blue-600">
                                ${Number(e.lprice).toLocaleString()}원
                              </p>
                            </div>
                          `).join(``)}
                    </div>
                  </div>
                </div>
              `}
        </main>
        ${r()}
      </div>
    `},l=()=>{c(),f()},u=async()=>{try{let e=await t(o);i.setState(`productData`,e),e?.category2&&d(e.category2)}catch(e){console.error(e)}finally{i.setState(`isProductDetailLoading`,!1)}},d=async t=>{try{let n=(await e({category2:t,limit:20})).products.filter(e=>e.productId!==o);i.setState(`relatedProducts`,n)}catch(e){console.error(e)}},f=()=>{let e=n.querySelector(`a[data-link=""]`);e&&e.addEventListener(`click`,e=>{e.preventDefault(),a.push(`/front_7th_chapter2-1/`)}),n.querySelectorAll(`.breadcrumb-link[data-category1]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.category1;a.push(`/front_7th_chapter2-1/?category1=${encodeURIComponent(n)}`)})}),n.querySelectorAll(`.breadcrumb-link[data-category2]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.dataset.category1,r=e.dataset.category2;a.push(`/front_7th_chapter2-1/?category1=${encodeURIComponent(n)}&category2=${encodeURIComponent(r)}`)})});let t=n.querySelector(`.go-to-product-list`);t&&t.addEventListener(`click`,()=>{let e=i.getState(`selectedCategory1`),t=i.getState(`selectedCategory2`),n=new URLSearchParams;e&&n.set(`category1`,e),t&&n.set(`category2`,t);let r=n.toString();a.push(`/front_7th_chapter2-1/${r?`?${r}`:``}`)}),n.querySelectorAll(`.related-product-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId;a.push(`/front_7th_chapter2-1/product/${t}`)})});let r=n.querySelector(`#quantity-input`),o=n.querySelector(`#quantity-decrease`),s=n.querySelector(`#quantity-increase`);if(r&&o&&s){let e=i.getState(`productData`)?.stock||100;o.addEventListener(`click`,()=>{let e=parseInt(r.value)||1;e>1&&(r.value=e-1)}),s.addEventListener(`click`,()=>{let t=parseInt(r.value)||1;t<e&&(r.value=t+1)}),r.addEventListener(`input`,t=>{let n=parseInt(t.target.value);isNaN(n)||n<1?t.target.value=1:n>e&&(t.target.value=e)}),r.addEventListener(`blur`,e=>{(e.target.value===``||isNaN(parseInt(e.target.value)))&&(e.target.value=1)})}let c=n.querySelector(`#add-to-cart-btn`);c&&c.addEventListener(`click`,()=>{let e=i.getState(`productData`),t=parseInt(r?.value)||1;if(e)try{let n=localStorage.getItem(`shopping_cart`),i=n?JSON.parse(n):{items:[],selectedAll:!1},a=i.items.findIndex(t=>t.id===e.productId);a>-1?i.items[a].quantity+=t:i.items.push({id:e.productId,title:e.title,image:e.image,price:e.lprice,quantity:t,selected:!1}),localStorage.setItem(`shopping_cart`,JSON.stringify(i)),r&&(r.value=1),m(`장바구니에 추가되었습니다.`,`success`),window.dispatchEvent(new Event(`storage`))}catch(e){console.error(`장바구니 저장 실패:`,e),m(`장바구니에 담는 중 오류가 발생했습니다.`,`error`)}})};s(),c(),f(),u()},g=()=>`
    <div class="py-20 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
      </div>
    </div>
  `,_=()=>`
      <div class="text-center py-4">
        <div class="inline-flex items-center">
          <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
        </div>
      </div>
    `,v=(e,t=`success`)=>{if(!document.getElementById(`toast-animations`)){let e=document.createElement(`style`);e.id=`toast-animations`,e.textContent=`
      @keyframes slideDown {
        from {
          transform: translate(-50%, -100%);
          opacity: 0;
        }
        to {
          transform: translate(-50%, 0);
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          transform: translate(-50%, 0);
          opacity: 1;
        }
        to {
          transform: translate(-50%, -100%);
          opacity: 0;
        }
      }
    `,document.head.appendChild(e)}let n=document.getElementById(`toast-container`);n&&n.remove();let r=document.createElement(`div`);r.id=`toast-container`,r.className=`fixed top-4 left-1/2 transform -translate-x-1/2 z-50`,r.style.animation=`slideDown 0.3s ease-out`;let i,a;t===`success`?(i=`bg-green-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    `):t===`error`?(i=`bg-red-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    `):(i=`bg-blue-600`,a=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    `),r.innerHTML=`
    <div class="flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
      <div class="${i} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
        <div class="flex-shrink-0">${a}</div>
        <p class="text-sm font-medium">${e}</p>
        <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `,document.body.appendChild(r),r.querySelector(`#toast-close-btn`).addEventListener(`click`,()=>{r.remove()}),setTimeout(()=>{r.parentElement&&(r.style.animation=`slideUp 0.3s ease-in`,setTimeout(()=>{r.remove()},300))},3e3)},y=t=>{let n=1,r=!1,o=!1,s=null,c=()=>{i.subscribe(`isProductListLoading`,u),i.setState(`isProductListLoading`,!0),i.subscribe(`productsData`,u),i.setState(`productsData`,null),i.subscribe(`selectedCategory1`,d),i.subscribe(`selectedCategory2`,d),i.subscribe(`selectedLimit`,d),i.subscribe(`selectedSort`,d),i.subscribe(`searchKeyword`,d)},l=()=>{let e=i.getState(`isProductListLoading`),n=i.getState(`productsData`),a=e=>{let{brand:t,image:n,lprice:r,productId:i,title:a}=e;return`
        <div
          class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
          data-product-id="${i}"
        >
          <!-- 상품 이미지 -->
          <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
            <img
              src="${n}"
              alt="${a}"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          </div>
          <!-- 상품 정보 -->
          <div class="p-3">
            <div class="cursor-pointer product-info mb-3">
              <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${a}</h3>
              <p class="text-xs text-gray-500 mb-2">${t??``}</p>
              <p class="text-lg font-bold text-gray-900">${Number(r).toLocaleString()}원</p>
            </div>
            <!-- 장바구니 버튼 -->
            <button
              class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn"
              data-product-id="${i}"
            >
              장바구니 담기
            </button>
          </div>
        </div>
      `};n?.pagination&&(o=n.pagination.hasNext),t.innerHTML=`
      ${e?b():`
            <div>
              <!-- 상품 개수 정보 -->
              <div class="mb-4 text-sm text-gray-600">
                총 <span class="font-medium text-gray-900">${n?.pagination?.total??0}개</span>의 상품
              </div>
              <!-- 상품 그리드 -->
              <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
                ${n?.products?.map(e=>a(e)).join(``)??``}
              </div>
              <!-- 무한 스크롤 트리거 -->
              ${o?`<div id="scroll-trigger" class="h-4">${r?_():``}</div>`:`<div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>`}
            </div>
          `}
    `},u=()=>{l(),f(),s&&s.disconnect(),o&&h()},d=()=>{i.setState(`isProductListLoading`,!0),n=1,p(1)},f=()=>{let e=document.getElementById(`products-grid`);e&&e.addEventListener(`click`,e=>{let t=e.target.closest(`.product-card`),n=e.target.closest(`.add-to-cart-btn`),r=e.target.closest(`.product-image`),o=e.target.closest(`.product-info`);if(n){e.stopPropagation();let t=n.dataset.productId,r=i.getState(`productsData`)?.products?.find(e=>e.productId===t);if(!r)return;try{let e=localStorage.getItem(`shopping_cart`),t=e?JSON.parse(e):{items:[],selectedAll:!1},n=t.items.findIndex(e=>e.id===r.productId);n>-1?t.items[n].quantity+=1:t.items.push({id:r.productId,title:r.title,image:r.image,price:r.lprice,quantity:1,selected:!1}),localStorage.setItem(`shopping_cart`,JSON.stringify(t)),v(`장바구니에 추가되었습니다.`,`success`),window.dispatchEvent(new Event(`storage`))}catch(e){console.error(`장바구니 저장 실패:`,e),v(`장바구니에 담는 중 오류가 발생했습니다.`,`error`)}return}if(t&&(r||o)){let e=t.dataset.productId;a.push(`/front_7th_chapter2-1/product/${e}`)}})},p=async(t=1)=>{try{let r=i.getState(`selectedCategory1`),a=i.getState(`selectedCategory2`),o=i.getState(`selectedLimit`)||`20`,s=i.getState(`selectedSort`)||`price_asc`,c=i.getState(`searchKeyword`)||``,l=await e({page:t,limit:parseInt(o),category1:r||``,category2:a||``,sort:s,search:c});if(t===1)n=1,i.setState(`productsData`,l);else{let e=i.getState(`productsData`);i.setState(`productsData`,{...l,products:[...e?.products||[],...l.products]}),n=t}}catch(e){console.error(e)}finally{i.setState(`isProductListLoading`,!1),r=!1}},m=async()=>{r||!o||(r=!0,l(),await p(n+1))},h=()=>{let e=document.getElementById(`scroll-trigger`);e&&(s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&o&&!r&&m()})},{root:null,rootMargin:`100px`,threshold:.1}),s.observe(e))};c(),l(),f(),p()},b=()=>`
      <div>
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          ${Array.from({length:6}).map(()=>`
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
                    <div class="aspect-square bg-gray-200"></div>
                    <div class="p-3">
                      <div class="h-4 bg-gray-200 rounded mb-2"></div>
                      <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                      <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                      <div class="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                `).join(``)}
        </div>
      </div>
    `,x=e=>{let t=new URL(window.location);Object.entries(e).forEach(([e,n])=>{n?t.searchParams.set(e,n):t.searchParams.delete(e)}),window.history.replaceState({},``,t)},S=e=>new URL(window.location).searchParams.get(e)||``,C=e=>{let t=()=>{i.subscribe(`isCategoryLoading`,a),i.setState(`isCategoryLoading`,!0),i.subscribe(`categoryListData`,a),i.setState(`categoryListData`,null),i.subscribe(`selectedCategory1`,a),i.subscribe(`selectedCategory2`,a),i.subscribe(`selectedLimit`,a),i.subscribe(`selectedSort`,a),i.subscribe(`searchKeyword`,a);let e=S(`category1`),t=S(`category2`),n=S(`limit`)||`20`,r=S(`sort`)||`price_asc`,o=S(`search`)||``;i.setState(`selectedCategory1`,e),i.setState(`selectedCategory2`,t),i.setState(`selectedLimit`,n),i.setState(`selectedSort`,r),i.setState(`searchKeyword`,o)},r=()=>{let t=i.getState(`isCategoryLoading`),n=i.getState(`categoryListData`),r=i.getState(`selectedCategory1`),a=i.getState(`selectedCategory2`),o=i.getState(`selectedLimit`)||`20`,s=i.getState(`selectedSort`)||`price_asc`;e.innerHTML=`
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input
            type="text"
            id="search-input"
            placeholder="상품명을 검색해보세요..."
            value="${i.getState(`searchKeyword`)||``}"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
            ${r?`<span class="text-xs text-gray-500">&gt;</span>
                  <button
                    data-breadcrumb="category1"
                    data-category1="${r}"
                    class="text-xs hover:text-blue-800 hover:underline"
                  >
                    ${r}
                  </button>`:``}
            ${a?`<span class="text-xs text-gray-500">&gt;</span>
                  <span class="text-xs text-gray-600 cursor-default">${a}</span>`:``}
          </div>
          ${t?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:r?`
                  <!-- 2depth 카테고리 -->
                  <div class="flex flex-wrap gap-2">
                    ${n?.[r]?Object.keys(n[r]).map(e=>`
                              <button
                                data-category1="${r}"
                                data-category2="${e}"
                                class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                        ${a===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}"
                              >
                                ${e}
                              </button>
                            `).join(``):``}
                  </div>
                `:`
                  <!-- 1depth 카테고리 -->
                  <div class="flex flex-wrap gap-2">
                    ${n?Object.keys(n).map(e=>`
                              <button
                                data-category1="${e}"
                                class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                        bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                              >
                                ${e}
                              </button>
                            `).join(``):``}
                  </div>
                `}
        </div>
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select
              id="limit-select"
              class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="10" ${o===`10`?`selected`:``}>10개</option>
              <option value="20" ${o===`20`?`selected`:``}>20개</option>
              <option value="50" ${o===`50`?`selected`:``}>50개</option>
              <option value="100" ${o===`100`?`selected`:``}>100개</option>
            </select>
          </div>
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select
              id="sort-select"
              class="text-sm border border-gray-300 rounded px-2 py-1
                       focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="price_asc" ${s===`price_asc`?`selected`:``}>가격 낮은순</option>
              <option value="price_desc" ${s===`price_desc`?`selected`:``}>가격 높은순</option>
              <option value="name_asc" ${s===`name_asc`?`selected`:``}>이름순</option>
              <option value="name_desc" ${s===`name_desc`?`selected`:``}>이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    `},a=()=>{r(),o()},o=()=>{e.querySelectorAll(`.category1-filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.category1;i.setState(`selectedCategory1`,t),i.setState(`selectedCategory2`,``),x({category1:t,category2:``})})}),e.querySelectorAll(`.category2-filter-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.category2,n=i.getState(`selectedCategory2`),r=i.getState(`selectedCategory1`);n===t?(i.setState(`selectedCategory2`,``),x({category1:r,category2:``})):(i.setState(`selectedCategory2`,t),x({category1:r,category2:t}))})});let t=e.querySelector(`[data-breadcrumb="reset"]`);t&&t.addEventListener(`click`,()=>{i.setState(`selectedCategory1`,``),i.setState(`selectedCategory2`,``),x({category1:``,category2:``})});let n=e.querySelector(`[data-breadcrumb="category1"]`);n&&n.addEventListener(`click`,()=>{let e=i.getState(`selectedCategory1`);i.setState(`selectedCategory2`,``),x({category1:e,category2:``})});let r=e.querySelector(`#limit-select`);r&&r.addEventListener(`change`,e=>{let t=e.target.value;i.setState(`selectedLimit`,t),x({category1:i.getState(`selectedCategory1`),category2:i.getState(`selectedCategory2`),limit:t,sort:i.getState(`selectedSort`)})});let a=e.querySelector(`#sort-select`);a&&a.addEventListener(`change`,e=>{let t=e.target.value;i.setState(`selectedSort`,t),x({category1:i.getState(`selectedCategory1`),category2:i.getState(`selectedCategory2`),limit:i.getState(`selectedLimit`),sort:t,search:i.getState(`searchKeyword`)})});let o=e.querySelector(`#search-input`);o&&o.addEventListener(`keypress`,e=>{if(e.key===`Enter`){let t=e.target.value.trim();i.setState(`searchKeyword`,t),x({category1:i.getState(`selectedCategory1`),category2:i.getState(`selectedCategory2`),limit:i.getState(`selectedLimit`),sort:i.getState(`selectedSort`),search:t})}})};t(),r(),o(),(async()=>{try{let e=await n();i.setState(`categoryListData`,e)}catch(e){console.error(`카테고리 조회 실패:`,e)}finally{i.setState(`isCategoryLoading`,!1)}})()},w=e=>{let t=()=>{let e=document.querySelector(`[data-component='search-filter']`),t=document.querySelector(`[data-component='products']`);C(e),y(t)},n=()=>{e.innerHTML=`
      <div class="bg-gray-50" data-component="product-list-layout">
        ${p({title:`쇼핑몰`})}
        <main class="max-w-md mx-auto px-4 py-4">
          <div
            class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4"
            data-component="search-filter"
          ></div>
          <div class="mb-6" data-component="products"></div>
        </main>
        ${r()}
      </div>
    `};(e=>{n(e),t()})(e)},T=e=>{e.innerHTML=`
        <div class="min-h-screen bg-gray-50">
          ${p({title:`쇼핑몰`})}
          <main class="max-w-md mx-auto px-4 py-4">
            <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
              <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
                  </linearGradient>
                  <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
                  </filter>
                </defs>

                <!-- 404 Numbers -->
                <text
                  x="160"
                  y="85"
                  font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  font-size="48"
                  font-weight="600"
                  fill="url(#blueGradient)"
                  text-anchor="middle"
                >
                  404
                </text>

                <!-- Icon decoration -->
                <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
                <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
                <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
                <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />

                <!-- Message -->
                <text
                  x="160"
                  y="110"
                  font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  font-size="14"
                  font-weight="400"
                  fill="#5f6368"
                  text-anchor="middle"
                >
                  페이지를 찾을 수 없습니다
                </text>

                <!-- Subtle bottom accent -->
                <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3" />
              </svg>

              <a
                href="/"
                data-link
                class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >홈으로</a
              >
            </div>
          </main>
          ${r()}
        </div>
      `},E=()=>{a.init([{path:`/`,component:w},{path:`/product/:id`,component:h},{path:`*`,component:T}])},D=`modulepreload`,O=function(e){return`/front_7th_chapter2-1/`+e},k={};const A=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=O(t,n),t in k)return;k[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:D,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};(()=>A(async()=>{let{worker:e}=await import(`./browser-Dd6V_3T4.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`,serviceWorker:{url:`/front_7th_chapter2-1/mockServiceWorker.js`}})))().then(E);