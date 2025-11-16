import { test, expect , Page} from '@playwright/test';
import {login_url} from '../data/url';
import {account} from '../data/account';
export class LoginPage {
    readonly page:Page;
    readonly username;
    readonly password;
    readonly login_btn;
  constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.login_btn = page.getByRole("button",{name:'Login'});
  }
  async goto() {
    await this.page.goto(login_url);
  };
  async is_Login_visible() {
    await expect(
        this.page.getByRole('heading', {name: 'Login'})).toBeVisible({ timeout: 10000 });
  };
  async input_valid_data() {
    await this.username.click();
    await this.username.fill(account.username.valid);
    await this.password.click();
    await this.password.fill(account.password.valid);
  };
  async input_invalid_data() {
    await this.username.click();
    await this.username.fill(account.username.invalid);
    await this.password.click();
    await this.password.fill(account.password.invalid);
  };
  async submit_login() {
    await this.login_btn.click();
  }
  async is_Login_successful() {
    /**검증방식 논의 필요*/
  }
}
