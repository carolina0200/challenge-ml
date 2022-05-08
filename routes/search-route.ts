import { Request, Response, NextFunction } from 'express';

export class SearchRoute {
    searchRoute(app: any): void {

        const baseURL = 'https://api.mercadolibre.com';

        // Create Song
        app.route('/api/items').get(async (req: Request, res: Response, next: NextFunction) => {
            const search = req.query['q'];
            // validar query
            const response = await fetch(`${baseURL}/sites/MLA/search?q=${search}&limit=4`);
        });

        
    }
}