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
		client: {"start":"_app/immutable/entry/start.LRkHMlAf.js","app":"_app/immutable/entry/app.BR0r3ZPm.js","imports":["_app/immutable/entry/start.LRkHMlAf.js","_app/immutable/chunks/entry.B0cxSSpn.js","_app/immutable/chunks/runtime.CL3famCj.js","_app/immutable/entry/app.BR0r3ZPm.js","_app/immutable/chunks/runtime.CL3famCj.js","_app/immutable/chunks/render.C0nAzoqg.js","_app/immutable/chunks/disclose-version.x3bYR0Z8.js","_app/immutable/chunks/index-client.BSZtA2us.js","_app/immutable/chunks/store.a__t8kqn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();