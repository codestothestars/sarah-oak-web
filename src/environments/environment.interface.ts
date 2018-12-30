/**
 * An environment configuration for the application.
 */
export interface Environment {
    /**
     * Indicates whether the application will run with hot module replacement enabled.
     */
    hmr: boolean;

    /**
     * Indicates whether the application will run in production mode.
     */
    production: boolean;
}
