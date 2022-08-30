import { defineStore } from "pinia"

export const useOrderStore = defineStore("order", {
	state: () => {
		return {
			order: []
		}
	},
	actions: {
		create(order) {
			this.order.push({ ...order })
		},
		delete(id) {
			// console.log(id);
			// console.log(this.order);
			this.order = this.order.filter(order => order.id !== id)
			// console.log(this.order);
		}
	},
	getters: {
		orderByName(order) {
			const sortable = [...state.order]
			return sortable.sort((a, b) => a.name.localeCompare(b.name))
		}
	}
})