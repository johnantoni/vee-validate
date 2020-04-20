import { RuleParamSchema } from '@vee-validate/shared';

const validate = (value: any, { length }: Record<string, any>): boolean => {
  if (Array.isArray(value)) {
    return value.every(val => validate(val, { length }));
  }
  const strVal = String(value);

  return /^[0-9]*$/.test(strVal) && strVal.length === length;
};

const params: RuleParamSchema[] = [
  {
    name: 'length',
    cast(value) {
      return Number(value);
    },
  },
];

export { validate, params };

export default {
  validate,
  params,
};
