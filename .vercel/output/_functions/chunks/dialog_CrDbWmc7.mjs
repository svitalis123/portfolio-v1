import { clsx } from "clsx";
import * as React$1 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { jsx, jsxs } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React$1.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/ui/input.tsx
var Input = React$1.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React$1.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React$1.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
export { DialogTitle as a, Button as c, DialogHeader as i, Label as l, DialogContent as n, DialogTrigger as o, DialogDescription as r, Input as s, Dialog as t, cn as u };
