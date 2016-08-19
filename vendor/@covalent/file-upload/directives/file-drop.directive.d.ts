import { EventEmitter } from '@angular/core';
import { ElementRef, Renderer } from '@angular/core';
export declare class TdFileDropDirective {
    private _renderer;
    private _element;
    private _multiple;
    private _disabled;
    /**
     * multiple?: boolean
     * Sets whether multiple files can be dropped at once in host element, or just a single file.
     * Can also be 'multiple' native attribute.
     */
    multiple: string | boolean;
    /**
     * disabled?: boolean
     * Disabled drop events for host element.
     */
    disabled: boolean;
    /**
     * fileDrop?: function
     * Event emitted when a file or files are dropped in host element after being validated.
     * Emits a [FileList | File] object.
     */
    onFileDrop: EventEmitter<FileList | File>;
    /**
     * Binds native 'multiple' attribute if [multiple] property is 'true'.
     */
    multipleBinding: string;
    constructor(_renderer: Renderer, _element: ElementRef);
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     */
    onDrop(event: Event): void;
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     */
    onDragOver(event: Event): void;
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     */
    onDragEnter(event: Event): void;
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     */
    onDragLeave(event: Event): void;
    /**
     * Validates if the transfer item types are 'Files'.
     */
    private _typeCheck(types);
    private _stopEvent(event);
}
