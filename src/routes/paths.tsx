interface DashboardPaths {
  root: string;
  users: {
    root: string;
  };
  programs: string;
}

interface AuthPaths {
  root: string;
  login: string;
  register: string;
  forgotPassword: string;
  newPassword: string;
  createNewPassword: string;
  verificationPassword: string;
  successPassword: string;
}

export interface Paths {
  dashboard: DashboardPaths;
  auth: AuthPaths;
  registration: string;
}

export const paths: Paths = {
  dashboard: {
    root: "/",
    users: {
      root: "/users",
    },
    programs: "/programs",
  },
  registration: "/registration",
  auth: {
    root: "auth",
    login: "login",
    register: "register",
    forgotPassword: "forgot-password",
    newPassword: "new-password",
    createNewPassword: "create-new-password",
    verificationPassword: "verification-password",
    successPassword: "success-password",
  },
};
