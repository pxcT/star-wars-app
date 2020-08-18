export class StoreState {
	items: any[];
	selected: any[];
	totalCount: number;
	current: any;
	count: number;
	error: any;
	mode: any; // updated | created | deleted

	constructor(config: {} = {}) {
		this.items = config['items'] || [];
		this.selected = config['selected'] || [];
		this.totalCount = config['totalCount'] || 0;
		this.current = config['current'] || null;
		this.mode = config['mode'] || null;
		this.count = config['count'] || 0;
		this.error = config['error'] || null;
	}
}
