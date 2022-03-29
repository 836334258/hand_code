export type TPromises = Promise<any>[];

export type TAnyArray = any[];

export type TArrReduceFn = (
	previousValue: any,
	currentValue: any,
	currentIndex?: number,
	array?: any[]
) => void;

declare global {
	interface Array<T> {
		arrayReduce(func: TArrReduceFn, initval?: any): T[];
	}
}
