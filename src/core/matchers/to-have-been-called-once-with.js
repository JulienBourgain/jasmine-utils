/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Mickael Jeanroy <mickael.jeanroy@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {pp} from '../jasmine/pp.js';

/**
 * Check that the tested object is a spy that has been called once (and exactly
 * once) with expected arguments.
 *
 * @param {Object} ctx Test context.
 * @param {Array<*>} args Expected call arguments.
 * @return {Object} Test result.
 */
export function toHaveBeenCalledOnceWith(ctx, ...args) {
  const {actual, callCount, equals, argsFor} = ctx;
  const count = callCount(actual) || 0;
  const wasCalledOnce = count === 1;
  const ok = wasCalledOnce && equals(argsFor(actual, 0), args);
  const msg = wasCalledOnce && !ok ? ' with different arguments' : '';
  const error = `Expect spy {{not}} to have been called once but was called {{%0}} time(s)${msg}`;
  return {
    pass: ok,
    message: pp(error, count),
  };
}
