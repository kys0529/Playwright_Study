import { test } from '@playwright/test';
import {LoginPage} from "../pages/LoginPage";

test.describe('Login Page tests',() => {
  let login: LoginPage;
/**매 테스트 시작 전 반복 실행됨*/
  test.beforeEach(async({page}) => {
    login = new LoginPage(page);
    await login.goto();
  })
  test('successful into page', async() => {
    await login.is_Login_visible();
  });
  test('successful login scenario',async()=> {
    await login.input_valid_data();
    await login.submit_login();
    await login.is_Login_successful();
  })
  test('wrong username login scenario', async() => {
    await login.input_invalid_data();
    await login.submit_login();
    /**invalid 어쩌구 있는지 확인하는 거 필요*/ 
  })
})

/**지피티 초안 */
// const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// /** 공통 로그인 함수 */
// async function login(page: Page, username: string, password: string) {
//   await page.getByRole('textbox', { name: 'Username' }).fill(username);
//   await page.getByRole('textbox', { name: 'Password' }).fill(password);
//   await page.getByRole('button', { name: 'Login' }).click();
// }

// /** 테스트 그룹 */
// test.describe('Login Page Scenarios', () => {

//   // 공통 사전조건: 로그인 페이지로 이동, 제목 확인
//   test.beforeEach(async ({ page }) => {
//     await page.goto(url);
//     await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
//   });

//   test('successful into page', async ({ page }) => {
//     // 사전조건만으로 충분
//   });

//   test('successful login scenario', async ({ page }) => {
//     await login(page, 'Admin', 'admin123');
//   });

//   test('wrong username login scenario', async ({ page }) => {
//     await login(page, 'hello', 'admin123');
//     await expect(page.getByText('Invalid credentials')).toBeVisible();
//   });

//   test('wrong password login scenario', async ({ page }) => {
//     await login(page, 'Admin', 'admin');
//     await expect(page.getByText('Invalid credentials')).toBeVisible();
//   });

//   test('screenshot scenario', async ({ page }) => {
//     await login(page, 'Admin', 'admin123');
//     await page.screenshot({ path: 'screenshot.png' });
//   });
  
// });

/** 시각 비교 */
// import { test, expect } from '@playwright/test';

// test('example test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await expect(page).toHaveScreenshot();
// });


// /** 페이지 내 하나의 이미지만 캡처하는 방법?
//  * 여러가지 안전장치를 둬서 캡처를 좀더 확실히 하는 방법이 있음 */
// test('orangehrm logo visual snapshot', async ({ page }) => {
//   // 1. 대상 페이지 진입
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// await page.waitForLoadState('networkidle'); //사실 이것만 해도 되긴했음
//   // 2. 이미지 요소 선택
//   const logo = page.getByRole('img', { name: 'orangehrm-logo' });
// await logo.waitFor({ state: 'visible' }); // 렌더 완료 대기
//   // 3. 요소가 표시되는지 확인
//   await expect(logo).toBeVisible();

//   // 4. 시각적 스냅샷 비교
//   await expect(logo).toHaveScreenshot('orangehrm-logo.png', {
//     maxDiffPixelRatio: 0.01,   // 허용 오차
//     animations: 'disabled',    // 깜빡임 제거
//   });
// });

/** beforeEach 샘플코드 */
// import { test, expect } from '@playwright/test';

// test.describe('Login tests', () => {
//   test.beforeEach(async ({ page }) => {
//     await console.log("순서확인용 beforeEach")
//   });

//   test('테스트1', async ({ page }) => {
//     await console.log("순서 확인용 1")
//   });

//   test('테스트2', async ({ page }) => {
//     await console.log("순서 확인용 2")
//   });

//   test('테스트3', async ({ page }) => {
//     await console.log("순서 확인용 3")
//   });
// });