import { TRest } from './../index.d';
// 发布订阅模式

interface IEventEmitter {
	on(name: string, fn: TRest): void;
	off(name: string, fn: TRest): void;
	emit(name: string, once?: boolean, ...args: any[]): void;
}

module.exports = class EventEmitter implements IEventEmitter {
	cache: Record<string, TRest[]>;
	constructor() {
		this.cache = {};
	}

	on(name: string, fn: TRest): void {
		if (this.cache[name]) {
			this.cache[name].push(fn);
		} else {
			this.cache[name] = [fn];
		}
	}

	off(name: string, fn: TRest): void {
		const task = this.cache[name];
		if (task) {
			const index = task.findIndex((val) => val === fn);
			if (index >= 0) {
				this.cache[name].splice(index, 1);
			}
		}
	}

	emit(name: string, once?: boolean, ...args: any[]): void {
		const tasks = this.cache[name];
		if (tasks) {
			tasks.forEach((task) => {
				task(...args);
			});

			if (once) {
				Reflect.deleteProperty(this.cache, name);
			}
		}
	}
};
