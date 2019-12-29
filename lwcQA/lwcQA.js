import { LightningElement, api } from 'lwc';

export default class LwcQA extends LightningElement {

    @api recordId;
    closeQuickAction() {
        const closeQA = new CustomEvent('close');
        // Dispatches the event.
        this.dispatchEvent(closeQA);
    }
}