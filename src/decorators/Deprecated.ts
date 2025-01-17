/**
 * Copyright (c) 2021 Noelware
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Decorator to reference that this method is deprecated.
 * @internal
 */
export function Deprecated(message: string): MethodDecorator {
  return (target, prop, descriptor: TypedPropertyDescriptor<any>) => {
    const originalValue = descriptor.value;
    descriptor.value = function (this: any, ...args: any[]) {
      console.log(
        `(lilith:${process.pid}) DeprecationWarning: Method "${target.constructor.name}#${String(
          prop
        )}" is deprecated and will be removed in the future.\n> ${message}`
      );
      return originalValue.call(this, ...args);
    };
  };
}
