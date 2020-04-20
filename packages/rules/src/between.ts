import { RuleParamSchema } from '@vee-validate/shared';

const validate = (value: any, { min, max }: Record<string, any> = {}): boolean => {
  if (Array.isArray(value)) {
    return value.every(val => !!validate(val, { min, max }));
  }

  return Number(min) <= value && Number(max) >= value;
};

const params: RuleParamSchema[] = [
  {
    name: 'min',
  },
  {
    name: 'max',
  },
];

export { validate, params };

export default {
  validate,
  params,
};
