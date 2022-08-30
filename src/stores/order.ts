import { defineStore } from "pinia"

export interface OrderItemType {
	id: number,
	name: string,
	category: string,
	price: number
}

export interface OrderStoreType {
	order: Array<OrderItemType>
}

export const useOrderStore = defineStore("order", {
	state: (): OrderStoreType => {
		return {
			order: []
		}
	},
	actions: {
		create(order_item: OrderItemType) {
			this.order.push({ ...order_item })
		},
		delete(id: number) {
			// console.log(id);
			// console.log(this.order);
			this.order = this.order.filter(order => order.id !== id)
			// console.log(this.order);
		}
	},
	getters: {
		orderByName(): OrderItemType[] {
			const sortable = [...this.order]
			return sortable.sort((a, b) => a.name.localeCompare(b.name))
		}
	}
})