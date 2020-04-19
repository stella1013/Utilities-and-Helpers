/**
 *
 *
 * @export
 * @abstract
 * @class Component - Base Component of All Components
 * @template T - Parent HTML Element that the element will be attached to.
 * @template U - HTML element itself.
 */
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
	templateElement: HTMLTemplateElement;
	hostElement: T;
	element: U;
/**
 *Creates an instance of Component.
 * @param {string} templateId - ID of HTML Template Element to use to render element
 * @param {string} hostElementId - ID of Parent HTML Element that the element will be attached to.
 * @param {boolean} insertAtStart - Positon to be added at Start
 * @param {string} [newElementId] - ID of this new component
 * @memberof Component
 */
constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
	//TODO: Need to provide else if templateElement doesnt exist
	// if(this.templateElement !== null){
	//I'm sure it exists so ok to use `!` for now.
	// ex. this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
	// }
		
	this.templateElement = document.getElementById(
			templateId
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById(hostElementId)! as T;

		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);


		this.element = importedNode.firstElementChild as U;
		if (newElementId) {
			this.element.id = newElementId;
		}
		this.attach(insertAtStart, this.element);
	}
	
	/**
	 * Attaches `element` to `hostElement`.
	 *
	 * @private
	 * @param {boolean} insertAtStart
	 * @param {U} element
	 * @memberof Component
	 */
	attach(insertAtStart:boolean, element:U): void {
		this.hostElement.insertAdjacentElement('afterbegin', this.element);
	};
	
	/**
	 * Sets configuration of compoent
	 *
	 * @abstract
	 * @memberof Component
	 */
	abstract configure(): void;
	
	/**
	 * Renders Component
	 *
	 * @abstract
	 * @memberof Component
	 */
	abstract renderContent(): void;
}
