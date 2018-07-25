export class Item {
  label: string;
  message: string;
  url: string;
  delimiter: string;

  constructor(label: string, message: string, url: string, delimiter: string){
    this.label = label;
    this.message = message;
    this.url = url;
    this.delimiter = delimiter;
  }
}
