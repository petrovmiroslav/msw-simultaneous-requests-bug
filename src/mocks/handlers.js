import { rest } from 'msw'

export const handlers = [
    rest.get('/cats', (req, res, ctx) =>
        res(ctx.status(200),ctx.body('cats'))),

    rest.get('/dogs', (req, res, ctx) =>
        res(ctx.status(200),ctx.body('dogs'))),
]
