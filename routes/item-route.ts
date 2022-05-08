import { Request, Response, NextFunction } from 'express';

export class ItemRoute {
    ItemRoute(app: any): void {

        // Create Song
        app.route('/api/items/:id').get((req: Request, res: Response, next: NextFunction) => {
            
        });

        

    }
}