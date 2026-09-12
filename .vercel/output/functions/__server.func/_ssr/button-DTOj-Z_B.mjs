import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn } from "./router-CgKSwMh-.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DTOj-Z_B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			solid: "bg-paper text-accent-fg shadow-[var(--shadow-border)] hover:opacity-90",
			ghost: "bg-transparent text-fg hover:bg-bg-raised shadow-[var(--shadow-border)]",
			line: "bg-transparent text-muted hover:text-fg hover:bg-bg-raised",
			accent: "bg-accent text-accent-fg hover:opacity-90"
		},
		size: {
			sm: "h-9 rounded-[8px] px-3 text-sm",
			md: "h-11 rounded-[12px] px-4 text-sm",
			lg: "h-12 rounded-[14px] px-5 text-base",
			icon: "size-11 rounded-[12px]"
		}
	},
	defaultVariants: {
		variant: "solid",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
