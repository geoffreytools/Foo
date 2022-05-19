export interface TN<V extends number> {}

export type Foo< T extends keyof TN<V>, V extends number> =
    //@ts-expect-error: free-types/tests/cross-repo dependency inversion
    [0, ...TN<V>[T]]
