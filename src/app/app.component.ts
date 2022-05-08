import { Component } from '@angular/core';

export async function http(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge-meli';
  async ngOnInit() {
    const baseURL = 'https://api.mercadolibre.com';
    const response = await http(`${baseURL}/sites/MLA/search?q=celular&limit=4`);
    console.log(response);
  }
  
}
