import { ToBeOrNotToBe } from "./ToBeOrNotToBe";

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (other) => {
            if (val === other) {
                return true;
            }

            throw new Error('Not Equal');
        },

        notToBe: (other) => {
            if (val !== other) {
                return true;
            }

            throw new Error('Equal');
        }
    }
}
