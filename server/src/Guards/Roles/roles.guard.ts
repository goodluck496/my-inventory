import { Injectable, CanActivate, ExecutionContext, HttpService, ServiceUnavailableException, UnauthorizedException, ForbiddenException, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ReflectMetadata } from '@nestjs/common';
import { config } from '../../_config';
const authHttp = `http://${config.Microservice.auth.host}:${config.Microservice.auth.port}`
const MODULE = 'conversations'

export const Roles = (...roles: number[]) => ReflectMetadata('roles', roles);

export enum Permissions {
    DENIED = 0,
    $ROOT = 1,
    PHST_ADMIN = 2,
    PHST_EDITOR = 3,
    PHST_USER = 4,
}

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly Http: HttpService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        let status: number
        let user

        const roles = this.reflector.get<number[]>('roles', context.getHandler());
        const authorization: string = context.switchToHttp().getRequest().get('authorization')

        if (!authorization) throw new UnauthorizedException('Empty token')

        try {
            const res = await this.Http.post(`${authHttp}/verify`, null, { headers: { authorization } }).toPromise();
            status = res.status
            user = res.data
        } catch (error) {
            status = error.response ? error.response.status : 500
            if (status == 401) throw new UnauthorizedException(`JWT expired`)
            if (status == 500) throw new ServiceUnavailableException(`AUTH Service: token verification not response`)
		}

		// Disable old version of permissions 2019.08.23
		return true;

        if (!user.permissions || !user.permissions[MODULE]) throw new UnauthorizedException(`NO permissions in token`)

        let modulePermissions: number = user.permissions[MODULE]

        // 403
        if (modulePermissions == 0) return false

        if (!roles) return true
        if (!roles.length) return true

        let role = roles[0]
        if (modulePermissions <= role && modulePermissions != 0) {
            return true
        } else {
            // 403
            return false
        }

    }
}
