export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: false;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}


// caseSensitive?: AgnosticIndexRouteObject["caseSensitive"];
//     path?: AgnosticIndexRouteObject["path"];
//     id?: AgnosticIndexRouteObject["id"];
//     loader?: AgnosticIndexRouteObject["loader"];
//     action?: AgnosticIndexRouteObject["action"];
//     hasErrorBoundary?: AgnosticIndexRouteObject["hasErrorBoundary"];
//     shouldRevalidate?: AgnosticIndexRouteObject["shouldRevalidate"];
//     handle?: AgnosticIndexRouteObject["handle"];
//     index: true;
//     children?: undefined;
//     element?: React.ReactNode | null;
//     errorElement?: React.ReactNode | null;
// }
// export interface NonIndexRouteObject {
//     caseSensitive?: AgnosticNonIndexRouteObject["caseSensitive"];
//     path?: AgnosticNonIndexRouteObject["path"];
//     id?: AgnosticNonIndexRouteObject["id"];
//     loader?: AgnosticNonIndexRouteObject["loader"];
//     action?: AgnosticNonIndexRouteObject["action"];
//     hasErrorBoundary?: AgnosticNonIndexRouteObject["hasErrorBoundary"];
//     shouldRevalidate?: AgnosticNonIndexRouteObject["shouldRevalidate"];
//     handle?: AgnosticNonIndexRouteObject["handle"];
//     index?: false;
//     children?: RouteObject[];
//     element?: React.ReactNode | null;
//     errorElement?: React.ReactNode | null;