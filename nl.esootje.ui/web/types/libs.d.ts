/// <reference path="./requirejs/require.d.ts" />
/// <reference path="./angularjs/angular.d.ts" />
/// <reference path="./angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="./jquery/jquery.d.ts"/>

declare module "require" {
    export = require;
}

declare type Response<T> = angular.IHttpPromiseCallbackArg<T>;

declare module angular {
    interface IAngularStatic {
        resumeBootstrap(modules: string[]):void;
    }
}

// Google API is on the gapi global.
declare var gapi: any

// Set plugin extensions on the jQuery interface to force TypeScript compiling
interface JQuery { fileupload: any; }
