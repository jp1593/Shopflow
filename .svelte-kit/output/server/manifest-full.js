export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BC87GJL4.js","app":"_app/immutable/entry/app.D4YE3UMc.js","imports":["_app/immutable/entry/start.BC87GJL4.js","_app/immutable/chunks/entry.CorG9azl.js","_app/immutable/chunks/runtime.CL3famCj.js","_app/immutable/entry/app.D4YE3UMc.js","_app/immutable/chunks/runtime.CL3famCj.js","_app/immutable/chunks/render.C0nAzoqg.js","_app/immutable/chunks/disclose-version.x3bYR0Z8.js","_app/immutable/chunks/index-client.BSZtA2us.js","_app/immutable/chunks/store.a__t8kqn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/pradera",
				pattern: /^\/pradera\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/pradera/locals",
				pattern: /^\/pradera\/locals\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
