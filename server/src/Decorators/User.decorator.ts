import { createParamDecorator } from '@nestjs/common';
import { decode } from 'jsonwebtoken';

export const User = createParamDecorator(async (data, req) => {
    const token = req.get('authorization').replace('Bearer ', '');
    const user = await decode(token);
    return { ...(user as object), ...{ token } };
});
