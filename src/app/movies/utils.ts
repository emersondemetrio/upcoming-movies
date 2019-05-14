export class Utils {
	public static generateModel(list: string[]) {
		return list.map(element => ({
			label: element,
			value: element.toLowerCase()
		}))
	}
}
