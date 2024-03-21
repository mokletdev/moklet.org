declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
      DATABASE_URL: string;
      SHADOW_DATABASE_URL: string;
      [key: string]: string | undefined;
    }
  }
}

export {};
