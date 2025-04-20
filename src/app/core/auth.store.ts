export interface UserSession {
    token: string;
    username: string;
    role: string;
  }
  
  export class AuthStore {
    private static tokenKey = 'token';
    private static usernameKey = 'username';
    private static roleKey = 'role';
  
    static setSession(data: UserSession) {
      localStorage.setItem(this.tokenKey, data.token);
      localStorage.setItem(this.usernameKey, data.username);
      localStorage.setItem(this.roleKey, data.role);
    }
  
    static clearSession() {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.usernameKey);
      localStorage.removeItem(this.roleKey);
    }
  
    static getSession(): UserSession | null {
      const token = localStorage.getItem(this.tokenKey);
      const username = localStorage.getItem(this.usernameKey);
      const role = localStorage.getItem(this.roleKey);
  
      if (token && username && role) {
        return { token, username, role };
      }
      return null;
    }
  
    static isAuthenticated(): boolean {
      return !!localStorage.getItem(this.tokenKey);
    }
  }
  