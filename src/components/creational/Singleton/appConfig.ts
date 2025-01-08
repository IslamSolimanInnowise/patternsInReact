class AppConfig {
  private static instance: AppConfig;
  public readonly appName: string;
  public readonly version: string;

  private constructor() {
    this.appName = "My React App";
    this.version = "1.0.0";
  }

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }
}

export default AppConfig;
