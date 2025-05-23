import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class Script {
 
  constructor() { }
 
  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = '../app/script/.js';
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
