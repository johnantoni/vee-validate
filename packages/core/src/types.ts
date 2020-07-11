import { ComputedRef, Ref } from 'vue';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  failedRules: Record<string, string>;
  regenerateMap?: Record<string, () => string>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Locator = { __locatorRef: string } & Function;

// Extracts explicit keys of an interface without index signature
// https://stackoverflow.com/questions/51465182/typescript-remove-index-signature-using-mapped-types
export type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;

export interface ValidationFlags {
  untouched: boolean;
  touched: boolean;
  dirty: boolean;
  pristine: boolean;
  valid: boolean;
  invalid: boolean;
  passed: boolean;
  failed: boolean;
  validated: boolean;
  pending: boolean;
  changed: boolean;
}

export interface VeeObserver {
  refs: Record<string, any>;
  observe(provider: any, type?: 'provider' | 'observer'): void;
  unobserve(id: string, type?: 'provider' | 'observer'): void;
}

export interface InactiveRefCache {
  id: string;
  errors: string[];
  flags: ValidationFlags;
  failedRules: Record<string, string>;
}

export type Flag =
  | 'untouched'
  | 'touched'
  | 'dirty'
  | 'pristine'
  | 'valid'
  | 'invalid'
  | 'passed'
  | 'failed'
  | 'validated'
  | 'pending'
  | 'changed';

export interface FormController {
  register(field: any): void;
  values: ComputedRef<Record<string, any>>;
  names: ComputedRef<Record<string, string>>;
  fields: ComputedRef<Record<string, any>>;
  schema?: Record<string, GenericValidateFunction | string | Record<string, any>>;
}

export type MaybeReactive<T> = Ref<T> | ComputedRef<T> | T;

export type SubmitEvent = Event & { target: HTMLFormElement };

export type SubmissionHandler = (values: Record<string, any>, evt?: SubmitEvent) => any;

export type GenericValidateFunction = (value: any) => boolean | string | Promise<boolean | string>;
