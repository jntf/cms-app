'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db.query('api::page.page').findOne({
            where: { slug },
            populate: {
                Banner: true,
                sections: {
                    populate: true
                }
            }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
