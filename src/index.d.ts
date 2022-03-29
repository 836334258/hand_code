export type TPromises = Promise<any>[];

export type TAnyArray = any[];

export type TArrReduceFn = (
	previousValue: any,
	currentValue: any,
	currentIndex?: number,
	array?: any[]
) => void;

export type TARrrMapFn = (
	currentValue: any,
	currentIndex?: number,
	array?: any[]
) => void;

export type noop = () => void;
export type TRest = (...args: any[]) => void;

declare global {
	interface Array<T> {
		arrayReduce(func: TArrReduceFn, initval?: any): T[];
		arrayMap(func: TARrrMapFn, thisArg?: any);
	}

	interface Function<T> {
		functionCall(_this: any): any;
		functionApply(_this: any): any;
	}
}
