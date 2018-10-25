export class LoginUserService {
  private logged = false;

  status() {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        if (this.logged) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 2000);
    }));
  }

  constructor() {
  }

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }
}
