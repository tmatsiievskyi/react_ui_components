/* eslint-disable import/no-extraneous-dependencies */
// import matchers from '@testing-library/jest-dom/matchers';
// import { expect } from 'vitest';
// import '@testing-library/jest-dom/extend-expect';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
