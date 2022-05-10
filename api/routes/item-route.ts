import { ItemDetailFormat } from 'api/utils/item-detail';
import { http } from 'api/utils/http-axios';
import { Request, Response, NextFunction } from 'express';
import { author } from 'api/utils/author';

export class ItemRoute {
    ItemRoute(app: any): void {
        app.route('/api/items/:id').get(async (req: Request, res: Response, next: NextFunction) => {
            const id = req.params['id'];
            const product = await http(`items/${id}`);
            const categoriesResponse  = await http(`categories/${product.category_id}`);
            const categories = categoriesResponse.path_from_root.map((category) => category.name);

            let description = '';
            try {
                description = (await http(`items/${id}/description`)).plain_text;
            } catch (err) {
                description = 'Sin descripcióm';
            }
            const item = ItemDetailFormat.getItemWithDescription(product, description);
            res.json({author, items: [item], categories});
        });
    }
}