import { Type, apply } from 'free-types';

export type Foo<$T extends $TN, V extends number> = 
    [0, ...apply<$T, [V]>]

export type $TN = Type<[number], number[]>;