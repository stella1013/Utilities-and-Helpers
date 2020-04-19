import { Component } from './Component';
import { Logger } from '../util/logger';
import { autobind} from '../util/autobind';

/**
 *
 *
 * @export
 * @class Button - Base Component of Button Components
 * @extends {Component<HTMLDivElement, HTMLButtonElement>}
 */
@Logger
export default class Button extends Component<HTMLDivElement, HTMLButtonElement> {
	private navState = {};

	constructor() {
	    super('button-template', 'app', true, 'my-button');
  
		this.navState = {
			state: 'idle',
			transitions: {
				idle: {
					click: () => {},
				},
				fetching: {
					success: () => {},
					failure: () => {},
				},
				error: {
					retry: () => {},
				},
			},
		};

		
    }
    
    @autobind
	private clickHandler(event: MouseEvent) {
		event.preventDefault();
		console.log(this.element.textContent);
	}
    
	configure(): void {
		this.element.addEventListener('click', this.clickHandler.bind(this));
	}

	renderContent(): void {
		throw new Error('Method not implemented.');
	}
}
