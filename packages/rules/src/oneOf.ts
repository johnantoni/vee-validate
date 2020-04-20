import { ValidationRuleFunction, toArray } from '@vee-validate/shared';

const validate: ValidationRuleFunction = (value, options) => {
  if (Array.isArray(value)) {
    return value.every(val => validate(val, options));
  }

  return toArray(options as any[]).some(item => {
    // eslint-disable-next-line
    return item == value;
  });
};

export { validate };

export default {
  validate,
};
