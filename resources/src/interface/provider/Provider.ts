export interface Provider<T> {
    provide(): Promise<T>;
}